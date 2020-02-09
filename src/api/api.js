const generalApiFn = (path, version = 'v1', method = 'post') => {
    const prefixPath = `${path}/${version}/` || ''
    return path => {
        return { path: `/api/${prefixPath}${path}`, method }
    }
}
/** 帳戶中心轉發 */
const ApiFn = generalApiFn('acc/front')
/** 廳主後台 */
const Apifnc = generalApiFn('game')
/** 手機 **/
const ApiM = generalApiFn('mobile')

const API = {
    /** 取得額外設定 */
    config: {
        read: Apifnc('frontend_config/get_config'),
    },
    menu: {
        read: Apifnc('Menu/front_list'),
    },
    enConfig: {
        read: {
            path: '/static/mis/',
            method: 'get',
        },
    },
    register: {
        direct: {
            /** 直客 4.7 直客模式-首頁註冊用戶 */ // 填入推薦人ID
            created: Apifnc(`Login/direct_register`),
        },
        linked: {
            /** 註冊(會員註冊) */ // 帶返點資訊註冊
            created: Apifnc('Login/register'),
        },
    },
    login: {
        created: Apifnc('Login/login'),
        code: {
            /**4.1 產生驗證碼 */
            created: Apifnc('Login/create_code'),
        },
    },
    logout: {
        deteled: ApiFn('users/user_logout'),
    },
    mobile: {
        /** 安卓&ios版本 **/
        read: ApiM(`Game_config/get_mobile_template`),
    },
    game: {
        /**14.3.5 取得遊戲 token */
        read: Apifnc('Game_client/get_game_token_after_transfer'),
        /** 7.2.5 進遊戲前轉帳功能 */
        updated: ApiFn('game/before_game_transfer'),
    },
    mine: {
        read: ApiFn('game/get_user_specific_game_wallet'),
    },
    //2019/11/04
    transfer: {
        /** 7.2.8 取得用戶遊戲餘額 */
        read: ApiFn('game/get_user_specific_game_wallet'),
        /** 7.2.3 高雄遊戲中心遊戲幣轉換（版本 3） */
        updated: ApiFn('game/game_transfer_v3'),
        /** 7.2.5 進遊戲前轉帳功能 */
        modify: ApiFn('game/before_game_transfer'),
    },
    report: {
        tradeReport: {
            /** 15.3.2 帳變類型列表 */
            gameType: {
                read: ApiFn('ui/order_type_list'),
            },
            /** 2.4.3 APP交易記錄 */
            rechage: {
                read: ApiFn('fund/fund_orders_report_v3'),
            },
            /** 2.4.3 APP交易記錄 */
            activity: {
                read: ApiFn('fund/fund_orders_report_v3'),
            },
            /**7.3.1 遊戲轉帳 - 歷史紀錄 */
            transfer: {
                read: ApiFn('game/transfer_record'),
            },
        },
        gameReport: {
            /** 15.6.1 投注查詢列表 */
            read: Apifnc('Report/order_history_list_v2'),
            // personal: {
            //     /**15.4.1 個人報表報表 */
            //     read: Apifnc('report/get_personal_report'),
            // },
            /**15.6.2 APP 遊戲商列表 */
            company: {
                read: Apifnc('Game_setting/get_company_list'),
            },
            /**15.6.3  APP 遊戲商之遊戲類型 */
            category: {
                read: Apifnc('Game_setting/get_company_category_list'),
            },
            /**15.6.4  APP 遊戲商之遊戲列表 */
            game: {
                read: Apifnc('Game_setting/get_company_game_list'),
            },
        },
        /** 7.2.7 遊戲餘額轉回 */
    },
    //2019/11/11
    fund: {
        /** 確認是否設定資金密碼 */
        read: ApiFn('fund/check_funds_password_set'),
        /** 設置 資金密碼 */
        create: ApiFn('fund/set_password'),
        /** 更新 資金密碼 */
        update: ApiFn('fund/update_password'),
        verify: {
            /** 驗證 資金密碼 */
            update: ApiFn('fund/verify_password'),
        },
    },
    security: {
        /** 密保問題列表 */
        read: ApiFn('ui/question_list'),
        check: {
            /** 檢查是否設定 密保設定 */
            read: ApiFn('security/check_question_set'),
        },
        question: {
            /** 目前已設置 密保問題 */
            read: ApiFn('security/current_questions'),
            /** 設定 密保問題 */
            create: ApiFn('security/set_questions'),
        },
        answer: {
            /** 抽取已設置 密保問題 */
            read: ApiFn('security/random_questions'),
            /** 驗證回答 密保問題 */
            update: ApiFn('security/answer_questions'),
        },
    },
    bank: {
        /** 開戶銀行列表 */
        read: ApiFn('ui/bank_can_binding'),
        province: {
            /** 開戶省分列表 */
            read: ApiFn('ui/province_list'),
        },
        city: {
            /** 開戶城市列表 */
            read: ApiFn('ui/city_list'),
        },
        card: {
            /** 已綁訂的卡號列表 */
            read: ApiFn('user_card/list_info'),
            /** 綁訂卡片 */
            create: ApiFn('user_card/binding_step'),
            /** 驗證最後綁卡資料 */
            update: ApiFn('user_card/verify_latest_one'),
            /** 銀行卡卡號刪除 */
            delete: ApiFn('user_card/delete_bank_card'),
        },
    },
    //2019/11/14
    recharge: {
        /**3.5 第三方 - 其他充值支付類型(自動路由) */
        pay: {
            /**3.5.1 最低單筆存款、最高單筆存款 */
            read: ApiFn('recharge/pay_recharge'),
            /**3.5.2 其他充值類型 - 提交訂單 */
            create: ApiFn('autorouting/pay_api'),
        },
        /**3.6.1 銀行卡列表、第三方銀行列表(步驟一) */
        read: ApiFn('recharge/bank_card_and_thirdparty_bank'),
        bankcard: {
            /**3.4.1 銀行列表、最低單筆存款、最高單筆存款(銀行卡充值) */
            read: ApiFn('recharge/bank_card_recharge'),
            /**3.6.2 銀行卡充值(最低單筆存款、最高單筆存款)（步驟二) */
            // read: ApiFn('recharge/bank_card_min_max'),
        },
        /**3.1 第三方 - 銀行充值（自動路由） */
        bank: {
            /**3.1.1 銀行列表、最低單筆存款、最高單筆存款（用戶銀行充值） */
            read: ApiFn('recharge/bank_recharge'),
            /**3.1.2 銀行充值 - 提交訂單 & WAP 步驟三 */
            create: ApiFn('autorouting/api'),
        },
        thirdparty: {
            /**10.1.2 第三方支付類型列表 */
            read: Apifnc('Menu/thirdparty_pay_list'),
            /**3.6.3 第三方銀行充值(最低單筆存款、最高單筆存款)(步驟二) */
            // read: ApiFn('recharge/thirdparty_bank_min_max'),
        },
        /**3.4.2 用戶銀行卡充值 & WAP 步驟三 */
        create: ApiFn('recharge/bank_card_recharge_api'),
        /**3.4.3 用戶銀行卡充值 - 更新備註 (用戶支付時間) */
        update: ApiFn('recharge/update_bank_card_recharge_note'),
        qrcode: {
            /**3.7.1 二維碼 ID、單筆存款金額（二維碼充值） */
            read: ApiFn('recharge/qrcode_recharge'),
            /**3.7.2 用戶二維碼充值 (產生訂單紀錄) */
            create: ApiFn('recharge/qrcode_recharge_api'),
            /**3.7.3 用戶二維碼充值 - 更新備註 */
            update: ApiFn('recharge/update_qrcode_recharge_note'),
        },
    },
    //2019/11/18
    takeCash: {
        /**8.1.1 發起提現訂單（步驟 1） */
        create: ApiFn('withdrawals/step'),
        /**8.1.2 提交提現訂單（步驟 2） */
        update: ApiFn('withdrawals/apply'),
        /**8.2.1 提現進度 */
        read: ApiFn('withdrawals/progress_search'),
    },
    //2019/11/19
    user: {
        read: ApiFn('users/get_user'),
        /**1.1.6 更新暱稱、密碼 */
        update: ApiFn('users/edit_user'),
        password: {
            /**1.1.5 會員更新密碼 */
            update: ApiFn('users/update_password'),
        },
    },
    team: {
        userList: {
            list: {
                read: Apifnc('Team/get_user_list'),
            },
        },
        createUser: {
            /** 添加用戶 */
            created: Apifnc('Team/register'),
        },
        linkedUser: {
            /** 列表 鏈結開戶 */
            read: Apifnc('Team/get_link_list'),
        },
        teamOverview: {
            read: Apifnc('Team/team_overview'),
        },
        setRetreat: {
            active: {
                read: Apifnc('Point/get_user_refund_list'),
            },
            list: {
                read: Apifnc('Point/get_refund_data_v2'),
            },
            update: Apifnc('Point/set_refund_data_v2'),
        },
        setRefund: {
            active: {
                read: Apifnc('Point/get_user_refund_list'),
            },
            list: {
                read: Apifnc('Point/get_refund_data_v2'),
            },
            update: Apifnc('Point/set_refund_data_v2'),
        },
        //2019/11/28
        invitationLink: {
            /**7.1.4 檢查邀請連結是否有效 */
            read: Apifnc('team/check_invitation_link'),
        },
    },
    chat: {
        history: {
            /** 聊天系統 16.2.1 取得聊天室訊息紀錄 */
            read: Apifnc(`Chat_server/get_user_message_history`),
        },
        upload: {
            /** 聊天系統 16.2.3 圖片上傳(base64) */
            updated: Apifnc(`Chat_server/upload_pics`),
        },
    },
    //2019/11/21
    LuckyMoney: {
        /**32.1 代理身份 */
        agent: {
            /**32.1.1 取得設定紅包狀態 */
            read: Apifnc('Lucky_money/check_set_active'),
            /**32.1.2 進行設定紅包 */
            update: Apifnc('Lucky_money/set_active'),
            member: {
                /**32.1.3 取得下級會員名單 */
                read: Apifnc('Lucky_money/get_member_list'),
            },
            report: {
                /**32.1.4 取得代理紅包活動報表 */
                read: Apifnc('Lucky_money/get_report_list'),
                /**32.1.5 紅包停止活動 */
                delete: Apifnc('Lucky_money/stop_active'),
            },
        },
        member: {
            /**32.2.1 取得領取紅包狀態 */
            read: Apifnc('Lucky_money/check_receive_active'),
            /**32.2.2 進行領取紅包 */
            update: Apifnc('Lucky_money/receive_active'),
            bind: {
                /**32.2.3 取得帳號綁定禮金狀態 */
                read: Apifnc('Lucky_money/check_bind_active'),
            },
            record: {
                /**32.2.4 取得活動領取歷程 */
                read: Apifnc('Lucky_money/get_record_list'),
            },
        },
    },
    //2019/11/25
    /**28. 優惠活動介面 */
    /**這個可能沒用，但先留著 */
    Promotion: {
        /**28.1.1 取得優惠活動廣告列表 */
        read: Apifnc('promo_banner/get_promo_ad_list'),
        status: {
            /**28.1.2 取得優惠活動狀態 */
            read: Apifnc('promo_banner/get_promo_ad_list'),
        },
    },
    /**30. 自定義活動 */
    ActivityDefine: {
        type: {
            /**30.1.5 取得活動設定類型 */
            read: Apifnc('Activity_define/get_activity_fast_type'),
        },
        /**30.1.6 取得活動列表 */
        read: Apifnc('Activity_define/get_activity_list'),
        detail: {
            /**30.1.1 取得活動詳情 */
            read: Apifnc('Activity_define/get_detail'),
        },
        userBonus: {
            /**30.1.2 取得用戶活動獎勵列表 */
            read: Apifnc('Activity_define/get_user_bonus_list'),
            /**30.1.3 用戶手動領獎 */
            update: Apifnc('Activity_define/update_bonus_received'),
        },
    },
    //2019/12/10
    /**2. 平台公告 */
    News: {
        /**2.1.1公告列表 */
        read: Apifnc('News/get_news_list'),
        detail: {
            /**2.1.2 公告內文 */
            read: Apifnc('News/get_news_detail'),
        },
    },
    //2019/12/17
    /**25. 站內信 */
    Message: {
        receive: {
            /**25.1.1 收信箱 - 列表 */
            read: Apifnc('Message/receive_box'),
            detail: {
                /**25.1.2 收信箱 - 內文 */
                read: Apifnc('Message/receive_message_detail'),
            },
            /**25.1.3 收信箱 - 刪除信件 */
            delete: Apifnc('Message/receive_del'),
            /**25.1.4 收信箱 - 回覆信件 */
            update: Apifnc('Message/receive_reply'),
        },
        send: {
            /**25.2.1 發件箱-列表 */
            read: Apifnc('Message/send_box'),
            detail: {
                /**25.2.2 發件箱-信件內容 */
                read: Apifnc('Message/send_message_detail'),
            },
            /**25.2.4 發件箱 - 刪除信件 */
            delete: Apifnc('Message/send_del'),
            /**25.2.3 發件箱-新增信息 */
            create: Apifnc('Message/send_message'),
        },
    },
    /**33. 手機與信箱驗證 */
    verification: {
        sms: {
            /**33.1.1 送出簡訊驗證碼 */
            create: Apifnc('verification/send_sms_code'),
            /**33.1.2 驗證手機驗證碼 */
            update: Apifnc('verification/check_sms_code'),
            /**33.1.3 手机验证 - 发送验证码 */
            read: Apifnc('verification/send_sms_verify'),
        },
        email: {
            /**33.2.1 送出信箱驗證碼 */
            create: Apifnc('verification/send_mail_code'),
            /**33.2.2 驗證信箱驗證碼 */
            update: Apifnc('verification/check_mail_code'),
            /**33.2.3 信箱验证 - 发送验证码 */
            read: Apifnc('verification/send_email_verify'),
        },
        check_field_value: {
            /**33.5.1 资料验证 - 手机与信箱验证 */
            read: Apifnc('verification/check_field_value'),
        },
        //2019/12/30
        password: {
            /**33.3.1 忘记密码 - 发送验证码 */
            create: Apifnc('verification/send_forget_password'),
            /**33.3.2 忘记密码 - 确认验证码 */
            read: Apifnc('verification/check_forget_password'),
            /**33.3.3 忘记密码 - 重设密码 */
            update: Apifnc('verification/set_forget_password'),
        },
        account: {
            /**33.4.1 忘記帳號 - 輸入手機號碼或信箱，驗證正確後發送驗證碼 */
            create: Apifnc('verification/send_forget_acc'),
            /**33.4.2 忘記帳號 - 輸入驗證碼、手機號碼或信箱，確認驗證碼後發送帳號 */
            read: Apifnc('verification/check_forget_acc'),
        },
    },
    home: {
        read: Apifnc('Game_client/game_category_list'),
        banner: {
            //2020/01/07
            /**19.1 直客模式登入用首頁資訊 */
            read: Apifnc('Home/login_page_info'),
            /**19.2 直客模式登入用首頁資訊 */
            update: Apifnc('Home/main_page_info'),
        },
    },
    //2020/01/09
    share: {
        /**11.6 综合模式 - APP 下载网址与分享文字 */
        read: ApiM('share_msg/link_list'),
    },
}

export const getApi = (key, api = API) => {
    if (/(\.|\/)/.test(key)) {
        const keys = key.split(/(\.|\/)/).filter(i => !/(\.|\/)/.test(i))
        return keys.reduce((arr, item) => (typeof arr === 'string' ? api[arr][item] : arr[item]))
    }
    return api[key] || api
}
