<template>
    <div v-if="this.$store.state.activeVideo.id" class="videoWrapper">
        <iframe :src="`https://www.youtube.com/embed/${this.$store.state.activeVideo.id}?autoplay=1`"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowfullscreen></iframe>
    </div>
</template>

<script>
    export default {
        name: "Base-Video-Player"
    }
</script>

<style lang="scss" scoped>
    .videoWrapper {
        margin-top: 50px;
        margin-left: 15px;
        position: relative;
        padding-bottom: 56.25%;
        padding-top: 25px;
        height: 0;
        @media (max-width: $breakpoint-mobile) {
            margin: 0;
        }
    }
    .videoWrapper iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
