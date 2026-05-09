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
- Create Note (Protected)
  ```
  POST /api/notes
  ```
- Get All Notes (Protected)
  ```
  GET /api/notes
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

## 📮 Postman Collection
Postman collection Link - https://www.postman.com/kavindusandeepa1030-9864644/notes-api-workspace/collection/58w3sel/notes-api
You can test all API endpoints using the Postman collection included in this repository.

### Steps:
1. Download the collection from the /postman folder

2. Import it into Postman

3. Set environment variables:

    - base_url = http://localhost:5000
    - token = your JWT token
    
4. Start testing 🚀

---

## 📁 Project Structure
```
controllers/
models/
routes/
middleware/
```

---
  
## 📚 Key Learnings
- Building RESTful APIs
- Implementing JWT authentication
- Protecting routes with middleware
- Structuring a Node.js backend
- Handling user-specific data securely

---

## 🔮 Future Improvements
- Add input validation
- Add refresh tokens
- Implement role-based access
- Add logging and error handling
- Deploy to cloud (Render / AWS)

---


