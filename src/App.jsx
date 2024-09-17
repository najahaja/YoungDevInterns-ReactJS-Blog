import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Homepage from './Components/client/Homepage';
import BlogList from './Components/client/BlogList';
import BlogPost from './Components/client/BlogPost';
import AdminDashboard from './Components/admin/AdminDashboard';
import CreatePost from './Components/admin/CreatePost';
import EditPost from './Components/admin/EditPost';
import Footer from './Components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from './Components/About';
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/create" element={<CreatePost />} />
            <Route path="/admin/edit/:id" element={<EditPost />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
