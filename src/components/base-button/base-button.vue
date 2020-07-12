<template>
    <div>
        <b-button @click="$emit('input-click')" block type="button" :variant="variant" class="d-md-block d-lg-none">
            <b-icon :icon="icon" v-if="icon && iconPosition === 'left'" :class="`icon-${iconPosition}`"></b-icon>
            <slot></slot>
            <b-icon :icon="icon" v-if="icon && iconPosition === 'right'"></b-icon>
        </b-button>
        <b-button @click="$emit('input-click')" type="button" :variant="variant" class="d-none d-lg-block">
            <b-icon :icon="icon" v-if="icon && iconPosition === 'left'" :class="`icon-${iconPosition}`"></b-icon>
            <slot></slot>
            <b-icon :icon="icon" v-if="icon && iconPosition === 'right'"></b-icon>
        </b-button>
    </div>
</template>

<script>
    export default {
        name: "Base-Button",
        props: {
            variant: String,
            icon: String,
            iconPosition: String
        }
    }
</script>

<style lang="scss" scoped>
    .btn {
        color: $c-low-contrast;
        border-radius: 20px;
        padding: 5px 20px;
        @media (max-width: $breakpoint-mobile) {
            margin-top: 10px;
            font-size: 1.2rem;
        }
    }
    .btn-primary {
        background-color: $c-primary;
        border-color: $c-primary;
        &:hover {
            background-color: $c-secondary;
            border-color: $c-secondary;
        }
    }
    .btn-secondary {
        background-color: $c-blue;
        border-color: $c-blue;
        &:hover {
            background-color: $c-primary;
            border-color: $c-primary;
        }
    }
    .icon-right {
        margin-left: 5px;
    }
    .icon-left {
        margin-right: 5px;
    }
</style>
