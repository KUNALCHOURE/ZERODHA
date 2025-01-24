# Zerodha Clone

Zerodha Clone is a web application that replicates the core functionalities of the Zerodha trading platform. It provides users with features like holding and position tracking, order management, and real-time data updates. The frontend is developed using React, while the backend is built with Node.js, Express, and MongoDB.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Backend Structure](#backend-structure)
- [Frontend Structure](#frontend-structure)
- [Screenshots](#screenshots)
- [Disclaimer](#disclaimer)
- [License](#license)

## Project Overview
Zerodha Clone is designed to simulate an online stock trading experience. It offers essential tools and features for managing holdings, tracking positions, and executing trades in a secure and responsive environment.

## Features
- Display and manage holdings with real-time updates.
- Track positions with detailed statistics.
- Authentication for secure access to user accounts.
- Order management for buy/sell actions.
- Responsive UI for desktop and mobile devices.

## Tech Stack
- **Frontend:** React, React Router, CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Others:** Axios, CORS, bcrypt for password hashing, dotenv for environment variables.

## Getting Started

### Prerequisites
- Node.js and npm installed.
- MongoDB instance running locally or a MongoDB Atlas cluster.

---

### Project Setup Guide

## Backend Setup

### 1. Clone the Repository
```bash
git clone https://github.com/username/zerodha-clone.git
cd zerodha-clone/backend
```
### 2.Install Backend dependencies 
``` bash
npm install
```
### 3.Configure Environment Variables
``` bash
MONGO_URL=<your-mongodb-connection-string>

```
### 4.Run the Backend Server
``` bash
npm start
```

## Frontend Setup

### 1. Navigate to the Frontend Directory

``` bash
cd ../frontend
```
### 2.Install Frontend Dependencies 
 ``` bash
 npm install
 ```

### 3.Start the React Development Server
``` bash
npm run dev
```

## Dashboard Srtucture

### 1. Navigate to the Dashboard Directory
```bash
cd ../dashboard
```
### 2. Install Dashboard Dependencies
``` bash
npm install
```
### 3. Run the Dashboard Server
``` bash
npm run dev
```

## Backend Structure

- **Models:**
  - `holdingmodel.js`: Manages user holdings.
  - `ordersmodel.js`: Tracks buy/sell orders.
  - `positionmodel.js`: Manages user positions.
  - `usermodel.js`: Handles user authentication and data.

- **Routes:** API endpoints for CRUD operations on holdings, orders, and positions.

- **Middleware:**
  - `cookie-parser`: For cookie management.
  - `cors`: For handling cross-origin requests.
  - `bcrypt`: For password hashing.


## Frontend Structure

- **Components:**
  - `Homepage`: The landing page.
  - `Dashboard`: For tracking holdings and positions.
  - `Navbar` and `Footer`: For navigation and layout.
  - `Authentication pages`: Includes Sign Up and Login.

- **Routes:** Configured with React Router for seamless navigation.

- **State Management:** Managed locally using `useState` and `useEffect`.

- **CSS Frameworks:**
  - **Bootstrap:** For components like forms, buttons, and modals.

## Screenshots

- **Homepage**:
 ![image](https://github.com/user-attachments/assets/758823e3-aa34-45da-bedc-6d446ea86aac)


<br> <br>

- **Login Page**:
  ![image](https://github.com/user-attachments/assets/35512110-878e-4abc-a589-06a2b33bbc83)


<br> <br>

- **Sign Up Page**:
  ![image](https://github.com/user-attachments/assets/fb166a1c-fd0d-477f-bf26-87695861582b)

- **Dashboard**:
  ![image](https://github.com/user-attachments/assets/6232c9a7-7e97-456a-ab1a-c4a215c2f0bf)

