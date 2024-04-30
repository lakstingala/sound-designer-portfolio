import { MyTextareaField } from '@/components/textArea';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { doc, setDoc } from "firebase/firestore";
import { db } from '@/dataLayer/initFirebase';
import { ProjectData } from '@/models/project';
import { ImagePicker } from '../imagePicker/imagePicker';
import { useState } from 'react';

interface Props {
    isOpen: boolean,
    onClose: () => void,
    currentData: ProjectData
}

export const NewProject = ({ isOpen, onClose, currentData }: Props) => {
    console.log(currentData)
    const [image, setImage] = useState(currentData?.imageUrl || "")
    return <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
        <input type="checkbox" id="drawer-left" className="drawer-toggle" checked={isOpen} />
        <label className="overlay" htmlFor="drawer-left"></label>
        <div className="drawer">
            <Formik
                initialValues={currentData}
                onSubmit={(
                    values: ProjectData,
                    { setSubmitting, resetForm }: FormikHelpers<ProjectData>
                ) => {
                    const id = currentData.id;
                    const cityRef = doc(db, "projects", id);
                    const data = {
                        ...values,
                        id: id,
                        position: parseInt("" + values.position),
                        imageUrl: image
                    }
                    setDoc(cityRef, data, { merge: true })
                        .then(_x => {
                            resetForm();
                            setSubmitting(false);
                            setImage("")
                        })
                        .catch(error => alert(error))
                        .finally(() => { onClose() })
                }}
            >
                <Form className='form-group'>
                    <div className="drawer-content pt-10 flex flex-col h-full">
                        <label onClick={e => onClose()} htmlFor="drawer-left" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                        <div>
                            <h2 className="text-xl font-medium p-[5px]">Project details</h2>


                            <label htmlFor="position" className='form-label'>Position</label>
                            <Field id="position" name="position" placeholder="position" type="position" className="input" />

                            <label htmlFor="title" className='form-label'>Title</label>
                            <Field id="title" name="title" placeholder="Title.." type="title" className="input" />

                            <label htmlFor="description" className='form-label'>Description</label>
                            <MyTextareaField id="description" name="description" placeholder="Description.." className="textarea" />


                            <label htmlFor="description1" className='form-label'>Description1</label>
                            <MyTextareaField id="description1" name="description1" placeholder="Description.." className="textarea" />


                            <label htmlFor="description2" className='form-label'>Description2</label>
                            <MyTextareaField id="description2" name="description2" placeholder="Description.." className="textarea" />

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
                        </div>
                        <div className="pt-[30px] h-full flex flex-row justify-end items-end gap-2">
                            <button onClick={e => onClose()} className="btn btn-ghost">Cancel</button>
                            <button className="btn btn-primary" type="submit">Save</button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    </div >
}