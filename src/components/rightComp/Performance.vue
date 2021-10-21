<template>
    <div class="perfomance">
        <div class="performance-wrapper">
            <div class="detail-block">
                <div class="rightCol title-row">
                    <div class="left-dtl">
                        <h4>Performance Matrices</h4>
                    </div>
                </div>
                <div class="cont-row">
                    <div class="rightCol left-dtl">
                        <img src="@/assets/heartbeat-solid.svg" alt="Performance Matrices icon">
                        <p class="rightCol dtl-name">Performance Matrices</p>
                    </div>
                    <div class="right-dtl">
                        <div class="right-dtl">
                            <p class="dtl-value bold">{{perfomance.clValue}}</p>
                        </div>
                    </div>
                </div>
                <div class="cont-row">
                    <div class="rightCol left-dtl">
                        <img src="@/assets/running-solid.svg" alt="isk of Churn icon">
                        <p class="rightCol dtl-name">Risk of Churn</p>
                    </div>
                    <div class="right-dtl">
                        <div class="right-dtl">
                            <p class="dtl-value bold">{{perfomance.memInsight}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    
    name:"Performance",
    props:['perfomance']

}
</script>


<style lang="scss" >

.perfomance{
    margin: 20px 0px;
    

    .performance-wrapper{
        border: 1px solid #00ADF0;
        border-radius: 4px;
        padding: 15px;
    }


}
.rightCol.title-row{
    padding-bottom: 15px !important;

    h4{
        margin-left:0px !important;
        text-align: left;
    }
}

.rightCol{
    display: flex;
    align-items: center;

    img{
        margin-right:10px ;
    }

    .dtl-value{
        color: #000701;
        text-align: right;
    }
}



</style>