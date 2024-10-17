# Backend Authentication System

This is a simple **Node.js** backend authentication system using **Express**, **MongoDB**, **Mongoose**, **JWT (JSON Web Tokens)**, and **bcrypt** for password hashing. It includes functionalities for **user registration**, **login**, and **profile updates**.

## Features

- User **registration** with hashed passwords
- User **login** with JWT-based authentication
- **Update user profile** (username, email, password)
- Secure password hashing using **bcrypt**
- **JWT** for token-based authentication

## Folder Structure

```
backend-authentication/
│
├── controllers/       # Controller logic for handling requests
│   └── userController.js
│
├── models/            # Mongoose models (MongoDB schemas)
│   └── User.js
│
├── routes/            # Express routes
│   └── userRoutes.js
│
├── db.js              # MongoDB connection setup
├── server.js          # Main server entry point
└── package.json       # Project metadata and dependencies
```

## Installation

### Prerequisites

- **Node.js** installed (v14 or above)
- **MongoDB** (either MongoDB Atlas or a local instance)

### Step-by-step Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/backend-authentication.git
   cd backend-authentication
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure MongoDB Connection**:

   In the `db.js` file, replace the connection string with your MongoDB URI:

   ```js
   const mongoURL = 'your-mongo-db-connection-string';
   ```

4. **Start the server**:

   ```bash
   npx nodemon server.js
   ```

   The server will run on `http://localhost:5000`.

## API Endpoints

### User Registration

- **URL**: `/api/users/register`
- **Method**: `POST`
- **Description**: Registers a new user.
- **Request Body**:

```json
{
    "username": "example_username",
    "email": "example@example.com",
    "password": "password123"
}
```

- **Response**: Success message upon registration.

### User Login

- **URL**: `/api/users/login`
- **Method**: `POST`
- **Description**: Logs in a user and returns a JWT token.
- **Request Body**:

```json
{
    "email": "example@example.com",
    "password": "password123"
}
```

- **Response**: Returns JWT token and user details.

### Update User Profile

- **URL**: `/api/users/update`
- **Method**: `PUT`
- **Description**: Updates the logged-in user’s profile.
- **Request Body** (Example):

```json
{
    "userId": "user_object_id",
    "username": "new_username",
    "email": "new_email@example.com",
    "password": "new_password123"
}
```

- **Response**: Success message and updated user details.

## Technologies Used

- **Node.js**: JavaScript runtime
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB ORM
- **bcryptjs**: Password hashing
- **jsonwebtoken (JWT)**: Token-based authentication
- **nodemon**: Development utility for auto-restarting the server

## How to Run

1. **Install all dependencies**:

   ```bash
   npm install
   ```

2. **Start the server**:

   ```bash
   nodemon server.js
   ```

3. Use **Postman** or **curl** to test the API endpoints for registration, login, and updating user profiles.
