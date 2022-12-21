function Signin() {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header text-center">
                                <strong>Admin Sign in</strong>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="form-group">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" placeholder="Enter Email" required="" />
                                    </div>
                                    <div className="form-group col-lg-12 mt-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control" placeholder="Enter Password" />
                                    </div>
                                    <div className="form-group col-lg-12 mt-3 text-center">
                                        <button type="submit" className="btn btn-primary mt-3">Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </>
    )
}
export default Signin;