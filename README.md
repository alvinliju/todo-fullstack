# OverEnginereed todo backend

An OverEnginereed todo backend  built with Node.js, Express, MongoDB, and JWT authentication.

## Features

- 🔐 User Authentication (JWT)
- ✨ CRUD Operations for Todos
- 🛡️ Protected Routes
- 🎯 User-specific Todos
- 📱 RESTful API Architecture

## Tech Stack

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - JWT for authentication

- **Dependencies:**
  - express
  - mongoose
  - jsonwebtoken
  - bcryptjs
  - dotenv
  - cors

## Project Structure

```
todo-fullstack/
├── index.js
├── server.js
├── package.json
├── .env
├── .gitignore
├── src/
│   └── controllers/
│       ├── authControllers.js
│       ├── todoControllers.js
│       └── db/
│           └── index.js
└── utils/
    ├── routes/
    │   ├── authRoutes.js
    │   └── todoRoutes.js
    ├── middlewares/
    │   └── authMiddleware.js
    ├── models/
    │   ├── Todo.js
    │   └── User.js
    └── authHelpers.js
```

## API Endpoints

### Authentication

```http
POST /auth/register - Register new user
POST /auth/login    - Login user
```

### Todos

```http
GET    /api/v1/todos      - Get all todos
POST   /api/v1/todos      - Create new todo
PUT    /api/v1/todos/:id  - Update todo
DELETE /api/v1/todos/:id  - Delete todo
```

## Installation & Setup

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Create .env file:
```env
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

4. Start the server:
```bash
npm run dev
```

## API Usage Examples

### Register User
```http
POST /auth/register
Content-Type: application/json

{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
}
```

### Create Todo
```http
POST /api/v1/todos
Authorization: Bearer <your_token>
Content-Type: application/json

{
    "title": "Complete project",
    "description": "Finish the todo app"
}
```

## Error Handling

The API returns appropriate HTTP status codes:

- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Server Error

## TODO List (Future Improvements)

### Backend Enhancements
- [X] Add input validation using Joi or express-validator
- [ ] Implement rate limiting
- [ ] Add request logging
- [ ] Implement password reset functionality
- [ ] Add email verification
- [ ] Implement refresh tokens
- [ ] Add todo categories/labels
- [ ] Add due dates for todos
- [ ] Implement todo priority levels
- [ ] Add todo sharing between users
- [ ] Implement todo search functionality
- [ ] Add pagination for todos list

### Frontend Implementation (HBS)
- [ ] Create login/register pages
- [ ] Implement todo list view
- [ ] Add todo creation form
- [ ] Implement edit todo functionality
- [ ] Add delete confirmation modal
- [ ] Implement user profile page
- [ ] Add responsive design
- [ ] Implement dark/light theme
- [ ] Add loading states
- [ ] Implement error handling UI
- [ ] Add toast notifications
- [ ] Implement todo filtering
- [ ] Add todo sorting options
- [ ] Implement todo search UI

### Testing
- [ ] Add unit tests
- [ ] Implement integration tests
- [ ] Add API documentation using Swagger
- [ ] Implement E2E testing

### Security Enhancements
- [ ] Add CSRF protection
- [ ] Implement request sanitization
- [ ] Add API rate limiting
- [ ] Implement proper error logging
- [ ] Add security headers
- [ ] Implement OAuth authentication

### Performance Optimizations
- [ ] Add caching layer
- [ ] Optimize database queries
- [ ] Implement proper indexing
- [ ] Add compression middleware
- [ ] Optimize assets delivery

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
```
