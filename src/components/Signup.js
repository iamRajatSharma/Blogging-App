import { Link } from "react-router-dom";

function Signup() {
    return (
        <>
            <div>
                <section className="s-content" style={{ paddingTop: "0px" }}>
                    <div>
                        {/* <form name="cForm" id="cForm" method="post" action=""> */}
                        <fieldset style={{ width: "36%", transform: "translate(100%, 0%)" }}>
                            <h3 style={{ textAlign: "center" }}>Sign Up</h3>
                            <div className="form-field">
                                <label>Full Name</label>
                                <input name="cName" type="text" id="cName" className="full-width" placeholder="Full Name" value="" />
                            </div>
                            <div className="form-field">
                                <label>Email</label>
                                <input name="cEmail" type="text" id="cEmail" className="full-width" placeholder="Your Email" value="" />
                            </div>
                            <div className="form-field">
                                <label>Password</label>
                                <input name="cWebsite" type="password" id="cWebsite" className="full-width" placeholder="Password" value="" />
                            </div>
                            <button type="submit" className="submit btn btn--primary full-width">Submit</button>
                            <div className="text-center">
                                <Link to="/signin">Already have an account</Link>
                            </div>
                        </fieldset>
                        {/* </form> */}
                    </div>
                </section>
            </div>
        </>
    )
}
export default Signup;