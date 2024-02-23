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
            <el-card style="height: 280px">
                <div ref="echart" style="height: 280px;;"></div>
            </el-card>
            <div class="graph">
                <el-card style="height: 260px;">
                    <div ref="userechart" style="height: 280px;;"></div>
                </el-card>
                <el-card style="height: 260px;">
                    <div ref="videoechart" style="height: 280px;;"></div>
                </el-card>
            </div>
        </el-col>
    </el-row>
  </template>

<script>
import{ defineComponent,getCurrentInstance,onMounted,reactive,ref } from "vue";
import axios from "axios";
//import { useRouter } from 'vue-router';
import * as echarts from 'echarts'
//import user from "/api/mockServeData/user";
export default defineComponent({
    setup(){
        const {proxy} = getCurrentInstance();
        let tableData = ref([]);
        const tableLabel ={
            name:'课程',
            todayBuy:'今日购买',
            monthBuy:'本月购买',
            totalBuy:'总购买',
        };
        //右上标签栏数据
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
        const echartData = [ {
                'orderData': {
                    "date": ['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007'],
                    "data|7": [{
                        "苹果": "@integer(1000, 5000)",
                        "小米": "@integer(1000, 5000)",
                        "华为": "@integer(1000, 5000)",
                        "oppo": "@integer(1000, 5000)",
                        "vivo": "@integer(1000, 5000)",
                        "一加": "@integer(1000, 5000)",
                        }],
                },
                'videoData': [{
                    name: '小米',
                    value: 2999
                },
                {
                    name: '苹果',
                    value: 5999
                },
                {
                    name: 'vivo',
                    value: 1500
                },
                {
                    name: 'oppo',
                    value: 1999
                },
                {
                    name: '魅族',
                    value: 2200
                },
                {
                    name: '三星',
                    value: 4500
                }
                ],
                'userData': [{
                    date: '周一',
                    new: 5,
                    active: 200
                },
                {
                    date: '周二',
                    new: 10,
                    active: 500
                },
                {
                    date: '周三',
                    new: 12,
                    active: 550
                },
                {
                    date: '周四',
                    new: 60,
                    active: 800
                },
                {
                    date: '周五',
                    new: 65,
                    active: 550
                }],
                }]
        
        const getTableList = async ()=>{//不用这个方法
            await axios.get("/home/getData").then((res)=>{//get()里面为fastmock预览的地址
                //console.log(res);
                if(res.data.code == 200){
                    tableData.value =res.data.data.tableData;
                }
            })
           //let res =await proxy.$api.getTableData();
        };//用封装后的mock方法
        //echats表格渲染
        let xOptions = reactive({
            // 图例文字颜色
        textStyle: {
            color: "#333",
        },
        grid: {
            left: "20%",
        },
        // 提示框
        tooltip: {
            trigger: "axis",
        },
        xAxis: {
            type: "category", // 类目轴
            data: [],
            axisLine: {
            lineStyle: {
                color: "#17b3a3",
            },
            },
            axisLabel: {
            interval: 0,
            color: "#333",
            },
        },
        yAxis: [
            {
            type: "value",
            axisLine: {
                lineStyle: {
                color: "#17b3a3",
                },
            },
            },
        ],
        color: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3"],
        series: [],
        });
        let pieOptions = reactive({
        tooltip: {
            trigger: "item",
        },
        color: [
            "#0f78f4",
            "#dd536b",
            "#9462e5",
            "#a6a6a6",
            "#e1bb22",
            "#39c362",
            "#3ed1cf",
        ],
        series: [],
        });
        let oderData = reactive({
            xData:[],
            series:[],
        });
        let userData = reactive({
            xData:[],
            series:[],
        });
        let videoData = reactive({
            series:[],
        });
        const getChartData = () =>{   //async
            
            const res = echartData.orderData
            const userRes = echartData.userData
            const videoRes =echartData.videoData
           // console.log(res.date,"zheli")
            echartData.xData = res.date
            const keyArray = Object.keys(res.data[0])
            const series = []
            keyArray.forEach((key)=>{
                series.push({
                    name:key,
                    data:res.data.map(item=>item[key]),
                    type:'line',
                });
            }) ;
            oderData.series = series;
            xOptions.xAxis.data = oderData.xData;
            xOptions.series = oderData.series;
            //userData进行渲染
            let hEcharts = echarts.init(proxy.$refs['echart']);
            hEcharts.setOption(xOptions);

            //柱状图进行渲染
            userData.xData = userRes.map((item) => item.data)
            userData.series = [
                {
                    name:'新增用户',
                    data:userRes.map((item) => item.new),
                    type: "bar",
                },
                {
                    name:'活跃用户',
                    data: userRes.map((item) => item.active),
                    type: "bar",
                },
            ];

            xOptions.xAxis.data = oderData.xData;
            xOptions.series = oderData.series;
            //渲染
            let uEcharts = echarts.init(proxy.$refs['userechart']);
            uEcharts.setOption(xOptions);
            videoData.series = [
                {
                    data:videoRes,
                    type:"pie",
                }
            ];
            pieOptions.series = videoData.series
            let vEcharts = echarts.init(proxy.$refs['videoechart']);
            vEcharts.setOption(pieOptions);
            
        }

        //获取数据
        onMounted(()=>{
            getTableList();
            //获取count数据、echarts数据
            // getCountData();
            // getChartData();
            getChartData();
        });
        
        return{
            tableData,
            tableLabel,
            countData,
            echartData
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
    .graph{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        .el-card{
            width: 48%;
        }
    }
}
</style>