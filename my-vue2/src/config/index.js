/**
 * 环境配置文件
 * 在企业级项目里面一般有三个环境
 * 1.开发环境
 * 2.测试环境
 * 3.线上环境
 */
//当前环境
const env = import.meta.env.MODE || 'prod'

const EnvConfig ={
    development:{
        baseApi:'/api',
        mockApi:''//fastmock地址
    },
    test:{
        baseApi:'/api',
        mockApi:''//fastmock地址
    },
    pro:{
        baseApi:'/api',
        mockApi:''//fastmock地址
    }
}

export default{
    env,
    //mock总开关
    mock:true,
    ...EnvConfig[env]
}