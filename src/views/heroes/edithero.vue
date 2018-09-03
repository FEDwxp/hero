<template>
    <div>
        <h2 class="sub-header">编辑英雄</h2>
        <form>
          <div class="form-group">
            <label for="textname">英雄名称</label>
            <input v-model="formData.name" type="text" class="form-control" id="textname" placeholder="英雄名称">
          </div>
          <div class="form-group">
            <label for="textdenger">英雄性别</label>
            <input v-model="formData.gender" type="text" class="form-control" id="textdenger" placeholder="英雄性别">
          </div>
          <button @click.prevent="handleedit" type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>

<script>


export default {
    props: ['id'],
    data(){
        return {
            formData: {
                name: '',
                gender: ''
            }
        }
    },
    mounted() {
     this.loadData()
    },
    methods: {
        loadData () {
            this.$http
                .get(`heroes/${this.id}`)
                .then((response) => {
                if (response.status === 200) {
                    this.formData = response.data;
                }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleedit(){
        this.$http
            .put(`heroes/${this.id}`, this.formData)
            .then((response)=>{
                if(response.status === 200) {
                this.$router.push('/heroes') 
                }
            })
            .catch((err)=> {
                console.log(err)
            })
    }
}
}
</script>

<style>

</style>
