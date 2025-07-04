import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { BookOpen, PenTool, Users, ArrowRight } from 'lucide-react';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center py-12">
        <div className="flex justify-center mb-6">
          <BookOpen className="h-16 w-16 text-primary-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to MERN Blog
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A modern blog platform built with the MERN stack. Share your thoughts, 
          read amazing stories, and connect with other writers.
        </p>
        
        {!isAuthenticated ? (
          <div className="flex justify-center space-x-4">
            <Link to="/register" className="btn btn-primary">
              Get Started
            </Link>
            <Link to="/posts" className="btn btn-secondary">
              Browse Posts
            </Link>
          </div>
        ) : (
          <div className="flex justify-center space-x-4">
            <Link to="/posts/create" className="btn btn-primary">
              Create Post
            </Link>
            <Link to="/posts" className="btn btn-secondary">
              View Posts
            </Link>
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 py-12">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <PenTool className="h-12 w-12 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Write & Share</h3>
          <p className="text-gray-600">
            Create beautiful blog posts with rich text editing and share your stories with the world.
          </p>
        </div>
        
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <BookOpen className="h-12 w-12 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Discover Content</h3>
          <p className="text-gray-600">
            Explore posts from other writers, discover new perspectives, and learn from the community.
          </p>
        </div>
        
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Users className="h-12 w-12 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Connect</h3>
          <p className="text-gray-600">
            Join a community of writers and readers. Comment, like, and engage with content you love.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Writing?</h2>
        <p className="text-gray-600 mb-6">
          Join our community and start sharing your stories today.
        </p>
        <Link 
          to={isAuthenticated ? "/posts/create" : "/register"} 
          className="inline-flex items-center space-x-2 btn btn-primary"
        >
          <span>{isAuthenticated ? 'Create Your First Post' : 'Join Now'}</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default Home; 