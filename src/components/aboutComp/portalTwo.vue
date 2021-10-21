<template>
     <div class="portalTwo">
        <div class="portalTwo-wrapper">
            <div class="detail-block">
                <div class="aboutComp title-row">
                    <div class="left-dtl">
                        <h4>Customer Portal</h4>
                    </div>
                </div>
                <div class="aboutComp cont-row">
                    <div class="portal">

                    
                    <div class="aboutComp left-dtl">
                        
                            <img src="@/assets/laptop-solid.svg" alt="Secondary User icon">
                            <p class="aboutComp dtl-name">Web Portal</p>
                        
                        
                    </div>
                    <p class="edit-opt">Reset Password</p>
                    </div>
                    <p class="dtl-value bold">
                        {{member.email}}</p>
                        
                </div>
                <div class="aboutComp cont-row">
                    <div class="aboutComp left-dtl">
                        <img src="@/assets/mobile-alt-solid.svg" alt="Secondary User icon">
                        <p class="aboutComp dtl-name">Mobile App</p>
                    </div>
                    <div class="right-dtl">
                        <div class="right-dtl">
                            <p class="dtl-value bold">-</p>
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

.portalTwo{
    margin: 20px 0px;
    

    .portalTwo-wrapper{
        border: 1px solid #D4D4D5;
        border-radius: 4px;
        padding: 15px;

        .aboutComp.cont-row{
            flex-direction: column;
            align-items: flex-start;

            .dtl-value.bold{
                margin-left: 24px;
            }

            .portal{
                display: flex;
                justify-content: space-between;
                width: 100%;
            }

        }

    }


}



</style>
