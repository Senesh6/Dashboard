<template>
     <div class="redeem">
        <div class="redeem-wrapper">
            <div class="detail-block">
                <div class="title-row">
                    <div class="left-dtl">
                        <img width="31" height="31" src="@/assets/Group 12659.svg" alt="Claim Reward icon">
                        <h4>Redeem Reward</h4>
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
                            <p class="dtl-value bold">{{redeem.redeemName}}</p>
                        </div>
                    </div>
                </div>
                <div class="cont-row">
                    <div class="left-dtl">
                        <p class="dtl-name">Redeemed Points</p>
                    </div>
                    <div class="right-dtl">
                        <div class="right-dtl">
                            <p class="dtl-value bold">{{redeem.redeemRed}}</p>
                        </div>
                    </div>
                </div>
                <div class="cont-row">
                    <div class="left-dtl">
                        <p class="dtl-name">Voucher Code</p>
                    </div>
                    <div class="right-dtl">
                        <div class="right-dtl">
                            <p class="dtl-value bold">{{redeem.redeemVCode}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    name: "Redeem",
    props:['redeem', 'date','time']

    
    
}
</script>


<style lang="scss" scoped>

.redeem{
    margin: 20px 0px;
}

.redeem-wrapper {
    padding: 15px;
    border: 1px solid #D4D4D5;
    border-radius: 4px;
}

</style>