<template>
    <div class="container">
        <TopBar></TopBar>
        <section>
            <div class="part">
                <div class="image"><img src="../assets/example.jpg"></div>
                <div class="title">
                    <div class="time">
                        <span>17</span>
                        <div>
                            <p>3月17， 2017</p>
                            <p>星期五 12：45 pm</p>
                        </div>
                    </div>
                    <div class="trash">
                        <img src="../assets/trash.png" alt="">
                    </div>
                    <div style="clear:both"></div>
                    <div class="address">北京市 昌平区 天通苑西二区</div>
                    <div class="temperaute">10℃ ♥</div>
                </div>
                <div style="clear:both"></div>
                <article>
                    影片结束，放映室灯光亮起，我坐在自己的座位上久久没有起身。 La La Land，是我近几年看过的、最打动我的片子。介于别的影评已经从不同角度（Chazelle独特的歌舞片风格、对好莱坞歌舞片黄金时代的致敬、写给洛杉矶的情书、高司令和Emma的神级演绎、触动人心的原声带等）专业地...
                </article>
            </div>
            <div class="part">
                <div class="image"><img src="../assets/example.jpg"></div>
                <div class="title">
                    <div class="time">
                        <span>17</span>
                        <div>
                            <p>3月17， 2017</p>
                            <p>星期五 12：45 pm</p>
                        </div>
                    </div>
                    <div class="trash">
                        <img src="../assets/trash.png" alt="">
                    </div>
                    <div style="clear:both"></div>
                    <div class="address">北京市 昌平区 天通苑西二区</div>
                    <div class="temperaute">10℃ ♥</div>
                </div>
                <div style="clear:both"></div>
                <article>
                    影片结束，放映室灯光亮起，我坐在自己的座位上久久没有起身。 La La Land，是我近几年看过的、最打动我的片子。介于别的影评已经从不同角度（Chazelle独特的歌舞片风格、对好莱坞歌舞片黄金时代的致敬、写给洛杉矶的情书、高司令和Emma的神级演绎、触动人心的原声带等）专业地...
                </article>
            </div>
            <div class="part">
                <div class="image"><img src="../assets/example.jpg"></div>
                <div class="title">
                    <div class="time">
                        <span>17</span>
                        <div>
                            <p>3月17， 2017</p>
                            <p>星期五 12：45 pm</p>
                        </div>
                    </div>
                    <div class="trash">
                        <img src="../assets/trash.png" alt="">
                    </div>
                    <div style="clear:both"></div>
                    <div class="address">北京市 昌平区 天通苑西二区</div>
                    <div class="temperaute">10℃ ♥</div>
                </div>
                <div style="clear:both"></div>
                <article>
                    影片结束，放映室灯光亮起，我坐在自己的座位上久久没有起身。 La La Land，是我近几年看过的、最打动我的片子。介于别的影评已经从不同角度（Chazelle独特的歌舞片风格、对好莱坞歌舞片黄金时代的致敬、写给洛杉矶的情书、高司令和Emma的神级演绎、触动人心的原声带等）专业地...
                </article>
            </div>
        </section>
        <MenuBar></MenuBar>
    </div>
</template>
<script>
import MenuBar from "../components/MenuBar.vue"
import TopBar from "../components/TopBar.vue"
    export default{
        components:{
            MenuBar,
            TopBar
        }
    }
</script>
<style>
    .container{
        width:100%;
        height:700px;
        margin:0;
        padding:0;
        font-family: "微软雅黑";
    }
    section{
        position:absolute;
        top:50px;
        width:100%;
    }
    .part{
        margin-top:15px;
    }
    .part:first-child{
        margin-top:0;
    }
    section .image{
        width:100%;
        height:200px;
        overflow:hidden;
    }
    section .image img{
        width:100%;
    }
    .title{
        height:50px;
        width:100%;
        margin-top:10px;
    }
    .time {
        width:50%;
        height:100%;
        float:left;
        color:#35c4e6;
    }
    .trash{
        width:40%;
        height:100%;
        float:left;
        text-align:right;
        line-height:50px;
    }
    .trash img{
        width:32px;
        vertical-align:middle;
    }
    .time span{
        display: inline-block;
        float:left;
        font-size:45px;
        margin-left:10px;
        line-height:50px;
        margin-right:5px;
    }
    .time div{
        text-align:left;
    }
    .time div p{
        line-height:25px;
        font-size:14px;
    }
    .address, .temperaute{
        font-size:12px;
        color:#ccc;
        float:left;
        width:50%;
        margin-top:10px;
    }
    .temperaute{
        width:40%;
        text-align:right;
    }
    article{
        text-align:left;
        padding:10px;
    }
</style>