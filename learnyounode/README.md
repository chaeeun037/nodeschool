# Learn you node

> Node.js 튜토리얼



## 목표

* nodeschool.io의 learnyounode 튜토리얼 전체를 실습한다.





## 사용 기술

 <img src="https://img.shields.io/badge/-javascript-%23F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>





## 기간

2021.07.02 - 2021.07.04





## 학습 내용

* Node.js는 무엇인가요? 에 대한 정확한 대답을 한다.
* 튜토리얼을 통해 간단한 실습을 진행한다.
* 공식 문서를 가볍게 훑어봤다.





## 학습 완료

![](C:\Users\Chaeeun Kim\Documents\git\nodeschool\learnyounode\complete.JPG)





## 설정

* 설치

```
npm install -g learnyounode
```

* 실행

```
learnyounode
```





## 1. HELLO WORLD

> hello-world.js
>
> HELLO WORLD를 출력한다.



## 2. BABY STEPS

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

* fs.readdir

```js
fs.readdir(file, (err, data) => {
```





## MAKE IT MODULAR

> make-it-modular.js
>
> mymodule.js
>
> 앞의 작업을 모듈화를 통해 파일을 나누기

* module.exports // mymodule.js

```js
module.exports = function (path, ext, callback) {
```



* // make-it-modular.js

```js
mymodule(path, ext, (err, data) => {
```



## HTTP CLIENT

> http-client.js
>
> http GET 요청으로 받아온 데이터 출력하기

* http

```js
const http = require('http')
```



* http get

```js
http.get(path, (response) => {
```



* response encoding

```js
response.setEncoding('utf8')
```



* get data

```js
response.on('data', (data) => {
```



* error

```js
// http.get
http.get(...).on('error', console.error)

// response
response.on('error', console.error)
```





## HTTP COLLECT

> http-collect.js
>
> http GET으로 데이터 모두 받아와서 첫번째 줄에는  글자 수, 두번째줄에는 받아온 문자열 출력하기

* 모든 데이터 붙이기

``` js
response.on('data', (data) => {
    body += data
})
```



* end

```js
response.on('end', () => {
```





## JUGGLING ASYNC

> juggling-async.js
>
> 여러개 url에서 순서대로 데이터 받아서 출력하기

* 반복문

```js
paths.forEach((e, i) => {
    http.get(e, (response) => {
```



* 다 받아왔으면 불러온 순서대로 한꺼번에 출력

```js
response.on('end', () => {
    cnt++
    if (cnt === 3) {
```





## TIME SERVER

> time-server.js
>
> 주어진 port번호를 통해 TCP 통신으로 시각 포맷에 맞게 출력하기

* net

```js
const net = require('net')
```



* create server

```js
const server = net.createServer(socket => {
```



* socket write

```js
// socket.write()도 가능
socket.end(YYYY + '-' + MM + '-' + DD + ' ' + hh + ':' + mm + '\n')
```



* server listen

```js
server.listen(port)
```



* date

```js
const date = new Date()
// date.getFullYear() 등 함수 사용 가능
```





## HTTP FILE SERVER

> http-file-server.js
>
> http 통신으로 각 요청에 같은 텍스트 파일 전송하기

* http 서버 만들기

```js
const server = http.createServer((request, response) => {
```



* 응답으로 파일 내용 보내기

```js
fs.createReadStream(path).pipe(response)
```





## HTTP UPPERCASERER

> http-uppercaserer.js
>
> POST 요청에 대해서 body로 오는 데이터 대문자로 변경해서 반환하기

* post 요청인지 확인

```js
if(req.method !== 'POST') {
```





#### 메모

* on 방식과 pipe 방식 차이?





## HTTP JSON API SERVER

> http-json-api-server.js
>
> unixtime 받아서 json 형식의 hour, minute, second 데이터로 변환해서 전송하기

* url 객체로 변환해서 쉽게 다룰 수 있다.

```js
let url = require('url')

url = url.parse(req.url, true)	// url 객체로 변환, parseQueryString: True

let time = new Date(url.query.iso)	// query로 원하는 데이터를 뽑아낼 수 있다. 여기서는 iso

if (url.pathname === '/api/parsetime') {
```



* 데이터 보낼 때는 string을 json형식으로 보내야 오류가 나지 않는다.

```js
res.end(JSON.stringify(time))
```

