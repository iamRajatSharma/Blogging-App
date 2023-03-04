import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCategory() {

    const navigate = useNavigate()
    const ls = localStorage.getItem("users")
    const loggedIn = JSON.parse(ls)

    const [name, updatedName] = useState();
    const [saveMsg, savedMsg] = useState(false);
    const [msg, setMsg] = useState();

    useEffect(() => {
        if (loggedIn == null) {
            navigate("/signin")
        }
    }, [])

    async function saveCategory() {
        let todayDate = new Date().toJSON()
        todayDate = todayDate.split("T")[0]
        await fetch("http://localhost:12345/category/save", {
            method: "POST",
            body: JSON.stringify({ name: name, date: todayDate, add_by: loggedIn.email }),
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
                    savedMsg(false)
                }, 5000)
                updatedName("")
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
                                <strong>Add New Category</strong>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="form-group col-lg-12">
                                        <label className="form-label">Category Name</label>
                                        <input type="text" className="form-control" placeholder="Category Name" value={name
                                        } onChange={(e) => updatedName(e.target.value)} />
                                    </div>
                                    <div className="form-group col-lg-12 mt-3 text-center">
                                        <button onClick={() => { saveCategory() }} type="submit" className="btn btn-primary mt-3">Save Category</button>
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
export default AddCategory;