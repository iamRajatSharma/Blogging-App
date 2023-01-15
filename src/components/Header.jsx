import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {

    const [cat, updatedCat] = useState([])

    async function getAllCat() {
        await fetch("http://localhost:12345/category/fetchAllCat")
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                updatedCat(resp)
            })
    }

    useEffect(() => {
        getAllCat()
    }, [])

    return (
        <>
            <div className="s-pageheader">
                <header className="header">
                    <div className="header__content row">
                        <div className="header__logo">
                            <Link className="logo" to="/">
                                <img src="images/logo.svg" alt="Homepage" />
                            </Link>
                        </div>
                        <ul className="header__social">
                            <li>
                                <Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                            </li>
                            <li>
                                <Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                            </li>
                            <li>
                                <Link to="/"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                            </li>
                            <li>
                                <Link to="/"><i className="fa fa-pinterest" aria-hidden="true"></i></Link>
                            </li>
                        </ul>
                        <Link className="header__search-trigger" to=""></Link>
                        <div className="header__search">
                            <label>
                                <span className="hide-content">Search for:</span>
                                <input type="search" className="search-field" placeholder="Type Keywords" name="s" title="Search for:" autoComplete="off" />
                            </label>
                            <input type="submit" className="search-submit" value="Search" />
                            <Link href="#0" title="Close Search" className="header__overlay-close">Close</Link>
                        </div>
                        <Link className="header__toggle-menu" href="#0" title="Menu"><span>Menu</span></Link>
                        <nav className="header__nav-wrap">
                            <h2 className="header__nav-heading h6">Site Navigation</h2>
                            <ul className="header__nav">
                                <li><Link to="/" title="">Home</Link></li>
                                <li className="has-children current">
                                    <Link href="#0">Categories</Link>
                                    <ul className="sub-menu">
                                        {
                                            cat.map((data, i) =>
                                                <li key={i}><Link to={"category/" + data.name}>{data.name}</Link></li>
                                            )
                                        }
                                    </ul>
                                </li>
                                <li><Link to="about">About</Link></li>
                                <li><Link to="contact">Contact</Link></li>
                            </ul>
                            <Link href="#0" title="Close Menu" className="header__overlay-close close-mobile-menu">Close</Link>
                        </nav>
                    </div>
                </header>
            </div>
        </>
    )
}
export default Header;