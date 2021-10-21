<template>
  <div class="points">
      <div class="wrapper">
        <div class="content">
            <NotFound/>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NotFound from '../components/NotFound';



export default {
  name: "Points",
  components: {
   NotFound
  }

};
</script>

<style lang="scss" scoped>

.points{
  height: 100vh;
}

</style>