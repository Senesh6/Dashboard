<template>
    <div class="sub-navBar">
        <nav>
            <div class="nav-item">
                <img src="@/assets/chart-pie-solid.svg" alt="Overview icon">
                <router-link  class="router" :to="{name:'Overview'}">Overview</router-link> 
            </div>
            <div class="nav-item">
                <img src="@/assets/XMLID_227_.svg" alt="Activity Log icon">
                <router-link  class="router" :to="{name:'ActivityLog'}">Activity Log</router-link> 
            </div>
            <div class="nav-item">
                <img src="@/assets/coin-stack.svg" alt="Points icon">
                <router-link  class="router" :to="{name:'InnerPoints'}" >Points</router-link> 
            </div>
            <div class="nav-item">
                <img src="@/assets/medal.svg" alt="Rewards icon">
                <router-link  class="router" :to="{name:'Rewards'}" >Rewards</router-link> 
            </div>
            <div class="nav-item">
                <img src="@/assets/notes.svg" alt="Notes icon">
                <router-link  class="router" :to="{name:'Notes'}">Notes</router-link> 
            </div>
        </nav>
    </div>
</template>


<script>


export default {
    
    name: "SubNavBar"
}
</script>

<style lang="scss" scoped>

.sub-nav {
    margin: 30px 0px 10px;


.sub-navBar{

    padding-bottom: 15px;
    border-bottom: 1px solid #D4D4D5;
    margin-right: 50px;
    margin-bottom: 10px;


    nav{
        display: flex;
        justify-content: space-between;
        width: 75%;

        @media(max-width:1400px){
            width: 95%;
        }

        .nav-item{

            img{
                vertical-align: middle;
                margin-right:15px ;
            }

            .router{
                 vertical-align: middle;
                 color: #000;
                 font-size: 18px;


                 &.router-link-exact-active{
                    color: #00355F;
                    font-weight: 500;
                 }

            }

        }
    }

}

}


</style>