<template>
    <div class="aside">
        <div class="aside-wrapper">
            <div class="profile">
                <User>
                    <img slot="image" width="41" height="41" :src="account.img" alt="avatar">
                    <h2 slot="name">{{account.name}}</h2>
                </User>
            </div>
            <div class="country">
                 <country-select v-model="country" :country="country" topCountry="LK" />               
            </div>
            <div class="nav">
                <nav>
                    <ul>
                        <li class="nav-item">
                            <img src="../assets/menu.svg" alt="Dashboard">
                            <router-link @click.native="addText()" class="router" :to="{name:'Dashboard'}">Dashboard</router-link> 
                        </li>
                        <li class="nav-item">
                            <img src="../assets/user (3).svg" alt="Members">
                            <router-link @click.native="addText()" class="router" :to="{name:'Members'}">Members</router-link> 
                        </li>
                        <li class="nav-item">
                            <img src="../assets/coin-stack.svg" alt="Points">
                            <router-link @click.native="addText()" class="router" :to="{name:'Points'}">Points</router-link> 
                        </li>
                        <li class="nav-item">
                            <img src="../assets/medal.svg" alt="Rewards">
                            <router-link class="router" :to="{name:'Rewards'}">Rewards</router-link> 
                        </li>
                        <li class="nav-item">
                            <img src="../assets/credit-card.svg" alt="Cards">
                            <router-link class="router" :to="{name:'Cards'}">Cards</router-link> 
                        </li>
                        <li class="nav-item">
                            <img src="../assets/medal-solid.svg" alt="Tiers">
                            <router-link class="router" :to="{name:'Tiers'}">Tiers</router-link> 
                        </li>
                        <li class="nav-item">
                            <img src="../assets/hand-holding-usd-solid.svg" alt="Transactions">
                            <router-link class="router" :to="{name:'Transactions'}">Transactions</router-link> 
                        </li>
                        <li class="nav-item">
                            <img src="../assets/bell.svg" alt="Notifications">
                            <router-link class="router" :to="{name:'Notifications'}">Notifications</router-link> 
                        </li>
                        <li class="nav-item">
                            <img src="../assets/pie-chart.svg" alt="Analytics">
                            <router-link  class="router" :to="{name:'Analytics'}">Analytics</router-link> 
                        </li>
                    </ul>  
                </nav>
            </div>
        </div>
    </div>
</template>

<script>

import User from './User';

export default{
name: 'SidePanel',
components:{
User
},
props:["account"],
data(){
    return{
       country: '',
       title:null,
       titleDef:null
    }
},
methods:{
    addText(){
        this.title = this.$route.name;  
        this.$root.$emit('router-text', this.title); 
    }  
},
created(){
    this.titleDef = this.$router.currentRoute.name;
    this.$root.$emit('router-text-def', this.titleDef); 
}
  
}
</script>

<style lang="scss" scoped>

.aside-wrapper{

    background: #F4F4F4;
    padding: 50px 0px;

    .profile {
        padding: 15px 25px;
    }

    .country{
        text-align: left;
        padding: 15px 0px;
        margin: 0px 25px;

        select{
            width: 170px;
            font-size: 16px;
            color: #000;
            background: #F4F4F4;
            padding: 5px 15px;
            border: 0px;
            font-weight: 300;
        }
    }

    .nav{

      li.nav-item {
        text-align: left;
        padding: 15px 0px;
        margin: 0px 25px;
        border-bottom: 1px solid rgba(112, 112, 112, 0.08);

        img{
            width: 18px;
            height: 16px;
            vertical-align: middle;
        }

         a, .router{
            padding-left: 15px;
            vertical-align: middle;
            color: #000000;
            font-size: 20px;

             &.router-link-active{
                    color: #00355F;
                    font-weight: 500;
                 }
        }

        }  

    }



}

</style>
