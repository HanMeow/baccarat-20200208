// import { mapActions, mapGetters } from 'vuex'
// import { formatNumber, errorMessageBox, confirmMessageBox } from '@UTIL'
import News from '@M/News'
import Message from '@M/Message'
import { createNamespacedHelpers, mapActions, mapGetters } from 'vuex'
// const { mapActions, mapGetters } = createNamespacedHelpers(path)
const NewsStore = createNamespacedHelpers('News')
const MessageStore = createNamespacedHelpers('Message')
const NewsDetailStore = createNamespacedHelpers('News/detail')

export default {
    data() {
        const now = moment().format('YYYY-MM-DD')
        return {
            search: {
                startDate: now,
                endDate: now,
                orderType: 1,
                page: 1,
                pageLimit: 10,
                category: '3',
            },
            // messageTabs: ['活动', '公告', '站内信'],
            messageTabs: [{
                title: 'ui_promo',
                name: 'messagePromotion',
            }, {
                title: 'ui_platform_msg',
                name: 'Announcement',
            // }, {
            //     title: 'ui_private_msg',
            //     name: 'mail'
            }],
            tabIndex: 1,
            activeName: '',
            // mailTabs: ['收件箱', '发件箱', '发送信息'],
            mailTabs: [{
                title: 'ui_inbox',
                name: 'messagePromotion',
            }, {
                title: 'ui_outbox',
                name: 'Announcement',
            }, {
                title: 'btn_send_msg',
                name: 'mail'
            }],
            activeTab: 0,
            pagination: {
                page: 1,
                pageLimit: 20,
                totalNumber: 0,
                totalPage: 1,
            },
            newTask: true,
            list: [], // 顯示列表
            cellSize: 47,
            remain: 12,
            mailChecked: [], // 勾選列表
            showChecking: false,
            showMailContent: false,
            chatInput: '',
            mailId: null,
            mailTitle: '',
            chatList: [],
            popupHeight: 60, // 信件控制選單高度
            tempDeletedList: [], // 刪除的流程有點問題，有時間要修
        }
    },
    // 這裡用 beforeMount ，重整頁面會有 getter 沒註冊的問題，先改成 beforeCreate
    beforeCreate() {
    // beforeMount() {
        this.$root.$emit('setStore', { News, Message })
        // if (!this.$store._modules.root.getChild('News')) {
        //     this.$store.registerModule('News', News)
        // }
    },
    mounted() {
        console.log(`debug: created -> window.s8 = Announcement`, (window.s8 = this))
        this.changeTitle({
            title: 'ui_message_center',
            left: true,
            leftText: 'btn_back',
            backFunction: this.backFunction,
        })
        // '活动', '公告', '站内信' 判斷
        let index = this.messageTabs.findIndex(v=>v.name === this.$route.name)
        index < 0 && (index = 1)
        this.tabIndex = index
        // '收件箱', '发件箱' 判斷
        this.activeTab = 
            this.$route.params.tab === 'outbox'
            ? 1
            : 0
        this.reset()
        window.addEventListener('orientationchange', ()=>{
            // 先用比較髒的方法更新列表，有時間再改
            setTimeout(() => {
                this.list = [...this.list]
            }, 10);
            // 先用比較髒的方法更新列表，有時間再改
        })
    },
    beforeDestroy() {
        this.actuallyDelete(this.activeTab)
    },
    watch: {
        responsePagination(pagination) {
            // console.log(`debug: responsePagination -> this.pagination, pagination`, dirtyClone(this.pagination), dirtyClone(pagination))
            this.pagination = { ...this.pagination, ...pagination }
        },
        responseList(list) {
            // console.log(`debug: responseList -> list`, list)
            if (this.newTask) {
                this.list = [...list]
                this.newTask = false
            } else {
                this.list = [...this.list, ...list]
            }
        },
        list() {
            this.$nextTick(()=>{
                let size = 47
                const cells = this.$refs.cell || []
                cells.forEach(v=>{
                    v.$el.clientHeight > size && (size = v.$el.clientHeight)
                })
                this.cellSize = size
                this.remain = this.$refs.scroll ? (this.$refs.scroll.clientHeight / this.cellSize) + 1 | 0 : 12
            })
        },
        mailDetail(list) {
            return this.chatList = [...list]
        },
        mailChecked() {
            this.calculateHeight()
        },
        tempDeletedList() {
            this.calculateHeight()
        },
    },
    methods: {
        ...mapActions('layout/header', {
            changeTitle: _M.UPDATED,
        }),
        ...NewsStore.mapActions({
            getList: _M.READ,
        }),
        ...mapActions('ActivityDefine', {
            getPromoList: _M.READ,
        }),
        ...MessageStore.mapActions({
            getReceiveList: `receive/${_M.READ}`,
            getSendList: `send/${_M.READ}`,
            getReceiveDetail: `receive/detail/${_M.READ}`,
            getSendDetail: `send/detail/${_M.READ}`,
            reply: `receive/${_M.UPDATED}`,
            deleteReceive: `receive/${_M.DELETED}`,
            deleteSend: `send/${_M.DELETED}`,
        }),
        ...NewsDetailStore.mapActions({
            getDetail: _M.READ,
        }),
        backFunction() {
            typeof this.$route.params.id === 'string'
            ? this.$router.replace({ name: 'Announcement' }, () => {
                this.reset()
            })
            : this.$router.replace({ path: '/Mine' }, () => {})
        },
        changeTab(i) {
            // console.log(`debug: changeTab -> i`, i)
            if (!this.loading) {
                // 換頁籤前把暫時刪除的信件真的刪除
                this.actuallyDelete(this.activeTab)
                // 換頁籤前把暫時刪除的信件真的刪除
                this.tabIndex = i
                this.$route.name === this.messageTabs[this.tabIndex].name
                ? this.reset()
                : this.$router.replace({
                    name: this.messageTabs[this.tabIndex].name
                }, () => {
                    this.reset()
                })
            }
        },
        changeBox(...params) {
            // console.log(`debug: changeBox -> params`, params)
            // 換頁籤前把暫時刪除的信件真的刪除
            this.actuallyDelete( - (this.activeTab - 1) )
            // 換頁籤前把暫時刪除的信件真的刪除
            this.activeTab === 2
            ? this.$router.replace({name: 'newMail'})
            : this.reset()
        },
        async reset() {
            // console.log(`debug: reset -> reset`)
            this.changeTitle({
                ...this.headerState,
                type: this.tabIndex === 2 ? 2 : 0,
                rightText: this.tabIndex === 2 ? 'btn_edit':'',
                rightFunction:
                    this.tabIndex === 2
                    ? () => {
                        this.toggleEdit()
                    }
                    : null,
            })
            this.showChecking = false
            // this.mailChecked.length = 0
            this.mailChecked.splice(0) // 要用 splice 才會觸發 vue 更新
            // this.$refs.checkboxGroup.toggleAll(false) // van-checkbox-group 的內置函數會造成 lag，先隱藏
            if (typeof this.$route.params.id === 'string' && this.$route.name === 'AnnouncementDetail') {
                await this.getDetail({
                    msnd_id: this.$route.params.id,
                })
                // this.detail = {...this.detail, ...(detail || {})}
            } else {
                this.$nextTick(()=>{
                    this.newTask = true
                    this.pagination.page = 1
                    this.list = []
                    this.doSearch()
                })
            }
        },
        doSearch() {
            if (typeof this.$route.params.id === 'string' && this.$route.name === 'AnnouncementDetail') return;

            const index = 
                this.tabIndex === 2
                ? this.tabIndex + this.activeTab
                : this.tabIndex;
            const actions = [
                this.getPromoList,
                this.getList,
                this.getReceiveList,
                this.getSendList,
                ()=>{}
            ]
            const now = moment()
            const end_date = now.format('YYYY-MM-DD')
            const start_date = now.subtract(29, 'days').format('YYYY-MM-DD');

            actions[index]({
                page: this.pagination.page,
                limit: this.pagination.pageLimit,
                page_limit: this.pagination.pageLimit,
                start_date,
                end_date,
            })
        },
        calculateHeight() {
            this.$nextTick(() => {
                this.popupHeight = this.$refs["popup-content"] ?
                    this.$refs["popup-content"].clientHeight :
                    60
            })
        },
        toBottom() {
            // console.log(`debug: toBottom -> toBottom`)
            if (!this.loading && this.pagination.page < this.pagination.totalPage) {
                this.pagination.page++
                this.doSearch()
            }
        },
        onscroll(event, data) {
            // console.log(`debug: onscroll -> event, data`, event, data)
            if (data.offsetAll - data.offset < 500 && !this.loading && this.pagination.page < this.pagination.totalPage) {
                this.pagination.page++
                this.doSearch()
            }
        },
        cellClick(item) {
            // console.log(`debug: cellClick -> params`, item)
            this.tabIndex === 0
            ? this.$router.replace({
                name: `PromotionDetail`,
                params: {
                    id: item.atdcl_id,
                    from: 'Mine'
                }
            }, () => {})
            : this.tabIndex === 1
            ? this.$router.replace({
                name: `AnnouncementDetail`,
                params: {
                    id: item.msnd_id
                }
            }, () => {
                this.reset()
            })
            : this.tabIndex === 2
            ? this.showChecking
            ? this.mailChecked.includes(item.id)
            ? this.mailChecked.splice(this.mailChecked.indexOf(item.id), 1)
            : this.mailChecked.push(item.id)
            : this.openMail(item)
            : null
            this.$forceUpdate()
        },
        async openMail({id, title}) {
            // console.log(`debug: openMail -> id`, id)
            this.showMailContent = true
            this.mailId = id
            this.mailTitle = title
            this.chatInput = ''
            this.activeTab === 0
            ? await this.getReceiveDetail({id, limit: 20})
            : await this.getSendDetail({id, limit: 20})
            this.$nextTick(()=>{
                this.$refs["mail-chat"].scrollTo(0, this.$refs["mail-chat"].scrollHeight)
            })
        },
        async onSend() {
            const data = await this.reply({
                id: this.mailId,
                message: this.chatInput,
            })
            // console.log(`debug: onSend -> data`, data)
            this.$toast(data && data.message || '?')
            this.openMail({
                id: this.mailId,
                title: this.mailTitle,
            })
        },
        toggleEdit() {
            this.showChecking = !this.showChecking
            // this.mailChecked.length = 0
            this.mailChecked.splice(0) // 要用 splice 才會觸發 vue 更新
            this.changeTitle({
                ...this.headerState,
                rightText: this.showChecking ? 'btn_cancel':'btn_edit',
            })
            // van-checkbox-group 的內置函數會造成 lag，先隱藏
            // setTimeout(()=>{
            //     this.$refs.checkboxGroup.toggleAll(false)
            // }, 100)
        },
        // 刪除的流程有點問題，有時間要修
        onSwipe(item, swipeCell) {
            // console.log(`debug: onSwipe -> swipeCell`, swipeCell)
            if (this.tabIndex !== 2) {
                swipeCell.close()
                return
            }
            this.tempDeletedList.push(item)
            // this.list[index].hide = true
            setTimeout(() => {
                item.hide = true
                const index = this.list.findIndex(v=>v.id === item.id)
                // const index = this.$refs.cell.findIndex(v=>v.$attrs.item.id === item.id)
                let next = this.list[index + 1]
                // let i = 1
                // while (next && next.hide) {
                //     next = this.list[index + ++i]
                //     console.log(`debug: onSwipe -> i`, i)
                // }
                // const next = this.$refs.cell[index + 1]
                // 用 <transition> 或 css animation 做動畫會和 virtual-list 衝突，先這樣寫之後改
                if (next) {
                    // next.$el.style.transition = ''
                    // next.$el.style.marginTop = `${this.cellSize}px`
                    next.transition = ''
                    // next.marginTop = this.cellSize + (next.marginTop || 0)
                    next.marginTop = this.cellSize
                    this.$forceUpdate()
                    setTimeout(() => {
                        // next.$el.style.transition = 'margin .3s'
                        // next.$el.style.marginTop = '0'
                        next.transition = 'margin .3s'
                        next.marginTop = 0
                        swipeCell.close()
                        this.$forceUpdate()
                    }, 100)
                }
                // 用 <transition> 或 css animation 做動畫會和 virtual-list 衝突，先這樣寫之後改
            }, 200)
        },
        swiping(item, $event) {
            item.dragging = $event ? true : false
        },
        longpress(VNode, $event) {
            // console.log(`debug: longpress -> VNode`, VNode)
            const item = VNode.data.attrs.item
            if (this.tabIndex == 2 && !item.dragging) {
                this.showChecking || this.toggleEdit()
                // item && this.mailChecked.push(item.id)
                item && this.cellClick(item)
            }
        },
        onSelectAll() {
            this.list.forEach(v=>{
                this.mailChecked.includes(v.id) || this.mailChecked.push(v.id)
            })
            // this.$refs.checkboxGroup.toggleAll(true); // van-checkbox-group 的內置函數會造成 lag，先隱藏
        },
        onRead() {
            const action = this.activeTab === 0
            ? this.getReceiveDetail
            : this.getSendDetail
            // this.mailChecked.forEach(id=>{
            //     action({id, limit: 20})
            // })
            this.list.forEach(v=>{
                if (this.mailChecked.includes(v.id)) {
                    action({id: v.id, limit: 20})
                    v.marked = true
                }
            })
            // this.mailChecked.splice(0) // 要用 splice 才會觸發 vue 更新
        },
        onDelete() {
            this.$refs.cell.forEach(v=>{
                this.mailChecked.includes(v.$attrs.item.id) && v.open()
            })
            this.mailChecked.splice(0) // 要用 splice 才會觸發 vue 更新
            // this.$refs.checkboxGroup.toggleAll(false) // van-checkbox-group 的內置函數會造成 lag，先隱藏
            // this.$forceUpdate()
        },
        async onForeverDelete() {
            await this.actuallyDelete(this.activeTab)
            this.tempDeletedList.splice(0)
            this.reset()
        },
        onUndo() {
            this.tempDeletedList.forEach(v => v.hide = false)
            this.tempDeletedList.splice(0)
            this.$forceUpdate()
        },
        async actuallyDelete(tab) {
            if ( typeof tab === 'undefined' ) return;
            const ids = this.list.filter(v => v.hide).map(v => v.id)
            // console.log(`debug: actuallyDelete -> list`, list)
            ids.length
            ? tab === 0
            ? await this.deleteReceive({
                ids
            })
            : tab === 1
            ? await this.deleteSend({
                ids
            })
            : null
            : null
            return;
        },
    },
    computed: {
        ...mapGetters('layout/header', {
            headerState: _M.READ,
        }),
        ...mapGetters('Common', ['loading']),
        ...NewsStore.mapGetters({
            announceList: 'list',
            announcePagination: 'pagination',
        }),
        ...MessageStore.mapGetters({
            receiveList: 'receive/list',
            receivePagination: 'receive/pagination',
            receiveDetail: 'receive/detail/list',
            sendList: 'send/list',
            sendDetail: 'send/detail/list',
            sendPagination: 'send/pagination',
        }),
        ...NewsDetailStore.mapGetters(['detail']),
        ...mapGetters('ActivityDefine', {
            activityList: 'list',
            activityPagination: 'pagination',
        }),
        responseList() {
            return this.tabIndex === 0
                ? this.activityList
                : this.tabIndex === 1
                ? this.announceList
                : this.tabIndex === 2
                ? this.activeTab === 0
                ? this.receiveList
                : this.sendList
                : []
        },
        responsePagination() {
            return this.tabIndex === 0
                ? this.activityPagination
                : this.tabIndex === 1
                ? this.announcePagination
                : this.tabIndex === 2
                ? this.activeTab === 0
                ? this.receivePagination
                : this.sendPagination
                : {}
        },
        mailDetail() {
            return this.activeTab === 0
                ? this.receiveDetail
                : this.sendDetail
        },
        showPopup: {
            get() {
                return !!this.mailChecked.length || !!this.tempDeletedList.length
            },
            set(val) {
            },
        },
        // tempDeletedList() {
        //     return this.list.filter(v => v.hide)
        // },
        deletedMsg() {
            return this.$t('ui_letters_deleted', [this.tempDeletedList.length])
        }
    },
    filters: {
        textFilter(str) {
            str = str.replace(/(Re:){4,}/g, 'Re:Re:Re:...')
            if (str.length < 9) return str 
            let sub = ''
            let length = 0
            for (let c of str) {
                if (length > 18) {
                    sub += '...'
                    break
                }
                sub += c
                length++
                c.charCodeAt(0) > 256 && length++
            }
            return sub
        },
    }
}
