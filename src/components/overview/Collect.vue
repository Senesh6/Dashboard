<template>
     <div class="collect">
        <div class="collect-wrapper">
           <div class="detail-block">
                <div class="title-row">
                    <div class="left-dtl">
                        <img width="31" height="31" src="@/assets/Group 12660.svg" alt="Claim Reward icon">
                        <h4>Collect Points</h4>
                    </div>
                    <div class="right-dtl">
                        <div class="right-dtl">
                            <p class="date">{{date}}</p>
                            <p class="time">{{time}}</p>
                        </div>
                    </div>
                </div>
                <div class="cont-row">
                    <div class="left-dtl">
                        <p class="dtl-name">Collected Points</p>
                    </div>
                    <div class="right-dtl">
                        <div class="right-dtl">
                            <p class="dtl-value bold">{{collect.collectPoints}}</p>
                        </div>
                    </div>
                </div>
                <div class="cont-row">
                    <div class="left-dtl">
                        <p class="dtl-name">Total Points</p>
                    </div>
                    <div class="right-dtl">
                        <div class="right-dtl">
                            <p class="dtl-value bold">{{collect.collecttotalPoint}}</p>
                        </div>
                    </div>
                </div>
                <div class="cont-row">
                    <div class="left-dtl">
                        <p class="dtl-name">Total Tier Points</p>
                    </div>
                    <div class="right-dtl">
                        <div class="right-dtl">
                            <p class="dtl-value bold">{{collect.collectTierPoints}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    name: "Collect",
    props:['collect', 'date','time']
    
}
</script>


<style lang="scss" scoped>

.collect{
    margin: 20px 0px;
}

.collect-wrapper {
    padding: 15px;
    border: 1px solid #D4D4D5;
    border-radius: 4px;
}

</style>