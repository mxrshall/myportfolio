export default function SectionButton({ title }) {
    return (
        <button className="bg-black text-white text-base rounded-2xl px-5 py-1 hover:bg-[#D8A65C] transition duration-300">
            {title}
        </button>
    );
}
