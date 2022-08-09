# JavaScript
## 변수
- let : 변할 수 있는 값
- const : 절대로 바뀌지 않는 상수
1. 변수는 문자와 숫자, $와 _만 사용
2. 첫 글잔는 숫자가 될 수 없습니다.
3. 예약어는 사용할 수 없습니다.
4. 가급적 상수는 대문자로 알려주새요.
5. 변수명은 읽기 쉽고 이해할 수 있깨 선언
---
## 자료형
1. console.log(typeof 3);
``` 
"number"
 ```
- console.log(typeof name);
```
"string
```
- console.log(typeof true);
```
"boolean"
```
- console.log(typeof "xxx");
```
"string"
```
- console.log(typeof null);
```
"object"
```
- console.log(typeof undefined);
```
"undefined"
```
---
## 문자형
- alert() : 사용자에게 메시지를 보여주고 확인 버튼
- prompt() : 사용자에게 메시지를 보여주고 입력값을 요구
- confirm : 사용자에게 확인
---
## 형변환
자동 형변환
명시적 형변환
- string() : 문자형으로 변환
- number() : 숫자형으로 변환
- boolean() :  
-> false값 : 숫자 0, 빈 문자열 ", null, undefined, NaN
>> 주의사항
- Number(null) // 0
  Number(undefined) // NaN
- Number(0) // false
  Number('0') // true
- Number('') // false
  Number(' ') // true  
---
## 논리연산자
- AND : ||
- OR : &&
- NOT : !
---
## 반복문
- for : 
```
for(let i = 0; i < 10; i++) {
  if(i%2){
    continue;
  }
  console.log(i)
}  
```
- while : 
```
while(true){
  let answer = confirm("계속 할까요?);
    if (!answer){
      break;
    }
  }
let i = 0;
while(i<10>){}
```
- do...while : 
```
let i = 0;
do{

  //코드  
  i++;}while(i<10)
```

