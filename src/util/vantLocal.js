import { Locale } from 'vant'
export function Locals(lang = 'zh-CN') {
    // const hasDefault = ['zh-CN', 'zh-HK', 'zh-TW', 'en-US', 'tr-TR', 'es-ES']
    const path = `vant/lib/locale/lang/${lang}`
    // if (hasDefault.includes(lang)) {
    // path = `vant/lib/locale/lang/${lang}`
    // } else {
    // path = `//${window.CDN}/fusionlotterywap/vant.${lang}`
    // process.env.NODE_ENV === 'production'
    // : `../../static/vant.${lang}`
    // }
    Locale.use(lang, () => import(`${path}`))
}
