import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';

function Home() {

    const [post, postList] = useState([]);
    const [cat, updatedCat] = useState();
    const [url, updatedUrl] = useState();
    const urlData = useParams();

    async function fetchAllPosts(e) {
        await fetch(`http://localhost:12345/post/categoryWise/${e}`)
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                postList(resp)
            })
    }

    useEffect(() => {
        updatedCat(urlData.name)
        const cat_name = urlData.name
        fetchAllPosts(cat_name)
    }, [post])

    return (
        <div>
            <section className="s-content">
                <div className="row masonry-wrap">
                    <div className="masonry">
                        <h1 style={{ marginTop: "0px" }}>{cat}</h1>
                        <div className="grid-sizer"></div>
                        {
                            post.length > 0 ?
                                post.map((data, i) =>
                                    <article key={i} className="masonry__brick entry format-standard" data-aos="fade-up">
                                        <div className="entry__thumb">
                                            <Link to="/" className="entry__thumb-link">
                                                <img src="images/thumbs/masonry/lamp-400.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="entry__text">
                                            <div className="entry__header">
                                                <div className="entry__date">
                                                    <Link to="/">{data.date}</Link>
                                                </div>
                                                <h1 className="entry__title"><Link to={"/post/" + data._id}>{data.title}</Link></h1>
                                            </div>

                                            <div className="entry__excerpt" style={{ textAlign: "justify" }}>
                                                <p>
                                                    {data.body.substring(1, 150)}
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
                                :
                                <div style={{ width: "100%", padding: 5, backgroundColor: "#df6b6b", color: "black", borderRadius: 5, textAlign: "center", fontSize: 22 }}>
                                    <strong className="text-center">NO ARTICLE FOUND</strong>
                                </div>
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
        </div>
    )
}

export default Home;