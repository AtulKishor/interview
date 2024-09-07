# Product Dashboard Application

This project is a React.js application that interacts with a product API to build a comprehensive dashboard. The application fetches, displays, filters, and sorts product data while providing detailed views and ensuring good performance and usability.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [State Management](#state-management)
- [API Reference](#api-reference)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Data Fetching**: Fetch product data from a given API and handle errors gracefully.
- **Product List**: Display products in a tabular format with columns for Title, Price, and Popularity.
- **Search Bar**: Filter products by title.
- **Filters**: Filter products by price and popularity ranges.
- **Sorting**: Sort products by price and popularity in ascending or descending order.
- **Pagination**: Display a limited number of products per page with navigation controls.
- **Product Details**: View detailed information about each product in a modal or separate route.
- **Responsive Design**: Optimized for mobile, tablet, and desktop views.
- **State Management**: Efficiently handle state with Redux and `createAsyncThunk` for API calls.
- **Error Handling**: Properly manage errors with React Router error elements.
- **Testing**: Includes unit tests for key components using Jest and React Testing Library.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Node.js (v14 or later)
- React-router-dom
- fontawesome
- bootstrap
- react-redux toolkit
- npm or yarn
- Git

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/product-dashboard.git
   cd product-dashboard

2. **Install dependencies**

    ```bash
    npm install


3. **Usage**
Run the Application

start local server to resolve CORS error
node .\src\proxy-server.js
The application will start on http://localhost:8080.

Start project 

npm start
The application will start on http://localhost:3000.

Build for Production

To create a production build, run:

bash

npm run build
Serve the Production Build

After building the project, you can serve it locally using:

bash

npx serve -s build
This will serve the build on http://localhost:5000 (or another available port).

API Reference
Product Data API: https://cdn.drcode.ai/interview-materials/products.json
Handling CORS: Use a proxy server if needed for CORS issues during development.
Testing
Jest and React Testing Library are used for testing components.

To run tests, use:

bash

npm test

