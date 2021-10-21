<template>
   <div class="overview-main">
       <Claim date="2020-10-07" time="2.52 pm" :claim='claim'/>
       <Redeem date="2020-10-07" time="2.52 pm" :redeem='redeem'/>
       <Collect date="2020-10-07" time="2.52 pm" :collect='collect'/>
   </div>
</template>

<script>

import Claim from '../components/overview/Claim.vue'
import Redeem from '../components/overview/Redeem.vue'
import Collect from '../components/overview/Collect.vue'

export default {

    name: 'Overview',
    props:['claim', 'redeem', 'collect'],
    components:{
        Claim,
        Redeem,
        Collect
    }
}    

</script>


<style lang="scss" scoped>





</style>


