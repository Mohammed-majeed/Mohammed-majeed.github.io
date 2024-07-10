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
                title: 'University of Baghdad, College of Economic Sciences',
                degree: 'BS, Computer Science',
                detail: "Bachelor's Degree in Computer Science from University of Baghdad, College of Economic Sciences.",
                year: '2007-2011'
            },
            {
                id: 1,
                title: 'Vrije Universiteit Amsterdam',
                degree: "Master's Degree in Artificial Intelligence",
                detail: "Master's Degree in Artificial Intelligence from Vrije Universiteit Amsterdam.",
                year: '2022-2024'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Enabling Intuitive Swarm Control with Natural Language Models',
                role: 'Model Developer',
                url: 'no website',
                desc: 'Developed a novel approach to control swarm robotics through natural language, enhancing the intuitiveness and efficiency of swarm operations.',
                year: '06/2024',
                location: 'Amsterdam, The Netherlands'
            },
            {
                id: 2,
                title: 'Delta NL Lubricants Website',
                role: 'Website Designer',
                url: 'https://delta-nl.nl',
                desc: 'Designed and developed a website for Delta NL Lubricants.',
                year: '2022',
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
