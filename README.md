# Gymdo-store | Fitness Equipment and Accessories

## Overview

Welcome to Gymdo-store, the ultimate e-commerce platform for fitness enthusiasts! Our site offers a seamless shopping experience with a wide range of fitness equipment and accessories. Featuring detailed product pages, a user-friendly cart system, and robust product management for administrators, Gymdo-store ensures a modern, efficient, and user-centric online store experience.

## Live URL

[Visit the Live Site](https://gymdo-store-client.vercel.app/)

## Features

- **Homepage**: Visually appealing with hero sections, product categories, featured products, benefits, image gallery, and footer.
- **Products Page**: Comprehensive listings with search, filtering, sorting options, and a "clear filter" button.
- **Product Details Page**: Detailed product info with add-to-cart functionality, ensuring no duplicate products.
- **Cart Page**: Lists cart items with quantity controls, removal options, and dynamic pricing details.
- **Checkout Page**: Collects user information, offers payment methods (Cash on Delivery, Stripe), and processes orders.
- **Product Management**: Admin interface for creating, updating, and deleting products with real-time UI updates.
- **About Us Page**: Company overview, team introduction, customer testimonials, and contact information.
- **Bonus Features**: Debounced search functionality and page refresh warnings to prevent cart data loss.
- **Optional Features**: Stripe payment integration and pagination for the products page.

## Technology Used

### Frontend

- **React**
- **Redux**
- **TailwindCSS**
- **shadcn**

### Backend

- **Node.js**
- **Express.js**
- **Mongoose**
- **TypeScript**

## Setup and Installation

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation Steps

1. **Clone the Repositories**

   ```bash
   # Frontend
   git clone https://github.com/mahamudulhasan-me/gymdo-store-client.git
   cd gymdo-store-client
   ```

   ```bash
   # Backend
   git clone https://github.com/mahamudulhasan-me/gymdo-store-server.git
   cd gymdo-store-server
   ```

2. **Install Dependencies**

   ```bash
   # For backend
   cd gymdo-store-server
   npm install
   # or
   yarn install

   # For frontend
   cd ../gymdo-store-client
   npm install
   # or
   yarn install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the backend directory and add the following variables:

   ```plaintext
   MONGO_URI=your-mongodb-connection-string
   STRIPE_SECRET_KEY=your-stripe-secret-key (if using Stripe)
   ```

4. **Run the Application**

   ```bash
   # Start the backend server
   cd gymdo-store-server
   npm run dev
   # or
   yarn dev

   # Start the frontend server
   cd ../gymdo-store-client
   npm start
   # or
   yarn start
   ```

5. **Access the Application**

   Open your browser and navigate to `http://localhost:5173/` for the frontend and `http://localhost:1440/` for the backend API.

## Important Information

### Folder Structure

- **backend**: Contains the Node.js, Express, and Mongoose codebase.
- **frontend**: Contains the React and Redux codebase.

### API Endpoints

- **Products**: `/api/products`
- **Cart**: `/api/cart`
- **Orders**: `/api/orders`
- **User**: `/api/user`

### Stripe Integration (Optional)

To enable Stripe payments, ensure you have the Stripe Secret Key in your environment variables and configure the frontend to handle Stripe payments.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.

---

Thank you for checking out Gymdo-store! We hope you have a great experience using our application.
