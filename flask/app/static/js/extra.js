function draw_day(data) {
    let canvas_day = $("#canvas_day")
    let day_chart = new Chart(canvas_day, {
        type: "pie",
        data: {
            labels: [
                "월요일", 
                "화요일", 
                "수요일", 
                "목요일",
                "금요일",
                "토요일",
                "일요일"
            ], 
            datasets: [{
                data: [
                    data["월요일_매출_비율"],
                    data["화요일_매출_비율"],
                    data["수요일_매출_비율"],
                    data["목요일_매출_비율"],
                    data["금요일_매출_비율"],
                    data["토요일_매출_비율"],
                    data["일요일_매출_비율"],
                ], 
                
                backgroundColor: [
                    '#f3722c',
                    '#f8961e',
                    '#f9c74f',
                    '#90be6d',
                    '#43aa8b',
                    '#577590', 
                    '#f94144'
                ], 
                borderWidth: 0
            }]
        }, 
        options: {
            responsive: false,
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    })
}


function draw_time(data) {
    let canvas_time = $("#canvas_time")
    let time_chart = new Chart(canvas_time, {
        type: "pie",
        data: {
            labels: [
                "00~06시", 
                "06~11시", 
                "11~14시", 
                "14~17시",
                "17~21시",
                "21~24시"
            ], 
            datasets: [{
                data: [
                    data["시간대_00~06_매출_비율"],
                    data["시간대_06~11_매출_비율"],
                    data["시간대_11~14_매출_비율"],
                    data["시간대_14~17_매출_비율"],
                    data["시간대_17~21_매출_비율"],
                    data["시간대_21~24_매출_비율"]
                ],
                backgroundColor: [
                    '#f3722c',
                    '#f9c74f',
                    '#90be6d',
                    '#43aa8b',
                    '#577590', 
                    '#f94144'
                ], 
                borderWidth: 0
            }]
        }, 
        options: {
            responsive: false,
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    })
}


// 안정성
function draw_stability(data) {
    let canvas_stability = $("#canvas_stability")
    let stability_chart = new Chart(canvas_stability, {
        type: "pie",
        data: {
            labels: [
                "자기자본비율(자본/자산)", "부채비율(부채/자본)"
            ], 
            datasets: [{
                data: [
                    data["자기자본비율(자본/자산)"],
                    data["부채비율(부채/자본)"]
                ], 
                
                backgroundColor: [
                    '#f9c74f',
                    '#577590'
                ], 
                borderWidth: 0
            }]
        }, 
        options: {
            responsive: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    })
}


// 수익성
function draw_profitability(data) {
    let canvas_profitability = $("#canvas_profitability")
    let profitability_chart = new Chart(canvas_profitability, {
        type: "pie",
        data: {
            labels: [
                "영업이익률(영업이익/매출액)", "자기자본 순이익률(당기순이익/자본)"
            ], 
            datasets: [{
                data: [
                    data["영업이익률(영업이익/매출액)"],
                    data["자기자본 순이익률(당기순이익/자본)"]
                ], 
                
                backgroundColor: [
                    '#f9c74f',
                    '#577590'
                ], 
                borderWidth: 0
            }]
        }, 
        options: {
            responsive: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    })
}


function reset_canvas() {
    $("#canvas_day").remove();
    $("#canvas_time").remove();
    $("#canvas_stability").remove();
    $("#canvas_profitability").remove();

    $("#day").append("<canvas id='canvas_day'></canvas>");
    $("#time").append("<canvas id='canvas_time'></canvas>");
    $("#stability").append("<canvas id='canvas_stability'></canvas>");
    $("#profitability").append("<canvas id='canvas_profitability'></canvas>");
}


function detail_area_list() {
    let $target = $("#detail_commercial_area");

    $(".area_list").css("display", "block");

    $.ajax({
        url: "/extra/commercial-area-list",
        type: "POST",
        data: {"name": $("#commercial_area").val()},
        success: function(result) {
            $target.empty();

            for(let i=0; i<result.length; i++) {
                key = result[i]["상권_코드"];
                val = result[i]["상권_코드_명"];

                $target.append("<li value='"+key+"' class='add_li'>"+val+"</li>");
                $target.animate({scrollTo: $target.prop("scrollHeight")}, 500);
            }
        }
    })
}


function upjong_list() {
    let $target = $("#upjong");

    $.ajax({
        url: "/extra/upjong_list",
        type: "POST",
        data: {"name": $("#commercial_area").val()},
        success: function(result) {
            $target.empty();

            for(let i=0; i<result.length; i++) {
                $target.append("<option value='"+result[i][0]+"'>"+result[i][1]+"</option>");
            }

            $("#upjong option:eq(0)").prop("selected", true);
        }
    })
}

function get_extra_datas($commercial_area, $upjong) {
    $.ajax({
        url: "/extra/datas",
        type: "POST",
        data: {"name": $commercial_area, "upjong": $upjong},
        success: function(result) {
            for(let i=0; i<result.length; i++) {
                console.log(result[i]);
            }

            reset_canvas();

            draw_day(result[0]);
            draw_time(result[1]);

            let days = [
                result[0]["월요일_매출_비율"],
                result[0]["화요일_매출_비율"],
                result[0]["수요일_매출_비율"],
                result[0]["목요일_매출_비율"],
                result[0]["금요일_매출_비율"],
                result[0]["토요일_매출_비율"],
                result[0]["일요일_매출_비율"]
            ];

            let times = [
                result[1]["시간대_00~06_매출_비율"],
                result[1]["시간대_06~11_매출_비율"],
                result[1]["시간대_11~14_매출_비율"],
                result[1]["시간대_14~17_매출_비율"],
                result[1]["시간대_17~21_매출_비율"],
                result[1]["시간대_21~24_매출_비율"]
            ];

            let days_dict = {
                "0": "월요일", 
                "1": "화요일", 
                "2": "수요일", 
                "3": "목요일",
                "4": "금요일",
                "5": "토요일",
                "6": "일요일"
            }

            let times_dict = {
                "0": "00~06시", 
                "1": "06~11시", 
                "2": "11~14시", 
                "3": "14~17시",
                "4": "17~21시",
                "5": "21~24시"
            }

            let max_day = Math.max.apply(null, days);
            let max_time = Math.max.apply(null, times);

            let max_day_index = days.indexOf(max_day);
            let max_time_index = times.indexOf(max_time);

            temp_str = "<p style='margin: 20px auto; text-align:center;'>";
            temp_str += result[0]["상권_코드_명"]+" 상권의 "+result[0]["서비스_업종_코드_명"]+" 업종은 ";
            temp_str += "평균적으로 <b>"+days_dict[max_day_index]+"</b>과 <b>"+times_dict[max_time_index]+"</b>에 ";
            temp_str += "손님이 가장 많습니다.</p>"

            $("#arbeit p").remove();
            $("#arbeit").append(temp_str);

            $("#franchise p").remove();

            if(Array.isArray(result[3])) {
                franchise_str = "<p style='margin: 20px 0'>";
                franchise_str += result[0]["상권_코드_명"]+" 상권에서 매출 증감률이 <b>";
                franchise_str += result[2]["전년도비_매출_증감률"]+"%</b>로 가장 높은 <b>";
                franchise_str += result[2]["서비스_업종_코드_명"]+"</b>의 프랜차이즈 정보</p>";

                $("#franchise_chart").before(franchise_str);

                draw_stability(result[3][0]);
                draw_profitability(result[3][1]);
            } else {
                franchise_str = "<p style='margin: 30px; text-align: center'>";
                franchise_str += result[0]["상권_코드_명"]+" 상권에서 매출 증감률이 <b>";
                franchise_str += result[2]["전년도비_매출_증감률"]+"%</b>로 가장 높은 <b>";
                franchise_str += result[2]["서비스_업종_코드_명"]+"</b> 업종과 관련된 프랜차이즈가 없습니다.";
                
                $("#canvas_stability").remove();
                $("#canvas_profitability").remove();

                $("#franchise_chart").before(franchise_str);
            }

            // 부동산
            $("#real_estate h4").remove();
            $("#item_list").before("<h4 style='margin: 20px'>"+result[4][0]["소재지"]+"</h4>");

            // $("#item_list").remove();

            for(let i=0; i<result[4].length; i++) {
                li_str = "<li><p><span class='li_title'>"+result[4][i]["가격"]+"</span>";
                li_str += "<span class='li_title'>"+result[4][i]["거래방식"]+"</span></p>";
                li_str += "<p><span class='li_content'>계약/전용면적: "+result[4][i]["계약/전용면적"]+"</span>";
                li_str += "<span class='li_content'>해당층/총층: "+result[4][i]["해당층/총층"]+"</span>";
                li_str += "<span class='li_content'>방향: "+result[4][i]["방향"]+"</span></p>";
                li_str += "<p><span class='li_content'>"+result[4][i]["매물특징"]+"</span></p></li>";

                $("#item_list").append(li_str);
            }
        }
    })
}

$("#commercial_area").keyup(function() {
    if($("#commercial_area").val() != "")
        detail_area_list();
    
    if($("#commercial_area").val() == "" && $("#detail_commercial_area").length > 0) {
        $("#detail_commercial_area li").remove();
        $(".area_list").css("display", "none");
    }
})

$("#detail_commercial_area").on("click", "li", function() {
    $("#commercial_area").val($(this).text());

    upjong_list($(this).text());
})

$(".search_btn").click(function() {
    if($("#commercial_area").val() == "") {
        alert("상권명을 입력하세요.");

        $("#commercial_area").focus();
    }

    if($("#upjong").val() == "") {
        alert("업종을 선택하세요.");
    }

    $commercial_area = $("#commercial_area").val();
    $upjong = $("#upjong").val();

    // 데이터 가져오기
    get_extra_datas($commercial_area, $upjong);
})