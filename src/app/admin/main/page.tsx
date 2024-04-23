'use client'

import { NewProject } from "@/components/admin/projects/newProject"
import { ProjectList } from "@/components/admin/projects/projectList/projectList"

export default function Home() {
    return <div>
        <ProjectList />
        <NewProject />
    </div>
}
