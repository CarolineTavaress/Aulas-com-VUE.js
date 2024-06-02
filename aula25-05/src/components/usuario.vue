<script>
export default{
    name: 'Usuario',
    props: ["idade"],
    emits: ["trocar_idade"],
    methods:{
        onclickIdade(){
            this.$emit("trocar_idade");
        }
    }
}
</script>

<template>
    <button type="button" @click="onClickIdade">Update Idade</button>
    <p>O usuário tem {{ idade }} anos</p>
</template>