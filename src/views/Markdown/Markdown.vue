<template>
    <components :is="html" class="markdown-body"></components>
</template>

<script>
import MarkdownIt from 'markdown-it';
import hljs from 'markdown-it-highlightjs';

export default{
    name:"Markdown",
    props:{
        content:String
    },
    data:() => ({
        md:null
    }),
    computed:{
        html: function(){
            let res = this.md.render(this.content);
            return {
                template:'<div>' + res + '</div>'
            }
        }
    },
    created(){
        this.md = new MarkdownIt();
        this.md.use(hljs);
    }
}
</script>

<style scoped>
#editor{
    margin:0 auto;
    width:80%;
    height:580px;
}
</style>