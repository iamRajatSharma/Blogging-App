import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function Post() {

    const [post, postDetails] = useState({});
    const urlData = useParams()
    let post_id = urlData.id
    const [name, commentName] = useState()
    const [email, commentEmail] = useState()
    const [message, commentMessage] = useState()

    async function saveComment() {
        await fetch("http://localhost:12345/comment/save", {
            method: "POST",
            body: JSON.stringify({ name, email, post_id, message }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                console.log(resp)
            })
    }

    async function fetchSinglePost() {
        await fetch(`http://localhost:12345/post/fetchSinglePost/${urlData.id}`)
            .then((resp) => {
                return resp.json(0)
            })
            .then((resp) => {
                console.log(resp)
                postDetails(resp)
            })
    }

    useEffect(() => {
        fetchSinglePost()
    }, [])


    return (
        <>

            <section className="s-content s-content--narrow s-content--no-padding-bottom">
                <article className="row format-standard">
                    <div className="s-content__header col-full">
                        <h1 className="s-content__header-title">
                            {post.title}
                        </h1>
                        <ul className="s-content__header-meta">
                            <li className="date">{post.date}</li>
                            <li className="cat">
                                In {post.tags}
                            </li>
                        </ul>
                    </div>

                    <div className="col-full s-content__main">

                        <p style={{ textAlign: "justify" }}>
                            {post.body}
                        </p>

                        <p className="s-content__tags">
                            <span>Post Tags</span>

                            <span className="s-content__tag-list">
                                <a href="#0">orci</a>
                                <a href="#0">lectus</a>
                                <a href="#0">varius</a>
                                <a href="#0">turpis</a>
                            </span>
                        </p>

                        <div className="s-content__pagenav">
                            <div className="s-content__nav">
                                <div className="s-content__prev">
                                    <a href="#0" rel="prev">
                                        <span>Previous Post</span>
                                        Tips on Minimalist Design
                                    </a>
                                </div>
                                <div className="s-content__next">
                                    <a href="#0" rel="next" style={{ float: "right" }}>
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
                                <fieldset>
                                    <div className="form-field">
                                        <input name="cName" type="text" id="cName" onChange={(e) => { commentName(e.target.value) }} className="full-width" placeholder="Your Name" />
                                    </div>
                                    <div className="form-field">
                                        <input name="cEmail" type="text" id="cEmail" onChange={(e) => { commentEmail(e.target.value) }} className="full-width" placeholder="Your Email" />
                                    </div>
                                    <div className="message form-field">
                                        <textarea name="cMessage" id="cMessage" onChange={(e) => { commentMessage(e.target.value) }} className="full-width" placeholder="Your Message"></textarea>
                                    </div>
                                    <button type="submit" onClick={() => { saveComment() }} className="submit btn--primary btn--large full-width">Submit</button>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Post;