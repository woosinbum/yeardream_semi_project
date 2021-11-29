function make_bar(x,y,z){
    let	Corr = document.getElementById(x).getContext('2d');
    let CorrChart = new Chart(Corr, {
        type: 'bar',
        data: {
            labels: y, 
            datasets:[{
                data: z,
                backgroundColor:[
                ],
                borderWidth:1,
                borderColor : '#f0f0f0',
                hoverBorderWidth:4,    
            }]

        },
        options: {
            responsive: false,
            scales: {
                x: {
                    grid: {
                        display: false,
                    }
                },
                y: {
                    grid: {
                        display:false
                    }
                }
            },
            plugins: {
                title: {
                    display:true,
                    text:"일별 매출 비중",
                    fontSize:10
                },
                legend :{
                    display: false,
                    position:'top',
                },
                tooltips: {
                    enabled: true,
                },
                layout: {
                    top:10,
                    bottom: 10
                },
            }
        }


    })
}
function get_corr_data(value) {
	$.ajax({
		type:'POST',
		url:'/factor/corr',
        contentType:"application/json",
		successs: function(res){
			// let facility_label_data= [];
			// let facility_data_list = [];

			// for(let i=0; i<res.lengh;i++){
			// 	facility_data_list.push(res[i]['correlation'])
			// }
			// for(let i=0; i<res.lenght;i++){
			// 	facility_label_data.push(Res[i]['category'])
			// }
			
	
			console.log(res)
		}
	
	})
}
