# MangaCom
```
Create MangaCom app, using express, jquery, ajax, axios
* RESTful endpoint
* JSON formatted response
* Web Server response
* Get a Superhero comic from all universe searched by Superhero name via Superhero API
* Get a Manga list searched by Manga's title via Manga API
* Get a Game list searched by Game's title via CheapShark API
```

# Usage
```
Make sure you have Node.js and npm in your computer and then run `npm install`.
In order to get access to all of the routes, you will need a `JWT(JSON Web Token) Token` which will be generated automatically after you sign in successfully.
Run `nodemon app.js  to start the server.
```

# URL
```
Client URL : http://localhost:8080
Server URL : http://localhost:3000
```

# ENDPOINT

## POST /login

> Login User

_Request Header_
```
not needed
```

_Request Body_
```javascript
{ 
    "email": "<User's email>",
    "password": "<User's password>"
}
```

_Response(200)_
```javascript
{
    "accessToken": <token>
}
```
_Response(400 - Bad Request)_
```javascript
{
    "Error" :  "VALIDATION_ERROR",
    "message": "Invalid Email or Password"
}
```
_Response (500)_
```javascript
{
  "Error": "UNKNOWN_ERROR",
  "message": "Internal Server Error"
}
```

## GET /comic

> Get Comic List

_Request Header_
```javascript
{
    "accessToken": <token>
}
```

_Request Body_
```javascript
{ 
    "title": "<Comic's title>"
}
```

_Response(200)_
```javascript
{
    "id": "<Superhero's ID>",
    "name": "<Superhero's Name>",
    "powerstats": "<Superhero's Status Info>",
    "biography": "<Superhero's Biography>",
    "appearance": "<Superhero's Appearance>",
    "work": "<Superhero's Work>",
    "connection": "<Superhero's Connection>",
    "image": "<Superhero's Image URL>"
}
```
_Response (500)_
```javascript
{
  "Error": "UNKNOWN_ERROR",
  "message": "Internal Server Error"
}
```

## GET /manga

> Get Manga List

_Request Header_
```javascript
{
    "accessToken": <token>
}
```

_Request Body_
```javascript
{ 
    "title": "<Manga's title>"
}
```

_Response(200)_
```javascript
{
    "title": "<Manga Title>",
    "thumb": "<Manga Image URL>",
    "type": "<Manga Type>",
    "endpoint": "<Manga Endpoint>",
    "updated_on": "<Manga Last Updated>"
}
```
_Response (500)_
```javascript
{
  "Error": "UNKNOWN_ERROR",
  "message": "Internal Server Error"
}
```

## GET /game

> Get Game List

_Request Header_
```javascript
{
    "accessToken": <token>
}
```

_Request Body_
```javascript
{ 
    "title": "<Game's title>"
}
```

_Response(200)_
```javascript
{
    "gameID": "<Game's ID>",
    "steamAppID": "<Game's Steam ID>",
    "cheapest": "<Game's Lowest Price>",
    "cheapestDealID": "<Game's Lowest Price ID>",
    "external": "<Game's Title>",
    "internalName": "<Game's Data Title>",
    "thumb": "<Game's Image URL>"
}
```
_Response (500)_
```javascript
{
  "Error": "UNKNOWN_ERROR",
  "message": "Internal Server Error"
}
```

## POST /googleLogin

Request Header

```Not Needed```

Request Body

```javascript
{
    "id_token": "<your id_token>"
}
```

_Response(200)
```javascript
{
    "access_token": "<your access_token>"
}
```
OR

_Response(201)
```javascript
{
    "access_token": "<your access_token>"
}
```

_Response(401)
```javascript
{
    "message":  "<Invalid Email/Password>" ,
    
}
```

## POST /register

> Create User

_Request Header_
```
not needed
```

_Request Body_
```javascript
{
    "email": "<User's email>",
    "password": "<User's password>"
}
```

_Response(201)_
```javascript
{
    "email": "<User's email>",
    "password": "<User's password>"
}
```
_Response(400- bad request)_
```javascript
{
    "Error" :  "VALIDATION_ERROR"
    "message": "Email required, Password required, Email has been used"
}
```
_Response (500)_
```javascript
{
  "Error": "UNKNOWN_ERROR",
  "message": "Internal Server Error"
}