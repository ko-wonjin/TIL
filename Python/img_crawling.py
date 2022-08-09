from urllib.request import urlopen
from urllib.parse import quote_plus
from bs4 import BeautifulSoup

baseUrl = 'https://search.naver.com/search.naver?where=image&sm=tab_jum&query='
plusUrl = input('검색어를 입력하세요.')
url = baseUrl + quote_plus(plusUrl)

html = urlopen(url).read()
soup = BeautifulSoup(html, 'html.parser')
img = soup.find_all(class_ = '_image _listImage')


n = 1
for i in img:
  imgUrl = i['data-source']
  with urlopen(imgUrl) as f:
    with open('./img/' + plusUrl + str(n) + '.jpg', 'wb') as h:
      img = f.read()
      h.write(img)
  n += 1
  print(imgUrl)

print('다운로드 완료')
