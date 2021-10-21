<template>
     <div class="secAcc">
        <div class="secAcc-wrapper">
            <div class="detail-block">
                <div class="aboutComp title-row">
                    <div class="left-dtl">
                        <h4>Secondary Accounts</h4>
                    </div>
                </div>
                <div class="cont-row">
                    <div class="aboutComp left-dtl">
                        <img src="@/assets/user-solid.svg" alt="Secondary User icon">
                        <p class="aboutComp dtl-name">{{secondAcc.secName}}</p>
                    </div>
                    <div class="right-dtl">
                        <div class="right-dtl">
                            <p class="edit-opt">Remove</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {

name: 'SecAcc',
props:['secondAcc']

}
</script>

<style lang="scss" >

.secAcc{
    margin: 20px 0px;
    

    .secAcc-wrapper{
        border: 1px solid #D4D4D5;
        border-radius: 4px;
        padding: 15px;
    }


}
.aboutComp.title-row{
    padding-bottom: 15px !important;

    h4{
        margin-left:0px !important;
    }
}

.aboutComp{
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

.edit-opt{
    font-size: 14px;
    color: #00355F;
    text-decoration: underline;
    cursor: pointer;
}



</style>