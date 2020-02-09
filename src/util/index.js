import { vue } from '@Main'
import base64 from 'hi-base64'
import { Dialog } from 'vant'
import { getTransfer } from '@UTIL/i18nDynamicLocale'

/**
 * 儲存 Cookie
 * @param {string} cname Cookie Name
 * @param {string} cvalue Cookie Value
 */
export const setCookie = (cname, cvalue) => {
    document.cookie = cname + '=' + base64.encode(encodeURIComponent(JSON.stringify(cvalue))) + ';' + ';path=/'
    return cvalue
}

/**
 * 取得 Cookie
 * @param {string} cname Cookie Name
 */
export const getCookie = cname => {
    let name = cname + '='
    let ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) === 0) {
            return JSON.parse(decodeURIComponent(base64.decode(c.substring(name.length, c.length))))
        }
    }
    return ''
}

/**
 * 刪除 Cookie
 * @param {string} cname Cookie Name
 */
export const delCookie = cname => {
    let exp = new Date()
    exp.setTime(exp.getTime() - 1)
    document.cookie = cname + '=;expires=' + exp.toGMTString() + ';path=/'
    // document.cookie = cname + '=;expires=' + exp.toGMTString()
}

export const deleteAllCookies = () => {
    var cookies = document.cookie.split(';')
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i]
        var eqPos = cookie.indexOf('=')
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
    }
}

/**
 * sessionStorage
 *
 */

export const setSession = (key, value) => {
    if (!key) return ''
    let encodeData = base64.encode(encodeURIComponent(value))
    sessionStorage.setItem(key, encodeData)
    return encodeData
}

export const getSession = key => {
    if (!key) return ''
    if (!sessionStorage.getItem(key)) return ''
    return decodeURIComponent(base64.decode(sessionStorage.getItem(key)))
}

export const delSession = key => {
    if (!key) return null
    sessionStorage.removeItem(key)
    return true
}
/**
 * 判斷是否為 json 格式
 * true 轉換成 javascript 可用的格式
 * false 返回空字串
 * @param {string} string json 字串
 */

export const handleJson = string => {
    try {
        if (string.length % 4 === 0) {
            return JSON.parse(decodeURIComponent(base64.decode(string)))
        } else {
            return JSON.parse(string)
        }
    } catch (error) {
        return ''
    }
}

/**
 * localStorage
 */

export const setStorage = (key, val) => (localStorage[key] = base64.encode(encodeURIComponent(JSON.stringify(val))))

/**
 * 判斷有無 localStorage
 * true 返回 localStorage 並進行 json 檢測
 * false 返回空字串
 * @param {string} key localStorage 的 Key
 */
export const handleStorage = key => {
    if (typeof key === 'string') {
        return localStorage[key] ? handleJson(localStorage[key]) : ''
    }
    if (Array.isArray(key)) {
        const obj = {}
        key.map(i => {
            obj[i] = localStorage[i] ? handleJson(localStorage[i]) : ''
        })
        return obj
    }
}

export const removeStorage = key => localStorage.removeItem(key)

export const removeAllStorage = () => {
    const saveKey = ['imageAb', 'hideApp']
    let saveData = {}
    saveKey.forEach(v => {
        if (localStorage.getItem(v)) {
            saveData[v] = localStorage.getItem(v)
        }
    })
    localStorage.clear()
    if (Object.keys(saveData).length) {
        Object.keys(saveData).forEach(j => {
            localStorage.setItem(j, saveData[j])
        })
    }
}

export const errorMessageBox = options => {
    Dialog({
        title: getTransfer('ui_hint'),
        message: 'Error',
        confirmButtonText: getTransfer('btn_confirm'),
        ...options,
    }).then(() => {
        const errorMap = new Map([
            [
                /1004|2009/,
                () => {
                    removeAllStorage()
                    // rotuer.push('/')
                    vue.$store.dispatch(`Config/${_M.READ}`, { isClear: true }, { root: true })
                    // console.log()
                    // setTimeout(() => {
                    // location.href = /(http|https)/.test(window.downloadLink) ? window.downloadLink : `//${window.downloadLink}`
                    // location.href = location.origin
                    // }, 1000)
                },
            ],
            [
                /H7003/,
                () => {
                    // vue.$store.commit(_M.CHECK_QUESTION_SET, { isSet: false })
                },
            ],
        ])
        if (typeof options.error === 'string') {
            errorMap.forEach((val, key) => {
                key.test(options.error) && val instanceof Function && val()
            })
        }
    })
}

export const errorMessageBoxCB = (options, { callback, payload }) => {
    Dialog({
        title: getTransfer('ui_hint'),
        message: 'Error',
        confirmButtonText: getTransfer('btn_confirm'),
        ...options,
    }).then(() => {
        typeof callback === 'function' && callback(payload)
    })
}

export const warnMessageBox = options => {
    Dialog({
        title: getTransfer('ui_hint'),
        message: 'warning',
        confirmButtonText: getTransfer('btn_confirm'),
        ...options,
    }).then(() => {
        // console.log(options.callback)
        typeof options.callback === 'function' && options.callback()
    })
}

export const successMessageBoxCB = (options, { callback, payload }) => {
    Dialog(
        {
            title: getTransfer('ui_hint'),
            message: 'success',
            confirmButtonText: getTransfer('btn_confirm'),
            ...options,
        },
        () => {
            typeof callback === 'function' && callback(payload)
        },
    )
}

export const successMessageBox = (options, cb) => {
    Dialog({
        title: getTransfer('ui_hint'),
        message: 'success',
        confirmButtonText: getTransfer('btn_confirm'),
        ...options,
    }).then(() => {
        typeof cb === 'function' && cb()
    })
}

export const confirmMessageBox = options => {
    Dialog.confirm({
        title: getTransfer('ui_hint'),
        customClass: 'msg',
        confirmButtonText: getTransfer('btn_confirm'),
        cancelButtonText: getTransfer('btn_cancel'),
        ...options,
    })
        .then(() => typeof options.cb === 'function' && options.cb(options.params))
        .catch(() => typeof options.cl === 'function' && options.cl(options.params))
}

export const infoMessageBox = options => {
    Dialog({
        title: getTransfer('ui_hint'),
        message: 'info',
        confirmButtonText: getTransfer('btn_confirm'),
        ...options,
    })
}
/**
 * jwt 編碼
 * @param {string} str 要編碼的字串
 */
export const jwtEncode = str => encodeURIComponent(base64.encode(encodeURIComponent(JSON.stringify(str))))

/**
 * jwt 解碼
 * @param {string} str 要編碼的字串
 */
export const jwtDecode = str => JSON.parse(decodeURIComponent(base64.decode(decodeURIComponent(str))))

/**
 * 深複製
 * @param {any} state 要複製的資料
 */
export const returnState = data => JSON.parse(JSON.stringify(data))

/**
 * 千分號逗點/小數點最多四位
 * @param {string|number} number 金額
 * @param {number} digits 小數點下位數 default 4
 */
export const formatNumber = (number, digits = 4) => {
    number = number || 0
    // 修正原始數據有千分號會錯誤的問題
    const aIntNum = number
        .toString()
        .replace(/,/, '')
        .split('.')
    // 判斷是否有小數位
    // 判斷小數位是否足夠長度 超出截斷 不足補上
    const floatPart =
        aIntNum.length > 1
            ? aIntNum[1].length > digits
                ? `.${aIntNum[1].substr(0, digits)}`
                : `.${aIntNum[1] + '0'.repeat(digits - aIntNum[1].length)}`
            : '.' + '0'.repeat(digits)
    const pattern = /(-?\d+)(\d{3})/
    let num = aIntNum[0]
    while (pattern.test(num)) {
        num = num.replace(pattern, '$1,$2')
    }
    return num === 'NaN' ? '' : `${num}${floatPart}`
}

/**
 * 計時器缺位补零
 * @param {number} number 數字
 */
export const formatDate = number => {
    if (number < 10) {
        return '0' + parseInt(number)
    }
    return parseInt(number) + ''
}

export const numberConvertToUppercase = num => {
    if (typeof num === 'object') return
    num = typeof num === 'number' ? num : Number(num)
    const upperCaseNumber = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
    const length = String(num).length
    if (length === 1) {
        return upperCaseNumber[num]
    } else if (length === 2) {
        if (num === 10) {
            return upperCaseNumber[num]
        } else if (num > 10 && num < 20) {
            return '十' + upperCaseNumber[String(num).charAt(1)]
        } else {
            let str = ''
            String(num)
                .split('')
                .forEach(item => {
                    str += upperCaseNumber[+item]
                })
            return str.replace('零', '')
        }
    }
}

export const convertToFormatedHex = byteArr => {
    let hexStr = ''
    let tmpHex = ''

    for (let i = 0; i < byteArr.length; ++i) {
        if (byteArr[i] < 0) {
            byteArr[i] = byteArr[i] + 256
        }
        tmpHex = byteArr[i].toString(16)
        /// Add leading zero.
        if (tmpHex.length === 1) tmpHex = '0' + tmpHex
        if ((i + 1) % 16 === 0) {
            tmpHex += '\n'
        } else {
            tmpHex += ' '
        }
        hexStr += tmpHex
    }
    return hexStr.trim()
}

export const ellies = str => {
    let _str = str
    if (str.length > 9) {
        _str = `${str.slice(0, 3)}...${str.slice(-3)}`
    }
    return _str
}

/**
 * 投注內容的 [&] 換成 ,並把定位膽缺位補上 [-]
 * @param {Object} code 投注內容
 */
export const transCode = code =>
    code
        .replace(/&/g, ',')
        .split('|')
        .map(codes => codes || '-')
        .join('|')
