import React, { useState } from "react"

function Contact() {

    const [name, updatedName] = useState();
    const [email, updatedEmail] = useState();
    const [subject, updatedSubject] = useState();
    const [message, updatedMessage] = useState();

    async function saveContactForm() {
        await fetch("http://localhost:12345/contact/save", {
            method: "POST",
            body: JSON.stringify( {name, email, subject, message }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                console.log(resp)
            })
    }


    return (
        <>
            <section className="s-content s-content--narrow">

                <div className="row">

                    <div className="s-content__header col-full">
                        <h1 className="s-content__header-title">
                            Feel Free To Contact Us.
                        </h1>
                    </div>

                    <div className="col-full s-content__main">

                        <p className="lead">Lorem ipsum Deserunt est dolore Ut Excepteur nulla occaecat magna occaecat Excepteur nisi esse veniam dolor consectetur minim qui nisi esse deserunt commodo ea enim ullamco non voluptate consectetur minim aliquip Ut incididunt amet ut cupidatat.</p>

                        <p>Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
                        </p>

                        <div className="row">
                            <div className="col-six tab-full">
                                <h3>Where to Find Us</h3>

                                <p>
                                    1600 Amphitheatre Parkway<br />
                                    Mountain View, CA<br />
                                    94043 US
                                </p>

                            </div>

                            <div className="col-six tab-full">
                                <h3>Contact Info</h3>

                                <p>contact@philosophywebsite.com<br />
                                    info@philosophywebsite.com <br />
                                    Phone: (+1) 123 456
                                </p>
                            </div>
                        </div>
                        <h3>Say Hello.</h3>
                        <fieldset>
                            <div className="form-field">
                                <input name="cName" onChange={(e) => updatedName(e.target.value)} type="text" id="cName" className="full-width" placeholder="Your Name"  />
                            </div>
                            <div className="form-field">
                                <input name="cEmail" onChange={(e) => updatedEmail(e.target.value)} type="text" id="cEmail" className="full-width" placeholder="Your Email"  />
                            </div>
                            <div className="form-field">
                                <input name="cWebsite" onChange={(e) => updatedSubject(e.target.value)} type="text" id="cWebsite" className="full-width" placeholder="Subject" />
                            </div>
                            <div className="message form-field">
                                <textarea name="cMessage" onChange={(e) => updatedMessage(e.target.value)} id="cMessage" className="full-width" placeholder="Your Message" ></textarea>
                            </div>
                            <button type="submit" onClick={() => { saveContactForm() }} className="submit btn btn--primary full-width">Submit</button>
                        </fieldset>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;