var app3 = new Vue({
    el: '#app3',
    data: {
        compteur: 0,
    },
    methods: {
        onButtonClick(){
            this.compteur = this.compteur +1;
        },
        outButtonClick(){
            this.compteur = this.compteur -1;
        }
    },
});

