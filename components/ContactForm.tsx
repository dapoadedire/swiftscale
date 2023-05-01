import React, { useState } from "react";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";


const contactFormSchema = z.object({
    name: z.string().nonempty({ message: "Name is required" }),
    email: z.string().email({ message: "Invalid email" }),
    subject: z.string().nonempty({ message: "Subject is required" }),
    message: z.string().nonempty({ message: "Message is required" }),
});

type InputsType = z.infer<typeof contactFormSchema>;


export const ContactForm = (): JSX.Element => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");


    const [submitting, setSubmitting] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<InputsType>({
        resolver: zodResolver(contactFormSchema)
    });

    const onSubmit: SubmitHandler<InputsType> = (data) => {
        setSubmitting(true);
        console.log(data);
        setTimeout(() => {
            setSubmitting(false);
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
        }, 3000);
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
            className="bg-white rounded-xl relative
           shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]
            p-4 md:p-8 py-6
            overflow-hidden
           
            ">
            <div className="mb-8 flex flex-col gap-4">
                <h2 className="text-3xl font-semibold text-black" >
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
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div
                        className=" grid grid-cols-1 md:grid-cols-2 gap-x-4 "
                    >

                        <Input
                            register={register}
                            label="Your name"
                            required={true}
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => handleNameChange(e)}
                            error={errors.name?.message}

                        />


                        <Input
                            register={register}
                            label="Your email"
                            required={true}
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => handleEmailChange(e)}
                            error={errors.email?.message}
                        />
                    </div>


                    <Input
                        register={register}
                        label="Subject"
                        required={true}
                        name="subject"
                        type="text"
                        placeholder="Subject line"
                        value={subject}
                        onChange={(e) => handleSubjectChange(e)}
                        error={errors.subject?.message}

                    />


                    <div
                        className="flex flex-col gap-2 mb-10"
                    >
                        <label htmlFor="message"
                            className="text-gray-700 font-medium mb-1"
                        >Message  <span
                            className="text-primary"
                        >*</span></label>
                        <textarea id="message" cols={30} rows={7}
                            {...register("message")}
                            value={message}
                            onChange={(e) => handleMessageChange(e)}
                            className={`border border-gray-300 rounded-md p-2 focus:outline-none
                focus:border-gray-400
                ${errors.message ? "border-red-400" : ""}
                `}
                        ></textarea>
                        {errors.message && <span className="text-sm text-red-400">{errors.message.message}</span>}


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
            <div
            className={`bg-green-500 flex flex-col justify-center items-center top-0 bottom-0 left-0 right-0 p-4
            absolute
           ${submitting ? "opacity-100" : "hidden"} 
            `}
            >
                <p >
                    We&apos;ll get back to you within 24 hours.
                </p>
            </div>
        </section>
    )
};


type InputProps = {
    register: UseFormRegister<InputsType>,
    label: string,
    name: keyof InputsType,
    required?: boolean,
    type: string,
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    error: string | undefined
}

const Input = ({ register, name, label, required, type, placeholder, value, onChange, error }: InputProps) => {
    return (
        <div className="flex flex-col gap-1 mb-5">
            <label htmlFor={label}
                className="text-gray-700 font-medium mb-1"
            >{label}
                {required && <span
                    className="text-primary"
                >*</span>}
            </label>
            <input
                {...register(name)}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                // required={required}
                className={`border border-gray-300 rounded-md p-2
                focus:outline-none
                focus:border-gray-400
                ${error ? "border-red-400" : ""}
                `}
            />
            {error && <span className="text-sm text-red-400">{error}</span>}
        </div>
    )
}