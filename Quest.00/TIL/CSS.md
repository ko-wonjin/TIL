# CSS (Cascading Style Sheet)
## CSS의 탄생 배경
1. HTML이 정보에 전념할 수 있도록
2. CSS이 훨씬 더 효율적인 문법체계를 갖고 있었음
> 정보와 디자인의 분리
---
## CSS 실행
- `<h1 style="color:red">`Hello World
`</h1>`
> color:red => CSS문법

- `<style>`

  h2{color:blue}

  `</style>`

  `<h2>`Hello world`</h2>`
> h2{color:blue} => CSS문법
---
## 선택자
- Tag선택자 : `<li>` -> li{ }
- ID선택자 : `<li id='selet'>` -> #select{ }
- class선택자 : `<li class='deactive'>` CSS `</li>` -> .deactive{ }
- 부모자식선택자 : ul li{ }
- 직계자식선택자 : ol>li{ }
- 선택자 중복 : ol,ul{ }

>> flukeout.github.io
---
## 가상클래스 선택자
- a:active{ }
- a:hovered{ }
- a:visited{ }
- a:link{ }
- a:focus{ }
---
## 타이포그래피
1. font-size
- rem : 사용자가 폰트 크기 임의 변경가능
- px
2. color
- a{color:red}
- RGB:rgb(n,n,n) -> 0<=n<=255
- Hexadecimal Colors:{color:#00FF00}
3. text-align
- text align: justify
4. font
- 글꼴: 

p{

font-family: arial, verdana, "Helvetica Neue", serif,  monospace;

font-weight: bold;

line height: 120px;

}
> font :font-style font-variant font-weight font-size/line-height font-family...
---














