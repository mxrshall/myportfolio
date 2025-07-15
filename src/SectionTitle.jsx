export default function SectionTitle({ title, color }) {
    return (
        <>
            <h1 
                className="text-6xl font-bold"
                style={{ color: color == 1 ? "black" : "white" }}
            >
                {title}
            </h1>
        </>
    );
}
