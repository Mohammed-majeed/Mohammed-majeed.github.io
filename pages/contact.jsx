import { useState } from 'react';
import BannerLayout from '../components/Common/BannerLayout';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import { HiMail, HiUser } from 'react-icons/hi'
import { BsChatTextFill } from 'react-icons/bs'
import Footer from '../components/Footer';
import { Modal } from 'antd';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle successful form submission
                setIsOpen(true);
            } else {
                // Handle error in form submission
                console.error('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <BannerLayout>
            <div className=" px-4 py-2">
                <div className="my-6 text-Snow flex flex-col gap-y-5">
                    <h1 className='text-lg font-bold'>Contact Information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
                        <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Country:</span>
                                <span className='text-LightGray md:text-sm'>The Netherlands</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>City:</span>
                                <span className='text-LightGray md:text-sm'>the Hague</span>
                            </div>
                        </div>
                        <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Email:</span>
                                <span className='text-LightGray text-sm'>Mohammed.y.majeed@gmail.com</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Linkedin:</span>
                                <span className='text-LightGray text-sm'>Mohammed Majeed</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Phone:</span>
                                <span className='text-LightGray text-sm'>+31 (0) 683270496</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
                    <a className='hover:scale-125 ease-in-out duration-700' href="mailto:Mohammed.y.majeed@gmail.com" target='_blank' rel="noreferrer"><HiMail /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://github.com/Mohammed-majeed" target='_blank' rel="noreferrer"><FaGithub /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://www.linkedin.com/in/mohammed-majeed-b3347376/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
                </div>

                <div className="my-12 w-full h-auto text-Snow">
                    <h1 className='text-lg font-bold'>Get In Touch</h1>
                    <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col w-full">
                                <div className="userIcon relative mb-6">
                                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none">
                                        <HiUser />
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        className="input_stylings"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="mailIcon relative mb-6">
                                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none">
                                        <HiMail />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        className="input_stylings"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="textIcon relative mb-6">
                                    <div id="icon" className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none">
                                        <BsChatTextFill />
                                    </div>
                                    <textarea
                                        rows={6}
                                        cols={50}
                                        name="message"
                                        className="input_stylings"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="my-4">
                                <button type="submit" className="button"> SEND MESSAGE </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* success modal */}
            <Modal
                className='card_stylings backdrop-blur-3xl drop-shadow-2xl'
                centered
                open={isOpen}
                footer={null}
                closable={false}
                onOk={() => setIsOpen(false)}
                onCancel={() => setIsOpen(false)}
            >
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-Green font-bold text-2xl'>Message Sent</h1>
                    <p className='text-Snow'>Thank you for getting in touch. I will get back to you soon!</p>
                </div>
            </Modal>
            <Footer />
        </BannerLayout>
    );
}

export default Contact;


// import { useState } from 'react';
// import BannerLayout from '../components/Common/BannerLayout';
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
// import { SiUpwork } from 'react-icons/si'
// import { HiMail, HiUser } from 'react-icons/hi'
// import { BsChatTextFill } from 'react-icons/bs'
// import Footer from '../components/Footer';
// import { Modal } from 'antd';

// const Contact = () => {
//     const [isOpen, setIsOpen] = useState(false)

//     return (
//         <BannerLayout>
//             <div className=" px-4 py-2">
//                 <div className="my-6 text-Snow flex flex-col gap-y-5">
//                     <h1 className='text-lg font-bold'>Contact Information</h1>
//                     <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
//                         <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
//                             <div className="flex justify-between items-center">
//                                 <span className='md:text-base'>Country:</span>
//                                 <span className='text-LightGray md:text-sm'>The Netherlands</span>
//                             </div>
//                             <div className="flex justify-between items-center">
//                                 <span className='md:text-base'>City:</span>
//                                 <span className='text-LightGray md:text-sm'>the Hague</span>
//                             </div>
//                             {/* <div className="flex justify-between items-center">
//                                 <span className='md:text-base'>Company:</span>
//                                 <span className='text-LightGray md:text-sm'>visualsX</span>
//                             </div> */}
//                         </div>
//                         <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
//                             <div className="flex justify-between items-center">
//                                 <span className='md:text-base'>Email:</span>
//                                 <span className='text-LightGray text-sm'>Mohammed.y.majeed@gmail.com</span>
//                             </div>
//                             <div className="flex justify-between items-center">
//                                 <span className='md:text-base'>Linkedin:</span>
//                                 <span className='text-LightGray text-sm'>Mohammed Majeed</span>
//                             </div>
//                             <div className="flex justify-between items-center">
//                                 <span className='md:text-base'>Phone:</span>
//                                 <span className='text-LightGray text-sm'>+31 (0) 683270496</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
//                     <a className='hover:scale-125 ease-in-out duration-700' href="" target='_blank' rel="noreferrer"><HiMail /></a>
//                     <a className='hover:scale-125 ease-in-out duration-700' href="https://github.com/Mohammed-majeed" target='_blank' rel="noreferrer"><FaGithub /></a>
//                     <a className='hover:scale-125 ease-in-out duration-700' href="https://www.linkedin.com/in/mohammed-majeed-b3347376/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
//                     {/* <a className='hover:scale-125 ease-in-out duration-700' href="https://x.com/iosamajavaid" target='_blank' rel="noreferrer"><FaTwitter /></a> */}
//                     {/* <a className='hover:scale-125 ease-in-out duration-700 hidden sm:block' href="https://www.fiverr.com/codeworthy" target='_blank' rel="noreferrer"><Fiverr_Icon /></a> */}
//                     {/* <a className='hover:scale-125 ease-in-out duration-700 text-2xl sm:text-4xl mt-1' href="#" target='_blank' rel="noreferrer"><SiUpwork /></a> */}
//                 </div>


//                 <div className="my-12 w-full h-auto text-Snow">
//                     <h1 className='text-lg font-bold'>Get In Touch</h1>
//                     <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
//                         <div>
//                             <div className="flex flex-col w-full">
//                                 <div className="userIcon relative mb-6">
//                                     <div id="icon" className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none">
//                                         <HiUser />
//                                     </div>
//                                     <input type="text" className="input_stylings" placeholder="Name" />
//                                 </div>
//                             </div>

//                             <div className="flex flex-col w-full">
//                                 <div className="mailIcon relative mb-6">
//                                     <div id="icon" className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none">
//                                         <HiMail />
//                                     </div>
//                                     <input type="text" className="input_stylings" placeholder="Email" />
//                                 </div>
//                             </div>

//                             <div className="flex flex-col w-full">
//                                 <div className="textIcon relative mb-6">
//                                     <div id="icon" className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none">
//                                         <BsChatTextFill />
//                                     </div>
//                                     <textarea rows={6} cols={50} className="input_stylings" placeholder="Message" />
//                                 </div>
//                             </div>

//                             <div className="my-4">
//                                 <button onClick={() => setIsOpen(true)} className="button"> SEND MESSAGE </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* success modal */}
//             <Modal
//                 className='card_stylings backdrop-blur-3xl drop-shadow-2xl'
//                 // wrapClassName='bg-red-800'
//                 centered
//                 open={isOpen}
//                 footer={null}
//                 closable={false}
//                 onOk={() => setIsOpen(false)}
//                 onCancel={() => setIsOpen(false)}
//             >
//                 <div className='flex flex-col items-center justify-center'>
//                     <h1 className='text-Green font-bold text-2xl'>In Progress</h1>
//                     <a className='underline text-Snow' target='_blank' href='https://github.com/Mohammed-majeed'>Be the one to integrate this!</a>
//                 </div>
//             </Modal>
//             <Footer />
//         </BannerLayout>

//     )
// }

// export default Contact
