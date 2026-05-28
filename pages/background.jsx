import { useState } from "react";
import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";

// Static background data
const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Vrije Universiteit Amsterdam',
                degree: "Master of Science in Artificial Intelligence",
                detail: "Thesis: \"Enabling Intuitive Swarm Control with Natural Language Models\" (Minions) — integrating LLMs with Behavior Trees for natural-language swarm robot control.",
                year: '2022-2024'
            },
            {
                id: 1,
                title: 'Baghdad College of Economic Sciences University',
                degree: 'Bachelor of Science in Computer Science',
                detail: "Bachelor's Degree in Computer Science, Baghdad, Iraq.",
                year: '2007-2011'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'RD New Solution',
                role: 'Geo-IT Consultant',
                url: 'no website',
                desc: 'Geospatial platform support for enterprise environments including ArcGIS Enterprise, QGIS, FME, and GDAL/OGR. Built automation pipelines for GML/GeoPackage/GeoJSON conversion and ArcGIS publishing. Containerized services with Python, FastAPI, Docker, and Kubernetes. Monitoring with Splunk, Grafana/Loki, and structured JSON logs.',
                year: '2025 – Present',
                location: 'The Hague, The Netherlands'
            },
            {
                id: 2,
                title: 'Inventors Hub R&D',
                role: 'Software Developer / AI Engineer',
                url: 'no website',
                desc: 'Built LLM-based prototypes for document processing, recruitment matching, and robotics. Developed backend services with Python, FastAPI, Flask, PostgreSQL, and Docker. Deployed Odoo CRM/ERP on an unmanaged VPS. Worked with open-source LLMs, prompt engineering, and agent-style workflows.',
                year: '2024 – 2025',
                location: 'The Netherlands'
            },
            {
                id: 3,
                title: 'Vrije Universiteit Amsterdam',
                role: 'MSc Thesis Researcher',
                url: 'no website',
                desc: '"Minions" — integrated Large Language Models with Behavior Trees to translate natural-language instructions into executable swarm-robot behaviours, making swarm robotics accessible to non-expert users.',
                year: '2024',
                location: 'Amsterdam, The Netherlands'
            },
            {
                id: 4,
                title: 'Delta NL Lubricants',
                role: 'Web / Graphic Designer',
                url: 'https://delta-nl.nl',
                desc: 'Designed and developed the company website. Created product labels, marketing materials, and visual assets aligned with brand identity.',
                year: '2021 – 2023',
                location: 'Delft, The Netherlands'
            },
        ]
    }
];

function Background() {
    // Simulate loading state
    const [isLoading, setIsLoading] = useState(false);

    // Using static data directly
    const data = background;

    return (
        <BannerLayout>
            <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10">
                <div className="flex flex-col gap-y-4 order-2 md:order-1 md:mr-12">
                    <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">Education</div>
                    {isLoading ?
                        [1, 2, 3].map((_, index) => (
                            <ParagraphSkeleton key={index} className="p-8 h-full w-full relative" />
                        ))
                        :
                        data[0]?.eduCards?.map((data, key) => (
                            <Edu_Card key={key} data={data} />
                        ))
                    }
                </div>
                <div className="order-1 md:order-2">
                    <div className="flex flex-col gap-y-4 md:ml-12">
                        <div className="md:pt-0 pt-4 text-xl text-Snow font-semibold">Experience</div>
                        {isLoading ?
                            [1, 2, 3].map((_, index) => (
                                <ParagraphSkeleton key={index} className="p-8 h-full w-full relative" />
                            ))
                            :
                            data[1]?.expCards?.map((data, key) => (
                                <Exp_Card key={key} data={data} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </BannerLayout>
    );
}

export default Background;




// import { useState } from "react";
// import Edu_Card from "../components/Background/Edu_Card";
// import Exp_Card from "../components/Background/Exp_Card";
// import BannerLayout from "../components/Common/BannerLayout";
// import Footer from "../components/Footer";
// import { useQuery } from "react-query";
// import axios from "axios";
// import { Skeleton } from "antd";
// import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";

// function Background() {
//     const { isLoading, error, data } = useQuery('background', () =>
//         axios.get('/api/background')
//             .then(({ data }) => data)
//             .catch(error => console.error('Error fetching background:', error))
//     );

//     return (
//         <BannerLayout>
//             <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10">
//                 <div className="flex flex-col gap-y-4 order-2 md:order-1 md:mr-12">
//                     <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">Education</div>
//                     {isLoading ?
//                         [1, 2, 3].map((_, index) => (
//                             <ParagraphSkeleton key={index} className="p-8 h-full w-full relative" />
//                         ))
//                         :
//                         data && data[0]?.eduCards?.map((data, key) => (
//                             <Edu_Card key={key} data={data} />
//                         ))
//                     }
//                 </div>
//                 <div className="order-1 md:order-2">
//                     <div className="flex flex-col gap-y-4 md:ml-12">
//                         <div className="md:pt-0 pt-4 text-xl text-Snow font-semibold">Experience</div>
//                         {isLoading ?
//                             [1, 2, 3].map((_, index) => (
//                                 <ParagraphSkeleton key={index} className="p-8 h-full w-full relative" />
//                             ))
//                             :
//                             data && data[1]?.expCards?.map((data, key) => (
//                                 <Exp_Card key={key} data={data} />
//                             ))
//                         }
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </BannerLayout>
//     );
// }

// export default Background;
