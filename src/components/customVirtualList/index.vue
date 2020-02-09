<template>
    <div>
        <loadingMask :loading="loading"></loadingMask>

        <!-- <Sticky v-if="showHeader" :offset-top="0">
            <NavBar :title="computeTitle" :left-text="$t('btn_back')" left-arrow @click-left="onBack" class="gy_navbar">
                <div slot="right" @click="showPopup">
                    <Icon name="filter-o"></Icon>
                </div>
            </NavBar>
        </Sticky> -->
        <!-- header -->

        <van-popup get-container="body" v-model="showPicker" position="bottom" :close-on-popstate="true">
            <Picker
                show-toolbar
                :columns="columns"
                @cancel="onCancel"
                @confirm="onConfirm"
                :confirm-button-text="$t('btn_confirm')"
                :cancel-button-text="$t('btn_cancel')"
            />
        </van-popup>
        <!-- picker -->

        <Tabs class="gy_tabs" v-model="activeTab" @click="tabClick">
            <Tab v-for="(item, i) in dayList" :title="$t(item.title)" :name="i" :key="`${item.title}_${i}`"></Tab>
        </Tabs>
        <!-- date tab -->

        <template v-if="customDateMode">
            <customDatePicker :start-date="data.startDate" :end-date="data.endDate" @picker="changeDate" />

            <MainButton
                :icon="1 ? 'search' : 'warning'"
                :type="1 ? 'info' : 'default'"
                @click="customSearch"
                :text="$t('ui_search')"
            />
        </template>

        <template v-else>
            <!-- <slot name="head"></slot> -->
            <div ref="reportBox" class="gy_reportBox">
                <virtualList
                    ref="scroll"
                    :size="computeSize"
                    :remain="remain"
                    :tobottom="toBottom"
                    :style="{
                        height: '100%',
                        paddingBottom: `${computeSize / 2}px`,
                    }"
                >
                    <slot v-if="cacheList.length > 0"></slot>
                    <div class="no_data" v-else>
                        <!-- 顯示查無資料的預設 與loading的畫面 -->
                        <p class="pic">
                            <picture>
                                <source srcset="@IMGT/profile/pic_box_s.webp" type="image/webp" />
                                <img src="@IMGT/profile/pic_box_s.png" />
                            </picture>
                        </p>
                        <p class="txt">{{ $t('sysmsg_db_nodata') }}</p>
                    </div>
                </virtualList>
            </div>
        </template>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import virtualList from 'vue-virtual-scroll-list'
import MainButton from '@C/MainButton'
import {
    // Button as vanButton,
    Icon,
    NavBar,
    Picker,
    Sticky,
    Tab,
    Tabs,
} from 'vant'
import customDatePicker from '@C/Report/customDatePicker'
import loadingMask from '@C/loading'

export default {
    name: 'customVirtualList',
    components: {
        // vanButton,
        MainButton,
        Icon,
        NavBar,
        Picker,
        Sticky,
        Tab,
        Tabs,
        virtualList,
        loadingMask,
        customDatePicker,
    },
    props: {
        showHeader: {
            default: true,
        },
        back: {
            // type: Function,
            default: null,
        },
        title: {
            type: String,
            default: null,
        },
        columns: {
            type: [Object, Array],
            default() {
                return []
            },
        },
        size: {
            type: [String, Number],
            default: '',
        },
        pagination: {
            type: Object,
            required: true,
        },
        list: {
            type: [Object, Array],
            required: true,
        },
        search: {
            type: Function,
            required: true,
        },
    },
    data() {
        return {
            // loading: false,

            showPicker: false,

            customDateMode: false,
            showDatePicker: false,

            pickingIndex: 0,
            pickingDate: ['2000', '1', '1'],

            dayTabIndex: 0,
            dayList: [
                {
                    title: 'ui_nowadays',
                    // day: 1,
                    day: 0,
                },
                {
                    title: 'ui_yesterday',
                    day: 1,
                },
                // {
                //     title: 'ui_last_three_days',
                //     // day: 3,
                //     day: 2,
                // },
                {
                    title: 'ui_last_seven_days',
                    // day: 7,
                    day: 6,
                },
                {
                    title: 'ui_last_month',
                    // day: 30,
                    day: 29,
                },
                {
                    title: 'ui_optional_1',
                },
            ],
            data: {
                startDate: '',
                endDate: '',
                page: 1,
                pageLimit: 10,
            },
            newTask: true,
            cacheList: [],
            now: new Date(),
            currentDate: '',
        }
    },
    watch: {
        list() {
            if (this.newTask) {
                this.cacheList = this.list
                this.newTask = false
            } else {
                this.cacheList = [...this.cacheList, ...this.list]
            }
            this.$emit('list', this.cacheList)
        },
    },
    created() {
        console.log(`debug: created -> window.s9 = customVirtualList`, (window.s9 = this))
        const now = moment()
        this.pickingDate = [now.year(), now.month() + 1, now.date()]
        this.changeTitle({
            ...this.headerState,
            type: this.headerState['title'] === 'ui_report_betting' ? this.headerState['type'] : 1,
            rightText: 'btn_set',
            rightFunction: this.showPopup,
        })
    },
    beforeDestroy() {
        this.changeTitle({
            ...this.headerState,
            type: 0,
        })
    },
    methods: {
        ...mapActions('layout/header', {
            changeTitle: _M.UPDATED,
        }),
        onBack() {
            return typeof this.back === 'function' && this.back()
        },
        onCancel() {
            this.showPicker = false
        },
        onConfirm(value) {
            this.showPicker = false
            this.$emit('picked', value)
            this.reset()
        },
        reset() {
            let data = {
                startDate: this.data.startDate, //查询起始日
                endDate: this.data.endDate, //查询截止日
                page: 1,
                pageLimit: 10,
            }
            this.newTask = true
            return this.doSearch(data)
        },
        async doSearch(data = {}) {
            console.log('debug: doSearch -> data', data)
            const params = {
                ...this.data,
                ...data,
            }
            if (this.newTask) {
                this.scrollToTop()
                params.page = 1
            }
            this.data = params
            // this.loading = true
            const result =
                typeof this.search === 'function'
                    ? await this.search({
                          ...params,
                          ...{ reset: this.newTask },
                      })
                    : false
            console.log('debug: doSearch -> result', result)
            // this.loading = false
            return result
        },
        scrollToTop() {
            const scroll = (this.$refs.scroll && this.$refs.scroll.$el) || {}
            scroll.scrollTop !== 0 && (scroll.scrollTop = 0)
        },
        changeDate({ startDate, endDate }) {
            this.data.startDate = startDate
            this.data.endDate = endDate
        },
        customSearch() {
            this.customDateMode = false
            this.reset()
        },
        showPopup() {
            this.showPicker = true
        },
        tabClick(index, title) {
            if (typeof this.dayList[index].day === 'number') {
                this.customDateMode = false
            } else {
                this.customDateMode = true
            }
        },
        toBottom() {
            console.log('debug: toBottom -> toBottom')
            const hasPages = this.totalPage > this.page
            const notLoading = !this.loading
            if (hasPages && notLoading) {
                this.doSearch({ page: this.page + 1 })
            }
        },
    },
    computed: {
        ...mapGetters('layout/header', {
            headerState: _M.READ,
        }),
        ...mapGetters('Common', ['loading']),
        computeTitle() {
            return this.title || this.$t('ui_list')
        },
        activeTab: {
            get() {
                return this.dayTabIndex
            },
            set(i) {
                const item = this.dayList[i]
                if (typeof item.day === 'number') {
                    // if (!this.loading && item.day) {
                    this.dayTabIndex = i
                    const now = moment()
                    if (now.format('YYYY-MM-DD') !== this.data.endDate) {
                        this.data.endDate = now.format('YYYY-MM-DD')
                    }
                    this.data.startDate = now.subtract(item.day, 'days').format('YYYY-MM-DD')
                    this.reset()
                }
            },
        },
        computeSize() {
            return this.size || 75
        },
        remain() {
            // need to be RWD
            return this.$refs.reportBox ? (this.$refs.reportBox.clientHeight / this.size) | 0 : 7
        },
        page() {
            return this.pagination ? this.pagination.page : 0
        },
        totalPage() {
            return this.pagination ? this.pagination.totalPage : 0
        },
    },
}
</script>
