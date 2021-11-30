
function modal(x){
    document.getElementById("modal_on").style.display=x;
}



// 모든업종 연도별 평균매출
// let sales = document.getElementById('sales_bar').getContext('2d');

// let barChart = new Chart(sales, {
//     type: 'bar',
//     data: {
//         labels: ['2017','2018','2019','2020','2021'], 
//         datasets:[{
//             data: [
//                 700,
//                 600,
//                 600,
//                 500,
//                 300
//             ],
//             backgroundColor:[
//                 '#0367A6',
//                 '#BDDEF2',
//                 '#F2B705',
//                 '#F28705',
//                 '#F25C05'
//             ],
//             borderWidth:1,
//             borderColor : '#f0f0f0',
//             hoverBorderWidth:4,    
//         }]

//     },
//     options: {
//         responsive: false,
//         scales: {
//             x: {
//                 grid: {
//                     display: false,
//                 }
//             },
//             y: {
//                 grid: {
//                     display:false
//                 }
//             }
//         },
//         plugins: {
//             title: {
//                 display:false,
//             },
//             legend :{
//                 display: false,
//                 position:'top',
//              },
//             tooltips: {
//                 enabled: true,
//             },
//             layout: {
//                 top:10,
//                 bottom: 10
//             },
//         }
//     }


// })
// 폐업률 데이터 망한가게/전체가게수
// let closed = document.getElementById('closed_bar').getContext('2d');

// let closedBarChart = new Chart(closed, {
//     type: 'bar',
//     data: {
//         labels: ['2017','2018','2019','2020','2021'],
//         datasets:[{
//             data: [
//                 60,
//                 70,
//                 60,
//                 80,
//                 90
//             ],
//             backgroundColor:[
//                 '#1D435C',
//                 '#11A3B3',
//                 '#EFBF1F',
//                 '#E2641B',
//                 '#E43120'
//             ],
//             borderWidth:1,
//             borderColor : '#f0f0f0',
//             hoverBorderWidth:4,    
//         }]

//     },
//     options: {
//         responsive: false,
//         scales: {
//             x: {
//                 grid: {
//                     display: false,
//                 }
//             },
//             y: {
//                 grid: {
//                     display:false
//                 }
//             }
//         },
//         plugins: {

//             title: {
//                 display:false,
//             },
//             legend :{
//                 display: false,
//                 position:'top',
//              },
//             tooltips: {
//                 enabled: true,
//             },
//             layout: {
//                 top:10,
//                 bottom: 10
//             },
//         }
//     }


// })




// 현재 매출이 잘나오는 업종이나 상권의 트렌드 파이그래프반영 
// let trend = document.getElementById('trend_chart').getContext('2d');

// let pieChart = new Chart(trend, {
//     type: 'pie',
//     data: {
//         labels: ['요식업','서비스업','교육','전자제품','카페'],
//         datasets:[{
//             label: 'trend_view',
//             data: [
//                 500,
//                 300,
//                 100,
//                 300,
//                 700
//             ],
//             backgroundColor:[
//                 '#0367A6',
//                 '#BDDEF2',
//                 '#F2B705',
//                 '#F28705',
//                 '#F25C05'
//             ],
//             borderWidth:1,
//             borderColor : '#f0f0f0',
//             hoverBorderWidth:4,    
//         }]

//     },
//     options: {
//         responsive: false,
//         plugins: {
//             title: {
//                 display: true,
//                 text: 'trend',
//                 fontsize: 10,
//             },
//             legend :{
//                 display: true,
//                 position:'top',
//              },
//             tooltips: {
//                 enabled: true,
//             },
//             layout: {
//                 top:10
//             },
//         }
//     }


// })

function make_pie(input) {
    var gender = document.getElementById('gender_ratio').getContext('2d');
    var pieChart = new Chart(gender, {
        type: 'doughnut',
        data: {
            labels: ['남성','여성'],
            datasets:[{
                label: 'gender_ratio',
                data:input,
                backgroundColor:[
                    '#0367A6',
                    '#D9848B',

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


})
}
var result;

function make_age(input) {
    var age = document.getElementById('age_ratio').getContext('2d');
    var ageChart = new Chart(age, {
        type: 'doughnut',
        data: {
            labels: ['10대','20대','30대','40대','50대','60대 이상'],
            datasets:[{
                label: 'gender_ratio',
                data:input,
                backgroundColor:[
                    '#73563D',
                    '#038C73',
                    '#04BF9D',
                    '#04D9D9',
                    '#D5E5F2',
                    '#F26A1B'

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
}
function make_bar(input){
    var sales = document.getElementById('day_ratio').getContext('2d');
    var barChart = new Chart(sales, {
        type: 'bar',
        data: {
            labels: ['월','화','수','목','금','토','일'], 
            datasets:[{
                data: input,
                backgroundColor:[
                    '#f3722c',
                    '#f8961e',
                    '#f9c74f',
                    '#90be6d',
                    '#43aa8b',
                    '#577590', 
                    '#f94144'
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





// market_name

function market_code(value) {
    $.ajax ({
        type:'POST',
        url:'/market-name',
        data:{'code':value},
        success: function(res){
            let service_code = res;
            let $target = $("select[name='ctg_name']");
            $target.empty();
            $target.append("<option value=''>선택</option>")
            $.ajax ({
                type:'POST',
                url:'/market-name/list',
                data:{'code':service_code},
                success: function(temp){
                    result = temp;
        
                    for(let i=0; i<result[0].length;i++){
                        $target.append("<option value='"+i+"'>"+result[0][i]['서비스_업종_코드_명']+"</option>");
                    }
                    
                    console.log(result);
        
                    // for(let i=0; i<res.length; i++) {
                    //     console.log(res[i]);
                    // }
                }
        
            })
            
            
            
            

            // for(let i=0; i<res.length; i++) {
            //     console.log(res[i]);
            // }
        }

    })

}

            
// ajax test button

// function get_data(value) {
//     let $target = $("select[name='ctg_name']");

//     $target.empty();
//     $target.append("<option value=''>선택</option>")
//     $.ajax ({
//         type:'POST',
//         url:'/factor/list',
//         data:{'code':value},
//         success: function(temp){
//             result = temp;

//             for(let i=0; i<result[0].length;i++){
//                 $target.append("<option value='"+i+"'>"+result[0][i]['서비스_업종_코드_명']+"</option>");
//             }
            
//             console.log(result);

//             // for(let i=0; i<res.length; i++) {
//             //     console.log(res[i]);
//             // }
//         }

//     })

// }


// ajax firts graph

var resetCanvas = function () {
    $('#gender_ratio').remove();
    $('#age_ratio').remove();
    $('#day_ratio').remove();
    $('#first').append('<canvas id="gender_ratio" width="400" height="250"></canvas>' )
    $('#second').append('<canvas id="age_ratio" width="400" height="250"></canvas>' )
    $('#third').append('<canvas id="day_ratio" width="400" height="250"></canvas>' )
}



function get_service_list(value) {
    resetCanvas();
    make_pie([result[0][value]['남성_매출_비율'],result[0][value]['여성_매출_비율']])
    make_age([
        result[1][value]['연령대_10_매출_비율'],
        result[1][value]['연령대_20_매출_비율'],
        result[1][value]['연령대_30_매출_비율'],
        result[1][value]['연령대_40_매출_비율'],
        result[1][value]['연령대_50_매출_비율'],
        result[1][value]['연령대_60_이상_매출_비율']
    ])
    make_bar([
        result[2][value]['월요일_매출_비율'],
        result[2][value]['화요일_매출_비율'],
        result[2][value]['수요일_매출_비율'],
        result[2][value]['목요일_매출_비율'],
        result[2][value]['금요일_매출_비율'],
        result[2][value]['토요일_매출_비율'],
        result[2][value]['일요일_매출_비율']

    ])

}


document.querySelector('.side_btn').addEventListener('click',function(){
    
   document.querySelector('.side_bar').style.transform = 'translateX(1230px  )'; 
})

document.querySelector('.side_btn_close').addEventListener('click',function(){
    document.querySelector('.side_bar').style.transform = 'translateX(1730px)'; 
 })