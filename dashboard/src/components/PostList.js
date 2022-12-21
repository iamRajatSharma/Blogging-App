import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PostList() {

    const [post, postList] = useState([]);
    const [deleteMessage, deletedMessage] = useState(false);

    async function fetchAllData() {
        await fetch("http://localhost:12345/post/fetchAll")
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                postList(resp)
            })
    }

    useEffect(() => {
        fetchAllData()
    }, [])

    async function deletePost(id) {
        await fetch(`http://localhost:12345/post/deleteSingle/${id}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((resp) => {
                deletedMessage(true);
                setTimeout(() => {
                    deletedMessage(false)
                }, 5000)
                fetchAllData()
            })
    }


    async function search(e) {
        console.log(e)
        await fetch(`http://localhost:12345/post/searchData/${e}`)
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                console.log(resp)
                postList(resp)
            })
    }

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">
                        {
                            deleteMessage ?
                                <div className="alert alert-success">
                                    <strong>Post Deleted Successfully. !!!</strong>
                                </div>
                                : null
                        }
                        <input onChange={(e) => { search(e.target.value) }} type="text" className="form-control mb-4" placeholder="Search Post by Name, Category, Tags ...." />

                        <table className="table table-striped table-bordered text-center">
                            <thead>
                                <tr>
                                    <th>S.NO</th>
                                    <th>Title_Name</th>
                                    <th>Category_Name</th>
                                    <th>Tags</th>
                                    <th>Logo</th>
                                    <th>Added_Date</th>
                                    <th style={{ width: "175px" }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    post.length > 0 ?
                                        post.map((item, i) =>
                                            <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td>{item.title}</td>
                                                <td>{item.category}</td>
                                                <td>{item.tags}</td>
                                                <td>
                                                    <img src="https://www.w3schools.com/images/img_powerful_160.png" alt="" style={{ width: "40px", height: "40px" }} />
                                                </td>
                                                <td>12/2/2020</td>
                                                <td>
                                                    <Link to={"/editPost/" + item._id} className="btn btn-success" style={{ marginRight: "10px" }}>Edit</Link>
                                                    <button onClick={() => { deletePost(item._id) }} className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                        )
                                        :
                                        <tr className="text-center">
                                            <td colSpan={7}>NO RECORD FOUND</td>

                                        </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
        </>
    )
}
export default PostList;