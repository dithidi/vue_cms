import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
    state: {
        mainNav: 'articles',
        articles: [],
        currentArticle: {}
    },

    mutations: {
        SET_MAIN_NAV(state, navLink) {
            state.mainNav = navLink;
        },

        SET_ARTICLES(state, articles) {
            state.articles = articles;
        },

        ADD_ARTICLE(state, article) {
            state.articles.push(article);
        },

        EDIT_ARTICLE(state, article) {
            state.currentArticle = article;
        },

        REMOVE_ARTICLE(state) {
            state.articles.$remove(state.currentArticle);
        },

        SET_CURRENT_ARTICLE (state, article) {
            state.currentArticle = article;
        }
    },

    actions: {
        setMainNav({commit}, navLink) {
            commit('SET_MAIN_NAV', navLink);
        },

        setArticles({ commit }, articles){
            commit('SET_ARTICLES', articles);
        },

        setCurrentArticle({ commit }, article){
            commit('SET_CURRENT_ARTICLE', article);
        },

        addArticle({ commit }, article){
            commit('ADD_ARTICLE', article);
        }
    },

    getters: {
        mainNav: state => state.mainNav,
        articles: state => state.articles,
        currentArticle: state => state.currentArticle
    }
})