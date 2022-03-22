new Vue({
    el: '#desafio',
    data: {
        valor: 0,

    },
    computed:{
        resultado(){
            return this.valor == 37 ? 'valor igual' : 'valor diferente'
        }
    },
    watch:{
        valor(novo, antigo){
            setTimeout(()=>{
                this.valor = 0;
            }, 5000);
        }
    },
    methods: {
        somarcinco(){
            valor += 5
        },
        somarum(){
            valor += 1
        }
    }
})