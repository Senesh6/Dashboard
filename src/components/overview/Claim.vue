<template>
     <div class="claim">
        <div class="claim-wrapper">
            <div class="detail-block">
                <div class="title-row">
                    <div class="left-dtl">
                        <img width="31" height="31" src="@/assets/Group 12658.svg" alt="Claim Reward icon">
                        <h4>Claim Reward</h4>
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
                        <p class="dtl-name">Reward Name</p>
                    </div>
                    <div class="right-dtl">
                        <div class="right-dtl">
                            <p class="dtl-value bold">{{claim.claimName}}</p>
                        </div>
                    </div>
                </div>
                <div class="cont-row">
                    <div class="left-dtl">
                        <p class="dtl-name">Redeemed Points</p>
                    </div>
                    <div class="right-dtl">
                        <div class="right-dtl">
                            <p class="dtl-value bold">{{claim.claimRed}}</p>
                        </div>
                    </div>
                </div>
                <div class="cont-row">
                    <div class="left-dtl">
                        <p class="dtl-name">Voucher Code</p>
                    </div>
                    <div class="right-dtl">
                        <div class="right-dtl">
                            <p class="dtl-value bold">{{claim.claimRed}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    name: "Claim",
    props:['claim', 'date','time' ]
    
}
</script>


<style lang="scss" scoped>

.claim-wrapper {
    padding: 15px;
    border: 1px solid #D4D4D5;
    border-radius: 4px;
}

.claim{
    margin: 20px 0px;
}


</style>

<style lang="scss" >

.detail-block{

   .title-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 50px;

        .left-dtl {
            display: flex;
            align-items: center;

            h4 {
                margin-left: 10px;
                color: #000000;
                font-size: 18px;
                font-weight: 500;
                text-align: left;
            }

        }

        .right-dtl {
            display: flex;
            color: #000;
            font-size: 16px;
            
        }

        .time {
            margin-left: 10px;
        }

    } 

    .cont-row{
        display: flex;
        justify-content: space-between;
        padding: 10px 0px;
        border-bottom: 1px solid rgba(112, 112, 112, 0.1);

        &:last-child{
            border-bottom:0px;
        }

        .dtl-name {
            color: #0000008F;
            font-size: 16px;
            text-align: left;
        }

        .dtl-value.bold {
            color: #000000;
            font-size: 16px;
        }


    }

}



</style>