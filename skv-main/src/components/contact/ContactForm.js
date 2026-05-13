import React, { useState } from 'react';
import Swal from 'sweetalert2'
const ContactForm = () => {

    const serverURL = process.env.REACT_APP_SERVER_URL

    const [name,    setName]    = useState("")
    const [email,   setEmail]   = useState("")
    const [phone,   setPhone]   = useState("")
    const [message, setMessage] = useState("")
    const [subject, setSubject] = useState("")
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState("")
    const [error,   setError]   = useState("")


    const validate = () => {
        if(!name.trim()){
            setError("Name is required")
            return false;
        }
        if(!email.trim()){
            setError("Email is required")
            return false;
        }
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            setError("Enter a valid email address.")
            return false
        }
          if (phone.length < 10) {
            setError("Enter a valid 10 digit phone number.")
            return false
        }
        if (!subject.trim()) {
            setError("Subject is required.")
            return false
        }
        if (!message.trim()) {
            setError("Message is required.")
            return false
        }

        return true;
    }

    const formSubmit = async (e) => {
        e.preventDefault()
        setSuccess("")
        setError("")

        if(!validate()) return;

        Swal.fire({
        title:             'Sending...',
        text:              'Please wait while we send your message.',
        allowOutsideClick: false,
        allowEscapeKey:    false,
        showConfirmButton: false,
        didOpen: () => {
            Swal.showLoading()
        }
    })

        const payload = {
            name:    name.trim(),
            email:   email.trim().toLowerCase(),
            phone:   phone.trim(),
            subject: subject.trim(),
            message: message.trim()
        }

        console.log(`${serverURL}/send-email`);
        

        try{
            const res = await fetch(`http://localhost:5000/send-email`,{
            method : 'POST',
            headers : {"Content-Type": "application/json" },
            body : JSON.stringify(payload)
        })

        const data = await res.json();

        if(data.success){
            Swal.fire({
                icon : "success",
                title : "Message Sent",
                 text:  'We will get back to you within 24 hours.',
                confirmButtonText:'OK',
                confirmButtonColor: '#ff5e14'
            })
            setName("")
            setEmail("")
            setMessage("")
            setPhone("")
            setSubject("")

            }
            else{
                 Swal.fire({
                icon:               'error',
                title:              'Failed!',
                text:               data.message || 'Failed to send message.',
                confirmButtonText:  'Try Again',
                confirmButtonColor: '#ff5e14'
            })
        }

    }
    catch(err){
        Swal.fire({
            icon : "error",
            title : "Server Error",
            text : "Please Try again later",
             confirmButtonText:  'OK',
            confirmButtonColor: '#ff5e14'
        })
    }
    finally{
        setLoading(false)
    }

    }

    return (
        <>
            <div className="contact-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-5">
                            <div className="contact-page__content">
                                <div className="title pt-3">
                                    <h2>Get In Touch</h2>
                                </div>
                                <div className="contact-page__content-single">
                                    <div className="contact-page__content-single-inner">
                                        <div className="icon-box">
                                            <span className="icon-pin"></span>
                                        </div>
                                        <div className="content-box">
                                            <h2>Address</h2>
                                            <p>S.F.NO:1/2B, PERIYATHOTTAM, NACHIPATTI, RASIPURAM MAIN ROAD VENNANDUR (Po), RASIPURAM Tk <br /> NAMAKKAL Dt. PIN-637505.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-page__content-single">
                                    <div className="contact-page__content-single-inner">
                                        <div className="icon-box">
                                            <span className="icon-phone-call-1"></span>
                                        </div>
                                        <div className="content-box">
                                            <h2>Phone</h2>
                                            <p className="number1"><a href="tel:+918883999999">8883999999</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-page__content-single">
                                    <div className="contact-page__content-single-inner">
                                        <div className="icon-box">
                                            <span className="icon-email"></span>
                                        </div>
                                        <div className="content-box">
                                            <h2>Email</h2>
                                            <p className="email1"><a href="mailto:skvindu@yahoo.com">skvindu@yahoo.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-8 col-lg-8 col-md-7">
                            <div className="contact-page__form">

                                {/* Success Message */}
                                {success && (
                                    <div style={{
                                        background: '#d4edda',
                                        color: '#155724',
                                        padding: '12px 16px',
                                        borderRadius: '4px',
                                        marginBottom: '20px'
                                    }}>
                                        {success}
                                    </div>
                                )}

                                {/* Error Message */}
                                {error && (
                                    <div style={{
                                        background: '#f8d7da',
                                        color: '#721c24',
                                        padding: '12px 16px',
                                        borderRadius: '4px',
                                        marginBottom: '20px'
                                    }}>
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={formSubmit} className="comment-one__form contact-form-validated" noValidate="novalidate">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="comment-form__input-box">
                                                <input
                                                    type="text"
                                                    placeholder="Full Name"
                                                    name="name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    maxLength={50}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="comment-form__input-box">
                                                <input
                                                    type="email"
                                                    placeholder="Email Address"
                                                    name="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    maxLength={100}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="comment-form__input-box">
                                                <input
                                                    type="tel"
                                                    placeholder="Phone Number"
                                                    name="phone"
                                                    value={phone}
                                                    maxLength={10}
                                                    onChange={(e) => {
                                                        const value = e.target.value.replace(/[^0-9]/g, "")
                                                        setPhone(value)
                                                    }}
                                                    onKeyPress={(e) => {
                                                        if(!/[0-9]/.test(e.key)) {
                                                            e.preventDefault()
                                                        }
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="comment-form__input-box">
                                                <input
                                                    type="text"
                                                    placeholder="Subject"
                                                    name="subject"
                                                    value={subject}
                                                    onChange={(e) => setSubject(e.target.value)}
                                                    maxLength={100}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12">
                                            <div className="comment-form__input-box text-message-box">
                                                <textarea
                                                    name="message"
                                                    placeholder="Your Message"
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    maxLength={500}
                                                ></textarea>
                                            </div>
                                            <button
                                                className="thm-btn comment-form__btn"
                                                data-text="Send Message +"
                                                type="submit"
                                                disabled={loading}
                                            >
                                                {loading ? "Sending..." : "Send Message +"}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm;