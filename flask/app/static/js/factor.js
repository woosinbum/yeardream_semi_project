
const job = document.getElementById('corr_1').getContext('2d');
const jobChart = new Chart(job, {
	type: 'bar',
	data: {
		labels: {{job_cat | tojson}},
		datasets: [{
			label: '상관관계',
			data: {{job_corr | tojson}},
			backgroundColor: [
				'#4682B4'
			],
			borderColor: [
				'rgba(255, 99, 132, 1)'
			],
			borderWidth: 1,
			borderColor: '#f0f0f0',
			hoverBorderWidth:4,
		}]
	},
	options: {
		responsive: false,
		scales: {
			x:{
				grid:{
					display:false,
				}
			},
			y: {
				grid:{
					display:false,
				},
				beginAtZero: true
			}
		},
		plugins: {
		title:{
			display:true,
			text:"상관관계",
			fontSize:10
		},
		legend:{
			display:false,
		}
	}
	}
	
});