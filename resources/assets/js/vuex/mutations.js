module.exports = {
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
}