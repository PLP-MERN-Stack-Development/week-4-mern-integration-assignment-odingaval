[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19893354&assignment_repo_type=AssignmentRepo)
# MERN Blog Application

A full-stack blog application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring user authentication, CRUD operations for blog posts, and a modern responsive UI.

## 🚀 Features

### Backend Features
- **User Authentication**: JWT-based authentication with registration and login
- **Blog Posts**: Full CRUD operations for blog posts
- **Categories**: Create and manage post categories
- **Input Validation**: Server-side validation using express-validator
- **Security**: Password hashing with bcrypt, rate limiting, and helmet security headers
- **File Upload**: Support for featured images (structure ready)
- **Comments**: Comment system for blog posts (model ready)

### Frontend Features
- **Modern UI**: Clean, responsive design with Tailwind CSS
- **User Authentication**: Login/Register forms with validation
- **Blog Management**: Create, read, update, and delete posts
- **Category Management**: Select categories when creating posts
- **Protected Routes**: Authentication-based route protection
- **Real-time Feedback**: Toast notifications for user actions
- **Loading States**: Proper loading indicators throughout the app

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **express-validator** - Input validation
- **helmet** - Security headers
- **express-rate-limit** - Rate limiting
- **cors** - Cross-origin resource sharing

### Frontend
- **React.js** - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **React Hot Toast** - Toast notifications
- **Vite** - Build tool and dev server

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### 1. Clone the Repository
```bash
git clone <repository-url>
cd week-4-mern-integration-assignment-odingaval
```

### 2. Backend Setup
```bash
cd server

# Install dependencies
npm install

# Create environment file
cp env.example .env

# Edit .env file with your configuration
# MONGODB_URI=mongodb://localhost:27017/mern-blog
# JWT_SECRET=your-super-secret-jwt-key
# PORT=5000

# Start development server
npm run dev
```

### 3. Frontend Setup
```bash
cd client

# Install dependencies
npm install

# Start development server
npm run dev
```

### 4. Database Setup
Make sure MongoDB is running locally or update the `MONGODB_URI` in your `.env` file to point to your MongoDB instance.

## 🔧 Environment Variables

### Backend (.env)
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/mern-blog

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=24h

# File Upload Configuration
MAX_FILE_SIZE=5242880
UPLOAD_PATH=./uploads

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

## 📚 API Documentation

### Authentication Endpoints

#### Register User
```
POST /api/auth/register
Content-Type: application/json

{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

#### Login User
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "string",
  "password": "string"
}
```

### Post Endpoints

#### Get All Posts
```
GET /api/posts
```

#### Get Single Post
```
GET /api/posts/:id
```

#### Create Post (Protected)
```
POST /api/posts
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "string",
  "content": "string",
  "category": "categoryId",
  "excerpt": "string",
  "tags": ["string"],
  "isPublished": boolean
}
```

#### Update Post (Protected)
```
PUT /api/posts/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "string",
  "content": "string",
  "category": "categoryId",
  "excerpt": "string",
  "tags": ["string"],
  "isPublished": boolean
}
```

#### Delete Post (Protected)
```
DELETE /api/posts/:id
Authorization: Bearer <token>
```

### Category Endpoints

#### Get All Categories
```
GET /api/categories
```

#### Create Category
```
POST /api/categories
Content-Type: application/json

{
  "name": "string",
  "description": "string"
}
```

## 🏗️ Project Structure

```
week-4-mern-integration-assignment-odingaval/
├── client/                          # React frontend
│   ├── src/
│   │   ├── components/              # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── LoadingSpinner.jsx
│   │   ├── contexts/                # React contexts
│   │   │   └── AuthContext.jsx
│   │   ├── pages/                   # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── PostList.jsx
│   │   │   ├── PostDetail.jsx
│   │   │   ├── CreatePost.jsx
│   │   │   └── EditPost.jsx
│   │   ├── services/                # API services
│   │   │   └── api.js
│   │   ├── App.jsx                  # Main app component
│   │   ├── main.jsx                 # App entry point
│   │   └── index.css                # Global styles
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
├── server/                          # Node.js backend
│   ├── controllers/                 # Route controllers
│   │   ├── authController.js
│   │   ├── postController.js
│   │   └── categoryController.js
│   ├── middleware/                  # Custom middleware
│   │   └── auth.js
│   ├── models/                      # Mongoose models
│   │   ├── User.js
│   │   ├── Post.js
│   │   └── Category.js
│   ├── routes/                      # API routes
│   │   ├── auth.js
│   │   ├── posts.js
│   │   └── categories.js
│   ├── uploads/                     # File uploads directory
│   ├── package.json
│   ├── server.js                    # Main server file
│   └── env.example                  # Environment variables example
├── README.md
└── Week4-Assignment.md
```

## 🚀 Usage

### Starting the Application

1. **Start the backend server:**
   ```bash
   cd server
   npm run dev
   ```
   The server will start on `http://localhost:5000`

2. **Start the frontend development server:**
   ```bash
   cd client
   npm run dev
   ```
   The client will start on `http://localhost:3000`

3. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`

### Using the Application

1. **Register/Login**: Create an account or sign in to access protected features
2. **Browse Posts**: View all published blog posts on the posts page
3. **Create Posts**: Authenticated users can create new blog posts
4. **Edit Posts**: Users can edit their own posts
5. **View Post Details**: Click on any post to view its full content

## 🔒 Security Features

- **Password Hashing**: All passwords are hashed using bcrypt
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Server-side validation for all inputs
- **Rate Limiting**: Protection against brute force attacks
- **Security Headers**: Helmet.js for additional security
- **CORS Configuration**: Proper cross-origin resource sharing setup

## 🎨 UI/UX Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern Interface**: Clean, intuitive design with Tailwind CSS
- **Loading States**: Proper loading indicators for better UX
- **Error Handling**: User-friendly error messages
- **Toast Notifications**: Real-time feedback for user actions
- **Form Validation**: Client-side and server-side validation

## 🧪 Testing

To test the application:

1. **Register a new user** and verify the account is created
2. **Login** with the created credentials
3. **Create a blog post** and verify it appears in the posts list
4. **Edit the post** and verify changes are saved
5. **View post details** and verify all information is displayed correctly
6. **Test authentication** by trying to access protected routes without login

## 📝 Future Enhancements

- [ ] Image upload functionality for post featured images
- [ ] Comment system implementation
- [ ] Search and filtering functionality
- [ ] Pagination for posts list
- [ ] User profile management
- [ ] Admin panel for managing users and content
- [ ] Rich text editor for post content
- [ ] Social media sharing
- [ ] Email notifications
- [ ] Unit and integration tests

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

This project was created as part of the Week 4 MERN Stack Integration Assignment.

---

**Note**: Make sure to update the MongoDB connection string and JWT secret in the environment variables before deploying to production. 