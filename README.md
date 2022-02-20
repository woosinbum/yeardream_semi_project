# 상권 분석 서비스

웹페이지 주소: http://52.79.196.7  
# 2021 상권 트렌드 분석  
- 상권 관련 빅데이터를 토대로 코로나 이전과 이후를 분석하여 매출 증감률, 상권별 요인 분석, 상권별 부동산 매물 및 유망한 프랜차이즈 추천 등 다양한 정보를 도표 및 지도로 제공하는 서비스  
  
  
## 1. 프로젝트 소개  
  - 사용한 데이터  
    - 서울시 상권 매출 데이터: http://data.seoul.go.kr/dataList/OA-15572/S/1/datasetView.do  
    - 프랜차이즈 관련 데이터: https://franchise.ftc.go.kr/mnu/00014/program/firHope/view.do  
    - 부동산 매물 데이터: https://new.land.naver.com/complexes
  
  - 기술 스택  
    - 프론트엔드 개발: html, css, javascript  
    - 백엔드 개발: python 3.8, Atlas mongodb, 
    - 데이터 분석: jupyter, spark 2.4.8, java8  
    - 플랫폼 구축: AWS ec2, AWS s3, Docker, nginx, uwsgi 
  
  - 라이브러리: pymongo 3.12.1, Flask 2.0.2, chart.js, numpy, pandas, matplotlib, selenium, folium
  
  
## 2. 프로젝트 목표  
  - 코로나19 국면으로 접어 들면서 미디어 매체를 통해 매일같이 소상공인의 피해와 폐업에 대한 소식을 접하게 되었다.
      국세통계포털에 따르면 작년 자영업자의 피해 규모는 무려 11조, 폐업률은 151%나 증가했다.
      하지만 이런 통계에 반해 매출이 매월 성장하고 있는 업종도 존재한다. 
      코로나19 이후 변화한 상권의 트렌드를 이전과 비교하여 분석하고 새로운 인사이트를 창출함으로써 업종전환 및 재창업 소상공인들이 보다 쉽게 활용할 수 있는 분석 서비스를 제공하고자 한다.  

  - 코로나 발생 이후 보이는 양극화, 과연 모든 업종 혹은 상권의 매출이 줄었을까?  
    데이터를 통하여 위드코로나 시대에 맞는 트렌드를 알아보자.  
    (1) 코로나 전후 매출 증감량 비교 분석  
    (2) 매출이 높은 상권의 특징 분석  
    (3) 고용인 고용 요일 및 시간대 추천, 상권별 부동산 매물 확인, 매출에 따른 유망한 업종의 프랜차이즈 추천
  
  
## 3. 프로젝트 구성도  
  - 와이어프레임   
      https://ovenapp.io/view/DbCXIzuOrYgTvwtSaEceU3qYCESpCU8R/  
      https://ovenapp.io/project/ANnPVX19ARZCPYISei5PgsVT7JDoeVxu#velgu
  
  - 파일 위치
    - Python: flask/app  
    - HTML: flask/app/templates  
    - JavaScript: flask/app/static/js  
    - CSS: flask/app/static/css  
    - Image(.png, .jpeg 등): flask/app/static/image  

  - URI  
    - 메인 페이지: /index  
    - 요인 분석 페이지: /factor-analysis  
    - 부가 서비스 페이지: /extra
    
  - 디자인 패턴(MVC)      
  ![screensh](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbJ0atp%2FbtqNMNfBciX%2FLkUek8y6F2i1nT7kMrlORk%2Fimg.png)  
  
  
## 4. 프로젝트 팀원 역할 분담  
||프론트엔드|백엔드|데이터분석|플랫폼구축|
|-----|-----|-----|-----|-----|
|메인|우신범|우신범|조학륜|좌창화|
|요인분석|김재용 우신범|우신범|김재용 좌창화|
|부가서비스|석미애|석미애|좌창화 석미애|
  
  
1. 팀장 
  
- 기획 단계: 구체적인 설계와 지표에 따른 프로젝트 제안서 작성  
- 개발 단계: 팀원간의 일정 등 조율 + 백엔드 개발, 데이터 분석  
- 수정 단계: 기획, 스크럼 진행, 코치님 피드백 반영해서 수정, 발표 준비  
  
2. 프론트엔드  
  
- 기획 단계: 큰 주제에서 문제 해결 아이디어 도출, 데이터 수집, 와이어프레임 작성
- 개발 단계: 와이어프레임을 기반으로 구현, 데이터 처리 및 시각화 담당, UI 디자인 완성
- 수정 단계: 피드백 반영해서 프론트 디자인 수정
  
 3. 백엔드 & 데이터 담당  
  
- 기획 단계: 기획 데이터 분석을 통해 해결하고자 하는 문제를 정의
- 개발 단계: 웹 서버 사용자가 직접 백엔드에 저장할수 있는 기능 구현, 데이터 베이스 구축 및 API 활용, 데이터 분석 개념 총동원하기
- 수정 단계: 코치님 피드백 반영해서 분석/시각화 방식 수정
  
  
## 5. 버전
  - 2.0  
  
  
## 6. FAQ
  - 자주 받는 질문 정리  
