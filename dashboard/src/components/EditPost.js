function EditPost() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-header">
                                <strong>Add New Post</strong>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="form-group col-lg-6">
                                        <label className="form-label">Title</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <label className="form-label">Select category</label>
                                        <select className="form-control">
                                            <option> Select category</option>
                                            <option> Select category</option>
                                            <option> Select category</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-lg-6 mt-3">
                                        <label className="form-label">Tags</label>
                                        <input type="email" className="form-control" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group col-lg-6 mt-3">
                                        <label className="form-label">Upload Image</label>
                                        <input type="file" className="form-control" />
                                    </div>
                                    <div className="form-group col-lg-12 mt-3">
                                        <label className="form-label">Post Body</label>
                                        <textarea className="form-control" placeholder="Enter email" />
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