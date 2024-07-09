# Sunspects - Sunglasses Ecommerce Shop

Sunspects is an ecommerce website for buying sunglasses, built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It includes a home page, category-wise men and women sunglasses pages, a cart system, and an admin panel.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)

## Demo

![Demo Screenshot](https://github.com/nishantvekariya1/sunglasses_shop/blob/master/Screenshots/1.png)
![Demo Screenshot](https://github.com/nishantvekariya1/sunglasses_shop/blob/master/Screenshots/2.png)
![Demo Screenshot](https://github.com/nishantvekariya1/sunglasses_shop/blob/master/Screenshots/3.png)
![Demo Screenshot](https://github.com/nishantvekariya1/sunglasses_shop/blob/master/Screenshots/4.png)
![Demo Screenshot](https://github.com/nishantvekariya1/sunglasses_shop/blob/master/Screenshots/5.png)
![Demo Screenshot](https://github.com/nishantvekariya1/sunglasses_shop/blob/master/Screenshots/6.png)
![Demo Screenshot](https://github.com/nishantvekariya1/sunglasses_shop/blob/master/Screenshots/7.png)
![Demo Screenshot](https://github.com/nishantvekariya1/sunglasses_shop/blob/master/Screenshots/8.png)
![Demo Screenshot](https://github.com/nishantvekariya1/sunglasses_shop/blob/master/Screenshots/9.png)
![Demo Screenshot](https://github.com/nishantvekariya1/sunglasses_shop/blob/master/Screenshots/10.png)
![Demo Screenshot](https://github.com/nishantvekariya1/sunglasses_shop/blob/master/Screenshots/11.png)
![Demo Screenshot](https://github.com/nishantvekariya1/sunglasses_shop/blob/master/Screenshots/12.png)
![Demo Screenshot](https://github.com/nishantvekariya1/sunglasses_shop/blob/master/Screenshots/13.png)
![Demo Screenshot](https://github.com/nishantvekariya1/sunglasses_shop/blob/master/Screenshots/14.png)
![Demo Screenshot](https://github.com/nishantvekariya1/sunglasses_shop/blob/master/Screenshots/15.png)

## Features

- **Home Page**: An overview of the shop with featured products.
- **Category-wise Pages**: Separate pages for men's and women's sunglasses.
- **Cart System**: Add to cart, view cart, and manage cart items.
- **Admin Panel**: Restricted access for administrators to manage products and orders.

## Technologies Used

- **MongoDB**: NoSQL database for storing product and user data
- **Express.js**: Web application framework for Node.js
- **React.js**: Frontend library for building user interfaces
- **Node.js**: JavaScript runtime for server-side development
- **Mongoose**: ODM for MongoDB
- **JWT**: JSON Web Tokens for authentication

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/nishantvekariya1/sunglasses_shop
    ```

2. Install the dependencies for both the client and server:
    ```bash
    # In the server directory
    cd server
    npm install

    # In the client directory
    cd client
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    # In the server directory
    MONGO_URI=your_mongodb_url 
    JWT_SECRET_KEY=your_jwt_secret_key
    PORT=write_your_port_here

     # In the client directory
    VITE_APP_URI_API=your_backend_url
    VITE_FIREBASE_API_KEY=your_firebase_api_key
    ```

4. Start the development servers:
    ```bash
    # In the server directory
    cd server
    npm run dev

    # In the client directory
    cd client
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:5173` to view the Sunspects ecommerce website.
