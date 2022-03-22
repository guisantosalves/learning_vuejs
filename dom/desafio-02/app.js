new Vue({
    el: '#desafio',
    data: {
        valors: '',
        valort: ''
    },
    methods:{
        exibirAlerta(){
            alert('exemplo');
        },
        ouve(event){
            this.valors = event.target.value;
        },
        ouveEnter(event){
            this.valort = event.target.value;
        }
    }
})