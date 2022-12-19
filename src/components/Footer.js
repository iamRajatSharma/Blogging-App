function Footer() {
    return (
        <footer className="s-footer">
            <div className="s-footer__main">
                <div className="row">
                    <div className="col-two md-four mob-full s-footer__sitelinks">
                        <h4>Quick Links</h4>
                        <ul className="s-footer__linklist">
                            <li><a href="#0">Home</a></li>
                            <li><a href="#0">Blog</a></li>
                            <li><a href="#0">Styles</a></li>
                            <li><a href="#0">About</a></li>
                            <li><a href="#0">Contact</a></li>
                            <li><a href="#0">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className="col-two md-four mob-full s-footer__archives">
                        <h4>Archives</h4>
                        <ul className="s-footer__linklist">
                            <li><a href="#0">January 2018</a></li>
                            <li><a href="#0">December 2017</a></li>
                            <li><a href="#0">November 2017</a></li>
                            <li><a href="#0">October 2017</a></li>
                            <li><a href="#0">September 2017</a></li>
                            <li><a href="#0">August 2017</a></li>
                        </ul>
                    </div>

                    <div className="col-two md-four mob-full s-footer__social">
                        <h4>Social</h4>
                        <ul className="s-footer__linklist">
                            <li><a href="#0">Facebook</a></li>
                            <li><a href="#0">Instagram</a></li>
                            <li><a href="#0">Twitter</a></li>
                            <li><a href="#0">Pinterest</a></li>
                            <li><a href="#0">Google+</a></li>
                            <li><a href="#0">LinkedIn</a></li>
                        </ul>
                    </div>
                    <div className="col-five md-full end s-footer__subscribe">
                        <h4>Our Newsletter</h4>
                        <p>Sit vel delectus amet officiis repudiandae est voluptatem. Tempora maxime provident nisi et fuga et enim exercitationem ipsam. Culpa consequatur occaecati.</p>
                        <div className="subscribe-form">
                            <form id="mc-form" className="group">

                                <input type="email" value="" name="EMAIL" className="email" id="mc-email" placeholder="Email Address" required="" />

                                <input type="submit" name="subscribe" value="Send" />

                                <label for="mc-email" className="subscribe-message"></label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="s-footer__bottom">
                <div className="row">
                    <div className="col-full">
                        <div className="s-footer__copyright">
                            <span>© Copyright Philosophy 2018</span>
                            <span>Site Template by <a href="https://colorlib.com/">Colorlib</a> Downloaded from <a href="https://themeslab.org/" target="_blank">Themeslab</a></span>
                        </div>

                        <div className="go-top link-is-visible">
                            <a className="smoothscroll" title="Back to Top" href="#top"></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;