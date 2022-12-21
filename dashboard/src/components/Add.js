import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Add() {

    const [category, categoryList] = useState([])
    const [saveMsg, savedMsg] = useState(false);

    const [title, updatedTitle] = useState();
    const [body, updatedBody] = useState();
    const [tags, updatedTags] = useState();
    const [cat, updatedCat] = useState();

    async function fetchAllCategory() {
        await fetch("http://localhost:12345/category/fetchall")
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                savedMsg(true)
                categoryList(resp)
                setTimeout(() => {
                    savedMsg(false)
                }, 5000)
            })
    }

    useEffect(() => {
        fetchAllCategory()
        savedMsg(false)
    }, [])

    async function savePost() {
        const data = {
            title, body, tags, category: cat, date: "12/12/2020", add_by: "rajat@gmail.com"
        }
        await fetch("http://localhost:12345/post/save", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                savedMsg(true)
                setTimeout(() => {
                    savedMsg(false)
                }, 5000)
            })
    }

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        {
                            saveMsg ?
                                <div className="alert alert-success">
                                    <strong>Post Saved Successfully. !!!</strong>
                                </div>
                                : null
                        }
                        <div className="card">
                            <div className="card-header">
                                <strong>Add New Post</strong>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="form-group col-lg-6">
                                        <label className="form-label">Title</label>
                                        <input type="text" className="form-control" placeholder="Enter Title" onChange={(e) => updatedTitle(e.target.value)} />
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <label className="form-label">Select Category</label>
                                        <select className="form-control" onChange={(e) => updatedCat(e.target.value)}>
                                            <option hidden>Select Category</option>
                                            {
                                                category.map((data, i) =>
                                                    <option key={i} value={data.name}>{data.name}</option>
                                                )
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group col-lg-6 mt-3">
                                        <label className="form-label">Tags</label>
                                        <input type="text" className="form-control" placeholder="Enter Tags" onChange={(e) => updatedTags(e.target.value)} />
                                    </div>
                                    <div className="form-group col-lg-6 mt-3">
                                        <label className="form-label">Upload Image</label>
                                        {/* <input type="file" className="form-control" /> */}
                                    </div>
                                    <div className="form-group col-lg-12 mt-3">
                                        <label className="form-label">Post Body</label>
                                        <textarea className="form-control" placeholder="Enter Post Body" onChange={(e) => updatedBody(e.target.value)} />
                                    </div>
                                    <div className="form-group col-lg-12 mt-3 text-center">
                                        <button type="submit" onClick={() => { savePost() }} className="btn btn-primary mt-3">Save Post</button>
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
export default Add;