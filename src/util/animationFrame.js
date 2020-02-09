/**
 * 加入動畫
 */
export const requestAFrame = (function() {
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function raf(callback) {
        window.setTimeout(callback, 1000 / 60)
    }
})()

/**
 * 取消動畫
 */
export const cancelAFrame = (function() {
    return window.cancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.oCancelAnimationFrame ||
    window.clearTimeout
})()

/**
 * 滾輪動畫效果
 * @param {*} scrollTargetY 滾輪高度
 * @param {*} speed 速度
 * @param {*} easing 模式
 */
export const scrollToY = (scrollTargetY = 0, speed = 2000, easing = 'easeOutSine') => {
    const scrollY = window.scrollY
    let currentTime = 0
    const time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8))

    const easingEquations = {
        easeOutSine: function (pos) {
            return Math.sin(pos * (Math.PI / 2))
        },
        easeInOutSine: function (pos) {
            return (-0.5 * (Math.cos(Math.PI * pos) - 1))
        },
        easeInOutQuint: function (pos) {
            if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 5)
            }
            return 0.5 * (Math.pow((pos - 2), 5) + 2)
        }
    }

    function tick() {
        currentTime += 1 / 60

        var p = currentTime / time
        var t = easingEquations[easing](p)

        if (p < 1) {
            requestAFrame(tick)
            window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t))
        } else {
            window.scrollTo(0, scrollTargetY)
        }
    }

    // call it once to get started
    tick()
}