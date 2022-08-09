# JQuery
- 엘리먼트를 선택하는 강력한 방법
- 선택된 엘리먼트들을 효율적으로 제어할 수 있는 다양한 수단을 제공
- 자바스크립트 라이브러리
---
## JQuery 문법
- $(제어대상) 주어
- .method1().method2(); 서술어
---
## WRapper
- JQuery(엘리먼트 오브젝트|'CSS스타일 선택자')
- 붉은색으로 표시한 부분이 레퍼, 인자로 전달된 요쇼들에 JQuery의 기능성을 부가해서 반환

- 안전한 사용
$(엘리먼트)와 JQuery(엘리먼트)는 같은 의미지만 $를 사용하는 다른 라이브러리들과의 충돌 때문에 다음과 같은 방법을 사용한다.
1. 
```
<script trpe="text/javascript">
//$를 함수의 지역변수로 선언해서 외부에 있을지 모르는 타 라이브러리의 $와의 충돌을 예방
jQuery('body').html('hello world');
```
2.
```
<script type="text/javascript">
//$ 대신 jQuery를 사용
(function($){
//$('body').html('hello world');
})(jQuery)
</script>
```
---
## 선택자
- 기본
```
`#jquery` : id 선택자
`.tutorial` : class 선택자
`li` : 엘리먼트 선택자
`#jquery.#MYSQL` : 다중 선택자
- filter
```
```
- #list li:eq(2) : 인자와 인덱스가 동일한 엘리먼트를 찾아내는 선택자
- #lsit li:gt(1) : 인자보다 인덱스가 큰 엘리먼트를 찾아내는 선택자
- #list li:lt(2) : 인자보다 인덱스가 작은 엘리먼트를 찾아내는 선택자
- #list li:even : 첫번째, 세번째,..홀수의 인덱스 값을 가진 엘리먼트에 대한 선택자
- #list li:first : 첫번째 인덱스 엘리먼트에 대한 선택자
```
```
- [target*="BC] : 속성의 값에 주어진 문자열이 포함되는 엘리먼트를 찾아내는 선택자
- [target="DEFG"] : 속성의 값과 주어진 문자열이 일치 하는 엘리먼틀트를 찾아내는 선택자
- [target^="B"] : 속성의값으로 주어진 문자열이 처음 등장하는 엘리먼트를 찾아내는 선택자
- [target$="H"] : 속성의 값으로 주어진 문자열이 마지막으로 등장하는 엘리먼트를 찾아내는 선택자
- [target][id] : 속성들이 존재하는 엘리먼트를 찾아내는 선택자
```
---
## chain
- jQuery의 메소드들은 반환값으로 자기 자신을 반환해야 한다는규칙을 가지고 있다.
이를 이용하면 한번 선택한 대상에 대해서 연속적인 제어를 할 수 있다.
> chain의 장점
> - 코드가 간결해진다.
> - 인간의 언어와 유사해서 사고의 자연스러운 과정과 일치함
---

## 이벤트란?
- 시스템에서 일어나는 사건을 의미
- javascript나 jQuery에게 이벤트란 브라우저에서 일어나는 사건을 의미한다. (클릭, 마우스 이동, 타이핑, 페이지 로딩 등)
- 이벤트가 발생했을 때 작동할 로직을 시스템에게 알려두면 이벤트가 발생햇을 떄 시스템이 그 로직을 호출한다. 
### jQuery의 이벤트
- 크로스브라우징의 문제를 해결해줌
- bind로 이벤트 핸들러를 설치하고, unbind로 제거
- trigger로 이벤트 핸들러를 강제로 실행
- click, ready와 같이 다양한 이벤트 헬퍼(helper)를 제공함
- live를 이용하면 현재 존재하지 않는 엘리먼트에 이벤트 핸들러를 설치할 수 있음
---
## 엘리먼트 제어

- 자식으로 삽입 : (.append(), .appendTo(), .html(), .prepend(), .prependTo(), text())

- 형제로 삽입 : (.after(), .before(), .insertAfter(), .insertBefore())

- 부모로 감싸기 : (.unwrap(), .wrap(), .wrapAll(), .wrapInner())
- 삭제 : (.detach(), .empty(), .remove(), .unwrap())
- 치환 : (.replace(), .replaceWith())
- 클래스 : (.addClass(), .hashClass(), .removeClass(), .toggleClass())
- 속성제어 : (.attr(), .prop(), .removeAttr(), .removeProp(),.val())
---
## 폼
- 서버로 데이터를 전송하기 위한 수단
- Query는 폼을 제어하는데 필요한 이벤트와 메소드를 제공한다.
---
## ajax
- Asynchronous Javascript and XML의 약자
- 자바스크립ㅌ를 이용해서 비동기식으로 서버와 통신하는 방식. 이때 XML을 이용
- 꼭 XML을 이용할 필요는 없고 최근에는 json을 더 많이 이용
- 비동기식이란 여러가지 일이 동시적으로 발생한다는 뜻으로, 서버와 통신하는 동안 다른 작업을 할 수 있다는 의미

### $.ajax(settings)
- jQuery를 이용한 ajax통신의 가장 기본적인 API
- 주요속성
- 1. data : 서버에 전송할 데이터, key/value 형식의 객체
  2. dataType : 서버가 티런하는 데이터 타입(xml, json, script, html)
  3. type : 서버로 전송하는 데이터의 타입 (POST, GET)
  4. url : 데이터를 전송할 URL
  5. success : ajax통신에 성공 했을 때 호출될 이벤트 핸들러
  




