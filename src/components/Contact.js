import React from "react"

function Contact() {
    return (
        <>
            <section class="s-content s-content--narrow">

                <div class="row">

                    <div class="s-content__header col-full">
                        <h1 class="s-content__header-title">
                            Feel Free To Contact Us.
                        </h1>
                    </div>

                    <div class="s-content__media col-full">
                        <div id="map-wrap">
                            <div id="map-container"></div>
                            <div id="map-zoom-in"></div>
                            <div id="map-zoom-out"></div>
                        </div>
                    </div>

                    <div class="col-full s-content__main">

                        <p class="lead">Lorem ipsum Deserunt est dolore Ut Excepteur nulla occaecat magna occaecat Excepteur nisi esse veniam dolor consectetur minim qui nisi esse deserunt commodo ea enim ullamco non voluptate consectetur minim aliquip Ut incididunt amet ut cupidatat.</p>

                        <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
                        </p>

                        <div class="row">
                            <div class="col-six tab-full">
                                <h3>Where to Find Us</h3>

                                <p>
                                    1600 Amphitheatre Parkway<br />
                                    Mountain View, CA<br />
                                    94043 US
                                </p>

                            </div>

                            <div class="col-six tab-full">
                                <h3>Contact Info</h3>

                                <p>contact@philosophywebsite.com<br />
                                    info@philosophywebsite.com <br />
                                    Phone: (+1) 123 456
                                </p>
                            </div>
                        </div>
                        <h3>Say Hello.</h3>
                        <form name="cForm" id="cForm" method="post" action="">
                            <fieldset>
                                <div class="form-field">
                                    <input name="cName" type="text" id="cName" class="full-width" placeholder="Your Name" value="" />
                                </div>
                                <div class="form-field">
                                    <input name="cEmail" type="text" id="cEmail" class="full-width" placeholder="Your Email" value="" />
                                </div>
                                <div class="form-field">
                                    <input name="cWebsite" type="text" id="cWebsite" class="full-width" placeholder="Website" value="" />
                                </div>
                                <div class="message form-field">
                                    <textarea name="cMessage" id="cMessage" class="full-width" placeholder="Your Message" ></textarea>
                                </div>
                                <button type="submit" class="submit btn btn--primary full-width">Submit</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </section>
            <section class="s-extra">
                <div class="row top">
                    <div class="col-eight md-six tab-full popular">
                        <h3>Popular Posts</h3>
                        <div class="block-1-2 block-m-full popular__posts">
                            <article class="col-block popular__post">
                                <a href="#0" class="popular__thumb">
                                    <img src="images/thumbs/small/wheel-150.jpg" alt="" />
                                </a>
                                <h5><a href="#0">Visiting Theme Parks Improves Your Health.</a></h5>
                                <section class="popular__meta">
                                    <span class="popular__author"><span>By</span> <a href="#0"> John Doe</a></span>
                                    <span class="popular__date"><span>on</span> <time datetime="2017-12-19">Dec 19, 2017</time></span>
                                </section>
                            </article>
                            <article class="col-block popular__post">
                                <a href="#0" class="popular__thumb">
                                    <img src="images/thumbs/small/shutterbug-150.jpg" alt="" />
                                </a>
                                <h5><a href="#0">Key Benefits Of Family Photography.</a></h5>
                                <section class="popular__meta">
                                    <span class="popular__author"><span>By</span> <a href="#0"> John Doe</a></span>
                                    <span class="popular__date"><span>on</span> <time datetime="2017-12-18">Dec 18, 2017</time></span>
                                </section>
                            </article>
                            <article class="col-block popular__post">
                                <a href="#0" class="popular__thumb">
                                    <img src="images/thumbs/small/cookies-150.jpg" alt="" />
                                </a>
                                <h5><a href="#0">Absolutely No Sugar Oatmeal Cookies.</a></h5>
                                <section class="popular__meta">
                                    <span class="popular__author"><span>By</span> <a href="#0"> John Doe</a></span>
                                    <span class="popular__date"><span>on</span> <time datetime="2017-12-16">Dec 16, 2017</time></span>
                                </section>
                            </article>
                            <article class="col-block popular__post">
                                <a href="#0" class="popular__thumb">
                                    <img src="images/thumbs/small/beetle-150.jpg" alt="" />
                                </a>
                                <h5><a href="#0">Throwback To The Good Old Days.</a></h5>
                                <section class="popular__meta">
                                    <span class="popular__author"><span>By</span> <a href="#0"> John Doe</a></span>
                                    <span class="popular__date"><span>on</span> <time datetime="2017-12-16">Dec 16, 2017</time></span>
                                </section>
                            </article>
                            <article class="col-block popular__post">
                                <a href="#0" class="popular__thumb">
                                    <img src="images/thumbs/small/tulips-150.jpg" alt="" />
                                </a>
                                <h5><a href="#0">10 Interesting Facts About Caffeine.</a></h5>
                                <section class="popular__meta">
                                    <span class="popular__author"><span>By</span> <a href="#0"> John Doe</a></span>
                                    <span class="popular__date"><span>on</span> <time datetime="2017-12-14">Dec 14, 2017</time></span>
                                </section>
                            </article>
                            <article class="col-block popular__post">
                                <a href="#0" class="popular__thumb">
                                    <img src="images/thumbs/small/salad-150.jpg" alt="" />
                                </a>
                                <h5><a href="#0">Healthy Mediterranean Salad Recipes</a></h5>
                                <section class="popular__meta">
                                    <span class="popular__author"><span>By</span> <a href="#0"> John Doe</a></span>
                                    <span class="popular__date"><span>on</span> <time datetime="2017-12-12">Dec 12, 2017</time></span>
                                </section>
                            </article>
                        </div>
                    </div>

                    <div class="col-four md-six tab-full about">
                        <h3>About Philosophy</h3>
                        <p>
                            Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.
                        </p>
                        <ul class="about__social">
                            <li>
                                <a href="#0"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="#0"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="#0"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="#0"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="row bottom tags-wrap">
                    <div class="col-full tags">
                        <h3>Tags</h3>
                        <div class="tagcloud">
                            <a href="#0">Salad</a>
                            <a href="#0">Recipe</a>
                            <a href="#0">Places</a>
                            <a href="#0">Tips</a>
                            <a href="#0">Friends</a>
                            <a href="#0">Travel</a>
                            <a href="#0">Exercise</a>
                            <a href="#0">Reading</a>
                            <a href="#0">Running</a>
                            <a href="#0">Self-Help</a>
                            <a href="#0">Vacation</a>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Contact;