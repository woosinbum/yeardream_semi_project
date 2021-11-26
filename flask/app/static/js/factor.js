
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
                    text:"업종별 일별 매출 비중",
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
function make_store(input){
    var store = document.getElementById('count_store').getContext('2d');

    var lineChart = new Chart(store, {
        type: 'line',
        data: {
            labels: ['2016','2017','2018','2019','2020'], 
            datasets:[{
                data:input,
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
}

// market_name
function market_code() {
    let $target = $("select[name='market_name']");

    $target.empty();
    $target.append("<option value=''>선택</option>")
    $.ajax ({
        type:'POST',
        url:'/factor/market-name',
        data:{},
        success: function(res){
        
            for(let i=0; i<res[0].length;i++){
                $target.append("<option value='"+res[0][i]['상권_코드']+"'>"+res[0][i]['상권_코드_명']+"</option>");
            }
            
            console.log(result);

            // for(let i=0; i<res.length; i++) {
            //     console.log(res[i]);
            // }
        }

    })

}

            
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

            for(let i=0; i<result[0].length;i++){
                $target.append("<option value='"+i+"'>"+result[0][i]['서비스_업종_코드_명']+"</option>");
            }
            
            console.log(result);

            // for(let i=0; i<res.length; i++) {
            //     console.log(res[i]);
            // }
        }

    })

}


// ajax firts graph

var resetCanvas = function () {
    $('#gender_ratio').remove();
    $('#age_ratio').remove();
    $('#day_ratio').remove();
    $('#first').append('<canvas id="gender_ratio" width="400" height="250"></canvas>' )
    $('#second').append('<canvas id="age_ratio" width="400" height="250"></canvas>' )
    $('#third').append('<canvas id="day_ratio" width="400" height="250"></canvas>' )
}



function ajax_test(value) {
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
    make_store([
        result[3][0]['점포수'],
        result[3][1]['점포수'],
        result[3][2]['점포수'],
        result[3][3]['점포수'],
        result[3][4]['점포수']

    ])
}

