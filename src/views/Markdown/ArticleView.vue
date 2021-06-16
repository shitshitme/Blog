<template>
    <div class="articleView">
        <!-- <Markdown :content="content" /> -->
        <h1>前端路由的原理</h1>
        <!-- <pre></pre> -->
        <span>前端路由是如何做到URL和内容进行映射的呢？监听URL的改变</span>
        <p>URL发生变化，同时不引起页面刷新有两个办法:</p>
        <p>通过URL的hash改变URL:</p>
        <code>http:localhost:8888/#/123</code>
        <p> 通过html5的history模式修改URL </p>
        <p>URL的hash
        URL的hash也就是锚点(#),本质上是改变window.location的href属性
        可以通过直接赋值location.hash改变href,但是页面不发生刷新</p>
        <code>
        <!-- <script> -->

        const routerViewEl = document.getElementsByClassName("router-view")[0];
        <br>
        window.addEventListener('hashchange', () => {
            <br>
            // console.log("hashchange", location.hash)
            <br>
            switch (location.hash) {
                <br>
                case "#/home":
                <br>
                    routerViewEl.innerHTML = "Home";
                    <br>
                    break;
                    <br>
                case "#/about":
                <br>
                    routerViewEl.innerHTML = "About";
                    <br>
                    break;
                    <br>
                default:
                <br>
                    routerViewEl.innerHTML = ""
            }
        })
        <!-- </script> -->
        </code>
        <p>注意：</p>
        <p>hash的优势就是兼容性更好，再老板IE中都可以运行</p>
        <p>但是缺陷是有一个`#`,显得不像一个真实的路径</p>
    </div>
</template>

<script>
import  Markdown from './Markdown.vue'

export default {
    name:"ArticleView",
    components:{
        Markdown
    },
    data:() => ({
        content: ''
    }),
    created(){
        this.content = "# 测试"
    }
}
</script>

<style scoped>
.articleView{
    width:80%;
    margin:0 auto;
    /* text-align: center; */
    background-color: #ffffff;
    padding:20px;
    padding-top:0;
}
</style>