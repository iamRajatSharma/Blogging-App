import { Link } from "react-router-dom";
function Signin() {
    return (
        <>
            <div>
                <section className="s-content" style={{ paddingTop: "0px" }}>
                    <div>
                        {/* <form name="cForm" id="cForm" method="post" action=""> */}
                        <fieldset style={{ width: "36%", transform: "translate(100%, 0%)" }}>
                            <h3 style={{ textAlign: "center" }}>Sign In</h3>
                            <div className="form-field">
                                <label>Email</label>
                                <input name="cEmail" type="text" id="cEmail" className="full-width" placeholder="Your Email" value="" />
                            </div>
                            <div className="form-field">
                                <label>Password</label>
                                <input name="cWebsite" type="text" id="cWebsite" className="full-width" placeholder="Website" value="" />
                            </div>
                            <button type="submit" className="submit btn btn--primary full-width">Login</button>
                            <div className="text-center">
                                <Link to="/signup">Create New Account ?</Link>
                            </div>
                        </fieldset>
                        {/* </form> */}
                    </div>
                </section>
            </div>
        </>
    )
}
export default Signin;