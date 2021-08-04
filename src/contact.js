import React from 'react'
import './Contact.css'
import {useForm} from "react-hook-form";

function Contact() {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const message = watch('message') || "";
    const messageCharsLeft = 1000 - message.length;
    const onSubmit = data => console.log(data); // Here is where the API would get called to send an email

    return (
        <div>
            <h1>Contact Me</h1>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >

                <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
                    {errors.contact_name && errors.contact_name.type === "required" && (
                        <div role="alert">Name is required<br/></div>
                    )}
                    <input type='text' name='contact_name'
                           maxLength='100' {...register('contact_name', {required: true})} placeholder='Name'/>
                    <br/>
                    {errors.contact_email && errors.contact_email.type === "required" && (
                        <div role="alert">Name is required<br/></div>
                    )}
                    <input type='email' name='contact_email' {...register('contact_email', {required: true})}
                           placeholder='Email'/>
                    <br/>
                    <textarea name='message' maxLength='1000' {...register('message', {required: false})}
                              placeholder='Message'/>
                    <p className='message-chars-left'>Characters Remaining: {messageCharsLeft}</p>
                    <br/>
                    <input type='submit' value='Send'/>
                </form>
            </div>
        </div>
    );
}

export default Contact;