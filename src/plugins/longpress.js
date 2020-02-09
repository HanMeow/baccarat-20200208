const PRESS_TIMEOUT = 1000

// let debug = BigInt(0)

const longpress = {
// function longpress(el, binding, vNode) {
    inserted(el, binding, vNode) {
        const value = binding.value
        // console.log(`debug: longpress -> el`, el)
        // console.log(`debug: longpress -> binding`, binding)
        // console.log(`debug: longpress -> vNode`, vNode)
        // console.log(`debug: longpress -> vNode.data`, vNode.data)
        if (typeof value !== 'function') {
            console.warn(`Expect a function, got ${value}`)
            return
        }

        let pressTimer = null

        const start = e => {
            if (e.type === 'click' && e.button !== 0) {
                return;
            }

            // console.log(`debug: longpress -> debug`, ++debug)

            if (pressTimer === null) {
                pressTimer = setTimeout(() => value(vNode, e), PRESS_TIMEOUT)
            }
        }

        const cancel = () => {
            if (pressTimer !== null) {
                clearTimeout(pressTimer)
                pressTimer = null
            }
        }
        
        ['mousedown', 'touchstart'].forEach(e => el.addEventListener(e, start));
        ['click', 'mouseout', 'touchend', 'touchcancel'].forEach(e => el.addEventListener(e, cancel))
    },
    unbind(el) {
        // el.removeEventListener('click', listener)
        // 改天想辦法刪
    }
}

export default longpress
