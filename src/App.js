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
import Signup from './components/Signup';
import Signin from './components/Signin';

function App() {
    return (
        <div>
            <BrowserRouter>
            <Header />
                <Routes>
                    {/* <Route> */}
                        <Route path='/' element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="post" element={<Post />} />
                        <Route path="list" element={<List />} />
                        <Route path="signup" element={<Signup />} />
                        <Route path="signin" element={<Signin />} />
                        
                        <Route path="*" element="error" />
                    {/* </Route> */}
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
