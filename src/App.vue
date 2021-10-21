<template>
  <div id="app">

    <div class="main-wrapper">
    <div class="aside">
        <SidePanel :account="account"/>
    </div>
     <div class="main-content">
        <router-view />
    </div>
    </div> 
  </div>
</template>

<script>
// @ is an alias to /src
import SidePanel from './components/SidePanel';


export default {
  components: {
   SidePanel
  },
  data(){
    return{
        account:{ name: 'Admin Flow', img:require('@/assets/twitter.svg')}
    }
}

};
</script>;

<style lang="scss">

*{

  box-sizing: border-box;
  padding: 0px;
  margin: 0px;

}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1920px;
  margin: 0 auto;
}


li {
    list-style-type: none;
}

a {
    text-decoration: none;
}

ul{
    padding-left: 0px;
}

.main-wrapper{

    display: flex;
    justify-content: flex-start;
    background: #F4F4F4;

    .aside{
        width: 250px;
    }

    .main-content{
          width: calc(100% - 250px);
          z-index: 10;
          box-shadow: -4px 3px 10px #00000029;
          border-radius: 25px 0px 0px 25px;
          background: #fff;
    }


}

</style>
