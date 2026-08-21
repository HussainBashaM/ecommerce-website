# E-Commerce Website

A full-stack e-commerce platform built with React, Node.js, and MongoDB.

## Tech Stack

- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Authentication**: JWT

## Project Structure

```
ecommerce-website/
├── frontend/          # React application
├── backend/           # Node.js API
└── package.json       # Root package.json (monorepo)
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB

### Installation

```bash
# Install all dependencies
npm install

# Start development servers
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend

```bash
cd backend
npm install
npm run dev
```

The backend API will be available at `http://localhost:5000`

## Features

- [x] Product catalog with search and filtering
- [x] User authentication (Login/Register)
- [x] Shopping cart functionality
- [x] Order management
- [x] Admin dashboard
- [ ] Payment integration (Stripe)
- [ ] Product reviews and ratings
- [ ] Wishlist functionality

## Environment Variables

Create `.env` files in both frontend and backend directories with required variables.

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

### Frontend (.env.local)
```
VITE_API_URL=http://localhost:5000/api
```

## License

MIT
