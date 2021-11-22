
function modal(x) {
    document.getElementById("modal_on").style.display=x;
}
// 모든업종 연도별 평균매출
let sales = document.getElementById('sales_bar').getContext('2d');

let barChart = new Chart(sales, {
    type: 'bar',
    data: {
        labels: ['2017','2018','2019','2020','2021'], 
        datasets:[{
            data: [
                700,
                600,
                600,
                500,
                300
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
                display:false,
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
// 폐업률 데이터 망한가게/전체가게수
let closed = document.getElementById('closed_bar').getContext('2d');

let closedBarChart = new Chart(closed, {
    type: 'bar',
    data: {
        labels: ['2017','2018','2019','2020','2021'],
        datasets:[{
            data: [
                60,
                70,
                60,
                80,
                90
            ],
            backgroundColor:[
                '#1D435C',
                '#11A3B3',
                '#EFBF1F',
                '#E2641B',
                '#E43120'
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
                display:false,
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




// 현재 매출이 잘나오는 업종이나 상권의 트렌드 파이그래프반영 
let trend = document.getElementById('trend_chart').getContext('2d');

let pieChart = new Chart(trend, {
    type: 'pie',
    data: {
        labels: ['요식업','서비스업','교육','전자제품','카페'],
        datasets:[{
            label: 'trend_view',
            data: [
                500,
                300,
                100,
                300,
                700
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
        plugins: {
            title: {
                display: true,
                text: 'trend',
                fontsize: 10,
            },
            legend :{
                display: true,
                position:'top',
             },
            tooltips: {
                enabled: true,
            },
            layout: {
                top:10
            },
        }
    }


})