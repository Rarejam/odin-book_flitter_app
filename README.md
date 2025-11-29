# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Flitter App

A full-stack social media application inspired by Twitter.

Project Description

Flitter is a social media application where users can create posts, like, comment, follow others, and interact in real time.
It includes a full authentication system using JWT, a React frontend, and an Express + Prisma + PostgreSQL backend.

This project was built to practice and demonstrate:

Frontend development with React

Making API requests with Axios

Implementing secure JWT authentication

Backend development with Express

Working with Prisma ORM and PostgreSQL

Structuring clean, readable, and maintainable code

This project can also serve as a foundation for:

Private messaging

Group chats

Comment sections

Larger real-time applications

Features

Real-time chatting

Twitter-style scrolling feed

Likes, comments, and follow system

Fast and responsive UI

JWT authentication

Clean and modular project structure

Simple and minimal user interface

Technologies Used
Frontend

React

React DOM

Axios

CSS3

Vite

Backend

Node.js / Express

Prisma ORM

PostgreSQL

JSON Web Tokens (JWT)



How to Run This Project Locally
1. Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

2. Navigate into the project
cd YOUR_REPO_NAME

Running the Frontend
Install dependencies
npm install

Start the development server
npm run dev


Vite will run the app at something like:

http://localhost:5173

Running the Backend
Navigate to the backend folder 
cd backend

Install dependencies
npm install

Set up environment variables

Create a .env file with:

DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/flitter"
JWT_SECRET="your_secret_key"

Run database migrations
npx prisma migrate dev

Start the backend server
npm run dev


Backend typically runs at:

http://localhost:3000
