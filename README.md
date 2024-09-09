Here’s the revised README for **SoftLearn**, tailored for a personal LMS platform similar to Becodemy:

---

# SoftLearn - Personal Learning Management System

## Overview

**SoftLearn** is a comprehensive Learning Management System designed for personal use. It enables you to sell courses, teach students, post videos, and manage your educational content effectively. The backend is built with **NestJS** and **MongoDB**, while the frontend utilizes **Next.js** for a dynamic and responsive user experience. Both the backend and frontend are tested with unit and integration tests to ensure a reliable and smooth operation. Docker is used to manage the frontend and backend environments separately.

---

## Table of Contents

1. [Project Features](#project-features)
2. [Tech Stack](#tech-stack)
3. [Project Setup](#project-setup)
4. [Backend Structure (NestJS)](#backend-structure-nestjs)
    - [Installation](#installation)
    - [Available Scripts](#available-scripts)
5. [Frontend Structure (Next.js)](#frontend-structure-nextjs)
    - [Installation](#installation-1)
    - [Available Scripts](#available-scripts-1)
6. [Docker Setup](#docker-setup)
7. [Testing](#testing)
8. [API Endpoints](#api-endpoints)
9. [Environment Variables](#environment-variables)
10. [Contributing](#contributing)
11. [License](#license)

---

## Project Features

- **Course Management**: Create and manage your own courses.
- **Student Enrollment**: Allow students to enroll in your courses.
- **Content Delivery**: Upload and organize videos, lectures, and other learning materials.
- **Progress Tracking**: Monitor student progress and course completion.
- **Sales Management**: Sell courses and manage transactions.
- **Authentication**: Secure login and access management.
- **Unit and Integration Testing**: Ensure the reliability of your system with comprehensive tests.

---

## Tech Stack

- **Backend**: NestJS, MongoDB (NoSQL database), JWT for authentication
- **Frontend**: Next.js, React, TailwindCSS
- **Database**: MongoDB
- **Containerization**: Docker
- **Testing**: Jest (backend and frontend), Supertest (backend), React Testing Library (frontend)

---

## Project Setup

### Prerequisites

- Node.js >= 16.x
- MongoDB
- Docker (for containerization)
- npm

---

## Backend Structure (NestJS)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/softlearn-backend.git
   cd softlearn-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the MongoDB database and environment variables:
   - Create a `.env` file in the root directory with the following content:
     ```
     MONGO_URI=mongodb://localhost:27017/softlearn
     JWT_SECRET=your_secret_key
     PORT=3000
     ```

4. Start the backend server:
   ```bash
   npm run start:dev
   ```

### Available Scripts

- **`npm run start:dev`**: Start the development server.
- **`npm run start:prod`**: Start the production server.
- **`npm test`**: Run all unit and integration tests.
- **`npm run lint`**: Lint the codebase.
- **`npm run format`**: Format the codebase.

---

## Frontend Structure (Next.js)

### Installation

1. Clone the frontend repository:
   ```bash
   git clone https://github.com/yourusername/softlearn-frontend.git
   cd softlearn-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env.local` file in the root directory with the following content:
     ```
     NEXT_PUBLIC_API_URL=http://localhost:3000/api
     ```

4. Start the frontend server:
   ```bash
   npm run dev
   ```

### Available Scripts

- **`npm run dev`**: Start the Next.js development server.
- **`npm run build`**: Build the application for production.
- **`npm start`**: Start the production server.
- **`npm run lint`**: Lint the codebase.
- **`npm test`**: Run frontend unit and integration tests.

---

## Docker Setup

You can run both the frontend and backend in Docker containers.

### Backend Docker Setup

1. Create a `Dockerfile` for the backend:
   ```dockerfile
   FROM node:16-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   EXPOSE 3000
   CMD ["npm", "run", "start:prod"]
   ```

2. Build and run the backend container:
   ```bash
   docker build -t softlearn-backend .
   docker run -p 3000:3000 softlearn-backend
   ```

### Frontend Docker Setup

1. Create a `Dockerfile` for the frontend:
   ```dockerfile
   FROM node:16-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   EXPOSE 3000
   CMD ["npm", "run", "build"]
   ```

2. Build and run the frontend container:
   ```bash
   docker build -t softlearn-frontend .
   docker run -p 3001:3000 softlearn-frontend
   ```

### Docker Compose (optional)

Use `docker-compose` to run both the backend and frontend together:

1. Create a `docker-compose.yml` file:
   ```yaml
   version: '3'
   services:
     backend:
       build: ./backend
       ports:
         - "3000:3000"
       environment:
         MONGO_URI: mongodb://mongo:27017/softlearn
         JWT_SECRET: your_secret_key
       depends_on:
         - mongo

     frontend:
       build: ./frontend
       ports:
         - "3001:3000"
       environment:
         NEXT_PUBLIC_API_URL: http://localhost:3000/api

     mongo:
       image: mongo
       ports:
         - "27017:27017"
   ```

2. Run the application:
   ```bash
   docker-compose up --build
   ```

---

## Testing

**SoftLearn** includes unit and integration tests to verify the functionality of both the backend and frontend.

### Backend Tests (NestJS)

- **Unit Tests**: Ensure individual services, controllers, and utilities work correctly.
- **Integration Tests**: Verify interactions between services and MongoDB.

Run backend tests:
```bash
npm test
```

### Frontend Tests (Next.js)

- **Unit Tests**: Test React components and hooks.
- **Integration Tests**: Validate user flows such as course enrollment and video playback.

Run frontend tests:
```bash
npm test
```

---

## API Endpoints

### Authentication
- `POST /auth/register`: Register a new user.
- `POST /auth/login`: Log in and get a JWT token.

### Courses
- `GET /courses`: Retrieve a list of your courses.
- `POST /courses`: Create a new course.
- `GET /courses/:id`: Get details of a specific course.
- `PUT /courses/:id`: Update an existing course.
- `DELETE /courses/:id`: Delete a course.

### Enrollments
- `POST /courses/:id/enroll`: Enroll in a course.
- `GET /users/:id/enrollments`: View all courses you are enrolled in.

---

## Environment Variables

Configure the following environment variables:

### Backend (NestJS)
```bash
MONGO_URI=mongodb://localhost:27017/softlearn
JWT_SECRET=your_jwt_secret_key
PORT=3000
```

### Frontend (Next.js)
```bash
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

---

## Contributing

As **SoftLearn** is intended for personal use, contributions are not expected. However, if you have suggestions or improvements, feel free to create a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This README provides an overview of how to set up, run, and test **SoftLearn**, a personal Learning Management System for selling courses, teaching, and posting videos. It includes instructions for both local development and Docker-based deployment.