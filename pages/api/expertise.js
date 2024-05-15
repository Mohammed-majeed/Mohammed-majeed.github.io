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


export default function handler(req, res) {
    res.status(200).json(expertise)
}
