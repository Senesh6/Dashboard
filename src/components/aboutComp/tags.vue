<template>
     <div class="tag">
        <div class="tag-wrapper">
            <div class="detail-block">
                <div class="aboutComp title-row">
                    <div class="left-dtl">
                        <h4>Tags</h4>
                    </div>
                </div>
                <div class="cont-row">
                    <div class="tags-items">

                        <div class="tag-item" v-for="tag in tags" :key="tag.id">
                            {{tag}}

                          

                        </div>
                        <div class="add-tag">
                            <p @click="showForm" class="edit-opt" >Add</p>
                        </div> 
                        
                    </div>
      
                </div>
                <div class="tagForm" :class="{show:isAdd}">
                    <addForm @add-tag="addTag"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import addForm from './addForm.vue'

export default {

name: 'tags',
components:{addForm},
props:['tags'],
data(){
    return{
        isAdd:false
    }
},
methods:{
    addTag(newTag){
     
         this.$emit('add-tag-arr',newTag);
        

    },
    showForm(){
        this.isAdd = !this.isAdd;
    }
}



}
</script>

<style lang="scss" >

.tag{
    margin: 20px 0px;
    

    .tag-wrapper{
        border: 1px solid #D4D4D5;
        border-radius: 4px;
        padding: 15px;
    }


}
.aboutComp.title-row{
    padding-bottom: 15px !important;

    h4{
        margin-left:0px !important;
    }
}

.cont-row{
    border: 0px !important;
}

.aboutComp{
    display: flex;
    align-items: center;

    img{
        margin-right:10px ;
    }

    .dtl-value{
        color: #000701;
        text-align: right;
    }
}

.tagForm{
    display: none;


    &.show{
        display: block;
    }
}

.tags-items {
    display: flex;
    flex-wrap: wrap;

    .tag-item {
        background: #BEBEBE1A;
        border: 1px solid #7070707A;
        border-radius: 4px;
        padding: 3px 12px;
        font-size: 16px;
        color: #0D0D0D;
            margin: 5px;
    }

    .add-tag {
        display: flex;
        align-items: center;
    }


}

.edit-opt{
    font-size: 14px;
    color: #00355F;
    text-decoration: underline;
    cursor: pointer;
    margin-left:10px ;
}



</style>