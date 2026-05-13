import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ContactForm = () => {
    const serverURL = process.env.REACT_APP_SERVER_URL;

    // Form States
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    
    // UI States
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({}); // Changed from single error string to object

    // Validation Logic (Styled like AddProjectLayer)
    const validate = () => {
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = "Name is required";
        }
        
        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Enter a valid email address";
        }

        if (!phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (phone.length < 10) {
            newErrors.phone = "Enter a valid 10 digit phone number";
        }

        if (!subject.trim()) {
            newErrors.subject = "Subject is required";
        }

        if (!message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Reusable Error Component
    const ErrorMsg = ({ field }) => (
        errors[field] ? (
            <div className="text-danger mt-1 fw-medium" style={{ fontSize: '12px', textAlign: 'left' }}>
                {errors[field]}
            </div>
        ) : null
    );

    const formSubmit = async (e) => {
        e.preventDefault();
        setErrors({}); // Clear previous errors

        if (!validate()) return;

        setLoading(true);
        Swal.fire({
            title: 'Sending...',
            text: 'Please wait while we send your message.',
            allowOutsideClick: false,
            didOpen: () => { Swal.showLoading(); }
        });

        const payload = {
            name: name.trim(),
            email: email.trim().toLowerCase(),
            phone: phone.trim(),
            subject: subject.trim(),
            message: message.trim()
        };

        try {
            const res = await fetch(`http://localhost:5000/send-email`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            const data = await res.json();

            if (data.success) {
                Swal.fire({
                    icon: "success",
                    title: "Message Sent",
                    text: 'We will get back to you within 24 hours.',
                    confirmButtonColor: '#ff5e14'
                });
                // Reset form
                setName(""); setEmail(""); setPhone(""); setSubject(""); setMessage("");
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Failed!',
                    text: data.message || 'Failed to send message.',
                    confirmButtonColor: '#ff5e14'
                });
            }
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Server Error",
                text: "Please try again later",
                confirmButtonColor: '#ff5e14'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-page">
            <div className="container">
                <div className="row">
                    {/* Left Side Content (Address/Phone/Email) remains the same */}
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

                    {/* Form Side */}
                    <div className="col-xl-8 col-lg-8 col-md-7">
                        <div className="contact-page__form">
                            <form onSubmit={formSubmit} className="comment-one__form" noValidate>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="comment-form__input-box">
                                            <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                                            <ErrorMsg field="name" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="comment-form__input-box">
                                            <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            <ErrorMsg field="email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="comment-form__input-box">
                                            <input 
                                                type="tel" 
                                                placeholder="Phone Number" 
                                                value={phone} 
                                                onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))} 
                                                maxLength={10} 
                                            />
                                            <ErrorMsg field="phone" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="comment-form__input-box">
                                            <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                                            <ErrorMsg field="subject" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12">
                                        <div className="comment-form__input-box text-message-box">
                                            <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                            <ErrorMsg field="message" />
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
    );
};

export default ContactForm;