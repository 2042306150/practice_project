import Mock from 'mockjs'
import homeApi from './mockData/home'
import userApi from './mockData/user'  //找不到文件
import permissionApi from './mockData/permission'

//拦截请求
Mock.mock('/home/getData',homeApi.getHomeData)

//本地获取user数据
Mock.mock(/user\/getUsr/,'get',userApi.getUserList)
Mock.mock(/user\/add/,'post',userApi.createUser)
Mock.mock(/user\/edit/,'post',userApi.updateUser)
Mock.mock(/user\/delete/,'post',userApi.deleteUser)
Mock.mock(/permission\/getMenu/,'post',permissionApi.getMenu)


