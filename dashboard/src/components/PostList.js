function PostList() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">

                        <input type="text" className="form-control mb-4" placeholder="Search Post by Name, Category, Tags ...." />

                        <table className="table table-striped table-bordered text-center">
                            <thead>
                                <tr>
                                    <th>S.NO</th>
                                    <th>Title Name</th>
                                    <th>Category Name</th>
                                    <th>Tags</th>
                                    <th>Logo</th>
                                    <th>Added Date</th>
                                    <th style={{ width: "175px" }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>dsfsds</td>
                                    <td>dsdsd</td>
                                    <td>1</td>
                                    <td>
                                        <img src="https://www.w3schools.com/images/img_powerful_160.png" alt="" style={{ width: "40px", height: "40px" }} />
                                    </td>
                                    <td>12/2/2020</td>
                                    <td>
                                        <button className="btn btn-success" style={{ marginRight: "10px" }}>Edit</button>
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
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