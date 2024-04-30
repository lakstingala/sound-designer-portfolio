'use client'

import { ProjectData } from "@/models/project"
import ImageCell from "./imageCell"
import { useState } from "react"
import { ImagesListStatic } from "./imagesListStatic"

interface Props {
    setVideoId: (value: string) => void
}

export const ImagesList = ({ setVideoId }: Props) => {
    const [images, setImages] = useState<ProjectData[]>([])

    useState(() => {
        console.log(JSON.stringify(images))
        getData().then(x => {
            setImages(x)
        })
    })

    // if (images.length ){ 
    //     return <ImagesListStatic />
    // }


    return <div className="grid grid-cols-1 md:grid-cols-3">
        {images?.sort((a, b) => (a.position > b.position) ? 1 : ((b.position > a.position) ? -1 : 0)).map(x => {
            return <div key={x.id}>
                <ImageCell thumb={x.imageUrl} thumbAlt={""} thumbWidth={576} thumbHeight={324} onClick={() => {
                    setVideoId(x.videoUrl.replace("https://youtu.be/", ""))
                }} title={x.title} description={x.description} />
            </div>
        })}
    </div>
}

async function getData() {
    const res = await fetch('https://getprojects-ekeffyda6a-ey.a.run.app')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json() as unknown as ProjectData[]
}