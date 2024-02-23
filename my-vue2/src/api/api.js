/**
 * 整个项目的api管理
 * 本项目只是写在这练习，不调用
*/
//import { tr } from "element-plus/es/locale";
import request from "./request";
export default {
    //home组件，左侧表格数据获取
    getTableData(params){
        return request({
        url:'/home/getTableData',
        method:'get',
        data:params,
        mock:true
        })
    },
    //首页count数据
    getCountData(){
        return request({
        url:'/home/getTableData',
        method:'get',
        mock:true
        })
    },
    // getEchartData(){
    //     return request({
    //         url:'/home/getChartData',
    //         method:'get',
    //         mock: true,
    //     })
    // }
    getUserData(params){
        return request({
            url: '/home/getUser',
            method: 'get',
            //为true则用的线上fastmock 的数据
            mock:false,
            data:params,
        })
    },
    addUser(params){
        return request({
            url: '/user/add',
            method: 'post',
            //为true则用的线上fastmock 的数据
            mock:false,
            data:params,
        })
    },
    editUser(params){
        return request({
            url:'/user/edit',
            method:'post',
            mock:false,
            data:params
        })
    },
    deleteUser(params){
        return request({
            url:'/user/delete',
            method:'get',
            mock:false,
            data:params
        })
    },
    //根据用户的返回名不一样，显示不同的列表
    getMenu(params){
        return request({
            url:'/permission/getMenu',
            method:'post',
            mock:false,
            data:params
        })
    }
}