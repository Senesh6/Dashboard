<template>
     <div class="portalOne">
        <div class="portalOne-wrapper">
            <div class="detail-block">
                <div class="aboutComp title-row">
                    <div class="left-dtl">
                        <h4>Customer Portal</h4>
                    </div>
                </div>
                <div class="aboutComp cont-row">
                    <div class="aboutComp left-dtl">
                        <img src="@/assets/Group 1012.svg" alt="Secondary User icon">
                        <p class="aboutComp dtl-name">Address</p>
                    </div>
                    
                    <p class="dtl-value bold">{{member.address}}</p>
                        
                </div>
                <div class="aboutComp cont-row">
                    <div class="aboutComp left-dtl">
                        <img src="@/assets/venus-mars-solid (1).svg" alt="Secondary User icon">
                        <p class="aboutComp dtl-name">Gender</p>
                    </div>
                    <div class="right-dtl">
                        <div class="right-dtl">
                            <p class="dtl-value bold">{{member.gender}}</p>
                        </div>
                    </div>
                </div>
                <div class="aboutComp cont-row">
                    <div class="aboutComp left-dtl">
                        <img src="@/assets/map-marked-alt-solid.svg" alt="Secondary User icon">
                        <p class="aboutComp dtl-name">Location</p>
                    </div>
                    <div class="right-dtl">
                        <div class="right-dtl">
                            <p class="dtl-value bold">{{member.location}}</p>
                        </div>
                    </div>
                </div>
                <div class="aboutComp cont-row">
                    <div class="aboutComp left-dtl">
                        <img src="@/assets/calendar-alt-regular.svg" alt="Secondary User icon">
                        <p class="aboutComp dtl-name">Created on</p>
                    </div>
                    <div class="right-dtl">
                        <div class="right-dtl">
                            <p class="dtl-value bold">{{member.created}}</p>
                        </div>
                    </div>
                </div>
                <div class="aboutComp cont-row">
                    <div class="aboutComp left-dtl">
                        <img src="@/assets/birthday-cake-solid.svg" alt="Secondary User icon">
                        <p class="aboutComp dtl-name">Date of Birth</p>
                    </div>
                    <div class="right-dtl">
                        <div class="right-dtl">
                            <p class="dtl-value bold">{{member.birth}}</p>
                        </div>
                    </div>
                </div>
                <div class="aboutComp cont-row">
                    <div class="aboutComp left-dtl">
                        <img src="@/assets/plane-solid.svg" alt="Secondary User icon">
                        <p class="aboutComp dtl-name">Caribbean Airline Number</p>
                    </div>
                    <div class="right-dtl">
                        <div class="right-dtl">
                            <p class="dtl-value bold">{{member.airlineNo}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>


export default {

name: 'portalOne',
props:['member']

}
</script>

<style lang="scss" scoped>

.portalOne{
    margin: 20px 0px;
    

    .portalOne-wrapper{
        border: 1px solid #D4D4D5;
        border-radius: 4px;
        padding: 15px;

        .aboutComp.cont-row{
            flex-direction: column;
            align-items: flex-start;

            .dtl-value.bold{
                margin-left: 24px;
            }
        }

    }


}



</style>
