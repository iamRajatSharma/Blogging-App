import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {

    const [name, updatedName] = useState();
    const [email, updatedEmail] = useState();
    const [password, updatedPassword] = useState();

    async function getFormData() {
        let result = await fetch("http://localhost:12345/user/save", {
            method: "POST",
            body: JSON.stringify({ name, email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        result = await result.json()
        console.log(result)
    }

    return (
        <>
            <div>
                <section className="s-content" style={{ paddingTop: "0px" }}>
                    <div>
                        <fieldset style={{ width: "36%", transform: "translate(100%, 0%)" }}>
                            <h3 style={{ textAlign: "center" }}>Sign Up</h3>
                            <div className="form-field">
                                <label>Full Name</label>
                                <input name="cName" type="text" id="cName" className="full-width" placeholder="Full Name" onChange={(e) => { updatedName(e.target.value) }} />
                            </div>
                            <div className="form-field">
                                <label>Email</label>
                                <input name="cEmail" type="text" id="cEmail" className="full-width" placeholder="Your Email" onChange={(e) => { updatedEmail(e.target.value) }} />
                            </div>
                            <div className="form-field">
                                <label>Password</label>
                                <input name="cWebsite" type="password" id="cWebsite" className="full-width" placeholder="Password" onChange={(e) => { updatedPassword(e.target.value) }} />
                            </div>
                            <button type="submit" className="submit btn btn--primary full-width" onClick={() => { getFormData() }}>Submit</button>
                            <div className="text-center">
                                <Link to="/signin">Already have an account</Link>
                            </div>
                        </fieldset>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Signup;