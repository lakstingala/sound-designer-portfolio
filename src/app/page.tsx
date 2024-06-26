'use client'

import About from "@/components/about"
import Contacts from "@/components/contacts"
import { ImagesList } from "@/components/imagesList"
import TopMenu from "@/components/topMenu"
import ModalVideo from "@/components/videoModal"
import { useState } from "react"

export default function Home() {
  const [embedId, setEmbedId] = useState("")
  console.log(embedId != "")
  return <div>
    <TopMenu />
    <ModalVideo key={embedId} embedId={embedId} onClose={() => { setEmbedId("") }} />
    <ImagesList disable={embedId != ""} setVideoId={id => { setEmbedId(id) }} />
    <About />
    <Contacts />
  </div>
}