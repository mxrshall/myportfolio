import Tag from "./Tag";

export default function Project({ title, image, tags, url }) {
    return (
        <a href={url} target="_blank">
            <div className="w-full h-full">
                <div
                    className="w-full h-4/6 bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                />
                <div className="w-full h-2/6 flex flex-col items-center justify-center text-white text-xl font-bold bg-[#E9B872]">
                    <div className="w-full h-2/3 flex justify-center items-center">
                        {title}
                    </div>
                    <div className="w-full h-1/3 px-2 flex items-start justify-start gap-2">
                        {tags?.map((item, index) => (
                            <Tag key={index} tag={item} />
                        ))}
                    </div>
                </div>
            </div>
        </a>
    );
}
