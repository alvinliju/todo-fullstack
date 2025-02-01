## Todo app

### API schema
get '/api/v1/todos' -> get all todos
post '/api/v1/todo' -> post all todos
put '/api/v1/todo/1213'-> update todo
delete '/api/v1/todo/1213' -> delete a todo

# Todo API Documentation

A RESTful API for managing todos with JWT authentication.

## Base URL
```
http://localhost:3000
```

## Authentication
The API uses JWT Bearer token authentication. Include the token in the Authorization header:
```
Authorization: <your_jwt_token>
```

## Endpoints

### Auth

#### Register User
```http
POST /auth/register
Content-Type: application/json

{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123"
}
```

#### Login User
```http
POST /auth/login
Content-Type: application/json

{
    "email": "test@example.com",
    "password": "password123"
}
```

### Todos
All todo endpoints require authentication.

#### Get All Todos
```http
GET /api/v1/todos
```

#### Create Todo
```http
POST /api/v1/todos
Content-Type: application/json

{
    "title": "Test Todo"
}
```

#### Update Todo
```http
PUT /api/v1/todos/:id
Content-Type: application/json

{
    "title": "Updated Todo"
}
```

#### Delete Todo
```http
DELETE /api/v1/todos/:id
```

## Response Examples

### Success Response
```json
{
    "title": "Test Todo",
    "completed": false,
    "_id": "f3c9eb0b-499c-45e5-b259-6bc6f292a2a7",
    "createdAt": "2024-01-31T21:51:19.118Z"
}
```

### Error Response
```json
{
    "error": "Error message here"
}
```
```
