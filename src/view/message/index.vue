<template>
    <div
        class="gy_promotion gy_message j_background--none"
        :class="`main__container${$route.meta.hasFoot? '':'-no_footer'}${$route.meta.hasNav? '':'-no_header'}`"
        ref="main"
    >
        <loadingMask :loading="loading">
            <span>{{ $t('ui_loading') + '...' }}</span>
        </loadingMask>

        <!-- 信件控制，下方菜單 -->
        <van-popup
            v-model="showPopup"
            round
            position="bottom"
            :overlay="false"
            :style="{ height: `${popupHeight}px` }"
        >
            <div ref="popup-content">
                <!-- 全選 已讀 刪除 -->
                <van-cell v-if="mailChecked.length">
                    <van-button
                        round
                        slot="icon"
                        icon="bars"
                        type="primary"
                        size="small"
                        @click="onSelectAll"
                        :text="$t('ui_select_all')"
                    />
                    <van-button
                        round
                        slot="title"
                        icon="checked"
                        type="info"
                        size="small"
                        @click="onRead"
                        :text="$t('btn_mark_read')"
                    />
                    <van-button
                        round
                        slot="right-icon"
                        icon="delete"
                        type="warning"
                        size="small"
                        @click="onDelete"
                        :text="$t('rp_del')"
                    />
                </van-cell><!-- 全選 已讀 刪除 -->
                <!-- 暫時刪除信件列表 -->
                <van-cell
                    v-if="tempDeletedList.length"
                    :title="deletedMsg"
                >
                    <van-button
                        round
                        slot="icon"
                        icon="delete"
                        type="danger"
                        size="small"
                        @click="onForeverDelete"
                        :text="$t('btn_delete_permanently')"
                    />
                    <van-button
                        round
                        icon="replay"
                        slot="right-icon"
                        type="primary"
                        size="small"
                        @click="onUndo"
                        :text="$t('btn_recovery')"
                    />
                </van-cell><!-- 暫時刪除信件列表 -->
            </div>
        </van-popup><!-- 信件控制，下方菜單 -->

        <!-- 信件內容，彈出畫面 -->
        <van-popup
            v-model="showMailContent"
            round
            position="bottom"
            closeable
            class="j_flex-column mail-chat__popup j_background--day-t2"
        >   
            <van-skeleton
                title
                avatar
                :row="2"
                :loading="loading"
            >
                <div class="mail-chat__container" ref="mail-chat">
                    <mail-chat-box
                        v-for="(item, index) in chatList"
                        :is_me="item.is_me"
                        :sender="item.sender"
                        :title="index === 0 ? mailTitle : ''"
                        :time="item.time"
                        :message="item.message"
                        :key="item.id"
                    ></mail-chat-box>
                </div>
            </van-skeleton>
            <van-field
                v-model="chatInput"
                clearable
                :type="'textarea'"
                :right-icon="''"
                :placeholder="$t('ui_input')"
                :disabled="loading || activeTab !== 0"
            >
            
                <!-- :type="loading || activeTab !== 0 ? 'default' : 'info'" -->
                <van-button
                    slot="button"
                    size="large"
                    :plain="activeTab !== 0"
                    :type="activeTab !== 0 ? 'info' : 'info'"
                    :loading ="loading"
                    :loading-text="$t('ui_loading')"
                    :disabled="loading || activeTab !== 0"
                    @click="onSend"
                    round
                >{{$t(activeTab === 0 ? 'btn_send_msg' : 'btn_cant_reply')}}</van-button>
            </van-field>
        </van-popup><!-- 信件內容，彈出畫面 -->

        <Sticky v-if="!$route.params.id" :offset-top="45">
            <!-- 公告類型選單 -->
            <Row class="gy_header_btn j_background--day-t5" type="flex" justify="space-around">
                <van-col span="7" v-for="({title}, i) in messageTabs" :key="i">
                    <van-button
                        class="gy_btn"
                        :class="{ active: tabIndex === i }"
                        size="small"
                        round
                        type="default"
                        @click="changeTab(i)"
                    >
                        <span v-text="$t(title)"></span>
                    </van-button>
                </van-col>
            </Row><!-- 公告類型選單 -->
            <!-- 信件類型選單 -->
            <Tabs v-if="$route.name === 'mail'" class="gy_tabs" v-model="activeTab" @change="changeBox" animated>
                <Tab v-for="({title}, i) in mailTabs" :title="$t(title)" :name="i" :key="i"></Tab>
            </Tabs>
            <!-- 信件類型選單 -->
        </Sticky>

        <van-checkbox-group v-model="mailChecked" ref="checkboxGroup">
            <!-- 列表框 -->
            <van-cell-group
                :border="false"
                :class="{
                    detail: $route.params.id,
                    mail: $route.name === 'mail',
                }"
                ref="scroll"
            >
                <!-- 讀取畫面 -->
                <template v-if="loading && !list.length">
                    <van-skeleton
                        v-for="i in 3"
                        :key="i"
                        title
                        avatar
                        :row="2"
                        :loading="true"
                    />
                </template><!-- 讀取畫面 -->
                <!-- 單一公告資料 -->
                <template v-else-if="$route.params.id && this.$route.name === 'AnnouncementDetail'">
                    <!-- <van-swipe-cell class="j_border--base j_background--day-t5"> -->
                        <van-cell
                            icon="volume"
                            class="j_border--base j_background--day-t5"
                        >
                            <template slot="title">
                                <span v-text="detail.subject || '--'"></span>
                                <van-tag v-if="detail.is_top" type="danger">{{ $t('ui_important') }}</van-tag>
                            </template>
                            <div slot="default" class="j_text--secondary" v-text="detail.send_time || '--'"></div>
                        </van-cell>
                        <van-cell class="j_background--day-t5" title="" value="" :label="detail.content 
                        || '--'" />
                    <!-- </van-swipe-cell> -->
                    <div class="list-blocker"></div><!-- blocker -->
                </template><!-- 單一公告資料 -->
                <!-- 活動/公告/信件列表 -->
                <virtualList
                    v-else-if="list.length"
                    :size="cellSize"
                    :remain="remain"
                    :tobottom="toBottom"
                    :onscroll="onscroll"
                >
                    <template v-for="(item, index) in list">
                        <!-- 滑動框 有 bug 先移除 -->
                        <!-- <transition name="van-slide-left"> -->
                            <van-swipe-cell
                                v-show="!item.hide"
                                :key="`${item.msnd_id || item.atdcl_id || item.id}-${index}`"
                                class="j_border--base"
                                @open="onSwipe(item, $event)"
                                @onDrag="swiping(item, $event)"
                                @endDrag="swiping(item, $event)"
                                :item="item"
                                ref="cell"
                                :style="{transition: item.transition || '', marginTop: `${item.marginTop}px` || ''}"
                            >
                                <!-- 列表單項目-->
                                <van-cell
                                    :key="`${item.msnd_id || item.atdcl_id || item.id}-${index}`"
                                    :class="['j_border--blue j_background--day-t5', {checking: showChecking}]"
                                    :is-link="$route.name !== 'mail'"
                                    @click="cellClick(item)"
                                    :label="item.title || '' | textFilter"
                                    v-longpress="longpress"
                                    :item="item"
                                >
                                    <!-- 左邊欄位 -->
                                    <template slot="icon">
                                        <!-- 勾選框 -->
                                        <transition name="van-slide-left">
                                            <van-checkbox
                                                v-if="showChecking"
                                                :name="item.id"
                                                ref="checkboxes"
                                            />
                                        </transition><!-- 勾選框 -->
                                        <!-- icon -->
                                        <van-icon
                                            :name="['label', 'volume', 'envelop-o'][tabIndex]"
                                            class="van-cell__left-icon"
                                        /><!-- icon -->
                                    </template><!-- 左邊欄位 -->
                                    <!-- 大標題 -->
                                    <template slot="title">
                                        <!-- <span v-text="item.subject || item.name || item.sender && `from: ${item.sender}` || item.receiver && `to: ${item.receiver}` || '--'"></span> -->
                                        <!-- <span v-text="item.subject || item.name || item.sender || item.receiver || '--' | textFilter"></span> -->
                                        <span>
                                            {{item.subject || item.name || item.sender || item.receiver || '--' | textFilter}}
                                        </span>
                                        <van-tag v-if="item.is_top" type="danger">{{ $t('ui_important') }}</van-tag>
                                    </template><!-- 大標題 -->
                                    <!-- 時間 -->
                                    <div
                                        slot="default"
                                        class="j_text--secondary"
                                    >
                                        {{item.send_time || item.act_time || item.receive_time || '--' | textFilter}}
                                    </div><!-- 時間 -->
                                    <van-icon
                                        v-if="item.status === 0 && !item.marked"
                                        slot="right-icon"
                                        name="question"
                                    /><!-- 信件未讀標示 -->
                                </van-cell><!-- 列表單項目-->
                                <template slot="right" v-if="tabIndex === 2">
                                    <!-- <van-button
                                        class="list-blocker"
                                        :type="'danger'"
                                    >{{$t(tabIndex === 2 ? 'rp_del':'')}}</van-button> -->
                                    <van-button
                                        class="list-blocker"
                                        :type="'danger'"
                                    >{{$t(tabIndex === 2 ? 'ui_sliding_delete':'')}}</van-button>
                                </template>
                            </van-swipe-cell><!-- 滑動框 -->
                        <!-- </transition> -->
                    </template>
                    <div class="list-blocker"></div><!-- blocker -->
                </virtualList><!-- 活動/公告/信件列表 -->
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
            </van-cell-group><!-- 列表框 -->
        </van-checkbox-group>
    </div>
</template>

<script>
import MessageContent from '@mixins/Message'
import virtualList from 'vue-virtual-scroll-list'
// import infiniteScroll from 'vue-infinite-scroll'
import loadingMask from '@C/loading'
import mailChatBox from '@C/Mail'
import longpress from '@/plugins/longpress'
import vanSwipeCell from '@C/customSwipeCell' // SwipeCell 有 bug，需覆寫
import {
    Button,
    Cell,
    CellGroup,
    Checkbox,
    CheckboxGroup,
    Col,
    // Collapse,
    // CollapseItem,
    Picker,
    Row,
    Sticky,
    // SwipeCell,
    Tab,
    Tabs,
    Tag,
} from 'vant'

export default {
    name: 'MessageMain',
    components: {
        vanButton: Button,
        vanCol: Col,
        loadingMask,
        Picker,
        Row,
        Sticky,
        Tab,
        Tabs,
        virtualList,
        vanCell: Cell,
        vanCellGroup: CellGroup,
        vanCheckbox: Checkbox,
        vanCheckboxGroup: CheckboxGroup,
        // vanCollapse: Collapse,
        // vanCollapseItem: CollapseItem,
        // vanSwipeCell: SwipeCell,
        vanSwipeCell,
        vanTag: Tag,
        mailChatBox,
    },
    mixins: [MessageContent],
    directives: {
        // infiniteScroll,
        longpress,
    },
}
</script>

