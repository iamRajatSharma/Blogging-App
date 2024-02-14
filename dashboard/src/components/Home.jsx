import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();
    const [data, setData] = useState({});

    useEffect(() => {
        const ls = localStorage.getItem("users")
        const loggedIn = JSON.parse(ls)
        if (loggedIn == null) {
            navigate("/signin")
        }

        async function callHomeAPI() {
            await fetch(`http://localhost:12345/home/index`)
                .then((resp) => {
                    return resp.json();
                })
                .then((resp) => {
                    setData(resp)
                })
        }
        callHomeAPI()

    }, [])


    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    {/* {
                        data.map((item) =>
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
                        )
                    } */}
                </div>
            </div>

        </>
    )
}
export default Home;