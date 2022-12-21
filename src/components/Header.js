import { Link } from 'react-router-dom';

function Header() {
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
                            {/* <form role="search" method="get" className="header__search-form" action="#"> */}
                            <label>
                                <span className="hide-content">Search for:</span>
                                <input type="search" className="search-field" placeholder="Type Keywords" name="s" title="Search for:" autoComplete="off" />
                            </label>
                            <input type="submit" className="search-submit" value="Search" />
                            {/* </form> */}
                            <Link href="#0" title="Close Search" className="header__overlay-close">Close</Link>
                        </div>
                        <Link className="header__toggle-menu" href="#0" title="Menu"><span>Menu</span></Link>
                        <nav className="header__nav-wrap">
                            <h2 className="header__nav-heading h6">Site Navigation</h2>
                            <ul className="header__nav">
                                <li><Link to="/" title="">Home</Link></li>
                                <li className="has-children current">
                                    <Link href="#0" title="">Categories</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="category.html">Lifestyle</Link></li>
                                        <li><Link href="category.html">Health</Link></li>
                                        <li><Link href="category.html">Family</Link></li>
                                        <li><Link href="category.html">Management</Link></li>
                                        <li><Link href="category.html">Travel</Link></li>
                                        <li><Link href="category.html">Work</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="about" title="">About</Link></li>
                                <li><Link to="contact" title="">Contact</Link></li>
                                <li><Link to="signup" title="">Sign Up</Link></li>
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