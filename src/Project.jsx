export default function Project({ title, image }) {
    return (
        <div className="w-full h-full">
            <div
                className="w-full h-4/6 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className="w-full h-2/6 flex items-center justify-center text-white text-xl font-bold bg-[#E9B872]">
                {title}
            </div>
        </div>
    );
}
