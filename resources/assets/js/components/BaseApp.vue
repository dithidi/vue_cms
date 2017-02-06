<template>
    <div class="admin">
        <main-nav></main-nav>
        <article-admin v-if="navLink == 'articles'"></article-admin>
    </div>
</template>

<script>
    import MainNav from './MainNav.vue';
    import Article from './article/Article.vue';

    export default {
        components: {
            'main-nav': MainNav,
            'article-admin': Article
        },

        computed: {
            navLink() {
                return this.$store.getters.mainNav;
            }
        }
    }
</script>