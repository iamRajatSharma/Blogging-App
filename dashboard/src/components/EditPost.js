import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function EditPost() {

    const [post, postDetails] = useState([]);
    // const [deleteMessage, deletedMessage] = useState(false);
    const url = useParams();
    const id = url.id

    async function fetchSingleData() {
        await fetch(`http://localhost:12345/post/fetchSingle/${id}`)
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                postDetails(resp)
            })
    }

    useEffect(() => {
        fetchSingleData()
    }, [])

    // async function updatePost(id) {
    //     await fetch(`http://localhost:12345/post/deleteSingle/${id}`, {
    //         method: "delete",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    //         .then((resp) => {
    //             deletedMessage(true);
    //         })
    // }

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-header">
                                <strong>Add New Post</strong>
                                <Link to={"/addPost"} className="btn btn-dark" style={{ float: "right" }}>Category List</Link>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="form-group col-lg-6">
                                        <label className="form-label">Title</label>
                                        <input type="email" className="form-control" placeholder="Enter email" defaultValue={post.title} />
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <label className="form-label">Select category</label>
                                        <select className="form-control">
                                            <option selected value={post.category}> {post.category}</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-lg-6 mt-3">
                                        <label className="form-label">Tags</label>
                                        <input type="email" className="form-control" placeholder="Enter email" defaultValue={post.tags} />
                                    </div>
                                    <div className="form-group col-lg-6 mt-3">
                                        <label className="form-label">Upload Image</label>
                                        <input type="file" className="form-control" />
                                    </div>
                                    <div className="form-group col-lg-12 mt-3">
                                        <label className="form-label">Post Body</label>
                                        <textarea className="form-control" placeholder="Post Body" defaultValue={post.body} />
                                    </div>
                                    <div className="form-group col-lg-12 mt-3 text-center">
                                        <button type="submit" className="btn btn-primary mt-3">Update Post</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        </>
    )
}
export default EditPost;