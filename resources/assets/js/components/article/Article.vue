<template>
    <div class="main-stage article-admin">
        <div v-for="article in articles" @click="setCurrentArticle(article)">{{article.title}}</div>
        <article-form v-if="showForm == true"></article-form>
    </div>
</template>

<script>
    import ArticleForm from './ArticleForm.vue';

    export default {
        data() {
            return {
                showList: true,
                showForm: false,
                formType: ''
            }
        },

        components: {
            'article-form': ArticleForm
        },

        created: function() {
            this.fetchInitialData();
        },

        computed: {
            articles() {
                return this.$store.getters.articles;
            }
        },

        methods: {
            fetchInitialData: function() {
                if(this.articles.length) return;

                this.$http.get('admin/articles').then((response) => {
                    this.$store.dispatch('setArticles', response.body);
                });
            },

            setCurrentArticle: function(article) {
                this.$store.dispatch('setCurrentArticle', article);
                this.showForm = true;
                this.formType = 'edit';
            }
        }
    }
</script>