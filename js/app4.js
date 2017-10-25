
var app4 = new Vue({
	el: "#app4",
	data: {
		value: 32,
		ftc: 0,
		ctf: 0,
        text: '',
	},
	methods: {
		fahrenheit_to_celcius: function () {
			this.ftc = Math.round((this.value - 32) * 5/9);
		},
		celcius_to_fahrenheit: function () {
			this.ctf = Math.round(this.value * 1.8 + 32);
		},

		get_result: function () {
			this.fahrenheit_to_celcius()
			this.celcius_to_fahrenheit()
        }
	},
	created() {
		this.get_result()
	}
});

