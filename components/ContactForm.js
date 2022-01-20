import React from 'react';
import styles from '../styles/ContactForm.module.css';
import FadeIn from 'react-fade-in';

function ContactForm() {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [emailSent, setEmailSent] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (name !== '' && email !== '' && message !== '') {
            try {
                await fetch('/api/email', {
                    method: 'POST',
                    body: JSON.stringify({
                        'name': name,
                        'email': email,
                        'subject': subject,
                        'message': message
                    })
                }).then(function () {
                    setEmailSent(true);
                });
            } catch (e) {
                setEmailError(true);
                console.log(e);
            }
        } else {
            setEmailError(true);
        }
    }

    return (
        <FadeIn className={styles.contactForm}>
            <h1>Want to Get In Touch?</h1>
            <p>Fill out the form below and send me an email!</p>
            {!emailSent && (
                <form onSubmit={handleSubmit}>
                    <input placeholder="Name" id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />     
                    <input placeholder="E-mail" id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input placeholder="Subject" id="subject" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
                    <textarea placeholder="Message" id="message" type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button className={styles.contactSubmitBtn} type="submit" id= "submitBtn">Submit</button>
                    {!emailSent && emailError && (
                        <p className={styles.errorMessage}>Something has gone wrong, please ensure all fields are filled out and try again.</p>
                    )}
                </form>
            )}

            {emailSent && !emailError && (
                <p className={styles.successMessage}>Thank you for your email! I will endevour to respond within 24-48 hours.</p>
            )}
        </FadeIn>
    )
}

export default ContactForm
