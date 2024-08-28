# Finance Dashboard App

This is a **Finance Dashboard** application built using the MERN stack (MongoDB, Express.js, React, Node.js). The dashboard provides an interactive interface to monitor financial metrics like Revenue, Profit, Expenses, and more. It also includes visualizations for campaigns, product prices, recent transactions, and machine learning-based predictions.

## Features

- **Revenue and Expenses Tracking**: Visualizes revenue and expenses across different months.
- **Profit and Revenue Analysis**: Compares profit margins against revenue.
- **Operational vs Non-Operational Expenses**: Shows a breakdown of operational and non-operational expenses.
- **Product Prices vs Expenses**: Scatter plot to visualize product prices against expenses.
- **Recent Orders**: Displays the latest transactions with buyer details.
- **Expense Breakdown by Category**: Pie charts for expense categories like salaries, supplies, and services.
- **Machine Learning Predictions**: Predicts future financial metrics based on historical data using machine learning algorithms.

## Project Structure

The project is divided into two main parts:

1. **Client**: This is the frontend built with React.js, utilizing Material-UI for design components and charts.
2. **Server**: The backend is powered by Node.js and Express.js, serving RESTful API endpoints. MongoDB is used as the database to store financial data. Machine learning models are integrated into the backend to provide predictive analytics.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: v14 or higher
- **npm** or **yarn**
- **MongoDB**: v4.4 or higher
- **Fly.io CLI** (if you wish to deploy to Fly.io)
- **Vercel CLI** (if you wish to deploy to Vercel)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/naeem0512/finance-app.git
   cd finance-app
   ```
2. **Install dependencies for both client and server**:
   ```bash
   # Navigate to the client directory
   cd client
   npm install

   # Navigate to the server directory
   cd ../server
   npm install
   ```
3.	**Create a .env file in the server directory with the following variables**:
   ```env
   PORT=3000
   MONGO_URL=<Your MongoDB connection string>
  ```
4. **Create a .env.local file in the client directory with the following variable**:
   ```env
   VITE_BASE_URL=https://your-backend-url.fly.dev
   ```
