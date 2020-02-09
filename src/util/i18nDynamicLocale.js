import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import messages from '../../static/locale.zh-cn'
import axios from 'axios'

const instance = axios.create()

instance.defaults.withCredentials = false

Vue.use(VueI18n)

const loadedLanguages = [] // 我们的预装默认语言

export const i18n = new VueI18n({
    locale: '', // 设置语言环境
    fallbackLocale: 'zh_cn',
    messages: {
        // [nowLang]: import(`../../static/locale.${nowLang.replace(/_/g, '-')}`)
    }, // 设置语言环境信息
})

export const getTransfer = key => {
    return (i18n.messages[i18n.locale] || {})[key] || key
}

const setI18nLanguage = lang => {
    i18n.locale = lang
    // axios.defaults.headers.common['Accept-Language'] = lang
    document.querySelector('html').setAttribute('lang', lang)
    return lang
}

export const loadLanguageAsync = lang => {
    if (i18n.locale !== lang) {
        if (!loadedLanguages.includes(lang)) {
            // const fileName = process.env.NODE_ENV === 'production' ? `//${window.CDN}/fusionlotterywap/locale.${lang.replace(/_/g, '-')}` : `../../static/locale.${lang.replace(/_/g, '-')}`
            if (process.env.NODE_ENV === 'production') {
                return instance
                    .get(`//${window.CDN}/fusionlotterywap/locale.${lang.replace(/_/g, '-')}.json`)
                    .then(msgs => {
                        i18n.setLocaleMessage(lang, msgs.data)
                        loadedLanguages.push(lang)
                        return setI18nLanguage(lang)
                    })
                    .catch(err => {
                        console.error(err, 'err')
                    })
            } else {
                return import(
                    /* webpackChunkName: "lang-[request]" */ `../../static/locale.${lang.replace(/_/g, '-')}.json`
                )
                    .then(msgs => {
                        i18n.setLocaleMessage(lang, msgs)
                        loadedLanguages.push(lang)
                        return setI18nLanguage(lang)
                    })
                    .catch(err => {
                        console.error(err, 'err')
                    })
            }
        }
        return Promise.resolve(setI18nLanguage(lang))
    }
    return Promise.resolve(lang)
}
