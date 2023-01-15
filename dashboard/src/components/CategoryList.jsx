import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CategoryList() {

    const navigate = useNavigate()

    const [data, updatedData] = useState([]);
    const [deleteMsg, deletedMsg] = useState(false);

    const fetchall = async () => {
        await fetch("http://localhost:12345/category/fetchall")
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                updatedData(resp)
            })
    }

    useEffect(() => {
        const ls = localStorage.getItem("users")
        const loggedIn = JSON.parse(ls)
        if (loggedIn == null) {
            navigate("/signin")
        }
        fetchall()
    }, [])

    async function deleteCategory(id) {
        await fetch(`http://localhost:12345/category/deleteSignleCategory/${id}`, {
            method: "DELETE"
        })
            .then((resp) => {
                deletedMsg(true)
                fetchall()
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
                            deleteMsg ?
                                <div className="alert alert-success">
                                    <strong>Category Deleted Successfully. !!!</strong>
                                </div>
                                : null
                        }
                        <table className="table table-striped table-bordered text-center">
                            <thead>
                                <tr>
                                    <th>S.NO</th>
                                    <th>Category Name</th>
                                    <th>Added Date</th>
                                    <th style={{ width: "175px" }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.length > 0 ?
                                        data.map((data, i) =>
                                            <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td>{data.name}</td>
                                                <td>{data.date}</td>
                                                <td>
                                                    <Link to={"/editCategory/" + data._id} className="btn btn-success" style={{ marginRight: "10px" }}>Edit</Link>
                                                    <button onClick={() => { deleteCategory(data._id) }} className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                        )
                                        :
                                        <tr className="text-center">
                                            <td colSpan={4}><strong>NO RESULT FOUND</strong></td>
                                        </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        </>
    )
}
export default CategoryList;