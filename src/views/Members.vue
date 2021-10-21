<template>
  <div class="members">
      <div class="wrapper">
        <div class="content">
          <NavBar />
          <Summary @change-status="memberUpdate" :member= "member"/>
          <div class="member-inside-dtl">
            <div class="inside-wrapper">
              <div class="about">
                <h3 class="about-title">
                  About Member
                </h3>
                <cards :loyalty="loyalty"/>
                <SecAcc :secondAcc="secondAcc"/>
                <tags :tags="tags" @add-tag-arr="addTagToArr"/>
                <portalTwo :member="member"/>
                <portalOne :member="member"/>
              </div>
              <div class="main-dtls">
                <div class="sub-nav">
                    <SubNavBar/>
                </div>
                <div class="sub-cont-wrapper">
                  <div class="cont-routers">
                   <router-view :claim="claim" :redeem="redeem" :collect="collect"/>
                  </div>
                  <div class="right-cont">
                    <Performance :perfomance="perfomance"/> 
                    <Insight :insight="insight"/>
                    <Unlocked />
                  
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Summary from '../components/Summary';
import NavBar from '../components/navBar/NavBar';
import SubNavBar from '../components/navBar/SubNavBar.vue'
import Performance from '../components/rightComp/Performance.vue';
import Insight from '../components/rightComp/Insight';
import Unlocked from '../components/rightComp/unlocked';
import SecAcc from '../components/aboutComp/SecAcc.vue';
import portalOne from '../components/aboutComp/portalOne.vue';
import portalTwo from '../components/aboutComp/portalTwo.vue';
import cards from '../components/aboutComp/cards.vue';
import tags from '../components/aboutComp/tags.vue';

export default {
  name: "Members",
  components: {
    NavBar,
    Summary,
    SubNavBar,
    Performance,
    Insight,
    Unlocked,
    SecAcc,
    portalOne,
    portalTwo,
    cards,
    tags
  },
  data(){
    return{
      member:{
        id:'44400025222', name:'Tammy K. Stafford', lastSeen: 'July 28, 2021 3:16 PM', memImg:require('@/assets/Ellipse 16.png'), 
        email:'TammyKStafford@dayrep.com', tel:'607-695-2028', accType: 'Premire', accStat: true, rPoint: 250, tPoint: 250, 
        tierImg: require('@/assets/silver-medal.svg'), tierTxt: 'Silver', group: 'Senior Citizen', address: 'TammyKStafford@dayrep.com',
        gender: 'Female', location: 'Cameron', created: 'July 28, 2021 3:16 PM', birth: 'February 07, 1996', airlineNo: '4521023654'
      },
      secondAcc:{id:'44400025222', secName:'David Leblanc'},
      loyalty:{id:'44400025222', cardId: 1111258689, cardType: 'Instant Card', cardStatus: true},
      claim:{
        id:'44400025222', claimName: 'Water Resistant Bag' , claimRed: 10, claimVCode: 'VZ125'
      },
      redeem:{
        id:'44400025222', redeemName: 'Water Resistant Bag' , redeemRed: 10, redeemVCode: 'VZ125'
      },
      collect:{
        id:'44400025222', collectPoints: 10 , collecttotalPoint: 160 , collectTierPoints: 250
      },
      perfomance:{
        id:'44400025222', clValue: '$153.86', memInsight: '11.09%'
      },
      insight:{
        id:'44400025222', avBaSize: '$153.86', AvNumVisit: '11.09%', totalBaSize: '11.09%'
      },
      tags:['Frequent Customer', 'Family', 'Honor']

    }
  },
  methods:{
    memberUpdate(selDownVal){

      this.member.accStat = selDownVal;
       console.log(`accstatus ${this.member.accStat}` );
    },
    addTagToArr(newTag){
      this.tags.push(newTag);
    }
  }

};
</script>

<style lang="scss" scoped>

.member-inside-dtl{
    margin: 30px 40px;
}

.inside-wrapper {
    display: flex;
    justify-content: space-between;

    .about{
      width: 350px;
      padding-right: 20px;

      .about-title{
        font-size: 20px;
        color: #000;
        font-weight: 500;
        text-align: left;
      }
    }

    .main-dtls {
      display: flex;
      flex-direction: column;
      width: calc(100% - 350px);
      margin-left: 30px;
   
        .sub-cont-wrapper {
          display: flex;
          justify-content: space-between;

          .cont-routers{
            flex: 3;
          }

          .right-cont{
            flex: 2;
            margin-left: 40px;
          }

        }


    }


}


</style>