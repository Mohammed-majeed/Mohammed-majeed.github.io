import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import React from 'react';

// Static expertise data
const expertise = [
    {
        id: 0,
        title: 'AI Expert',
        desc: 'As an AI expert, I specialize in developing and implementing artificial intelligence solutions that enhance business processes. I have a strong background in machine learning, deep learning, and natural language processing, which allows me to create intelligent systems that can learn and adapt to new data.',
    },
    {
        id: 1,
        title: 'LLM Expert',
        desc: 'As an expert in large language models (LLMs), I excel in creating and fine-tuning models for various applications, including natural language understanding, text generation, and sentiment analysis. My proficiency with LLMs enables me to deliver advanced language-based solutions that meet complex requirements.',
    },
    {
        id: 2,
        title: 'Website Designer',
        desc: 'I am a skilled website designer with a keen eye for aesthetics and usability. I create visually appealing and user-friendly websites that provide an optimal user experience. My expertise includes responsive design, interactive elements, and the latest web technologies to ensure your website stands out.',
    },
    {
        id: 3,
        title: 'Graphic Designer',
        desc: 'As a graphic designer, I bring creativity and innovation to every project. I am proficient in design software such as Adobe Illustrator, Photoshop, and Figma. My experience in UI/UX design and graphic design allows me to create stunning visuals that effectively communicate your brand message.',
    },
    {
        id: 4,
        title: 'Open Source Contributor',
        desc: "Open Source is the future. I regularly contribute to open-source projects, learning from the best practices of top developers while giving back to the community. This involvement helps me stay current with industry trends and collaborate with developers worldwide.",
    },
];

// CardLayout Component
const CardLayout = ({ children, className = "h-full w-full" }) => {
    return (
        <div className={`${className} boxShadow hover:transition-all !duration-200 hover:scale-[1.01] ease-linear rounded-xl`}
            style={{
                backgroundImage: `url(images/card-bg.jpg)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'inherit',
                backgroundPosition: 'right',
                width: '100%',
            }}
        >
            {children}
        </div>
    );
};

// ExpertiseCard Component
const ExpertiseCard = ({ data }) => {
    return (
        <CardLayout>
            <div className="h-full space-y-2 p-8 card_stylings">
                <div className="text-Snow">{data.title}</div>
                <div className="text-sm text-LightGray font-normal">
                    {data.desc}
                </div>
            </div>
        </CardLayout>
    );
};

// ParagraphSkeleton Component
const ParagraphSkeleton = ({ className }) => {
    return (
        <CardLayout>
            <div role="status" className={`${className} max-w-full card_stylings animate-pulse bg-EveningBlack self-center`}>
                <div className="h-2.5 rounded-full bg-Green/20 w-48 mb-4"></div>
                <div className="h-2 rounded-full bg-Green/20 max-w-[365px] mb-2.5"></div>
                <div className="h-2 rounded-full bg-Green/20 mb-2.5"></div>
                <div className="h-2 rounded-full bg-Green/20 max-w-[330px] mb-2.5"></div>
                <div className="h-2 rounded-full bg-Green/20 max-w-[400px] mb-2.5"></div>
                <div className="h-2 rounded-full bg-Green/20 max-w-[360px]"></div>
                <span className="sr-only">Loading...</span>
            </div>
        </CardLayout>
    );
};

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
};

const home = () => {
    return (
        <div className="Home-Page -z-10">
            <Banner />
            <MyExpertise />
            {/* <Recommendations />
            <ClientReviews /> */}
            <Footer />
        </div>
    );
}

export default home;
