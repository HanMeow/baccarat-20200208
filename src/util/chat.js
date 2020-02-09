import { getTransfer } from './i18nDynamicLocale'

export const timeFormat = val => {
    const Obj = {
        am: getTransfer('ui_am'),
        pm: getTransfer('ui_pm'),
    }
    let newVal = moment(val)
        .format('h:mm a')
        .replace(/(\S+)\s(\S+)/, '$2 $1')
    Object.keys(Obj).map(name => {
        newVal = newVal.replace(`${name}`, `${Obj[name]}`)
    })
    // console.log(newVal)
    return newVal
}

export const urlReplace = msg => {
    let replacedText, replacePattern1
    replacePattern1 = /(\b(https?|ftp):\/\/([-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|]){3,}\.([-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|]){2,})/gim
    replacedText = msg.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>')
    return replacedText
}
