import ImageCell from "@/components/imageCell"
import { ProjectData } from "@/models/project"

interface Props {
    data: ProjectData
}

export const ProjectCell = ({ data }: Props) => {
    return <ImageCell disable={false} thumb={data.imageUrl} thumbAlt={""} thumbWidth={900} thumbHeight={600} onClick={() => {
        alert("Open Youtube")
    } } title={data.title} descriptions={[data.description, data.description1, data.description2]} />
}