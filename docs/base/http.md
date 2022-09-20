---
title: HTTP
---

## HTTP 请求头和响应头

### 请求头

> Request Header

- `Accept` - 用户代理期望的 MIME 类型列表
- `Accept-Charset` - 用户代理支持的字符集
- `Accept-Encoding` - 用户代理支持的压缩编码
- `Accept-Language` - 用户代理期望的页面语言
- `Authorization` - 包含用服务器验证用户代理的凭证

### 响应头

> Responses Header

- `Content-Type` - 指示服务器文档的 MIME 类型。帮助用户代理（浏览器）去处理接收到的数据
  - [application/json](https://www.iana.org/assignments/media-types/application/json)
  - [application/x-www-form-urlencoded](https://www.iana.org/assignments/media-types/application/x-www-form-urlencoded)
  - [multipart/form-data](https://www.iana.org/assignments/media-types/multipart/form-data)
- `User-Agent` - 浏览器的用户代理字符串

<!-- ## 常见状态码

---

## 三次握手

1. 客户端向服务端发送 SYN 包，等待服务端响应，并进入 SYN-SEND 状态
2. 服务端收到 SYN 包，并确定 SYN = ACK + 1，然后响应一个 SYN 包和 ACK 包。客户端进入 SYN-RECV 状态。
3. 客户端收到服务端 SYN + ACK 包。向服务器发送确认包 ACK。发送完毕进入 ESTABLISHED 状态。

## 四次挥手

1. 主动关闭连接一方，发送FIN包。此时发送 FIN 包之前发送的数据如果没有发送到。会进行重试发送。
2. 被动关闭一方收到 FIN 包。响应一个 ACK 包。
3. 被动关闭方发送一个 FIN 包。告诉被动关闭方。数据发送完毕。
4. 主动关闭方收到 FIN 包。发送一个 ACK 包给被动关闭方，至此四次挥手结束，断开连接。

---

- ACK：确认位，只有 ACK = 1 的时候 ack 才起作用，正常通信时 ACK = 1，第一次发起请求时，因为没有需要确认接收的数据所以 ACK 为0。
- SYN：同步位，用于在建立连接时同步序号，刚开始建立连接时并没有历史接收的数据，所以 ack 也就没办法设置。SYN 的作用就是，当接收端接收到 SYN = 1 的报文时就会将 ack 设置位接收到的 seq + 1 的值。SYN 会在前两次握手时都为 1，是因为通信的双方的 ack 都需要设置一个初始值；

---

## 浏览器缓存 -->

## HTTP 报文

```http
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr
```

```http
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

<!DOCTYPE html... (here comes the 29769 bytes of the requested web page)
```
