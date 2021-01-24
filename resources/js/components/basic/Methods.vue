<template>
    <div>
        <h1>The Number Is: {{ counter }} </h1>
        <button @click="updateCounter(1)" >Increase</button>
        <button @click="updateCounter(-1)" >Decrease</button>
        <br>
        <br>

        <div v-for="(blog , i) in blogs" :key="i" >
            <h2> {{blog.id }} </h2>

        </div>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter : 0,
            blogs : [],
        }
    },
    created() {
        // Get The Blog posts
        let $posts = [
                {
                    title : 'This is Blog Title' , post : 'This is Blog Post' , id : 1
                },
                {
                    title : 'This is Blog Title' , post : 'This is Blog Post' , id : 2
                },
                {
                    title : 'This is Blog Title' , post : 'This is Blog Post' , id : 3
                },
                {
                    title : 'This is Blog Title' , post : 'This is Blog Post' , id : 4
                },
                {
                    title : 'This is Blog Title' , post : 'This is Blog Post' , id : 5
                },
            ]
            this.blogs = posts
    },
    methods: {
        updateCounter(number) {
            this.counter +=number
        }
    }
}
</script>
