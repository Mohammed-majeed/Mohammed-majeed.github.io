import React from 'react';
import ExpertiseCard from "./ExpertiseCard";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";

// Static expertise data
const expertise = [
    {
        id: 0,
        title: 'Geo-IT & GIS',
        desc: 'Hands-on experience with ArcGIS Enterprise, ArcGIS Pro, QGIS, FME, and GDAL/OGR. I build and maintain geospatial data pipelines for converting, validating, and publishing spatial formats such as GML, GeoPackage, GeoJSON, KML, and Shapefile to enterprise platforms.',
    },
    {
        id: 1,
        title: 'AI & LLM Development',
        desc: 'Building practical AI applications using OpenAI, Claude, Gemini, and open-source LLMs (LLaMA). Experience with prompt engineering, NLP, intelligent agent workflows, RAG-style pipelines, and integrating LLMs into real-world backend systems.',
    },
    {
        id: 2,
        title: 'Backend Engineering',
        desc: 'Developing robust backend services with Python, FastAPI, and Flask. Experienced in REST API design, PostgreSQL, data validation, scheduled automation jobs, and building reliable data-processing pipelines that connect geospatial, AI, and external APIs.',
    },
    {
        id: 3,
        title: 'DevOps & Monitoring',
        desc: 'Containerizing and deploying services with Docker, Docker Compose, and Kubernetes on Linux/VPS environments. Building operational visibility with Splunk dashboards, Grafana/Loki log analysis, structured JSON logging, and Python/PowerShell health checks.',
    },
    {
        id: 4,
        title: 'Web & Graphic Design',
        desc: 'Building responsive web applications with React, HTML, CSS, and TailwindCSS. Designing professional visual assets, product labels, and brand materials using Figma, Adobe Photoshop, Adobe Illustrator, and CorelDRAW. CMS experience with WordPress.',
    },
    {
        id: 5,
        title: 'Research & Innovation',
        desc: 'MSc thesis on swarm robotics NLP control ("Minions") — combining LLMs with Behavior Trees for natural-language robot commands. Also built AI recruitment matching (EnhanceMatch/Zoho CRM) and deployed Odoo ERP on unmanaged VPS infrastructure.',
    },
];

// MyExpertise Component using Static Data
const MyExpertise = () => {
    const isLoading = false;
    const error = null;
    const data = expertise;

    if (error) {
        return <div className="text-Snow">Error loading data.</div>;
    }

    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">My Expertise</div>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8">
                {isLoading ? (
                    [1, 2, 3, 4, 5, 6].map((_, index) => (
                        <ParagraphSkeleton key={index} className={"space-y-2 p-8"} />
                    ))
                ) : (
                    data.map((data, key) => (
                        <ExpertiseCard key={key} data={data} />
                    ))
                )}
            </div>
        </>
    );
}

export default MyExpertise;



// import ExpertiseCard from "./ExpertiseCard"
// import { useQuery } from "react-query";
// import axios from "axios";
// import ParagraphSkeleton from "../../Common/ParagraphSkeleton";

// const MyExpertise = () => {

//     const { isLoading, error, data } = useQuery('expertise', () =>
//         axios.get('api/expertise')
//             .then(({ data }) => data)
//             .catch(error => console.error('Error fetching testimonials:', error)))

//     return (
//         <>
//             <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">My Expertise</div>
//             <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 " >

//                 {
//                     isLoading ?
//                         [1, 2, 3, 4, 5, 6].map(() => (
//                             <ParagraphSkeleton className={"space-y-2 p-8"} />
//                         ))
//                         :
//                         data?.map((data, key) => (
//                             <ExpertiseCard key={key} data={data} />
//                         ))
//                 }

//             </div>
//         </>
//     )
// }

// export default MyExpertise
