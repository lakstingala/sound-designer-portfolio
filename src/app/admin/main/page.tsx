'use client'

import { NewProject } from "@/components/admin/projects/newProject"
import { ProjectList } from "@/components/admin/projects/projectList/projectList"
import { useState } from "react"

export default function Home() {
    const [isOPen, setIsOpen] = useState()
    return <div>
        <ProjectList />
        <NewProject />
    </div>
}
