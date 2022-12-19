function Post() {
    return (
        <>
            <section className="s-content s-content--narrow s-content--no-padding-bottom">
                <article className="row format-standard">
                    <div className="s-content__header col-full">
                        <h1 className="s-content__header-title">
                            This Is A Standard Format Post.
                        </h1>
                        <ul className="s-content__header-meta">
                            <li className="date">December 16, 2017</li>
                            <li className="cat">
                                In
                                <a href="#0">Lifestyle</a>
                                <a href="#0">Travel</a>
                            </li>
                        </ul>
                    </div>
                    <div className="s-content__media col-full">
                        <div className="s-content__post-thumb">
                            <img src="images/thumbs/single/standard/standard-1000.jpg" srcset="images/thumbs/single/standard/standard-2000.jpg 2000w, 
                         images/thumbs/single/standard/standard-1000.jpg 1000w, 
                         images/thumbs/single/standard/standard-500.jpg 500w" sizes="(max-width: 2000px) 100vw, 2000px" alt="" />
                        </div>
                    </div>

                    <div className="col-full s-content__main">

                        <p className="lead">Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint.</p>

                        <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
                        </p>

                        <p>
                            <img src="images/wheel-1000.jpg" srcset="images/wheel-2000.jpg 2000w, images/wheel-1000.jpg 1000w, images/wheel-500.jpg 500w" sizes="(max-width: 2000px) 100vw, 2000px" alt="" />
                        </p>

                        <h2>Large Heading</h2>

                        <p>Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus <a href="http://#">omnis voluptas assumenda est</a> id quod maxime placeat facere possimus, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et.</p>

                        <blockquote><p>This is a simple example of a styled blockquote. A blockquote tag typically specifies a section that is quoted from another source of some sort, or highlighting text in your post.</p></blockquote>

                        <p>Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.</p>

                        <h3>Smaller Heading</h3>

                        <p>Dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.

                        </p>
                        {/* <pre className="prettyprint prettyprinted" style=""><code><span className="pln">
                            code </span><span className="pun">
                            </span><span className="pln">
                                font</span><span className="pun">-</span><span className="pln">size</span><span className="pun">:</span><span className="pln"> </span><span className="lit">1.4rem</span><span className="pun">;</span><span className="pln">
                                margin</span><span className="pun">:</span><span className="pln"> </span><span className="lit">0</span><span className="pln"> </span><span className="pun">.</span><span className="lit">2rem</span><span className="pun">;</span><span className="pln">
                                padding</span><span className="pun">:</span><span className="pln"> </span><span className="pun">.</span><span className="lit">2rem</span><span className="pln"> </span><span className="pun">.</span><span className="lit">6rem</span><span className="pun">;</span><span className="pln">
                                white</span><span className="pun">-</span><span className="pln">space</span><span className="pun">:</span><span className="pln"> nowrap</span><span className="pun">;</span><span className="pln">
                                background</span><span className="pun">:</span><span className="pln"> </span><span className="com">#F1F1F1;</span><span className="pln">
                                border</span><span className="pun">:</span><span className="pln"> </span><span className="lit">1px</span><span className="pln"> solid </span><span className="com">#E1E1E1;</span><span className="pln">
                                border</span><span className="pun">-</span><span className="pln">radius</span><span className="pun">:</span><span className="pln"> </span><span className="lit">3px</span><span className="pun">;</span><span className="pln">
                            </span><span className="pun"></span></code></pre> */}

                        <p>Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.</p>

                        <ul>
                            <li>Donec nulla non metus auctor fringilla.
                                <ul>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                            </li>
                            <li>Donec nulla non metus auctor fringilla.</li>
                            <li>Donec nulla non metus auctor fringilla.</li>
                        </ul>

                        <p>Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.</p>

                        <p className="s-content__tags">
                            <span>Post Tags</span>

                            <span className="s-content__tag-list">
                                <a href="#0">orci</a>
                                <a href="#0">lectus</a>
                                <a href="#0">varius</a>
                                <a href="#0">turpis</a>
                            </span>
                        </p>

                        <div className="s-content__author">
                            <img src="images/avatars/user-03.jpg" alt="" />

                            <div className="s-content__author-about">
                                <h4 className="s-content__author-name">
                                    <a href="#0">Jonathan Doe</a>
                                </h4>

                                <p>Alias aperiam at debitis deserunt dignissimos dolorem doloribus, fuga fugiat impedit laudantium magni maxime nihil nisi quidem quisquam sed ullam voluptas voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>

                                <ul className="s-content__author-social">
                                    <li><a href="#0">Facebook</a></li>
                                    <li><a href="#0">Twitter</a></li>
                                    <li><a href="#0">GooglePlus</a></li>
                                    <li><a href="#0">Instagram</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="s-content__pagenav">
                            <div className="s-content__nav">
                                <div className="s-content__prev">
                                    <a href="#0" rel="prev">
                                        <span>Previous Post</span>
                                        Tips on Minimalist Design
                                    </a>
                                </div>
                                <div className="s-content__next">
                                    <a href="#0" rel="next">
                                        <span>Next Post</span>
                                        Less Is More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>


                <div className="comments-wrap">

                    <div id="comments" className="row">
                        <div className="col-full">

                            <h3 className="h2">5 Comments</h3>


                            <ol className="commentlist">

                                <li className="depth-1 comment">

                                    <div className="comment__avatar">
                                        <img width="50" height="50" className="avatar" src="images/avatars/user-01.jpg" alt="" />
                                    </div>

                                    <div className="comment__content">

                                        <div className="comment__info">
                                            <cite>Itachi Uchiha</cite>

                                            <div className="comment__meta">
                                                <time className="comment__time">Dec 16, 2017 @ 23:05</time>
                                                <a className="reply" href="#0">Reply</a>
                                            </div>
                                        </div>

                                        <div className="comment__text">
                                            <p>Adhuc quaerendum est ne, vis ut harum tantas noluisse, id suas iisque mei. Nec te inani ponderum vulputate,
                                                facilisi expetenda has et. Iudico dictas scriptorem an vim, ei alia mentitum est, ne has voluptua praesent.</p>
                                        </div>

                                    </div>

                                </li>

                                <li className="thread-alt depth-1 comment">

                                    <div className="comment__avatar">
                                        <img width="50" height="50" className="avatar" src="images/avatars/user-04.jpg" alt="" />
                                    </div>

                                    <div className="comment__content">

                                        <div className="comment__info">
                                            <cite>John Doe</cite>

                                            <div className="comment__meta">
                                                <time className="comment__time">Dec 16, 2017 @ 24:05</time>
                                                <a className="reply" href="#0">Reply</a>
                                            </div>
                                        </div>

                                        <div className="comment__text">
                                            <p>Sumo euismod dissentiunt ne sit, ad eos iudico qualisque adversarium, tota falli et mei. Esse euismod
                                                urbanitas ut sed, et duo scaevola pericula splendide. Primis veritus contentiones nec ad, nec et
                                                tantas semper delicatissimi.</p>
                                        </div>

                                    </div>

                                    <ul className="children">

                                        <li className="depth-2 comment">

                                            <div className="comment__avatar">
                                                <img width="50" height="50" className="avatar" src="images/avatars/user-03.jpg" alt="" />
                                            </div>

                                            <div className="comment__content">

                                                <div className="comment__info">
                                                    <cite>Kakashi Hatake</cite>

                                                    <div className="comment__meta">
                                                        <time className="comment__time">Dec 16, 2017 @ 25:05</time>
                                                        <a className="reply" href="#0">Reply</a>
                                                    </div>
                                                </div>

                                                <div className="comment__text">
                                                    <p>Duis sed odio sit amet nibh vulputate
                                                        cursus a sit amet mauris. Morbi accumsan ipsum velit. Duis sed odio sit amet nibh vulputate
                                                        cursus a sit amet mauris</p>
                                                </div>

                                            </div>

                                            <ul className="children">

                                                <li className="depth-3 comment">

                                                    <div className="comment__avatar">
                                                        <img width="50" height="50" className="avatar" src="images/avatars/user-04.jpg" alt="" />
                                                    </div>

                                                    <div className="comment__content">

                                                        <div className="comment__info">
                                                            <cite>John Doe</cite>

                                                            <div className="comment__meta">
                                                                <time className="comment__time">Dec 16, 2017 @ 25:15</time>
                                                                <a className="reply" href="#0">Reply</a>
                                                            </div>
                                                        </div>
                                                        <div className="comment__text">
                                                            <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est
                                                                etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li className="depth-1 comment">
                                    <div className="comment__avatar">
                                        <img width="50" height="50" className="avatar" src="images/avatars/user-02.jpg" alt="" />
                                    </div>
                                    <div className="comment__content">
                                        <div className="comment__info">
                                            <cite>Shikamaru Nara</cite>
                                            <div className="comment__meta">
                                                <time className="comment-time">Dec 16, 2017 @ 25:15</time>
                                                <a className="reply" href="#">Reply</a>
                                            </div>
                                        </div>
                                        <div className="comment__text">
                                            <p>Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                            <div className="respond">
                                <h3 className="h2">Add Comment</h3>
                                <form name="contactForm" id="contactForm" method="post" action="">
                                    <fieldset>
                                        <div className="form-field">
                                            <input name="cName" type="text" id="cName" className="full-width" placeholder="Your Name"  />
                                        </div>
                                        <div className="form-field">
                                            <input name="cEmail" type="text" id="cEmail" className="full-width" placeholder="Your Email"  />
                                        </div>
                                        <div className="form-field">
                                            <input name="cWebsite" type="text" id="cWebsite" className="full-width" placeholder="Website"  />
                                        </div>
                                        <div className="message form-field">
                                            <textarea name="cMessage" id="cMessage" className="full-width" placeholder="Your Message"></textarea>
                                        </div>
                                        <button type="submit" className="submit btn--primary btn--large full-width">Submit</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Post;