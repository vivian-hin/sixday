<template>
    <header>
        <div class="left">
            <input type="search" results="n">
        </div>
        <div class="right">
            <span><img src="../assets/refresh.png" ></span>
            <router-link to="Publish"><img src="../assets/edit.png" ></router-link>
            <span><img src="../assets/menu.png" ></span>
        </div>
    </header>
</template>

<script>
export default{
    data(){
        return {
       
        }
    },
    created(){

    },
    methods:{
        overPage(obj){
        }
    }
}
</script>
<style>
    header{
        background-color:#35c4e6;
        width:100%;
        height:50px;
        position:fixed;
        top:0;
        left:0;
    }
    header .left{
        float:left;
        width:50%;
        line-height:50px;
    }
    .left input[type=search]{
        border-radius:10px;
        border:0;
        height:30px;
    }
    header .right{
        float:right;
        height:100%;
        width:50%;
    }
    header a, header span{
        display:block;
        float:left;
        width:33%;
        height:100%;
        line-height:50px;
        text-align:center;
    }
    header img{
        height:50%;
        vertical-align:middle;
    }
</style>