new Vue({
    el: '#desafio',
    data: {
        nome: 'Guilherme santos',
        idade: '20',
        img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25821f05-70ca-4a53-a592-7e29ef53086c/d8kyq0b-e52ef1d1-0c71-4b16-bcc5-4b786eeb900c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI1ODIxZjA1LTcwY2EtNGE1My1hNTkyLTdlMjllZjUzMDg2Y1wvZDhreXEwYi1lNTJlZjFkMS0wYzcxLTRiMTYtYmNjNS00Yjc4NmVlYjkwMGMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rkWLhcajsvkjKXmsu3xjyWc4ITWQwQhGNQmIALnFzLE'
    }, 
    methods: {
        multiplicaIdade: function(){
            return this.idade * 3
        },
        randomNumber: function(){
            return Math.random()
        }
    }
})