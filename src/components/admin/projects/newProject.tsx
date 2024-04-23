import { MyTextareaField } from '@/components/textArea';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { doc, setDoc } from "firebase/firestore";
import { db } from '@/dataLayer/initFirebase';
import { ProjectData } from '@/models/project';
import { ImagePicker } from '../imagePicker/imagePicker';
import { useState } from 'react';

const createGuid = () => {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
        (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
}

export const NewProject = () => {
    const [image, setImage] = useState("")
    return <div>
        <div className='w-full max-w-[1152px] z-10 text-[#1C221F] space-y-[20px]'>
            <h2 className='text-[32px] font-bold'>Create new project</h2>
            <Formik
                initialValues={{
                    id: createGuid(),
                    title: '',
                    description: '',
                    imageUrl: '',
                    videoUrl: '',
                }}
                onSubmit={(
                    values: ProjectData,
                    { setSubmitting, resetForm }: FormikHelpers<ProjectData>
                ) => {
                    const cityRef = doc(db, "projects", values.id);
                    const data = {
                        ...values,
                        imageUrl: image
                    }
                    setDoc(cityRef, data, { merge: true })
                        .then(_x => {
                            resetForm();
                            setSubmitting(false);
                            setImage("")
                        })
                        .catch(error => console.log(error))
                        .finally(() => { console.log("done") })
                }}
            >
                <Form className='flex flex-col w-full text-[20px]'>
                    <label htmlFor="title">Title</label>
                    <Field id="title" name="title" placeholder="Title.." type="title" className="mb-[10px] p-[10px]" />

                    <label htmlFor="description">Description</label>
                    <MyTextareaField id="description" name="description" placeholder="Description.." className="mb-[10px] p-[10px]" />

                    <label htmlFor="videoUrl">Video Url</label>
                    <Field id="videoUrl" name="videoUrl" placeholder="videoUrl.." type="videoUrl" className="mb-[10px] p-[10px]" />

                    <label htmlFor="imageUrl">Thumb</label>
                    <ImagePicker
                        id={'imageUrl'}
                        name={'imageUrl'}
                        uploadLocation={'projects'}
                        className={''}
                        value={image}
                        onChange={img => setImage(img)}
                    />

                    <button className='btn btn-primary' type="submit">Create new</button>
                </Form>
            </Formik>
        </div>
    </div>
}