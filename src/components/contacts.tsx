import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
    name: string;
    message: string;
    email: string;
}

const Contacts = () => {
    return (
        <div className="relative w-full flex flex-col md:flex-row p-[10px] bg-[#DFDED0] justify-center">
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
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 500);
                    }}
                >
                    <Form className='flex flex-col w-full text-[20px]'>
                        <label htmlFor="name">Name</label>
                        <Field id="name" name="name" placeholder="John" type="name" className="mb-[10px] p-[10px]" />

                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="john@acme.com"
                            type="email"
                            className="mb-[10px] p-[10px]"
                        />


                        <label htmlFor="message">Message</label>
                        <Field id="message" name="message" placeholder="Message.." className="mb-[10px] p-[10px]" />
                        <p className='text-[18px] text-[#7B9A98] pb-[20px]'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>

                        <button className='bg-[#7B9A98] hover:bg-[#5D8E9B] w-[200px] h-[50px] mb-[20px]' type="submit">Send</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Contacts;