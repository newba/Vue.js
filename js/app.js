var app = new Vue({
    el: '#app',
    data: {
        n: 5,
        message: 'Você carregou esta página em ' + new Date().toLocaleString()
    },
    methods: {
        isImpar: function (nombre) {
            return nombre %2
        }
    },
});


