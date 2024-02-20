/**
 * 整个项目的api管理
*/
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
}