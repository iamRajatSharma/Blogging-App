import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function Post() {

    const [post, postDetails] = useState({});
    const urlData = useParams()
    let post_id = urlData.id
    const [name, commentName] = useState()
    const [email, commentEmail] = useState()
    const [message, commentMessage] = useState()
    const [comments, updateComments] = useState([]);
    const [commentStatus, updateCommentStatus] = useState(false)

    async function saveComment() {
        const todayDate = new Date();
        await fetch("http://localhost:12345/comment/save", {
            method: "POST",
            body: JSON.stringify({ name, email, post_id, message, todayDate }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                console.log(resp)
                commentName('')
                commentEmail('')
                commentMessage('')
                updateCommentStatus(true)
                setTimeout(() => {
                    updateCommentStatus(false)
                }, 5000)
            })
    }

    async function fetchSinglePost() {
        await fetch(`http://localhost:12345/post/fetchSinglePost/${urlData.id}`)
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                updateComments(resp.comments)
                postDetails(resp.data)
            })
    }

    useEffect(() => {
        fetchSinglePost()
    }, [post])


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

                {
                    commentStatus ?
                        <div style={{ width: "300px", padding: 5, backgroundColor: "#df6b6b", color: "black", borderRadius: 5, textAlign: "center", fontSize: 22, position: "fixed", right: "5px", top: "10px" }}>
                            <strong className="text-center">Thanks for comment</strong>
                        </div>
                        : null
                }


                <div className="comments-wrap">
                    <div id="comments" className="row">
                        <div className="col-full">
                            {
                                comments.length > 0 ?
                                    <h3 className="h2">{comments.length} Comments</h3>
                                    : null
                            }
                            <ol className="commentlist">
                                {
                                    comments.length > 0 ?
                                        comments.map((cmnt, key) =>
                                            <li className="depth-1 comment">
                                                <div className="comment__avatar">
                                                    <img width="50" height="50" className="avatar" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                                                </div>
                                                <div className="comment__content">
                                                    <div className="comment__info">
                                                        <cite>{cmnt.name}</cite>
                                                        <div className="comment__meta">
                                                            <time className="comment__time">{cmnt.todayDate}</time>
                                                            {/* <a className="reply" href="#0">Reply</a> */}
                                                        </div>
                                                    </div>
                                                    <div className="comment__text">
                                                        <p>{cmnt.message}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                        :
                                        <div style={{ width: "100%", padding: 5, backgroundColor: "#df6b6b", color: "black", borderRadius: 5, textAlign: "center", fontSize: 22 }}>
                                            <strong className="text-center">NO COMMENTS FOUND</strong>
                                        </div>
                                }
                            </ol>

                            <div className="respond">
                                <h3 className="h2">Add Comment</h3>
                                <fieldset>
                                    <div className="form-field">
                                        <input name="cName" type="text" id="cName" value={name} onChange={(e) => { commentName(e.target.value) }} className="full-width" placeholder="Your Name" />
                                    </div>
                                    <div className="form-field">
                                        <input name="cEmail" type="text" id="cEmail" value={email} onChange={(e) => { commentEmail(e.target.value) }} className="full-width" placeholder="Your Email" />
                                    </div>
                                    <div className="message form-field">
                                        <textarea name="cMessage" id="cMessage" value={message} onChange={(e) => { commentMessage(e.target.value) }} className="full-width" placeholder="Your Message"></textarea>
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