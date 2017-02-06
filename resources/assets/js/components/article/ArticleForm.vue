<template>
    <div>{{article.title}}</div>
</template>

<script>
    export default {
        computed: {
            article() {
                return this.$store.getters.currentArticle;
            }
        }
    }
</script>