<template>
    <div class="mediabox-wrapper">
        <div class="mediabox-image">
            <slot name="image"></slot>
        </div>
        <div class="mediabox-content">
            <slot name="name"></slot>
            <slot name="id"></slot>
            <slot name="date"></slot>
        </div>
    </div>
</template>


<script>


export default {

    name:'MediaBox'
   
}
</script>


<style lang="scss" scoped>

.mediabox-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .mediabox-content{

        text-align: left;
        padding: 0px 20px 0px 30px;

        h2{
            font-size: 20px;
            font-weight: 500;
            color: #000000;
            @media (max-width:1400px) {
                font-size: 18px;
            }
            
        }

        #id{
            font-size: 16px;
            color: rgba(0, 0, 0, 0.7);
            @media (max-width:1400px) {
                font-size: 14px;
            }
        }

        #date{
            font-size: 14px;
            color: #000000;
            @media (max-width:1400px) {
                font-size: 12px;
            }

        }



    }

}


</style>