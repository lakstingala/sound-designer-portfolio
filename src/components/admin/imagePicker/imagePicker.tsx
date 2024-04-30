import { storage } from '@/dataLayer/initFirebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import * as React from 'react';

export interface ImagePickerProps {
    name: string;
    id: string;
    className: string;
    uploadLocation: string;
    value: string;
    onChange: (data: string) => void;
}

export const ImagePicker = (p: ImagePickerProps) => {
    const [isEditing, setIsEditing] = React.useState(true);
    const [progress, setProgress] = React.useState(0);
    const [isUploading, SetIsUploading] = React.useState(false);
    const [image, setImage] = React.useState<any>(null);

    React.useEffect(() => {
        if (image == null) return;

        handleUpload();

    }, [image])

    const handleChange = (e: any) => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            setImage(image);
        }
    };

    const handleUpload = () => {
        if (image == null) {
            alert("Image is not selected");
            return;
        }

        const imageExtension = image.name.split('.')[image.name.split('.').length - 1];
        const mediaFileName = `${Math.round(Math.random() * 100000000000)}.${imageExtension}`;

        const storageRef = ref(storage, `${p.uploadLocation}/${mediaFileName}`)

        uploadBytes(storageRef, image).then((snapshot) => {
            getDownloadURL(snapshot.ref)
                .then((url: string) => {
                    p.onChange(url);
                    SetIsUploading(false);
                    setIsEditing(false);
                });
        });

        SetIsUploading(true);
    };

    if (!isEditing) {
        return <div className='flex items-center space-between space-x-8'>
            <div
                style={{
                    backgroundImage: `url(${p.value})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    margin: 5
                }}
                className="flex text-indigo-500 text-white items-center bg-white p-1 round-md flex-none w-16 h-16 md:w-16 md:h-12 m-2">
            </div>
            <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
    }

    return (
        <div>
            {isUploading
                ?
                <progress value={progress} max="100" className="progress" />
                :
                <div className='flex flex-col items-center space-between space-8 '>
                    {p.value && <div
                        style={{
                            backgroundImage: `url(${p.value})`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            margin: 5
                        }}
                        className="flex text-indigo-500 text-white items-center bg-white p-1 round-md flex-none w-16 h-16 md:w-16 md:h-12 m-2">
                    </div>}
                    <div className="btn">
                        <span>File</span>
                        <input className='w-[160px]' type="file" onChange={handleChange} />
                    </div>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            }
        </div>
    )
}