<template>
    <div class="summary">
        <div class="summary-wrapper">
            <div class="media-box">
                <MediaBox>
                    <img slot="image" width="74" height="74" :src="member.memImg" alt="avatar">
                    <h2 slot="name">{{member.name}}</h2>
                    <p slot="id" id="id">{{member.id}}</p>
                    <p slot="date" id="date">Last seen on {{member.lastSeen}}</p>
                </MediaBox>
            </div>
            <div class="summary-content">
                <div class="smry email">
                    <div class="row-1">
                        <p>Email</p>
                    </div>
                    <div class="row-2">
                        <img src="../assets/envelope-regular.svg" alt="email icon">
                        <p><a :href="`mailto:${member.email}`">{{member.email}}</a></p>
                    </div>
                </div>
                <div class="smry acc-type">
                    <div class="row-1">
                        <p>Account Type</p>
                    </div>
                    <div class="row-2">
                        <p>{{member.accType}}</p>
                    </div>
                </div>
                <div class="smry rpoint">
                    <div class="row-1">
                        <p>Redeemable Points</p>
                    </div>
                    <div class="row-2">
                        <p>{{member.rPoint}}</p>
                        <p id="sp-note">150 Points will be expired soon</p>
                    </div>
                </div>
                <div class="smry tier">
                    <div class="row-1">
                        <p>Tier</p>
                    </div>
                    <div class="row-2">
                        <img :src="member.tierImg" alt="tier icon">
                        <p>{{member.tierTxt}}</p>
                    </div>
                </div>
                <div class="smry contact">
                    <div class="row-1">
                        <p>Contact No</p>
                    </div>
                    <div class="row-2">
                        <img src="../assets/phone-alt-solid.svg" alt="email icon">
                        <p><a :href="`tel:${member.tel}`">{{member.tel}}</a></p>
                    </div>
                </div>
                <div class="smry acc-status">
                    <div class="row-1">
                        <p>Account Status</p>
                    </div>
                    <div class="row-2">
                        <select v-model="selectDown" name="account status" class="acc-status-sel" :class="{active: selDownVal}" @change="selStatus">
                            <option value="0">Active</option>
                            <option value="1">Deactive</option>
                        </select>
                    </div>
                </div>
                <div class="smry tpoint">
                    <div class="row-1">
                        <p>Tier Points</p>
                    </div>
                    <div class="row-2">
                        <p>{{member.tPoint}}</p>
                    </div>
                </div>
                <div class="smry affinity">
                    <div class="row-1">
                        <p>Affinity Group</p>
                    </div>
                    <div class="row-2">
                        <p>{{member.group}}</p>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>


import MediaBox from './MediaBox'

export default{
name: 'Summary',
props:["member"],
components:{
    MediaBox
},
data(){
    return{
        selectDown: null,
        selDownVal: this.member.accStat
    }
},
methods:{
    selStatus(){
        this.selectDown = document.querySelector(".acc-status-sel").value;
        console.log(this.selectDown);
        
        if(this.selectDown == 1 ){
        this.selDownVal = false;
        
    }
    else{
        this.selDownVal = true;
    }
    this.$emit('change-status',this.selDownVal);
    }    
},
created(){

    
    if(this.selDownVal){
        this.selectDown = 0;
    }
    else{
        this.selectDown = 1;
    }
}
}
</script>

<style lang="scss" scoped>

    .summary-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #F4F4F4;
        padding: 20px 40px;

        .media-box {
            width: 360px;
            margin-right:20px ;
            @media (max-width:1400px) {
                width: 320px;
            }
        }

        .summary-content {
            display: grid;
            grid-template-columns: [first] 320px [one] 200px [two] 280px [three] 200px [end];
            grid-template-rows: 2fr;
            width: calc(100% - 360px);
            @media (max-width:1400px) {
                grid-template-columns: repeat(4, 1fr);
            }

           .smry{
                padding: 10px;
            
            .row-1{

                text-align: left;
                padding-bottom: 10px;

                p{
                    color: #000; 
                    font-size: 14px;
                    @media (max-width:1400px) {
                        font-size: 12px;
                    }
                }
            }

            .row-2{

                text-align: left;
                display: flex;

                img{
                    padding-right: 10px;
                }

                p{
                    color: #000; 
                    font-size: 16px;
                    @media (max-width:1400px) {
                        font-size: 14px;
                    }

                    a{
                        color: #000; 
                    }
                    
                }

                select.acc-status-sel {
                    border-radius: 19px;
                    background: #F94033;
                    border-color: #F94033;
                    color: #fff;
                    padding: 5px 10px;
                    font-size: 14px;

                    &:focus{
                        outline: none;
                    }

                &.active{
                    background: #25BF49;
                    border-color: #25BF49;

                }

                }

                option {
                    background: #F4F4F4;
                    color: #000;
                    font-size: 14x;
                    @media (max-width:1400px) {
                        font-size: 10px;
                    }
                }

                
            }

            &.rpoint{

                .row-2{
                    flex-direction: column;

                    #sp-note{
                        color: #F94033;   
                        font-size: 12px;
                        @media (max-width:1400px) {
                        font-size: 8px;
                    }
                    }

                }

            }


           } 

            


        }


    }

</style>