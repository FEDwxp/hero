<template>
    <div>
        <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <label for="textname">英雄名称</label>
            <input v-model="formData.name" type="text" class="form-control" id="textname" placeholder="英雄名称">
          </div>
          <div class="form-group">
            <label for="textdenger">英雄性别</label>
            <input v-model="formData.denger" type="text" class="form-control" id="textdenger" placeholder="英雄性别">
          </div>
          <button @click.prevent="handleAdd" type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
