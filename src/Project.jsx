import Tag from "./Tag";
import { motion, useAnimation } from "framer-motion";

export default function Project({ title, image, tags, url }) {
    const imageControls = useAnimation();
    const overlayControls = useAnimation();

    const handleHoverStart = () => {
        imageControls.start({ height: "100%" });
        overlayControls.start({ opacity: 1 });
    };

    const handleHoverEnd = () => {
        imageControls.start({ height: "66%" });
        overlayControls.start({ opacity: 0 });
    };

    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <div className="w-5/6 h-full relative overflow-hidden mx-auto">
                {/* Background Image */}
                <motion.div
                    className="w-full h-[66%] bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                    animate={imageControls}
                    initial={{ height: "66%" }}
                    transition={{ duration: 0.8 }}
                />

                {/* Title and Tags */}
                <div className="w-full h-[34%] flex flex-col items-center justify-center text-white text-xl font-bold bg-[#E9B872]">
                    <div className="w-full h-2/3 flex justify-center items-center">
                        {title}
                    </div>
                    <div className="w-full h-1/3 px-2 flex items-start justify-start gap-2 flex-wrap">
                        {tags?.map((item, index) => (
                            <Tag key={index} tag={item} />
                        ))}
                    </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                    className="w-full h-full absolute top-0 left-0 bg-black/80 text-white text-2xl flex justify-center items-center cursor-pointer"
                    animate={overlayControls}
                    initial={{ opacity: 0 }}
                    onHoverStart={handleHoverStart}
                    onHoverEnd={handleHoverEnd}
                    transition={{ duration: 0.3 }}
                >
                    Visit website!
                </motion.div>
            </div>
        </a>
    );
}
