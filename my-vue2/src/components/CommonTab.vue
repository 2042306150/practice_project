<template>
    <div class="tags">
      <el-tag :key="tags.name" :v-for="(tags,index) in tags"
    :closable = "tags.name !== 'home'"
    :disable-transitions="false"
    :effect="$route.name === tags.name ? 'dark' : 'plain'"
    @click="changeMenu(tags)"
    @close="handleClose(tags,index)">
        {{tags.label}}
      </el-tag>
    </div>
</template>

  <script>
  import { useRouter,useRoute } from 'vue-router';
  import { useStore } from 'vuex';
import router from '../router';
  export default {
    setup(){
      const store =useStore();
      const router = useRouter();
      const route = useRoute()
      const tags =store.state.tabsList;
      const changeMenu=(item)=>{
        router.push({name: item.name});
      };
      const handleClose=(tags,index)=>{
        let length =tags.length -1;
        //处理vuex中的tabslist
        store.commit('closeTab',tags);
        //做第一个判断
        if(tags.name !== route.name){
          return;
        }
        if(index ===length){
          router.push({
            name:tags[index -1].name,
          });
        }else{
          router.push({
            name:tags[index].name,
          })
        }
      }
      return {
        tags,
        changeMenu,
        handleClose,
      }
    }
  }
</script>

<style lang="less" scoped>
.tags{
  padding: 20px;
  width: 100%;
  .el-tag{
    margin-right: 15px;
    cursor: pointer;
  }
}

</style>