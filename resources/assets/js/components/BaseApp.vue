<template>
    <div class="admin">
        <main-nav></main-nav>
        <article-admin></article-admin>
    </div>
</template>

<script>
    import MainNav from './MainNav.vue';
    import Article from './article/Article.vue';

    export default {
        components: {
            'main-nav': MainNav,
            'article-admin': Article
        }
    }
</script>