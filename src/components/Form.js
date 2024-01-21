import React, { useRef } from "react"
import "./Form.css"
import emailjs from "@emailjs/browser"
import swal from 'sweetalert';

const Form = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm("service_lh98v2c","template_1n7bbvs",form.current,"ZRvmbZ8ABCIRD4Xim")
        .then((result) => {
            console.log(result.text)

        }, (error) => {
            console.log(error.text);
        });
    }

    function showAlert() {
        swal("Successfully Submited!", "You clicked the button!", "success");

    }

    return (
        <div className="form">
        <form ref ={form} onSubmit={sendEmail}>
            <label >Your Name</label>
            <input type="text" name="from_name"/>
            <label >Email</label>
            <input type="email" name="from_email"/>
            <label>Subject</label>
            <input type="text" name="from_subject"/>
            <label>Message</label>
            <textarea name="message" rows="6" placeholder="Type Your Message"/>
            <button onClick={showAlert} className="btn">Submit</button>
        </form>

        </div>
    )
}

export default Form
