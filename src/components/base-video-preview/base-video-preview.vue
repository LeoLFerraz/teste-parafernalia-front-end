<template>
    <div class="videoPreview" :class="`open-${isOpen}`">
        <b-row>
            <b-col md="12" lg="4">
                <img :src="video.thumbnailURL"  @click="setActiveVideo($event, video)">
            </b-col>
            <b-col md="12" lg="8" class="videoSummary">
                <p class="videoTitle"  @click="setActiveVideo($event, video)">{{video.title}}</p>
                <p class="videoChannelTitle">{{video.channelTitle}}</p>
                <p class="videoAge">uploaded {{getUploadAgeString(video.uploadedTime)}}</p>
                <b-icon-card-heading class="videoDetailsIcon ripple" @click="toggleVideoDetails()"></b-icon-card-heading>
            </b-col>
            <b-col class="videoDesc">
                <p class="videoDescText">{{video.description}}</p>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: "Base-Video-Preview",
        props: {
            video: Object
        },
        data: () => {
            return {
                isOpen: false
            }
        },
        methods: {
            getUploadAgeString: (uploadDateTime) => {
                // param e.g.: 2020-07-10T15:00:31Z
                let hours = Math.abs(new Date() - new Date(uploadDateTime)) / 36e5;
                if(hours < 1) {
                    return "recently";
                } else if(hours < 24) {
                    return "today";
                } else if(hours < 48) {
                    return "one day ago"
                } else if(hours < 720) {
                    return Math.floor(hours/24) + " days ago";
                } else if(hours < 1440) {
                    return "a month ago";
                } else {
                    return Math.floor(hours/720) + " months ago";
                }
            },
            toggleVideoDetails: function() {
                this.isOpen = !this.isOpen;
            },
            setActiveVideo: function(event, video) {
                this.$store.commit("updateActiveVideo", video);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .videoPreview {
        margin-bottom: 15px;
        margin-right: 5px;
    }
    img {
        width: 100%;
        max-width: 320px;
        height: auto;
        @media (max-width: $breakpoint-mobile) {
            width: 150px;
        }
    }

    .ripple {
        background-position: center;
        background-size: 0;
        border-radius: 10px;
        transition: background 0.8s;
    }
    .ripple:active {
        background-color: rgba($c-green, 0.5);
        background-size: 100%;
        transition: background 0s;
    }

    p {
        overflow: hidden;
        margin: 2px 0;
        &.videoTitle {
            font-weight: bold;
            font-size: 0.8rem;
            color: $c-high-contrast;
            cursor: pointer;
            @media (max-width: $breakpoint-mobile) {
                font-size: 1rem;
            }
        }
        &.videoDescText, &.videoAge, &.videoChannelTitle {
            font-weight: normal;
            font-size: 0.7rem;
            color: $c-low-contrast;
            @media (max-width: $breakpoint-mobile) {
                font-size: 0.8rem;
            }
        }
        &.videoAge {
            position: absolute;
            bottom: 0;
            @media (max-width: $breakpoint-mobile) {
                display: none;
            }
        }
    }
    .open-true {
        @media (max-width: $breakpoint-mobile) {
            width: 150px;
            transition: all 0.5s ease;
        }
        .videoDesc {
            height: 50px;
            transition: all 0.3s ease;
            overflow: hidden;
            @media (max-width: $breakpoint-mobile) {
                height: 85px;
            }
        }
        svg {
            color: $c-green;
        }
    }

    .open-false {
        @media (max-width: $breakpoint-mobile) {
            width: 150px;
            transition: all 0.5s ease;
        }
        .videoDesc {
            height: 0;
            transition: all 0.3s ease;
            overflow: hidden;
        }
    }

    .videoDetailsIcon {
        position: absolute;
        bottom: 0;
        right: 0;
        cursor: pointer;
        @media (max-width: $breakpoint-mobile) {
            right: 10px;
        }
    }

    img {
        cursor: pointer;
    }
</style>
