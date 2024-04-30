import { Formik, Field, Form, FormikHelpers } from 'formik';
import { MyTextareaField } from './textArea';
import { useState } from 'react';

interface Values {
    name: string;
    message: string;
    email: string;
}

const Contacts = () => {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess]= useState(false)

    const submitForm = (v: Values) => {
        setLoading(true)
        fetch('https://submitform-ekeffyda6a-ey.a.run.app', {
            method: 'POST',
            body: JSON.stringify(v)
        }).then(function (response) {
            setSuccess(true)
            return response.json()
        }).finally(() => setLoading(false))
    }

    if (loading) {
        return <>
            <div className='w-full h-[3px] bg-[#7B9A98]' />
            <div className='w-full max-w-[1152px] h-[530px] z-10 text-[#1C221F] space-y-[20px]  bg-[#DFDED0] items-center p-[32px]'>
                <h2 className='text-[32px] font-bold'>Submitting form, please wait..</h2>
            </div>
        </>
    }

    if (success) {
        return <>
            <div className='w-full h-[3px] bg-[#7B9A98]' />
            <div className='w-full max-w-[1152px] h-[530px] z-10 text-[#1C221F] space-y-[20px]  bg-[#DFDED0] items-center p-[32px]'>
                <h2 className='text-[32px] font-bold'>Thank you for your message</h2>
            </div>
        </>
    }

    return (
        <>
            <div className='w-full h-[3px] bg-[#7B9A98]' />
            <div className="relative w-full flex flex-col p-[10px] bg-[#DFDED0] items-center pt-[32px]">
                <div className='w-full max-w-[1152px] z-10 text-[#1C221F] space-y-[20px]'>
                    <h2 className='text-[32px] font-bold'>Contact me</h2>
                    <Formik
                        initialValues={{
                            name: '',
                            message: '',
                            email: '',
                        }}
                        onSubmit={(
                            values: Values,
                            { setSubmitting }: FormikHelpers<Values>
                        ) => {
                            submitForm(values)
                        }}
                    >
                        <Form className='flex flex-col w-full text-[20px]'>
                            <label htmlFor="name">Name</label>
                            <Field id="name" name="name" placeholder="John" type="name" className="mb-[10px] p-[10px] dark:text-slate-100" />

                            <label htmlFor="email">Email</label>
                            <Field
                                id="email"
                                name="email"
                                placeholder="john@company.com"
                                type="email"
                                className="mb-[10px] p-[10px] dark:text-slate-100"
                            />


                            <label htmlFor="message">Message</label>
                            <MyTextareaField id="message" name="message" placeholder="Message.." className="mb-[10px] p-[10px]  dark:text-slate-100" />
                            <p className='text-[18px] text-[#7B9A98] pb-[20px]'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>

                            <button className='bg-[#7B9A98] hover:bg-[#5D8E9B] w-[200px] h-[50px] mb-[20px] dark:text-slate-100' type="submit">Send</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    );
};

export default Contacts;
