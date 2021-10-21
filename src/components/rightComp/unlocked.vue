<template>
    <div class="unlocked-main">
        <div class="unlocked-wrapper">
            <div class="detail-block">
                <div class="rightCol title-row">
                    <div class="left-dtl">
                        <h4>Unlocked Rewards</h4>
                    </div>
                </div>
                <div class="unlocked cont-row">
                    <div class="rightCol left-dtl">
                        <img src="@/assets/coffee-cup.svg" alt="Performance Matrices icon">
                        <p class="rightCol dtl-name">Coffee Mug</p>
                    </div>
                    <div class="right-dtl">
                        <div class="right-dtl">
                            <p class="dtl-value bold">50 Points</p>
                        </div>
                    </div>
                </div>
                <div class="unlocked cont-row">
                    <div class="rightCol left-dtl">
                        <img src="@/assets/coffee-cup.svg" alt="Performance Matrices icon">
                        <p class="rightCol dtl-name">Coffee Mug</p>
                    </div>
                    <div class="right-dtl">
                        <div class="right-dtl">
                            <p class="dtl-value bold">50 Points</p>
                        </div>
                    </div>
                </div>
                <div class="unlocked cont-row">
                    <div class="rightCol left-dtl">
                        <img src="@/assets/coffee-cup.svg" alt="Performance Matrices icon">
                        <p class="rightCol dtl-name">Coffee Mug</p>
                    </div>
                    <div class="right-dtl">
                        <div class="right-dtl">
                            <p class="dtl-value bold">50 Points</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    
    name:"Unlocked",
   

}
</script>


<style lang="scss" >

.unlocked-main{
    margin: 20px 0px;
    

    .unlocked-wrapper{
        border: 1px solid #00ADF0;
        border-radius: 4px;
        padding: 15px;


        .unlocked.cont-row{
            background: #F4F4F4 0% 0% no-repeat padding-box;
            border-radius: 8px;
            padding: 10px;
            border-bottom:0px;
            margin: 10px 0px;
        }

    }


}



</style>