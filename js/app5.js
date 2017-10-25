const convertisseurs = {
    1: v => v * 1.800 + 32.00,
    2: v => (v - 32.00) / 1.800,
    3: v => v / 0.0254,
};

var app5 = new Vue({
    el: '#app5',
    data: {
        valeur: '',
        typeConversion: null,
    },
    computed: {
        niceResultat() {
            return Math.round(this.resultat * 100) / 100;
        },
        resultat() {
            const valeur = parseFloat(this.valeur);
            const func = convertisseurs[this.typeConversion];
            if (func) {
                return func(valeur);
            }
        }
    },
});