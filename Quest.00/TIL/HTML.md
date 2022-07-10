# HTML (HyperText Markup Language)
## 기본문법
- 제목 : `<h1>`제목`</h1>`
> 숫자가 커질수록 글씨 크기 작아짐
- 강조 : `<strong>`강조`</strong>`
- 단락 표시 : `<p>`단락`</p>`
- 링크 작업 : `<a href="URL주소">`링크 작업`</a>`
> 주소 앞뒤로 target="_blank"라는 속성 부여 시 새 탭을 만들며 링크 접속

> 주소 앞뒤로 title="태그 부제"라는 속성 부여 시 마우스 갖다댔을 때 태그 부제 띄움
---
## 역사 
GML -> SGML -> SGMLguid -> HTML

---
## 리스트와 태그의 중첩
-리스트 : `<ul>` `<li>`리스트`</li>` `</ul>`
> ul (unordered list)을 ol (ordered list)로 바꿀 경우 숫자형
---
## 문서 구조
- 상단 제목 : `<title>`상단제목`</title>`
>글씨 깨질 시 :`<meta charset="utf-8">`
- 부가적 정보와 본문 구별 : 

   `<head>`부가적 정보`</head>`

   `<body>`'본문'`</body>`
> `<html>`과 `</html>`로 감싸야 함

- DOCTYPE (Document type declaration) : `<!DOCTYPE html>` 맨위에 삽입
---
## 이미지
- <img src="이미지 파일명"height="height" alt="속성값">
> alt=alternative : 대안가능한
---
## 표
|이름|성별|주소|
|--|--|--|
|고원진|남|제주|
|심민기|남|부산|
`<table border='1'>`
`<thead>`
`<tr>` 
`<td>`이름`</td>`  `<td>`성별`</td>` `<td>`주소`</td>`
`</tr>`
`</thead>`
`<tbody>`
`<tr>`
`<td>`고원진`</td>` `<td>`남`</td>` `<td>`제주`</td>`
`</tr>`
`<tr>`
`<td>`심민기`</td>` `<td>`남`</td>` `<td>`부산`</td>`
`</tr>`
`</tbody>`
`<tr>`
`</table>`

### - 병합
- 행 병합 : `<td rowspan="병합할 칸수">`병합할 칸`</td>`
- 열 병합 : `<td colspan="병합할 칸수">`병합할 칸`</td>`
---
## form
`<form action="제출 후 주소">`

`<p>`아이디 : `<input type="text" name="id">` `</p>`

`<p>`비밀번호 : `<input type="password">` `</p>`

`<p>`주소 : `<input type="text" name="address">` `</p>`

`<input type="submit">`

`</form>`
> 기본값 : value="기본값"

> textarea : `<textarea cols="50" rows="2">`default value `</textarea>`
---
### - Dropdown List
`<h1>`색상(다중선택)`</h1>`

`<select name="color" multiple>`

`<option value="red">` 붉은색 `</option>`

`<option value="black">` 검은색 `</option>`

`<option value="blue">` 파란색 `</option>`

`</select>`

---
## font
`<font size="1~7" color="color">` Hello `</font>` World

---
## 의미론적인 태그
 - `<header>`
 - `<article>`
 - `<footer>`
 - `<nav>`
 ## 검색 엔진 최적화 (SEO)
1. SEO의 기초
- 명확 하고 독창적인 타이틀의 사용
   1. title태그를 이용하여 페이지의 제목 나타내기
   2. 타이틀 태그의 내용은 검색결과에 반영됩니다
- "decription" 메타태그 활용하기
   1. 페이지의 내용 정확하게 요약
   2. 각페이지마다 내용에 맞는 고유한 설명 사용
2. 사이트 구조 개선
- 페이지의 URL 구조를 개선하기
   1. 이해하기 쉬운 URL
   2. URL에 단어사용
   3. 단순 디렉토리 구조 만들기
   4. 특정 문서에 도달하기 위한 한 가지 형태의 URL 제공
   5. 301 리디렉션 / `<link rel="canonical" href="URL주소"/>`
- 사이트 내에서 이동하기 쉽게 만들기
   1. 자연스러운 계층구조 만들기
   2. 이동 경로를 위해 텍스트 링크를 사용
3. 콘텐츠 최적화
   - 읽기 편안한 내용 및 구성
   - 주제에서 벗어나지 않게 구성
   - 새롭고 고유한 콘텐츠 작성
   - 검색 엔진을 위한 것이 아닌 사용자를 위한 콘텐츠 작성
-  이미지 사용의 최적화
   1. 간결하면서 설명적인 파일 이름과 alt 텍스트의 활용
   2. 이미지를 링크로 사용할 때 alt 텍스트를 제공하기
- 제목 태그의 적절한 활용
4. 검색 로봇에 대한 대처
- robots.txt.를 효과적으로 활용하기
   1. robots.txt를 보안 도구로 사용하지 않기
   2. 민감한 콘텐츠는 보다 안전한 방법 사용하기
   3. 웹마스터를 위한 무료 도구 사용하기
5. 모바일을 위한 최적화
6. 사이트 홍보와 분석
---
# CheckList
* HTML 표준의 역사는 어떻게 될까요?
```
- HTML 표준을 지키는 것은 왜 중요할까요?


2. XHTML 2.0은 왜 세상에 나오지 못하게 되었을까요?
3. HTML5 표준은 어떤 과정을 통해 정해질까요?
```

* 브라우저의 역사는 어떻게 될까요?
* Internet Explorer가 브라우저 시장을 독점하면서 어떤 문제가 일어났고, 이 문제는 어떻게 해결되었을까요?
* 현재 시점에 브라우저별 점유율은 어떻게 될까요? 이 브라우저별 점유율을 알아보는 것은 왜 중요할까요?
* 브라우저 엔진(렌더링 엔진)이란 무엇일까요? 어떤 브라우저들이 어떤 엔진을 쓸까요?
* 모바일 시대 이후, 최근에 출시된 브라우저들은 어떤 특징을 가지고 있을까요?
* HTML 문서는 어떤 구조로 이루어져 있나요?
* `<head>`에 자주 들어가는 엘리먼트들은 어떤 것이 있고, 어떤 역할을 할까요?
* 시맨틱 태그는 무엇일까요?
* 시맨틱 엘리먼트를 사용하면 어떤 점이 좋을까요?
* `<section>`과 `<div>`, `<header>`, `<footer>`, `<article>` 엘리먼트의 차이점은 무엇인가요?
* 블록 레벨 엘리먼트와 인라인 엘리먼트는 어떤 차이가 있을까요?






