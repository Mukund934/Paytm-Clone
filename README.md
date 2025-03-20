
# Paytm Clone 

![Preview Image](./preview.png)

A full-stack Paytm clone application that lets users sign up, sign in, update their profile, view account balances, and transfer money to one another—all using an initial dummy balance. This project uses a modern tech stack including Express, MongoDB, React, Vite, and Tailwind CSS to mimic the fundamental features of a digital wallet.

## Table of Contents

- [Tech Stacks](#tech-stacks)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Notes](#notes)

## 🔧 Tech Stacks

- **Backend:**
  - **Express:** HTTP server and routing.
  - **Mongoose:** ODM for MongoDB.
  - **Zod:** Schema validation.
  - **JSON Web Token:** For authentication.
- **Frontend:**
  - **React:** For building interactive user interfaces.
  - **Vite:** A fast build tool and development server.
  - **Tailwind CSS:** For efficient and responsive styling.
- **Database:**
  - **MongoDB:** NoSQL database (Atlas or local via Docker).

## ✨ Features

- **User Authentication:**
  - Allow users to sign up and sign in.
  - JWT-based authentication for secure access.
- **User Profile Management:**
  - Update personal information: first name, last name, and password.
- **Digital Wallet:**
  - Assign an initial dummy balance to new users.
  - Display account balances.
  - Transfer money between user accounts with proper validations.
- **Responsive UI:**
  - Modern, responsive design built with React and styled with Tailwind CSS.

## 🚀 Demo

[View Live Demo](https://your-live-demo-url.com)

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Mukund934/Paytm-Clone.git
cd Paytm-Clone
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory with:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

## 🚀 Running the Application

### Locally

- **Backend:**  
  In the `backend` folder, run:
  ```bash
  npx nodemon index.js
  ```
- **Frontend:**  
  In the `frontend` folder, run:
  ```bash
  npm run dev
  ```
Open your browser at [http://localhost:5173](http://localhost:5173).

### Deploying

- **Frontend:** Deploy on Vercel by importing the `frontend` folder.
- **Backend:** Deploy on Render as a Web Service using the `backend` folder.

## 📚 Usage

- **Sign Up:**  
  Create a new account by providing your email, first name, last name, and password. On successful signup, you'll receive a JWT token.
- **Sign In:**  
  Access your account by signing in with your credentials.
- **Profile Update:**  
  Update your first name, last name, or password.
- **Transfer Money:**  
  Use the Send Money feature to transfer funds to other users, subject to sufficient balance.
- **Dashboard:**  
  View your current balance and a list of users.

## 🤝 Contributing

Contributions are welcome! To contribute:
1. **Fork the Repository**
2. **Create a Feature Branch:**
   ```bash
   git checkout -b feature/YourFeature
   ```
3. **Commit Your Changes:**
   ```bash
   git commit -m "Add feature description"
   ```
4. **Push to the Branch:**
   ```bash
   git push origin feature/YourFeature
   ```
5. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📝 Notes

This project was built as a learning exercise to replicate the core functionalities of a digital wallet like Paytm. It includes user authentication, profile management, and financial transactions. Ensure you have a valid MongoDB connection string before running the application.
