'use client'

import { NewProject } from "@/components/admin/projects/newProject"
import { ProjectList } from "@/components/admin/projects/projectList/projectList"
import { ProjectData } from "@/models/project"
import { useState } from "react"

export default function Home() {

    const createGuid = () => {
        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
            (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
        );
    }

    const [currentProject, setCurrentProject] = useState<ProjectData | undefined>()
    return <div>
        <button className="btn btn-primary" onClick={e => {
            setCurrentProject({
                id: createGuid(),
                position: 0,
                title: '',
                description: '',
                description1: '',
                description2: '',
                imageUrl: '',
                videoUrl: '',
            })
        }}>Create new Project</button>
        <ProjectList onEdit={setCurrentProject} />
        {currentProject && <NewProject onClose={() => setCurrentProject(undefined)} isOpen={currentProject!=undefined} currentData={currentProject} />}

    </div>
}
