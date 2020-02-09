export const filterPermission = (list, nonWap) => {
    const obj = {
        code: [],
        title: [],
    }
    let isNonWap = !!nonWap && nonWap.length !== 0
    list.length &&
        list.map(v => {
            !(isNonWap && nonWap.includes(v.link)) && (obj.code.push(v.link), obj.title.push(v.name))
        })
    // console.log('bbb', list, obj, 'ccc', nonWap, isNonWap)
    return obj
}

export const depositAndWithdrawMenu = (name, list, addList) => {
    console.log('name, list, addList: ', name, list, addList)
    let _list = []
    let isOpen = addList.length !== 0 ? addList[0].lists.some(i => i.function === name) : false
    let isAdd = !!addList[0] && !!addList[0].lists[0]
    // skip list 權限
    // if (isOpen) {
    list.map(v => {
        _list.push({ link: v.code, name: v.title, type: v.type })
    })
    // }
    if (isAdd) {
        addList[0].lists.map(r => {
            r.function !== name && _list.push({ link: r.function, name: r.name, type: 0 })
        })
    }
    console.log({ _list })
    return _list
}

export const menuPermission = (menuFrontList, filterName, nonWap) => {
    let filterList = !!menuFrontList ? menuFrontList.filter(i => i.class === filterName) : []
    let menuList = !!filterList[0] ? filterList[0].lists : filterList
    let nonWapList = []
    let isNonWap = !!nonWap && nonWap.length !== 0
    isNonWap &&
        menuList.map(v => {
            nonWap.includes(v.function) || nonWapList.push(v)
        })
    return isNonWap ? nonWapList : menuList
}
