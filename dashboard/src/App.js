import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Add from './components/Add';
import AddCategory from './components/AddCategory';
import CategoryList from './components/CategoryList';
import Home from './components/Home';
import PostList from './components/PostList';
import Signin from './components/Signin';
import EditPost from './components/EditPost';
import EditCategory from './components/Editcategory';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/addCategory' element={<AddCategory />} />
                    <Route path='/categoryList' element={<CategoryList />} />
                    <Route path='/addPost' element={<Add />} />
                    <Route path='/postList' element={<PostList />} />
                    <Route path='/signIn' element={<Signin />} />
                    <Route path='/editCategory/:id' element={<EditCategory />} />
                    <Route path='/editPost/:id' element={<EditPost />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
