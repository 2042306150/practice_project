<template>
    <el-header>
        <div class="l-content">
            <!-- 图标展示 -->
           <el-button size="small">
            <el-icon><Grid /></el-icon>
           </el-button>
        </div>
        <div class="r-content">
            <el-dropdown>
            <span class="el-dropdown-link">
                <img class="user" :src="getImgSrc()" alt="" />
            <el-icon class="el-icon--right">
                <arrow-down />
            </el-icon>
            </span>
            <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
            </template>
        </el-dropdown>
        </div>
    </el-header>
</template>

<script>
export default {
    setup(){
        const getImgSrc = (user) => {
            return new URL(`../assets/${user}.png`,import.meta.url).href;
        }
        return{
          getImgSrc,
        };
    },
};
</script>

<style lang="less" scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}
.r-content{
    .user
    {width: 40px;
    height: 40px;
    border-radius: 50%;}
}

</style>