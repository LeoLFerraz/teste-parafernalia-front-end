<template>
    <div class="inputLabelContainer">
        <label v-if="this.$slots.default" :for="inputId"><slot></slot></label>
        <b-input v-model="inputValue" :type="inputType" :class="inputStyle" :placeholder="inputPlaceholder" :name="inputName" :id="inputId"></b-input>
    </div>
</template>

<script>
    export default {
        name: "Base-Input",
        props: {
            inputId: String,
            inputName: String,
            inputType: String,
            inputPlaceholder: String,
            inputStyle: String
        },
        data: () => {
            return {
                inputValue: ""
            }
        },
        watch: {
            inputValue: function() {
                this.$emit("valueChanged", this.inputValue)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .form-control {
        background-color: transparent;
        border: 0;
        border-bottom: 1px solid $c-secondary;
        border-radius: 0;
        min-width: 150px;
        color: $c-low-contrast;
        &:focus {
            background-color: transparent;
            outline: none;
            box-shadow: none;
            color: $c-high-contrast;
        }
    }
    @media (max-width: $breakpoint-mobile) {
        input {
            width: 100%;
        }
    }
</style>
