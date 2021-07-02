# Learn you node

> Node.js 튜토리얼



## 목표

* nodeschool.io의 learnyounode 튜토리얼 전체를 실습한다.





## 사용 기술

 <img src="https://img.shields.io/badge/-javascript-%23F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>





## 기간

2021.07.02 - 





## 학습 내용

* Node.js는 무엇인가요? 에 대한 정확한 대답을 한다.
* 튜토리얼을 통해 간단한 실습을 진행한다.
* 공식 문서를 가볍게 훑어봤다.





## 설정

* 설치

```
npm install -g learnyounode
```

* 실행

```
learnyounode
```

![](C:\Users\Chaeeun Kim\Documents\git\nodeschool\learnyounode\index.JPG)







## HELLO WORLD

> hello-world.js
>
> HELLO WORLD를 출력한다.



## BABY STEPS

> baby-steps.js
>
> 인자로 들어오는 숫자를 모두 더해서 출력한다.

* process.argv: 인자를 담고있다.

```js
Number(process.argv[i])
```



## MY FIRST I/O!

> my-first-io.js
>
> 인자로 들어오는 텍스트의 line 수를 출력한다. (동기)

* cat file | wc -l
* fs: 파일 시스템을 사용하기 위한 모듈

```js
 const fs = require('fs')
```

* fs.readFileSync

```js
 fs.readFileSync(process.argv[2])
```



#### 메모

* 마지막 줄에도 \n이 붙기 때문에 1을 빼준걸까?



## MY FIRST ASYNC I/O!

> my-first-async-io.js
>
> 인자로 들어오는 텍스트의 line 수를 출력한다. (비동기)

* fs.readFile

```js
fs.readFile(process.argv[2], (err, data) => {
```



* callback 함수 사용

```js
function callback (err, data) { /* ... */ }
```



## FILTERED LS

> filtered-ls.js
>
> 비동기 i/o를 이용해서 주어진 파일 확장명에 해당되는 파일명 출력하기







* MAKE IT MODULAR
* HTTP CLIENT
* HTTPCOLLECT
* JUGGLING ASYNC
* TIME SERVER
* HTTP FILE SERVER
* HTTP UPPERCASERER
* HTTP JSON API SERVER
