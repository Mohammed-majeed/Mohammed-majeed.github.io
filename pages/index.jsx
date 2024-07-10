import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
// Remove this import statement
// import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';
import React from 'react';
import { useQuery } from "react-query";
import axios from "axios";

// import Recommendations from '../components/HomeComponents/Recommendations/Recommendations';
// import ClientReviews from '../components/HomeComponents/ClientReviews/ClientReviews';

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

// MyExpertise Component
const MyExpertise = () => {
    const { isLoading, error, data } = useQuery('expertise', () =>
        axios.get('api/expertise')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error))
    );

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
                    data?.map((data, key) => (
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


// import Footer from '../components/Footer';
// import Banner from '../components/HomeComponents/Banner';
// import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';
// // import Recommendations from '../components/HomeComponents/Recommendations/Recommendations';
// // import ClientReviews from '../components/HomeComponents/ClientReviews/ClientReviews';
// const home = () => {
//     return (
//         <div className="Home-Page -z-10">
//             <Banner />
//             <MyExpertise />
//             {/* <Recommendations />
//             <ClientReviews /> */}
//             <Footer />

//         </div>
//     )
// }

// export default home
