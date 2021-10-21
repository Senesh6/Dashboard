<template>
    <div class="navBar">
        <h2>{{title}}</h2>
        <div class="navDropdown">
        <button class="dropbtn"  @click="showDropDown = !showDropDown">
            <div class="dropbtn-inner">
                <img src="@/assets/user-cog-solid.svg" alt="user icon" class="icon-user">
                <p class="text">User Settings</p>
                <div class="icon-down"></div>
            </div>
        </button>
        <div class="navDropdown-content" :class="{show: showDropDown}">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
        </div>
</div>
    </div>
</template>

<script>


export default {

    name: 'NavBar',
    data(){
        return{
            title: null,
            showDropDown: false,
            sesTtle: null
        }
    },
    
    mounted(){
        this.$root.$on('router-text', (titeTxt)=>{
            
            if(titeTxt === 'Overview'){
                this.title = 'Members';
            }
            else{
                this.title = titeTxt;
            }

            
        });

    },

    created(){
        this.$root.$on('router-text-def', (titeTxtDef)=>{
            this.setNavSession(titeTxtDef);
        }); 
            
    },

    methods:{
        setNavSession (titeTxtDef) {        

            sessionStorage.setItem('navTitle', titeTxtDef);
            this.sesTtle =  sessionStorage.getItem('navTitle');
             if(this.sesTtle === 'Overview'){
                this.title = 'Members';
            }
            else{
                this.title = titeTxtDef;
            }

           
        }
    },
 
   
}
</script>

<style lang="scss" scoped>

.navBar {
    display: flex;
    justify-content: space-between;
    max-width: 90%;
    margin: 60px auto 40px;
    align-items: flex-start;

    h2{
        margin: 0px;
    }

    .dropbtn{
        width: 198px;
        background: #00355F;
        border: 0px;
        cursor: pointer;
        border-radius: 4px;

        .dropbtn-inner {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 41px;

            p{
                color: #ffffff;
                font-size: 16px;
            }

        }

        


    }

    .navDropdown-content{

            background: #F4F4F4;
            flex-direction: column;
            justify-content: center;
            border-radius: 0px 0px 4px 4px;
            display: none;
            position: absolute;
            width: 198px;
            z-index: 10;
            box-shadow: 0px 6px 15px 0px #00000029;

            a {
                color: #000000;
                font-size: 16px;
                padding: 5px 10px;

                &:hover{
                    background: rgba(0, 173, 240, 0.07);
                }
            }

            &.show{
            display: flex;
        }

        }

        

}

</style>