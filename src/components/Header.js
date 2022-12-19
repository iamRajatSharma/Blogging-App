import { Link } from 'react-router-dom';

function Header() {
    return (
        // <>
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
                        <form role="search" method="get" className="header__search-form" action="#">
                            <label>
                                <span className="hide-content">Search for:</span>
                                <input type="search" className="search-field" placeholder="Type Keywords" value="" name="s" title="Search for:" autoComplete="off" />
                            </label>
                            <input type="submit" className="search-submit" value="Search" />
                        </form>
                        <a href="#0" title="Close Search" className="header__overlay-close">Close</a>
                    </div>
                    <a className="header__toggle-menu" href="#0" title="Menu"><span>Menu</span></a>
                    <nav className="header__nav-wrap">
                        <h2 className="header__nav-heading h6">Site Navigation</h2>
                        <ul className="header__nav">
                            <li><Link to="/" title="">Home</Link></li>
                            <li className="has-children current">
                                <a href="#0" title="">Categories</a>
                                <ul className="sub-menu">
                                    <li><a href="category.html">Lifestyle</a></li>
                                    <li><a href="category.html">Health</a></li>
                                    <li><a href="category.html">Family</a></li>
                                    <li><a href="category.html">Management</a></li>
                                    <li><a href="category.html">Travel</a></li>
                                    <li><a href="category.html">Work</a></li>
                                </ul>
                            </li>
                            <li><Link to="about" title="">About</Link></li>
                            <li><Link to="contact" title="">Contact</Link></li>
                            <li><Link to="signup" title="">Sign Up</Link></li>
                        </ul>
                        <a href="#0" title="Close Menu" className="header__overlay-close close-mobile-menu">Close</a>
                    </nav>
                </div>
            </header>
        </div>
        // </>
    )
}
export default Header;