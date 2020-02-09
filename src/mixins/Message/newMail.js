// import { formatNumber, errorMessageBox, confirmMessageBox } from '@UTIL'
import Message from '@M/Message'
import UserList from '@M/Team/UserList'
import { createNamespacedHelpers, mapActions, mapGetters } from 'vuex'
const MessageStore = createNamespacedHelpers('Message')
const UserListStore = createNamespacedHelpers('UserList')

export default {
    data() {
        return {
            // 輸入框列表 | ['类型', '收件人', '主题', '内容']
            inputList: {
                type: {
                    // text: 'rp_type', // 类型
                    text: 'ui_type_colon', // 类型：
                    placeholder: '',
                    type: '',
                    input: '',
                },
                recipient: {
                    // text: 'ui_recipient', // 收件人
                    text: 'ui_recipient_colon', // 收件人：
                    // placeholder: 'ui_select_recipient',
                    placeholder: 'ui_please_enter_the_search_keyword',
                    type: 'textarea',
                    input: '',
                },
                title: {
                    // text: 'ui_topic', // 主题
                    text: 'ui_topic_colon', // 主题：
                    placeholder: 'ui_input_msg_topic',
                    type: 'textarea',
                    rows: 1,
                    input: '',
                },
                content: {
                    text: 'ui_contents_colon', // 内容：
                    placeholder: 'ui_input_msg_content',
                    type: 'textarea',
                    rows: 10,
                    input: '',
                }
            },
            // 收件人類型列表 | type: Int | 0:上級 1:下級 2:所有下級
            typeList: [{
                type: 0,
                text: 'sys_superior',
                icon: 'manager-o',
                disable: false,
            }, {
                type: 1,
                text: 'sys_subordinate',
                icon: 'contact',
                disable: false,
            // }, {
            //     type: 2,
            //     text: 'ui_all_subordinate',
            //     icon: 'cluster-o',
            //     disable: false,
            // }, {
            //     type: -2,
            //     // text: '平级',
            //     text: 'ui_same_level',
            //     icon: 'friends-o',
            //     disable: true,
            }, {
                type: 3,
                // text: '系统管理员',
                text: 'ui_system_administrator',
                icon: 'desktop-o',
                disable: true,
            }, ],
            // 已選擇類型
            activedType: '',
            // 勾選所有下級
            allSubordinate: false,
            // 已選擇收件人
            recipientList: [],
            searchTimer: null,
            loading: false,
            // 詢問是否刪除特定用戶彈窗
            showDeleting: false,
            deletingMember: {},
        }
    },
    // 這裡用 beforeMount ，重整頁面會有 getter 沒註冊的問題，先改成 beforeCreate
    beforeCreate() {
    // beforeMount() {
        this.$root.$emit('setStore', { Message, UserList })
    },
    mounted() {
        console.log(`debug: created -> window.s9 = newMail`, (window.s9 = this))
        this.changeTitle({
            title: 'ui_new_information',
            left: true,
            leftText: 'btn_back',
            backFunction: () => this.$router.replace({name: 'mail'}),
        })
        this.reset()
    },
    beforeDestroy() {
        
    },
    watch: {
        'inputList.recipient.input'() {
            this.inputList.recipient.input = this.inputList.recipient.input.replace(/\n/g, '')
            this.prepareSearch()
        },
        activedType(val, old) {
            this.recipientList.splice(0)
            this.inputList.recipient.input = ''
        },
    },
    methods: {
        ...mapActions('layout/header', {
            changeTitle: _M.UPDATED,
        }),
        ...MessageStore.mapActions({
            sendMail: `send/${_M.CREATED}`,
        }),
        ...UserListStore.mapActions({
            getUserList: 'getList',
            resetUserList: 'reset',
        }),
        onPageScroll() {
            this.toggleDropdown(false)
        },
        prepareSearch() {
            this.searchTimer && clearTimeout(this.searchTimer);
            this.toggleDropdown(false);
            this.inputList.recipient.input && (this.searchTimer = setTimeout(() => {
                this.doSearch()
            }, 500))
        },
        toggleDropdown(status) {
            this.$refs.dropdown && this.$refs.dropdown[0] && this.$refs.dropdown[0].toggle(status)
        },
        toggleAllSub(status = true) {
            this.allSubordinate = status
            status && this.recipientList.splice(0)
        },
        async reset() {
            this.activedType = this.typeList[0].type
            this.recipientList.splice(0)
            // for (const item of this.inputList) item.input = ''
            this.inputList.recipient.input = ''
            this.inputList.title.input = ''
            this.inputList.content.input = ''
            this.resetUserList({})
        },
        doSearch() {
            // console.log(`debug: doSearch -> doSearch`)
            this.toggleDropdown(true)
            this.resetUserList({})
            this.getUserList({
                key: 'list',
                params: {
                    user_level_type: 0,
                    page: 1,
                    page_limit: 10,
                    user_account: this.inputList.recipient.input || '',
                },
            })
        },
        onMenberClick({userId, userAccount, nickName}) {
            if (this.recipientList.findIndex(v=>+v.userId === +userId) === -1) {
                this.recipientList.push({userId, userAccount, nickName})
                this.inputList.recipient.input = ''
                this.toggleDropdown(false)
                this.toggleAllSub(false)
                this.focusRecipient()
            }
        },
        focusRecipient() {
            this.$refs.recipient && this.$refs.recipient[0] && this.$refs.recipient[0].focus()
        },
        onRecipientClick({userId, userAccount, nickName, $event}) {
            this.showDeleting = true
            this.deletingMember = {
                userId,
                userAccount,
                nickName,
            }
            this.$nextTick(()=>{
                this.$refs["mail-deleting-popup"].$el.style.top = `${$event.clientY + 50 || $event.pageY + 50 || 150}px`
            })
            // console.log(`debug: onRecipientClick -> userId, userAccount, nickName, $event`, userId, userAccount, nickName, $event)
        },
        onDelete({userId}) {
            const index = this.recipientList.findIndex(v => {
                return +v.userId === +userId
            })
            index !== -1 && this.recipientList.splice(index, 1)
            this.showDeleting = false
            this.focusRecipient()
        },
        // toBottom() { },
        // onscroll(event, data) { },
        async onSubmit() {
            const type = this.activedType !== 1
                ? this.activedType
                : this.allSubordinate
                ? 2
                : 1
            const params = {
                type,
                receiver: this.recipientList.map(v=>v.userId),
                title: this.inputList.title.input,
                message: this.inputList.content.input ,
            }
            this.loading = true
            const data = await this.sendMail(params)
            this.loading = false
            // console.log(`debug: onSubmit -> data`, data)
            this.$toast(data.message || '?')
            data.list && this.$router.replace({
                name: 'mail',
                params: {
                    tab: 'outbox',
                },
            })
        }
    },
    computed: {
        ...mapGetters('layout/header', {
            headerState: _M.READ,
        }),
        // ...mapGetters('Common', ['loading']),
        ...UserListStore.mapGetters({
            UserList: 'list',
        }),
        filteredMemberList() {
            // return []
            return this.UserList.filter(v=>this.recipientList.findIndex(u=>+u.userId === +v.userId) === -1)
        },
        recipientSelectable() {
            return this.activedType === this.typeList[1].type
        },
        validated() {
            const recipient = this.allSubordinate || !!this.recipientList.length || this.activedType === this.typeList[0].type
            const title = this.inputList.title.input
            const content = this.inputList.content.input
            return recipient && title && content
        },
    },
    filters: {
        textFilter(str) {
        },
    }
}
