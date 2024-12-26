# 🚀 Express.js Backend API

A robust and scalable backend API built with Express.js, MongoDB, and Node.js.

![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

## 📋 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Endpoints](#-api-endpoints)
- [Configuration](#-configuration)
- [Dependencies](#-dependencies)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- User registration with input validation
- Password hashing for security
- JWT token generation for authentication
- MongoDB integration for data storage
- Express.js for efficient routing and middleware support

## 🛠 Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Set up environment variables:
   Create a \`.env\` file in the root directory and add the following:
   \`\`\`
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   \`\`\`

## 🚀 Usage

To start the server:

\`\`\`bash
npm start
\`\`\`

The server will start running on \`http://localhost:3000\` (or the port specified in your environment variables).

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /        | Hello World message |
| POST   | /user/register | Register a new user |

### User Registration

\`POST /user/register\`

Request body:
\`\`\`json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword"
}
\`\`\`

Response:
\`\`\`json
{
  "user": {
    "_id": "user_id",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com"
  },
  "token": "jwt_token"
}
\`\`\`

## ⚙️ Configuration

The application uses environment variables for configuration. Make sure to set up the following variables in your \`.env\` file:

- \`PORT\`: The port on which the server will run (default: 3000)
- \`MONGO_URI\`: MongoDB connection string
- \`JWT_SECRET\`: Secret key for JWT token generation

## 📦 Dependencies

- express
- mongoose
- dotenv
- cors
- bcrypt
- jsonwebtoken
- express-validator

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

