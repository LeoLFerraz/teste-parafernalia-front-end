<template>
        <b-container fluid="md" class="searchContainer solidBG">
            <b-form @submit="(e) => {e.preventDefault(); handleVideoSearch(search)}">
                <b-row>
                    <b-col md="12" lg="6">
                        <BaseInput @valueChanged="handleVideoSearchAuto($event)" inputType="text" inputPlaceholder="Title, Author, etc" inputName="videoQuery" inputId="videoQuery"></BaseInput>
                    </b-col>
                    <b-col md="12" lg="6">
                        <BaseButton @input-click="handleVideoSearch(search)" variant="primary" icon="search" icon-position="left">Search</BaseButton>
                    </b-col>
                </b-row>
            </b-form>
        </b-container>
</template>

<script>
    import BaseButton from '../base-button/base-button';
    import BaseInput from '../base-input/base-input';

    export default {
        name: "Base-Search",
        components: {
            BaseButton,
            BaseInput
        },
        data: () => {
            return {
                search: ""
            }
        },
        methods: {
            handleVideoSearchAuto(event) {
                this.search = event;
                if(event) {
                    clearTimeout(this.searchTimeout);
                    this.searchTimeout = setTimeout(() => {
                        this.$store.commit("updateCurrentSearch", event)
                    }, 800);
                }
            },
            handleVideoSearch(search) {
                this.$store.commit("updateCurrentSearch", search)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @media (max-width: $breakpoint-mobile) {
        .searchContainer {
            position: fixed;
            bottom: 0;
            padding-bottom: 10px;
        }
        .solidBG {
            background-color: $c-surface;
            z-index: 2;
        }
    }
</style>
