<template>
    <footer>
        <router-link to="Index"><img src="../assets/index2.png" ></router-link>
        <router-link to="Camera"><img src="../assets/camera1.png" ></router-link>
        <router-link to="Location"><img src="../assets/location1.png" ></router-link>
        <router-link to="Person"><img src="../assets/person1.png" ></router-link>
    </footer>
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
    footer{
        background-color:#000;
        width:100%;
        height:40px;
        position:fixed;
        bottom:0;
        left:0;
    }
    footer a{
        display:block;
        float:left;
        width:25%;
        height:100%;
        line-height:40px;
        text-align:center;
    }
    footer a img{
        height:70%;
        vertical-align:middle;
    }
</style>