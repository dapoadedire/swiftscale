import React, { useState } from "react";



export const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.table({
            name,
            email,
            subject,
            message
        });
        console.log("Form submitted");
    }


    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSubject(e.target.value);
    }

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    }


    return (
        <div>
            <div>
                <h2>
                    Contact Us
                </h2>
                <p>
                    Want early acess? Reach out to us!
                </p>
            </div>
            <div>
                <form
                onSubmit={(e) => handleSubmit(e)}
                >
                    <div>
                        <div>
                            <Input
                                label="Your name"
                                required={true}
                                type="text"
                                placeholder="Enter your ame"
                                value={name}
                                onChange={(e) => handleNameChange(e)}

                            />
                        </div>
                        <div>
                            <Input
                                label="Your email"
                                required={true}
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => handleEmailChange(e)}
                            />
                        </div>
                    </div>
                    <div>
                        <Input
                            label="Subject"
                            required={true}
                            type="text"
                            placeholder="Subject line"
                            value={subject}
                            onChange={(e) => handleSubjectChange(e)}
                        />

                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols={30} rows={10}
                            value={message}
                            onChange={(e) => handleMessageChange(e)}
                        ></textarea>

                    </div>

                    <div>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
};


type InputProps = {
    label: string,
    required?: boolean,
    type: string,
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ label, required, type, placeholder, value, onChange }: InputProps) => {
    return (
        <div>
            <label htmlFor={label}>{label}
                {required && <span>*</span>}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}