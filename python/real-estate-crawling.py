from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import pymongo
import time

chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--headless")
chrome_options.add_argument("--disable-dev-shm-usage")
chrome_options.add_argument("--single-process")
s = Service('/home/ubuntu/elice-team5-projects/chromedriver')

# mongodb에서 상권 좌표 가져오기
atlas_url = "mongodb+srv://user1:uZGuuMyRngM3izgG@cluster0.cu0c3.mongodb.net"
connection = pymongo.MongoClient(
    atlas_url+"/myFirstDatabase?retryWrites=true&w=majority"
    )
db = connection.get_database("elice")
collection = db.get_collection("area_info")
collection2 = db.get_collection("real_estate")
collection2.delete_many({})

naver_land_uri = "https://new.land.naver.com/offices?"

# 상권 좌표로 검색한 페이지에서 크롤링
with webdriver.Chrome(service=s, options=chrome_options) as driver:
    driver.implicitly_wait(10)
    items = collection.find()
    for item in items:
        print("좌표:", item)
        latitude, longitude = item['위도'], item['경도']
        driver.get(f"{naver_land_uri}ms={latitude},{longitude}&a=SG&e=RETAIL")

        # 상가 매물 리스트 스크롤 끝까지 내리기
        SCROLL_PAUSE_SEC = 1

        building_list = driver.find_element_by_xpath(
            '//*[@id="listContents1"]/div'
            )

        last_height = driver.execute_script(
            'return arguments[0].scrollHeight',
            building_list
            )
        while True:
            driver.execute_script(
                'arguments[0].scrollTop = arguments[0].scrollHeight',
                building_list
                )

            time.sleep(SCROLL_PAUSE_SEC)
            new_height = driver.execute_script(
                'return arguments[0].scrollHeight',
                building_list
                )

            if new_height == last_height:
                time.sleep(SCROLL_PAUSE_SEC)
                if new_height == last_height:
                    break
            last_height = new_height
        # 다 내린 후에는 하나씩 클릭해서 정보 읽어오기
        link_list = driver.find_elements_by_xpath(
            '//*[@id="listContents1"]//a[@class="item_link"]'
            )
        data = []
        for i in range(len(link_list)):
            title = link_list[i].find_element_by_xpath('div[1]/span')
            bill_type_list = link_list[i].find_element_by_xpath(
                'div[2]/span[1]'
                )
            bill_amount_list = link_list[i].find_element_by_xpath(
                'div[2]/span[2]'
                )
            info = {}
            info['분류'] = title.text
            info['거래방식'] = bill_type_list.text
            info['가격'] = bill_amount_list.text
            link_list[i].click()
            table = driver.find_element_by_xpath(
                '//*[@id="detailContents1"]/div[1]/table/tbody'
                )
            keys = table.find_elements_by_tag_name('th')
            values = table.find_elements_by_tag_name('td')

            for key, value in zip(keys, values):
                if key.text not in ['매물설명']:
                    info[key.text] = value.text
            data.append(info)
        print("링크 수:", len(link_list))
        print("생성된 데이터:", len(data))

        # mongodb에 적재
        collection2.insert_many(data)
