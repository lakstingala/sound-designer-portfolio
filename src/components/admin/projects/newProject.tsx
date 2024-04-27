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
    return <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
        <input type="checkbox" id="drawer-left" className="drawer-toggle" />

        <label htmlFor="drawer-left" className="btn btn-primary" onClick={e => console.log("a")}>Open Left</label>
        
        <label className="overlay" htmlFor="drawer-left"></label>
        <div className="drawer">
            <div className="drawer-content pt-10 flex flex-col h-full">
                <label htmlFor="drawer-left" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                <div>
                    <h2 className="text-xl font-medium">Create your account</h2>
                    <input className="input py-1.5 my-3" placeholder="Type here..." />
                </div>
                <div className="h-full flex flex-row justify-end items-end gap-2">
                    <button className="btn btn-ghost">Cancel</button>
                    <button className="btn btn-primary">Create</button>
                </div>
            </div>
        </div>
        <h2 className='text-3xl font-semibold'>Create new project</h2>
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
                const id = createGuid();
                const cityRef = doc(db, "projects", id);
                console.log("id", id)
                const data = {
                    ...values,
                    id: id,
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
            <Form className='form-group'>
                <label htmlFor="id" className='form-label'>id</label>
                <Field disabled id="id" name="id" placeholder="id" type="id" className="input" />

                <label htmlFor="title" className='form-label'>Title</label>
                <Field id="title" name="title" placeholder="Title.." type="title" className="input" />

                <label htmlFor="description" className='form-label'>Description</label>
                <MyTextareaField id="description" name="description" placeholder="Description.." className="textarea" />

                <label htmlFor="videoUrl" className='form-label'>Video Url</label>
                <Field id="videoUrl" name="videoUrl" placeholder="videoUrl.." type="videoUrl" className="input" />

                <label htmlFor="imageUrl" className='form-label'>Thumb</label>
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
}