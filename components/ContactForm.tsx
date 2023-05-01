import { useState } from "react";



export const ContactForm = (): JSX.Element => {

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
        <section
        className="bg-white rounded-2xl shadow-md p-8"
        >
            <div
            className="mb-8 flex flex-col gap-4 "
            >
                <h2
                className="text-3xl font-semibold text-black"
                >
                    Contact Us
                </h2>
                <p
                className="text-gray-500"
                                >
                    Want early acess? Reach out to us!
                </p>
            </div>
            <div>
                <form
                onSubmit={(e) => handleSubmit(e)}
                >
                    <div
                    className=" grid grid-cols-1 md:grid-cols-2 gap-x-4 "
                    >
                        
                            <Input
                                label="Your name"
                                required={true}
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => handleNameChange(e)}

                            />
                        
                        
                            <Input
                                label="Your email"
                                required={true}
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => handleEmailChange(e)}
                            />
                        </div>
                   
                    
                        <Input
                            label="Subject"
                            required={true}
                            type="text"
                            placeholder="Subject line"
                            value={subject}
                            onChange={(e) => handleSubjectChange(e)}
                        />

                    
                    <div
                    className="flex flex-col gap-2 mb-10"
                    >
                        <label htmlFor="message"
                        className="text-gray-700 font-medium mb-1"
                        >Message  <span
                            className="text-primary"
                        >*</span></label>
                        <textarea name="message" id="message" cols={30} rows={7}
                            value={message}
                            onChange={(e) => handleMessageChange(e)}
                            className="border border-gray-300 rounded-md p-2 focus:outline-none
                focus:border-primary"
                        ></textarea>

                    </div>

                    <div
                        className="flex flex-col gap-2 mb-4"
                    >
                        <button type="submit"
                        className="bg-primary text-white rounded-md py-4 px-6"
                        >Contact Us</button>
                    </div>
                </form>
            </div>
        </section>
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
        <div
        className="flex flex-col gap-1
        mb-5
        "
        >
            <label htmlFor={label}
            className="text-gray-700 font-medium mb-1"
            >{label}
                {required && <span
                className="text-primary"
                >*</span>}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="border border-gray-300 rounded-md p-2
                focus:outline-none
                focus:border-primary
                "
            />
        </div>
    )
}