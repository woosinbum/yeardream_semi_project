// let gender = document.getElementById('gender_ratio').getContext('2d');
// let pieChart = new Chart(gender, {
//     type: 'doughnut',
//     data: {
//         labels: ['남성','여성'],
//         datasets:[{
//             label: 'gender_ratio',
//             data:[],
//             backgroundColor:[
//                 '#0367A6',
//                 '#D9848B',

//             ],
//             borderWidth:1,
//             borderColor : '#f0f0f0',
//             hoverBorderWidth:4,    
//         }],
//             scaleBeginAtZero: true,

//     },
//     options: {
//         responsive: false,
//         plugins: {
//             title: {
//                 display: true,
//                 text: '남녀 비율',
//                 fontsize: 10,
//             },
//             legend :{
//                 display: true,
//                 position:'right',
//              },
//             tooltips: {
//                 enabled: true,
//             },
//             layout: {
//                 top:10,
//                 left:10
//             },
//             pieceLabel: {
//                 mode: "label",
//                 position:"inside",
//                 fontSize:11,
//                 fontStyle:"bold"
//             }
//         }
//     }


// })
var result;

let age = document.getElementById('age_ratio').getContext('2d');
let ageChart = new Chart(age, {
    type: 'doughnut',
    data: {
        labels: ['10대','20대','30대','40대','50대','60대 이상'],
        datasets:[{
            label: 'gender_ratio',
            data: [
                10,
                20,
                30,
                30,
                5,
                3
                
            ],
            backgroundColor:[
                '#B9CBD5',
                '#34A4FA',
                '#3B8CE3',
                '#3B8CE3',
                '#326EF0',
                '#074187'

            ],
            borderWidth:1,
            borderColor : '#f0f0f0',
            hoverBorderWidth:4,    
        }],
            scaleBeginAtZero: true,

    },
    options: {
        responsive: false,
        plugins: {
            title: {
                display: true,
                text: '연령별 매출 비중',
                fontsize: 10,
            },
            legend :{
                display: true,
                position:'right',
                labels: {   
                    boxWidth: 20,
                    boxHeight:10
                }
             },
            tooltips: {
                enabled: true,
            },
            layout: {
                top:10,
                left:10
            }

            
        }
    }


})
let sales = document.getElementById('sales_ratio').getContext('2d');
let barChart = new Chart(sales, {
    type: 'bar',
    data: {
        labels: ['상권코드1','상권코드2','상권코드3','상권코드4','상권코드5'], 
        datasets:[{
            data: [
                482,
                52.6,
                21.8,
                16.8,
                5.7,
            ],
            backgroundColor:[
                '#0367A6',
                '#BDDEF2',
                '#F2B705',
                '#F28705',
                '#F25C05'
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
                text:"작년대비 매출 증감률",
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

let store = document.getElementById('count_store').getContext('2d');

let lineChart = new Chart(store, {
    type: 'line',
    data: {
        labels: ['2016','2017','2018','2019','2020','2021'], 
        datasets:[{
            data: [
                30,
                40,
                67,
                45,
                24,
            ],
            backgroundColor:[
                '#0367A6',
                '#BDDEF2',
                '#F2B705',
                '#F28705',
                '#F25C05'
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
                text:"연도별 점포수",
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


            // let gender = document.getElementById('gender_ration').getCOntext('2d');
            // let pieChart = new Chart(gender, {
            //     type:'doughnut',
            //     data: {
            //         labels:['남성','여성'],
            //         datasets
            //     }
            // })
            // console.log(res)
            
// ajax button

function get_data(value) {
    let $target = $("select[name='ctg_name']");

    $target.empty();
    $target.append("<option value=''>선택</option>")
    $.ajax ({
        type:'POST',
        url:'/factor/list',
        data:{'code':value},
        success: function(temp){
            result = temp;

            for(let i=0; i<result.length;i++){
                $target.append("<option value='"+i+"'>"+result[i]['서비스_업종_코드_명']+"</option>");

            }

            // for(let i=0; i<res.length; i++) {
            //     console.log(res[i]);
            // }
        }

    })

}
// ajax 옵션 자료

// function get_test (x) {
//     var $target = $ ("select[name='ctg_sub_name]")

//     $target.empty();
//     if(x == "") {
//         $target.append("<option value=''>선택</option>");
//         return;
//     }
//     $.ajax ({
//         type:'POST',
//         url:'factor/get/ctg',
//         data:{p_no: x},
//         dataType: 'json',
//         successs: function(res) {
//             if(res.length==0){
//                 $target.append()
//             }else{
//                 $(res).each(function(i){
//                     $target.append()
//                 });
//             }
//         }


//     })
// }

// ajax firts graph
function ajax_test(value) {
    
    let gender = document.getElementById('gender_ratio').getContext('2d');
    var pieChart = new Chart(gender, {
        type: 'doughnut',
        data: {
            labels: ['남성','여성'],
            datasets:[{
                label: 'gender_ratio',
                data:[],
                backgroundColor:[
                    '#0367A6',
                    '#D9848B'
                ],
                borderWidth:1,
                borderColor : '#f0f0f0',
                hoverBorderWidth:4,    
            }],
                scaleBeginAtZero: true,

        },
        options: {
            responsive: false,
            plugins: {
                title: {
                    display: true,
                    text: '남녀 비율',
                    fontsize: 10,
                },
                legend :{
                    display: true,
                    position:'right',
                },
                tooltips: {
                    enabled: true,
                },
                layout: {
                    top:10,
                    left:10
                },
                pieceLabel: {
                    mode: "label",
                    position:"inside",
                    fontSize:11,
                    fontStyle:"bold"
                }
            }
        }
    });
    // pieChart.data.datasets[0].data=[result[value]['남성_매출_비율'],result[value]['여성_매출_비율']];
    // pieChart.update();
    var data = [result[value]['남성_매출_비율'],result[value]['여성_매출_비율']]
    function addData(pieChart, data, value) {
        chart.data.datasets[value].data = data;
        chart.update();
     }    
}
