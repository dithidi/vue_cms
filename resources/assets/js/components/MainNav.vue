<template>
    <nav class="main-nav">
        <div class="main-nav__site-title">
            <span class="main-nav__highlight">VUE</span>CMS
        </div>
        <ul class="main-nav__list">
            <li class="main-nav__list-item">
                <a @click.prevent="setMainNav('articles')" href="#" class="main-nav__link">Articles</a>
            </li>
            <li class="main-nav__list-item">
                <a @click.prevent="setMainNav('other')" href="#" class="main-nav__link">Another Link</a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        methods: {
            setMainNav: function(navLink) {
                this.$store.dispatch('setMainNav', navLink);
            }
        }
    }
</script>
