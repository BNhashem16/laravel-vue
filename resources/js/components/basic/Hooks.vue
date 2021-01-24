<template>
    <div>
        <h1>This is Hook page</h1>
        <h1 ref="myref" >My Name is : {{name}}</h1>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name : 'Ahmed Hashem',
        }
    },
    created() {
        console.log(this.name);
    },
    mounted() {
        console.log(this.$refs.myref );
    },
}
</script>
