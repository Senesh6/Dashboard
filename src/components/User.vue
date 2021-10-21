<template>
    <div class="user-wrapper">
        <div class="user-image">
            <slot name="image"></slot>
        </div>
        <div class="user-name">
            <slot name="name"></slot>
        </div>
    </div>
</template>

<script>


export default {
   name: 'User',
}
</script>

<style lang="scss" scoped>

.user-wrapper {
        text-align: left;
        display: flex;
        align-items: center;

        .user-name {
            padding-left: 10px;

            h2{
                font-size: 19px;
                font-weight: 400;
                color: #000;
            }

        }


    }

</style>