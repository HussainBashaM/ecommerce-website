import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Welcome to E-Commerce</h1>
      <p>Full-stack e-commerce platform built with React, Node.js, and MongoDB</p>
      <div className="features">
        <h2>Features Coming Soon:</h2>
        <ul>
          <li>Product Catalog</li>
          <li>Shopping Cart</li>
          <li>User Authentication</li>
          <li>Order Management</li>
          <li>Admin Dashboard</li>
        </ul>
      </div>
    </div>
  )
}

export default App
