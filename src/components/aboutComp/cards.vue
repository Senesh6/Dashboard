<template>
     <div class="cards">
        <div class="cards-wrapper">
            <div class="detail-block">
                
                <div class="card cont-row">
                    <div class="aboutComp left-dtl white">
                        <img src="@/assets/id-card-regular (1).svg" alt="User icon">
                        <p class="aboutComp dtl-name">{{loyalty.cardId}}</p>
                    </div>
                    <div class="right-dtl white">
                        <div class="right-dtl">
                            <p class="edit-opt">Create Embossed</p>
                        </div>
                    </div>
                   
                </div>
                 <div class="second-row">
                        <p class="card-name">{{loyalty.cardType}}</p>
                         <select  name="account status" class="acc-status-sel">
                            <option value="0" selected="selected">Active</option>
                            <option value="1">Deactive</option>
                        </select>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {

name: 'cards',
props:['loyalty']

}
</script>

<style lang="scss" scoped >

.cards{
    margin: 20px 0px;
    

    .cards-wrapper{
        border: 0px;
        border-radius: 4px;
        padding: 40px 15px;
        background-image: url('../../assets/card.buttons – 10.png');
    }

    .aboutComp{
    display: flex;
    align-items: center;

    img{
        margin-right:10px ;
    }

    .aboutComp.dtl-name{
        color: #fff !important;
        text-align: right;
    }
}

.edit-opt{
    font-size: 14px;
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
}

.second-row{
    display: flex;
    justify-content: space-between;

    .card-name{
        color: #fff;
        font-size: 14px;
        font-weight: 300 ;
    }

    .acc-status-sel{
        background: #25BF49;
         border-color: #25BF49;
         color: #fff;
    padding: 5px 10px;
    font-size: 14px;
    border-radius: 19px;
    &:focus{
        outline: none;
    }

    option{
        
    background: #F4F4F4;
    color: #000;
    }

    }

}



}







</style>