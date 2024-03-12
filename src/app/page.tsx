'use client'

import ImageCell from "@/components/imageCell"
import ModalVideo from "@/components/videoModal"
import { useState } from "react"

export default function Home() {
    const [embedId, setEmbedId] = useState("")
    return <div className="flex flex-col md:flex-row justify-between">
        {["1", "2", "2"].map(x => {
            return <ImageCell thumb={"/moana.png"} thumbAlt={""} thumbWidth={1000} thumbHeight={1000} onClick={function (): void {
                setEmbedId("Fun")
            }} />
        })}
        <ModalVideo embedId={embedId} onClose={function (): void {
            setEmbedId("")
        } } />
    </div>
}
