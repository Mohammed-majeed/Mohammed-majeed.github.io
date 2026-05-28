import CardLayout from "../../Common/CardLayout"
import { FaMap, FaRobot, FaServer, FaDocker, FaPalette, FaFlask } from 'react-icons/fa'

const iconMap = {
    'Geo-IT & GIS': <FaMap className="text-Green text-2xl" />,
    'AI & LLM Development': <FaRobot className="text-Green text-2xl" />,
    'Backend Engineering': <FaServer className="text-Green text-2xl" />,
    'DevOps & Monitoring': <FaDocker className="text-Green text-2xl" />,
    'Web & Graphic Design': <FaPalette className="text-Green text-2xl" />,
    'Research & Innovation': <FaFlask className="text-Green text-2xl" />,
}

const ExpertiseCard = ({ data }) => {
    return (
        <CardLayout>
            <div className="h-full space-y-3 p-8 card_stylings">
                <div className="mb-1">{iconMap[data.title]}</div>
                <div className="text-base font-bold text-Snow">{data.title}</div>
                <div className="text-sm text-LightGray font-normal leading-relaxed">
                    {data.desc}
                </div>
            </div>
        </CardLayout>
    )
}

export default ExpertiseCard