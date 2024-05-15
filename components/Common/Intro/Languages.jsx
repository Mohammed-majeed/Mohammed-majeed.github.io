import { Progress } from "antd";
import { useEffect, useState } from "react";

const Languages = () => {
    const [arabic, setArabic] = useState(0);
    const [english, setEnglish] = useState(0);
    const [netherlands, setNetherlands] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (arabic < 98) {
                setArabic(prevCount => prevCount + 1);
            }
            if (english < 88) {
                setEnglish(prevCount => prevCount + 1);
            }
            if (netherlands < 50) {
                setNetherlands(prevCount => prevCount + 1);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [arabic, english, netherlands]);

    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-Snow text-xs font-bold'>Languages</span>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={arabic} size={50} />
                        <span className='text-xs font-bold text-Snow'>Arabic</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={english} size={50} />
                        <span className='text-xs font-bold text-Snow'>English</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={netherlands} size={50} />
                        <span className='text-xs font-bold text-Snow'>Netherlands</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Languages;
