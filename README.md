
# Project Title: RentEase Platform API

## Table of Contents
1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [API Endpoints](#api-endpoints)
5. [Authentication & Authorization](#authentication--authorization)
6. [Search and Filtering Logic](#search-and-filtering-logic)
7. [Image Upload](#image-upload)
8. [Contributing](#contributing)
9. [License](#license)


## Introduction
The Rentease Platform API allows vendors to create, edit, and manage their items, while regular users can view and search through items. This API also includes user authentication and authorization, with specific user roles and permissions.

## Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- Multer (for file uploads)
- Cors
- Nodemailer
- Reis/mongoose-to-json
- Bcryptjs
- Express-jwt:
- Joi
- Multer-savefilesorg
  

## Installation
Follow the steps below to set up the project locally:

1. Clone the repository:
  
    git clone https://github.com/EverythingDevs/rentease-api.git
  

2. Install the dependencies:
  
    npm i

3. Set up environment variables by creating a `.env` file:
  
    PORT=3010
    MONGO_URI=your-database-url
    JWT_PRIVATE_KEY=your-jwt-secret
    SAVEFILESORG_API_KEY=your-savefilesorgapikey
  

4. Start the server:
    npm start

## API Endpoints
Here are the key API endpoints:

### 1. Item Endpoints
- POST /items  
  - Description: Allows vendors to create a new item.
  - Permissions: Vendors only.
  - Request Body:
    ```json
    {
      "title": "Item Title",
      "category": "Category",
      "price": 100,
      "description": "Details of the item"
    }
    ```
  
- GET /items  
  - Description: Retrieves a list of all items.
  - Permissions: Accessible to all users.
  - Response: List of all items.
  
- GET /items/:id  
  - Description: Retrieves details of a specific item.
  - Permissions: Accessible to all users.
  - Response: Item details.
  
- PATCH /item/:id  
  - Description: Allows vendors to update their item.
  - Permissions: Vendors only (can only update their own item).
  - Request Body: Similar to the POST request body.
  
- DELETE /items/:id  
  - Description: Allows vendors to delete their item.
  - Permissions: Vendors only (can only delete their own item).

### 2. User Authentication Endpoints
- POST /users/register/ 
  - Description: Allows users to sign up (vendor or regular user).
  - Request Body:
    ```json
    {
      "name": "username",
      "email": "user valid email",
      "password": "password",
      "role": "user" // or "admin",
    }
    ```
  
- POST /users/login  
  - Description: Allows users to log in.
  - Request Body:
    ```json
    {
      "username": "user123",
      "password": "password"
    }
    ```
  - Response: JWT token for accessing protected routes.

## Authentication & Authorization
This API uses JSON Web Tokens (JWT) for authentication.  
User Roles:
- Vendor User: Can create, edit, and delete their own items.
- Regular User: Can only view adverts.

### Protected Routes:
- Vendors must provide a valid JWT in the `Authorization` header for creating, updating, or deleting items:
    ```plaintext
    Authorization: Bearer <your-jwt-token>
    ```

## Search and Filtering Logic
Users can search and filter adverts based on the following criteria:
- Title: Search by item title.
- Category: Filter item by category.
- Price: Filter item by price range.

Search and filtering functionality is implemented server-side to ensure efficient query performance.

### Example:
- GET /adverts?title=sonata&category=self contain&minPrice=100&maxPrice=500

## Image Upload
Vendors can upload images while creating an item. The API handles image uploads using `Multer` middleware and stores the images in the backend.

### Example:
  - POST /items (with image upload)
  - Content-Type: `multipart/form-data`
  - Form Data: Includes the image file in addition to the item data.

## Contributing
Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-branch
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Added new feature"
    ```
4. Push to your branch:
    ```bash
    git push origin feature-branch
    ```
5. Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
