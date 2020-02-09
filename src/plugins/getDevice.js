// const userAgent  = window.navigator.userAgent;
// const iOS = !!userAgent.match(/iPad/i) || !!userAgent.match(/iPhone/i);
// const webkit = !!userAgent.match(/WebKit/i);
// const safari = iOS && webkit && !userAgent.match(/CriOS/i);

const getDevice = {
    install: (Vue, options) => {
        Object.defineProperty(Vue.prototype, '$getDevice', {
            get () {
                const userAgent  = window.navigator.userAgent;
                const iOS = !!userAgent.match(/iPad/i) || !!userAgent.match(/iPhone/i);
                const webkit = !!userAgent.match(/WebKit/i);
                const safari = iOS && webkit && !userAgent.match(/CriOS/i);
                return {
                    iOS,
                    webkit,
                    safari,
                }
            }
        })
        // Vue.prototype.$getDevice = {
        //     iOS,
        //     webkit,
        //     safari,
        // }
    }
}

export default getDevice
