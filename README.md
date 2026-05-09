## 📝 Notes API (Backend)

A RESTful API for a Notes Application built using Node.js, Express, and MongoDB.
This project demonstrates user authentication and secure CRUD operations for managing personal notes.

---

## 🚀 Features

- 🔐 JWT-based Authentication
- 👤 User Registration & Login
- 📝 Create, Read, Update, Delete Notes
- 🔒 Protected Routes (only authorized users can access their notes)
- 🧠 User-specific data handling

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Token (JWT)

---

## 🔑 API Endpoints
### 🔐 Auth Routes
- Register User
  ```bash
  POST /api/register
  ```
- Login User
  ```bash
  POST /api/login
  ```

### 📝 Notes Routes
- Get All Notes (Protected)
  ```
  GET /api/notes
  ```
- Create Note (Protected)
  ```
  POST /api/notes
  ```
- Update Note (Protected)
  ```
  PUT /api/notes/:id
  ```
- Delete Note (Protected)
  ```
  DELETE /api/notes/:id
  ```
  ---
## 📚 Key Learnings
- Building RESTful APIs
- Implementing JWT authentication
- Protecting routes with middleware
- Structuring a Node.js backend
- Handling user-specific data securely


