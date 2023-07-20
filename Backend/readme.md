# Table of Contents

1. [Introduction](#introduction)  
2. [Models](#models)
3. [Api Endpoints](#api-endpoints)
4. [Environment Setup](#environment-setup)
5. [STATUS CODE](#status-code)

## Introduction

Pastebin is a website where users can store plain text or code snippets and share them with others by sending them a unique URL. It is often used by developers to share code snippets and collaborate on programming projects, but it can be used for a variety of other purposes as well.

## Models

> 1. <strong>User Model</strong>

| Fields    |  Type   | required | unique |
| :-------- | :-----: | :------: | :----: |
| Username  | String  |   true   |  true  |
| email     | String  |   true   |  true  |
| name      | String  |   true   | false  |
| password  | String  |   true   | false  |
| is_Verify | Boolean |   None   |  None  |
| createdAt |  Date   |   None   |  None  |
| updatedAt |  Date   |   None   |  None  |

> 2. <strong>Paste Model</strong>

| Fields    |  Type  | required | unique |
| :-------- | :----: | :------: | :----: |
| Username  | String |   None   |  true  |
| text      | String |   None   |  None  |
| createdAt |  Date  |   None   |  None  |

> 3. <strong>verification_mail Model</strong>

| Fields          |  Type  | required | unique | Expires |
| :-------------- | :----: | :------: | :----: | :-----: |
| User            | String |   true   |  true  |  None   |
| Verification_id | String |   true   |  true  |  None   |
| createdAt       |  Date  |   None   |  None  | 48 Hour |

## Api Endpoints

> 1. <b>USER SPECIFIC API'S </b>
>> 1. SIGNUP USER \
>>    POST: `https://localhost:3001/auth/signup ` \
>> Payload : Username, Email , Name , Password

>> 2.  LOGIN USER \
>>     POST : `https://localhost:3001/auth/login ` \
>> Payload : Username or Email , Password

>> 3.  EMAIL VERIFY \
>>     GET : `https://localhost:3001/auth/:user/verify/:id ` \
>> Params: user, id

>> 4.  DELETE USER \
>>     DELETE : `https://localhost:3001/auth/accountDelete` \
>> Authentication Required : Yes

> 2. <b>PASTE SPECIFIC API'S </b>
>> 1. CREATE PASTE \
>>    POST: `https://localhost:3001/api/create_paste
 ` \
>> Payload : Username, text  \
>> Authentication Required : Yes

>> 1. DELETE PASTE \
>>    POST: `https://localhost:3001/api/delete_paste/:_id
 ` \
>> Params: _id \
>> Authentication Required : Yes
## Environment Setup
> PORT = Port \
> DATABASE_URI = Database Url \
> SECRET_TOKEN = Your Secret Token  \
> BASE_URL = ```http://localhost:3001/``` \
> HOST = Your Email Host \
> SERVICE = Your Email Service \
> EMAIL_PORT = Your Email Port \
> SECURE = Your Email Security \
> USER = Your Email Address \
> PASS = Your Password 

## STATUS CODE
>  The status-code element is a three-digit integer code giving the
   result of the attempt to understand and satisfy the request.
 
   | Code | Reason-Phrase                 | 
   |------| ------------------------------| 
   | 100  | Continue                      | 
   | 101  | Switching Protocols           | 
   | 200  | OK                            | 
   | 201  | Created                       | 
   | 202  | Accepted                      | 
   | 203  | Non-Authoritative Information | 
   | 204  | No Content                    | 
   | 205  | Reset Content                 | 
   | 206  | Partial Content               | 
   | 300  | Multiple Choices              | 
   | 301  | Moved Permanently             | 
   | 302  | Found                         |
   | 303  | See Other                     | 
   | 304  | Not Modified                  | 
   | 305  | Use Proxy                     | 
   | 307  | Temporary Redirect            |
   | 400  | Bad Request                   |
   | 401  | Unauthorized                  | 
   | 402  | Payment Required              | 
   | 403  | Forbidden                     | 
   | 404  | Not Found                     |
   | 405  | Method Not Allowed            | 
   | 406  | Not Acceptable                | 
   | 407  | Proxy Authentication Required | 
   | 408  | Request Timeout               | 
   | 409  | Conflict                      | 
   | 410  | Gone                          | 
   | 411  | Length Required               | 
   | 412  | Precondition Failed           | 
   | 413  | Payload Too Large             | 
   | 414  | URI Too Long                  |
   | 415  | Unsupported Media Type        | 
   | 416  | Range Not Satisfiable         |
   | 417  | Expectation Failed            | 
   | 426  | Upgrade Required              |
   | 500  | Internal Server Error         |
   | 501  | Not Implemented               |
   | 502  | Bad Gateway                   |
   | 503  | Service Unavailable           |
   | 504  | Gateway Timeout               |
   | 505  | HTTP Version Not Supported    |
