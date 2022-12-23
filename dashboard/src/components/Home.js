import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate()

    useEffect(() => {
        const ls = localStorage.getItem("users")
        const loggedIn = JSON.parse(ls)
        if (loggedIn == null) {
            navigate("/signin")
        }
    }, [])

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <strong>Total Categories</strong>
                            </div>
                            <div className="card-body">
                                <strong style={{ fontSize: 32 }}>12</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <strong>Total Posts</strong>
                            </div>
                            <div className="card-body">
                                <strong style={{ fontSize: 32 }}>12</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header">
                                <strong>Total Users</strong>
                            </div>
                            <div className="card-body">
                                <strong style={{ fontSize: 32 }}>12</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Home;