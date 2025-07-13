export default function Homepage() {
  return (
    <div className="w-full h-screen flex items-end justify-start relative">
      <div className="w-1/3 h-2/3 bg-[#E9B872] absolute top-0 left-1/2 -translate-x-1/2" />
      <div className="w-4/5 h-4/5 bg-[#F4F1DE] flex flex-col items-start justify-end px-10 py-20">
        <h1 className="text-9xl font-bold z-20">Hi, my name is Martin</h1>
        <p className="text-2xl mt-5">Front End Developer</p>
      </div>
    </div>
  );
}
