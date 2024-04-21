const { createApp } = Vue;

createApp({
    data(){
        return{
            is_purple: false
        }
    },
    computed: {
        circle_class() {
            return {purple: this.is_purple}
        }
    },
    methods:{

    }
}).mount("#app")