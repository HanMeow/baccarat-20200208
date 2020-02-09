<template>
    <div
        class="j_background--none mail-page"
        :class="`main__container${$route.meta.hasFoot? '':'-no_footer'}${$route.meta.hasNav? '':'-no_header'}`"
        @scroll="onPageScroll"
        ref="main"
    >
        <!-- <loadingMask :loading="loading">
            <span>{{ $t('ui_loading') + '...' }}</span>
        </loadingMask> -->

        <!-- 詢問是否刪除特定用戶彈窗 -->
        <van-popup v-model="showDeleting" ref="mail-deleting-popup" :close-on-popstate="true">
            <van-cell
                class="mail-deleting-popup j_background--green j_text--day"
                :title="deletingMember.userAccount"
                icon="user-o"
                :label="deletingMember.nickName"
            >
                <van-icon
                    slot="right-icon"
                    @click="onDelete({
                        userId: deletingMember.userId,
                    })"
                    size="45px"
                    name="close"
                />
            </van-cell>
        </van-popup>
        <!-- 詢問是否刪除特定用戶彈窗 -->
        
        <div class="j_flex-column mail-table">
            <div
                class="j_flex mail-table-row"
                v-for="(item, key) in inputList"
                :key="key"
            >
                <span class="mail-table-title" v-text="$t(item.text)"/>
                <div class="mail-table-content">
                    <!-- 輸入框 -->
                    <van-field
                        v-if="key !== 'type'"
                        v-model="item.input"
                        :type="item.type || ''"
                        :rows="item.rows || 1"
                        :placeholder="$t(item.placeholder || '')"
                        :class="{disabled: key === 'recipient' && !recipientSelectable}"
                        autosize
                    ><!-- 輸入框 -->
                        <!-- 收件人輸入框，為配合已選列表需額外做 -->
                        <template v-if="key === 'recipient'" slot="input">
                            <!-- 已選收件人列表 -->
                            <van-button
                                v-for="{userId, userAccount, nickName} in recipientList"
                                :key="userId"
                                slot="title"
                                icon="user-o"
                                type="info"
                                size="small"
                                @click="onRecipientClick({userId, userAccount, nickName, $event})"
                                :text="userAccount"
                                round
                            /><!-- 已選收件人列表 -->
                            <div class="j_flex member-selector">
                                <!-- 收件人搜尋框 -->
                                <textarea
                                    v-model="item.input"
                                    @focus="prepareSearch"
                                    rows="1"
                                    class="van-field__control member-selector-input"
                                    :disabled="!recipientSelectable"
                                    :placeholder="$t(item.placeholder || '')"
                                    ref="recipient"
                                /><!-- 收件人搜尋框 -->
                                <!-- 全部下級勾選 -->
                                <van-button
                                    v-if="recipientSelectable"
                                    type="info"
                                    :plain="!allSubordinate"
                                    size="small"
                                    :icon="allSubordinate ? 'passed' : 'circle'"
                                    class="member-selector-all"
                                    @click="toggleAllSub(!allSubordinate)"
                                    :text="$t('ui_all_subordinate')"
                                    round
                                /><!-- 全部下級勾選 -->
                            </div>
                            <!-- 用戶列表下拉選單 -->
                            <van-dropdown-menu :overlay="true" :duration="0.1">
                                <van-dropdown-item ref="dropdown">
                                    <template v-if="filteredMemberList.length">
                                        <van-cell
                                            v-for="{userId, userAccount, nickName} in filteredMemberList"
                                            :title="userAccount"
                                            :key="userId"
                                            @click="onMenberClick({userId, userAccount, nickName})"
                                        />
                                    </template>
                                    <!-- 讀取/無列表 讀取圖示 -->
                                    <van-cell v-else>
                                        <van-loading slot="title" type="spinner" color="#1989fa"/>
                                    </van-cell><!-- 讀取/無列表 讀取圖示 -->
                                </van-dropdown-item>
                            </van-dropdown-menu><!-- 用戶列表下拉選單 -->
                        </template>
                    </van-field>
                    <!-- 類型選項欄 -->
                    <div v-else class="j_flex-wrap mail-table-type">
                        <van-button
                            v-for="{ type, text, icon, disable } in typeList"
                            :key="type"
                            :class="{actived: type === activedType}"
                            :disabled="disable"
                            :type="disable ? 'default' : 'info'"
                            :icon="disable ? 'warning' : icon"
                            @click="activedType = type"
                            :text="$t(text)"
                            round
                        />
                    </div><!-- 類型選項欄 -->
                </div>
            </div>
        </div>

        <van-button
            round
            :class="`main__submit${$route.meta.hasFoot ? '' : '-no_footer'}`"
            :disabled="!validated || loading"
            :loading="loading"
            :loading-text="$t('ui_sending')"
            :icon="validated ? 'comment' : 'warning'"
            :type="validated ? 'info' : 'default'"
            size="large"
            :hairline="true"
            @click="onSubmit"
            :text="$t('btn_send_msg')"
        />
    </div>
</template>

<script>
import newMailContent from '@mixins/Message/newMail'
// import loadingMask from '@C/loading'

import {
    Button,
    Cell,
    DropdownMenu,
    DropdownItem,
} from 'vant'

export default {
    name: 'MessageMain',
    components: {
        // loadingMask,
        vanButton: Button,
        vanCell: Cell,
        vanDropdownMenu: DropdownMenu,
        vanDropdownItem: DropdownItem,
    },
    mixins: [ newMailContent ],
    directives: {
    },
}
</script>

