import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Home() {

    const [post, postList] = useState([]);

    async function fetchAllPosts() {
        await fetch("http://localhost:12345/post/fetchAll")
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                // console.log(post)
                postList(resp)
            })
    }

    useEffect(() => {
        fetchAllPosts()
    }, [])

    return (
        <div>
            <section className="s-content">
                <div className="row masonry-wrap">
                    <div className="masonry">
                        <div className="grid-sizer"></div>
                        {
                            post.map((data, i) =>
                                <article key={i} className="masonry__brick entry format-standard" data-aos="fade-up">
                                    <div className="entry__thumb">
                                        <Link to={"/post/"+data._id} className="entry__thumb-link">
                                            <img src="images/thumbs/masonry/lamp-400.jpg" alt="" />
                                        </Link>
                                    </div>
                                    <div className="entry__text" style={{height:"356px"}}>
                                        <div className="entry__header">
                                            <div className="entry__date">
                                                <Link to={"/post/"+data._id}>{data.date}</Link>
                                            </div>
                                            <h1 className="entry__title"><Link to={"/post/"+data._id}>{data.title}</Link></h1>
                                        </div>

                                        <div className="entry__excerpt" style={{textAlign:"justify"}}>
                                            <p>
                                                { data.body.substring(1, 100) }
                                            </p>
                                        </div>
                                        <div className="entry__meta">
                                            <span className="entry__meta-links">
                                                {
                                                    data.tags.map((tag, j) =>
                                                        <Link to="/" key={j}>{tag}</Link>
                                                    )
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            )
                        }

                    </div>
                </div>

                {/* <div className="row">
                    <div className="col-full">
                        <nav className="pgn">
                            <ul>
                                <li><a className="pgn__prev" href="#0">Prev</a></li>
                                <li><a className="pgn__num" href="#0">1</a></li>
                                <li><span className="pgn__num current">2</span></li>
                                <li><a className="pgn__num" href="#0">3</a></li>
                                <li><a className="pgn__num" href="#0">4</a></li>
                                <li><a className="pgn__num" href="#0">5</a></li>
                                <li><span className="pgn__num dots">…</span></li>
                                <li><a className="pgn__num" href="#0">8</a></li>
                                <li><a className="pgn__next" href="#0">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div> */}
            </section>

            {/* <section className="s-extra">
                <div className="row top">
                    <div className="col-eight md-six tab-full popular">
                        <h3>Popular Posts</h3>
                        <div className="block-1-2 block-m-full popular__posts">
                            <article className="col-block popular__post">
                                <a href="#0" className="popular__thumb">
                                    <img src="images/thumbs/small/wheel-150.jpg" alt="" />
                                </a>
                                <h5><a href="#0">Visiting Theme Parks Improves Your Health.</a></h5>
                                <section className="popular__meta">
                                    <span className="popular__author"><span>By</span> <a href="#0"> John Doe</a></span>
                                    <span className="popular__date"><span>on</span> <time>Dec 19, 2017</time></span>
                                </section>
                            </article>
                            <article className="col-block popular__post">
                                <a href="#0" className="popular__thumb">
                                    <img src="images/thumbs/small/shutterbug-150.jpg" alt="" />
                                </a>
                                <h5><a href="#0">Key Benefits Of Family Photography.</a></h5>
                                <section className="popular__meta">
                                    <span className="popular__author"><span>By</span> <a href="#0"> John Doe</a></span>
                                    <span className="popular__date"><span>on</span> <time datetime="2017-12-18">Dec 18, 2017</time></span>
                                </section>
                            </article>
                            <article className="col-block popular__post">
                                <a href="#0" className="popular__thumb">
                                    <img src="images/thumbs/small/cookies-150.jpg" alt="" />
                                </a>
                                <h5><a href="#0">Absolutely No Sugar Oatmeal Cookies.</a></h5>
                                <section className="popular__meta">
                                    <span className="popular__author"><span>By</span> <a href="#0"> John Doe</a></span>
                                    <span className="popular__date"><span>on</span> <time datetime="2017-12-16">Dec 16, 2017</time></span>
                                </section>
                            </article>
                            <article className="col-block popular__post">
                                <a href="#0" className="popular__thumb">
                                    <img src="images/thumbs/small/beetle-150.jpg" alt="" />
                                </a>
                                <h5><a href="#0">Throwback To The Good Old Days.</a></h5>
                                <section className="popular__meta">
                                    <span className="popular__author"><span>By</span> <a href="#0"> John Doe</a></span>
                                    <span className="popular__date"><span>on</span> <time datetime="2017-12-16">Dec 16, 2017</time></span>
                                </section>
                            </article>
                            <article className="col-block popular__post">
                                <a href="#0" className="popular__thumb">
                                    <img src="images/thumbs/small/tulips-150.jpg" alt="" />
                                </a>
                                <h5><a href="#0">10 Interesting Facts About Caffeine.</a></h5>
                                <section className="popular__meta">
                                    <span className="popular__author"><span>By</span> <a href="#0"> John Doe</a></span>
                                    <span className="popular__date"><span>on</span> <time datetime="2017-12-14">Dec 14, 2017</time></span>
                                </section>
                            </article>
                            <article className="col-block popular__post">
                                <a href="#0" className="popular__thumb">
                                    <img src="images/thumbs/small/salad-150.jpg" alt="" />
                                </a>
                                <h5><a href="#0">Healthy Mediterranean Salad Recipes</a></h5>
                                <section className="popular__meta">
                                    <span className="popular__author"><span>By</span> <a href="#0"> John Doe</a></span>
                                    <span className="popular__date"><span>on</span> <time datetime="2017-12-12">Dec 12, 2017</time></span>
                                </section>
                            </article>
                        </div>
                    </div>

                    <div className="col-four md-six tab-full about">
                        <h3>About Philosophy</h3>
                        <p>
                            Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.
                        </p>
                        <ul className="about__social">
                            <li>
                                <a href="#0"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="#0"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="#0"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                            </li>
                            <li>
                                <a href="#0"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row bottom tags-wrap">
                    <div className="col-full tags">
                        <h3>Tags</h3>
                        <div className="tagcloud">
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
            </section> */}
        </div>
    )
}

export default Home;