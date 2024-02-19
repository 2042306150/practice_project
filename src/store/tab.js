import Cookie from "js-cookie"
import router from "@/router"

export default{
    state: {
        isCollapse: false, //控制菜单的展开收起
        tabList:[
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 's-home',
                url: 'Home/Home'
            }
        ],//面包屑数据
        menu: []
    },
    mutations: {
        //修改菜单展开收起的功能
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        },
        //修改，更新面包屑数据
        selectMenu(state,val){
            console.log(val,'val')
            //判断添加数据是否为主页
            if(val.name !== 'home'){
                const index = state.tabList.findIndex(item => item.name === val.name)
                //如果不存在
                if(index === -1){
                    state.tabList.push(val)
                }
            }
        },
        //删除指定的tage数据
        closeTag(state,item) {
           console.log(item,'it')
           const index = state.tabList.findIndex(val =>val.name === item.name)
           state.tabList.splice(index,1)
        },
        //设置menu数据
        setMenu(state,val) {
            state.menu = val
            Cookie.set('menu',JSON.stringify(val))
        },
        //动态注册路由
        addMenu(state,router){
            //判断缓存中是否有数据
            if (!Cookie.get('menu')) return
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
            //组装动态路由的数据
            const menuArray =[]
            if(!menu){
                return "不存在";
            }
            // menu.arayy.forEach(item => {
            //     if(item.children){
            //         item.children = item.children.map(item =>{
            //             console.log(item.url)
            //             item.component = () => import(`../views/${item.url}`)
            //             return item
            //         })
            //         menuArray.push(...item.children)
            //     }else {
            //         item.component = () => import(`../views/${item.url}`)
            //         menuArray.push(item)
            //     }
            // })
            //路由的动态添加
            // menuArray.forEach(item => {
            //     router.addRoute('Main',item)
            // })
           
        }

    }
}