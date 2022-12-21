import { useState } from "react";

function AddCategory() {

    const [name, updatedName] = useState();

    async function saveCategory() {
        await fetch("http://localhost:12345/category/save", {
            method: "POST",
            body: JSON.stringify({ name: name, date: "12/12/2020", add_by: "test@gmail.com" }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                console.log("REcord Saved")
            })
    }

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-header">
                                <strong>Add New Category</strong>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="form-group col-lg-12">
                                        <label className="form-label">Category Name</label>
                                        <input type="text" className="form-control" placeholder="Category Name" onChange={(e) => updatedName(e.target.value)} />
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