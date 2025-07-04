#!/bin/bash

echo "🚀 Setting up MERN Blog Application..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v18 or higher."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18 or higher is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Setup backend
echo "📦 Setting up backend..."
cd server

# Install dependencies
if [ ! -d "node_modules" ]; then
    echo "Installing server dependencies..."
    npm install
else
    echo "Server dependencies already installed."
fi

# Create .env file if it doesn't exist
if [ ! -f ".env" ]; then
    echo "Creating .env file..."
    cp env.example .env
    echo "⚠️  Please edit server/.env file with your MongoDB connection and JWT secret."
else
    echo "✅ .env file already exists."
fi

cd ..

# Setup frontend
echo "📦 Setting up frontend..."
cd client

# Install dependencies
if [ ! -d "node_modules" ]; then
    echo "Installing client dependencies..."
    npm install
else
    echo "Client dependencies already installed."
fi

cd ..

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit server/.env file with your MongoDB connection string and JWT secret"
echo "2. Start MongoDB (if running locally)"
echo "3. Start the backend server: cd server && npm run dev"
echo "4. Start the frontend server: cd client && npm run dev"
echo "5. Open http://localhost:3000 in your browser"
echo ""
echo "Happy coding! 🚀" 