import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function EditCategory() {

    const navigate = useNavigate()

    const [post, postDetails] = useState([]);
    const [title, updatedTitle] = useState();
    const [deleteMsg, deletedMsg] = useState(false);
    const [saveMsg, savedMsg] = useState(false);
    const [msg, setMsg] = useState();

    const params = useParams()
    const id = params.id;

    const singlePost = () => {
        fetch(`http://localhost:12345/category/fetchSignleCategory/${id}`)
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                postDetails(resp)
            })
    }

    useEffect(() => {
        const ls = localStorage.getItem("users")
        const loggedIn = JSON.parse(ls)
        if (loggedIn == null) {
            navigate("/signin")
        }
        singlePost()
    }, [])

    async function updateCategory() {
        await fetch(`http://localhost:12345/category/updateSignleCategory/${id}`, {
            method: "POST",
            body: JSON.stringify({ name: title }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                setMsg(resp)
                savedMsg(true)
                setTimeout(() => {
                    deletedMsg(false)
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
                                msg.varient == "danger" ?
                                    <div className="alert alert-danger">
                                        <strong>{msg.msg}</strong>
                                    </div>
                                    :
                                    <div className="alert alert-success">
                                        <strong>{msg.msg}</strong>
                                    </div>
                                : null
                        }
                        <div className="card">
                            <div className="card-header">
                                <strong>Update Category</strong>
                                <Link to={"/categoryList"} className="btn btn-dark" style={{ float: "right" }}>Category List</Link>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="form-group col-lg-12">
                                        <label className="form-label">Category Name</label>
                                        <input type="text" className="form-control" placeholder="Category Name" defaultValue={post.name} onChange={(e) => { updatedTitle(e.target.value) }} />
                                    </div>
                                    <div className="form-group col-lg-12 mt-3 text-center">
                                        <button onClick={() => { updateCategory() }} type="submit" className="btn btn-primary mt-3">Update Category</button>
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
export default EditCategory;