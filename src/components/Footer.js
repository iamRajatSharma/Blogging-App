import {Link} from 'react-router-dom';

function Footer() {
    return (
        <footer className="s-footer">
            <div className="s-footer__main">
                <div className="row">
                    <div className="col-two md-four mob-full s-footer__sitelinks">
                        <h4>Quick Links</h4>
                        <ul className="s-footer__linklist">
                            <li><Link to="#0">Home</Link></li>
                            <li><Link to="#0">Blog</Link></li>
                            <li><Link to="#0">Styles</Link></li>
                            <li><Link to="#0">About</Link></li>
                            <li><Link to="#0">Contact</Link></li>
                            <li><Link to="#0">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div className="col-two md-four mob-full s-footer__archives">
                        <h4>Archives</h4>
                        <ul className="s-footer__linklist">
                            <li><Link to="#0">January 2018</Link></li>
                            <li><Link to="#0">December 2017</Link></li>
                            <li><Link to="#0">November 2017</Link></li>
                            <li><Link to="#0">October 2017</Link></li>
                            <li><Link to="#0">September 2017</Link></li>
                            <li><Link to="#0">August 2017</Link></li>
                        </ul>
                    </div>

                    <div className="col-two md-four mob-full s-footer__social">
                        <h4>Social</h4>
                        <ul className="s-footer__linklist">
                            <li><Link to="#0">Facebook</Link></li>
                            <li><Link to="#0">Instagram</Link></li>
                            <li><Link to="#0">Twitter</Link></li>
                            <li><Link to="#0">Pinterest</Link></li>
                            <li><Link to="#0">Google+</Link></li>
                            <li><Link to="#0">LinkedIn</Link></li>
                        </ul>
                    </div>
                    <div className="col-five md-full end s-footer__subscribe">
                        <h4>Our Newsletter</h4>
                        <p>Sit vel delectus amet officiis repudiandae est voluptatem. Tempora maxime provident nisi et fuga et enim exercitationem ipsam. Culpa consequatur occaecati.</p>
                        <div className="subscribe-form">
                            {/* <form id="mc-form" className="group">

                                <input type="email" value="" name="EMAIL" className="email" id="mc-email" placeholder="Email Address" required="" />

                                <input type="submit" name="subscribe" value="Send" />

                                <label for="mc-email" className="subscribe-message"></label>
                            </form> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="s-footer__bottom">
                <div className="row">
                    <div className="col-full">
                        <div className="s-footer__copyright">
                            <span>© Copyright Philosophy 2018</span>
                            <span>Site Template by <Link to="https://colorlib.com/">Colorlib</Link> Downloaded from <Link to="https://themeslab.org/" target="_blank">Themeslab</Link></span>
                        </div>

                        <div className="go-top link-is-visible">
                            <Link className="smoothscroll" title="Back to Top" to="#top"></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;