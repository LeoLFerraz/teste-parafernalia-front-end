<template>
    <div class="resultsWrapper">
        <h2 v-if="this.$store.state.currentPreviewVideos.length > 0">Results:</h2>
        <ul v-if="this.$store.state.currentPreviewVideos.length > 0">
            <li :key="video.Id" v-for="video in this.$store.state.currentPreviewVideos">
                <VideoPreview :video="video"></VideoPreview>
            </li>
        </ul>
        <BaseButton variant="primary" v-if="nextPageToken.length > 0" @input-click="loadMore()" class="loadMore">load more</BaseButton>
    </div>
</template>

<script>
    import { getYoutubeVideos } from '@/assets/scripts/youtubeAPI';
    import VideoPreview from '@/components/base-video-preview/base-video-preview';
    import BaseButton from '@/components/base-button/base-button';

    export default {
        name: "base-video-results",
        components: {
            VideoPreview,
            BaseButton
        },
        data: () => {
            return {
                nextPageToken: ""
            }
        },
        methods: {
            mapYoutubeResponseToResultsArray(result, newSearch = true) {
                this.nextPageToken = result.nextPageToken;

                let parser = new DOMParser();
                let videos = [];
                for(let video of result.items) {
                    // Assemble a video object for internal use:
                    videos.push({
                        id: video.id.videoId,
                        channelTitle: parser.parseFromString(video.snippet.channelTitle, "text/html").body.innerHTML,
                        channelId: video.snippet.channelId,
                        description: parser.parseFromString(video.snippet.description, "text/html").body.innerHTML,
                        title: parser.parseFromString(video.snippet.title, "text/html").body.innerHTML,
                        thumbnailURL: video.snippet.thumbnails.medium.url,
                        uploadedTime: video.snippet.publishTime
                    });
                }
                this.$store.commit("updateCurrentPreviewVideos", {videos, newSearch});
            },
            loadMore() {
                getYoutubeVideos(this.$store.state.currentSearch, 4, this.nextPageToken).then((response) => {
                    response.json().then((result) => {
                        this.mapYoutubeResponseToResultsArray(result, false);
                    });
                });
            }
        },
        mounted() {
            this.$store.watch(state => state.currentSearch, (newValue) => {
                getYoutubeVideos(newValue).then((response) => {
                    response.json().then((result) => {
                        this.mapYoutubeResponseToResultsArray(result);
                    });
                });
            });
        }
    }
</script>

<style lang="scss" scoped>
    .resultsWrapper {
        margin-bottom: 20px;
        @media (max-width: $breakpoint-mobile) {
            margin-bottom: 82px; // Compensates for mobile search @ bottom
        }
    }
    h2 {
        margin-top: 10px;
        font-size: 1.2rem;
    }
    ul {
        padding-left: 0;
        margin-top: 15px;
        @media (max-width: $breakpoint-mobile) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
    }
    li {
        list-style: none;
        @media (max-width: $breakpoint-mobile) {
            width: auto;
        }
    }
</style>
