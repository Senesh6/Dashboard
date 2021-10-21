<template>
    <div class="addForm">
        <div class="addForm-wrapper">
             <form @submit="addTag">
            <input type="text" v-model="tag" name="title" placeholder="Add a New Tag Here">
            <button type="submit">Add</button>
        </form>
        </div>
    </div>
</template>

<script>

export default {

    name:'addForm',
    data(){
       return{
           tag: ''
       }
   },
   methods:{
       addTag(e){
           e.preventDefault();
           const newTag = this.tag;
            if(newTag !=='' ){
                this.$emit('add-tag',newTag);
            }
           

           this.tag = '';
       }
   }
    
}
</script>


<style lang="scss" scoped>

form {
    display: flex;
    justify-content: center;
    margin: 10px 0px;

    input[type="text"] {
        height: 30px;
        border: 1px solid #0000008f;
        padding: 5px;
        border-radius: 4px 0px 0px 4px;
    }

    button {
        width: 50px;
        background: #25BF49;
        border-color: #25BF49;
        color: #fff;
        border: 0px;
        border-radius: 0px 4px 4px 0px;
        cursor: pointer;

        &:hover{
                background: #147e2d;
                border: #147e2d;
        }
    }


}


</style>