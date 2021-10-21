<template>
  <div class="dashboard">
    <div class="wrapper">
      <div class="content">
        <NavBar />
          <NotFound/>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NotFound from '../components/NotFound';
import NavBar from '../components/navBar/NavBar';


export default {
  name: "Dashboard",
  components: {
   NotFound,
   NavBar

  },
  

};
</script>

<style lang="scss" scoped>

.dashboard{
  height: 100vh;
}

</style>