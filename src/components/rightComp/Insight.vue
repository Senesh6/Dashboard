<template>
    <div class="insight">
        <div class="insight-wrapper">
            <div class="detail-block">
                <div class="rightCol title-row">
                    <div class="left-dtl">
                        <h4>Member Insights</h4>
                    </div>
                </div>
                <div class="cont-row">
                    <div class="rightCol left-dtl">
                        <img src="@/assets/shopping-bag-solid.svg" alt="Average Basket Size icon">
                        <p class="rightCol dtl-name">Average Basket Size</p>
                    </div>
                    <div class="right-dtl">
                        <div class="right-dtl">
                            <p class="dtl-value bold">{{insight.avBaSize}}</p>
                        </div>
                    </div>
                </div>
                <div class="cont-row">
                    <div class="rightCol left-dtl">
                        <img src="@/assets/hourglass-half-solid.svg" alt="Average Number of Visits icon">
                        <p class="rightCol dtl-name">Average Number of Visits</p>
                    </div>
                    <div class="right-dtl">
                        <div class="right-dtl">
                            <p class="dtl-value bold">{{insight.AvNumVisit}}</p>
                        </div>
                    </div>
                </div>
                <div class="cont-row">
                    <div class="rightCol left-dtl">
                        <img src="@/assets/shopping-bag-solid.svg" alt="Total Basket Size icon">
                        <p class="rightCol dtl-name">Total Basket Size</p>
                    </div>
                    <div class="right-dtl">
                        <div class="right-dtl">
                            <p class="dtl-value bold">{{insight.totalBaSize}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    
    name:"Insight",
    props:['insight']

}
</script>


<style lang="scss" >

.insight{
    margin: 20px 0px;
    

    .insight-wrapper{
        border: 1px solid #00ADF0;
        border-radius: 4px;
        padding: 15px;
    }


}




</style>