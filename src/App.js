import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from './components/Post';
import List from './components/List';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="post/:id" element={<Post />} />
                    <Route path="list" element={<List />} />
                    <Route path="*" element="error" />
                </Routes>
                <Footer />
            </BrowserRouter>

        </div>
    );
}

export default App;
