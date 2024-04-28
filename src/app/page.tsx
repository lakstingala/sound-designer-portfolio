'use client'

import About from "@/components/about"
import Contacts from "@/components/contacts"
import { ImagesList } from "@/components/imagesList"
import TopMenu from "@/components/topMenu"
import ModalVideo from "@/components/videoModal"
import { useState } from "react"

export default async function Home() {
  const [embedId, setEmbedId] = useState("")

  return <div onClick={() => console.log("asas")}>
    <TopMenu />
    <ImagesList setEmbedId={id => setEmbedId(id)} />
    <ModalVideo embedId={embedId} onClose={() => { setEmbedId("") }} />
    <About />
    <Contacts />
  </div>
}