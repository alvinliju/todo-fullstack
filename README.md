# Tofu OverEngineered Todo App

Tofu is an **OverEngineered Todo App** built with a **Node.js/Express/MongoDB backend** and a **React frontend**. This project was created as a learning experiment to understand how to push code to production, write clean code (even though it's not perfect yet), and explore the full stack development process. The backend is deployed on **Render**, and the frontend is deployed on **Vercel**.

--- 

## **About the Project**

This project is a simple todo app with user authentication and CRUD operations for todos. The backend is built with **Node.js**, **Express**, and **MongoDB**, and it uses **JWT (JSON Web Tokens)** for authentication. The frontend is built with **React**, and while it's functional, it's not perfect. I built this with minimal React knowledge (v0), and I plan to come back and improve it once I learn more about React.

The main goal of this project was to:
1. Experiment with full-stack development.
2. Learn how to deploy a backend and frontend to production.
3. Understand how to write clean and maintainable code (even though it's not perfect yet).
4. Get hands-on experience with RESTful APIs, authentication, and database management.

---

## **Tech Stack**

### **Backend**
- **Node.js**: Runtime environment for the backend.
- **Express.js**: Framework for building the RESTful API.
- **MongoDB**: Database for storing users and todos.
- **JWT (JSON Web Tokens)**: For user authentication and protected routes.
- **Bcrypt.js**: For hashing passwords.
- **CORS**: To handle cross-origin requests between the frontend and backend.
- **Dotenv**: For managing environment variables.

### **Frontend**
- **React**: Frontend library for building the user interface.
- **React Router**: For client-side routing.
- **Axios**: For making HTTP requests to the backend.
- **Lucide Icons**: For icons (e.g., edit, delete, check).
- **Tailwind CSS**: For styling the UI.

---

## **Project Structure**

### **Backend**
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

### **Frontend**
```
react-todo/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── .env
└── .gitignore
```

---

## **Deployment**

### **Backend**
The backend is deployed on **Render**, a cloud platform for hosting web services. The API is accessible at:
```
https://todo-fullstack-sape.onrender.com
```

### **Frontend**
The frontend is deployed on **Vercel**, a platform for hosting static sites and serverless functions. The app is accessible at:
```
https://react-todo-app-vercel.vercel.app
```

---

## **Features**

### **Backend**
- **User Authentication**:
  - Register new users.
  - Login with email and password.
  - JWT-based authentication for protected routes.
- **Todo Management**:
  - Create, read, update, and delete todos.
  - User-specific todos (each user can only access their own todos).
- **Protected Routes**:
  - Only authenticated users can access todo-related endpoints.

### **Frontend**
- **User Authentication**:
  - Register and login forms.
  - JWT token stored in `localStorage` for session management.
- **Todo Management**:
  - Add new todos.
  - Mark todos as completed.
  - Edit and delete todos.
  - View all todos in a grid layout.
- **Basic Error Handling**:
  - Display error messages for failed API requests.

---

## **API Endpoints**

### **Authentication**
```http
POST /auth/register - Register new user
POST /auth/login    - Login user
```

### **Todos**
```http
GET    /api/v1/todos      - Get all todos
POST   /api/v1/todos      - Create new todo
PUT    /api/v1/todos/:id  - Update todo
DELETE /api/v1/todos/:id  - Delete todo
```

---

## **How to Run Locally**

### **Backend**
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### **Frontend**
1. Navigate to the `react-todo` directory:
   ```bash
   cd react-todo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```env
   VITE_API_URL=http://localhost:3000
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## **Future Improvements**

### **Backend**
- [X] Add input validation using **Joi** or **express-validator**.
- [X] Implement password reset functionality.
- [ ] Add email verification.
- [ ] Add time blocking feature
- [ ] Add task priority
- [ ] Add tags to taks
- [ ] Implement refresh tokens for better security.
- [ ]Add pagination and filtering for the todos list.

### **Frontend**
- [ ] Improve the UI/UX with better styling and animations.
- [ ] Add proper error handling and user feedback.
- [ ] Implement proper routing for authenticated and unauthenticated users.
- [ ] Add a loading state for API requests.
- [ ] Improve the edit todo functionality.

### **Testing**
- [ ] Add unit tests for the backend.
- [ ] Implement integration tests for the API.
- [ ] Add E2E tests for the frontend.

### **Security**
- [ ] Add CSRF protection.
- [ ] Implement request sanitization.
- [ ] Add rate limiting for API requests.

---

## **Lessons Learned**

1. **Deployment**:
   - Learned how to deploy a backend to Render and a frontend to Vercel.
   - Understood the importance of environment variables and how to manage them.

2. **Full-Stack Development**:
   - Gained hands-on experience with building a RESTful API.
   - Learned how to connect a frontend to a backend using Axios.

3. **React**:
  Note: I dont know react properly i learned basic stuufs from googling and AI and v0
   - Built a functional React app with minimal knowledge.
   - Learned how to manage state and props in React.
   - Understood the importance of reusable components.

4. **Clean Code**:
   - Realized the importance of writing clean and maintainable code.
   - Learned how to structure a project for scalability.

---

## **Final Thoughts**

This project was a great learning experience. While the code is not perfect, it was a stepping stone for me to understand the full-stack development process. I plan to come back to this project once I learn more about React and improve it further. For now, I'm happy with what I've built and excited to continue learning! 🚀

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.