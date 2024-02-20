<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8" style="margin-top: 20px;">
            <el-card shadow="hover">
                <div class="user">
                    <img src="../../assets/images/user.png" alt=""/>
                    <div class="user-info">
                        <p class="name">Admin</p>
                        <p class="role">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登陆时间：
                        <span>2024-1-1</span>
                    </p>
                    <p>上次登陆地点：
                        <span>成都</span>
                    </p>
                </div>
            </el-card>
            <el-card shadow="hover" style="margin-top: 20px;" height="450px">
                <el-table :data="tableData">
                    <el-table-column v-for="(val,key) in tableLabel" :key="key" :prop="key" :label="val">
            
                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16" style="margin-top: 20px;">
            <div class="num">
            <el-card :body-style="{display:'flex',padding:0}"
            v-for="item in countData"
            :key="item.name"
            >
            <component class="icon" 
            :is="item.icon" 
            :style="{ background: item.color }"></component>
            <div class="detail">
                <p class="num">￥{{ item.value }}</p>
                <p class="txt">{{ item.name }}</p>
            </div>
            </el-card>
        </div>
        </el-col>
    </el-row>
  </template>

<script>
import{defineComponent,getCurrentInstance,onMounted,ref} from "vue";
import axios from "axios";
import { useRouter } from 'vue-router';
export default defineComponent({
    setup(){
        //const {proxy} = getCurrentInstance();
        let tableData = ref([]);
        const tableLabel ={
            name:'课程',
            todayBuy:'今日购买',
            monthBuy:'本月购买',
            totalBuy:'总购买',
        };
        const countData = [
                {
                name: "今日支付订单",
                value: 1234,
                icon: "success",
                color: "#2ec7c9",
                },
                {
                name: "今日收藏订单",
                value: 210,
                icon: "star-on",
                color: "#ffb980",
                },
                {
                name: "今日未支付订单",
                value: 1234,
                icon: "s-goods",
                color: "#5ab1ef",
                },
                {
                name: "本月支付订单",
                value: 1234,
                icon: "success",
                color: "#2ec7c9",
                },
                {
                name: "本月收藏订单",
                value: 210,
                icon: "star-on",
                color: "#ffb980",
                },
                {
                name: "本月未支付订单",
                value: 1234,
                icon: "s-goods",
                color: "#5ab1ef",
                },
            ];

        const getTableList = async ()=>{
            await axios.get("/home/getData").then((res)=>{//get()里面为fastmock预览的地址
                //console.log(res);
                
                if(res.data.code == 200){
                    tableData.value =res.data.data.tableData;
                }
            })
           // let res =await proxy.$api.getTableData();
        };//用封装后的mock方法
        
        onMounted(()=>{
            getTableList();
        });
          return{
            tableData,
            tableLabel,
            countData
          }
    },
});
</script>

  <style lang="less" scoped>
.home{
    .user{
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;
        img{
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin-right: 40px;
        };
    }
    .login-info{
        p{
            line-height: 30px;
            font-size: 14px;
            color: #999;
            span{
                color: #666;
                margin-left: 70px;
            }
        }
    }
    .num{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .el-card{
            width: 32%;
            margin-bottom: 20px;
        }
        .icon{
            height: 80px;
            width: 80px;
            font-size: 30px;
            text-align: center;
            line-height: 80px;
            color: #fff;
        }
        .detail{
            margin-left: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .num{
                font-size: 30px;
                margin-bottom: 10px;
            }
            .txt{
                font-size: 14px;
                text-align: center;
                color: #999;
            }
        }
    }
}
</style>