import { useState } from "react";

export default function Homepage() {
  const [hodnota, setHodnota] = useState(5);
  const [volanie, setVolanie] = useState("Ano");

  const funkcia = () => {
    setHodnota(hodnota + 1);
    if (hodnota > 10) {
      setVolanie("Ano, hodnota je väčšia ako 10");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <p>{hodnota}</p>
      <button onClick={funkcia}>Klik</button>
      <p>{volanie}</p>
    </div>
  );
}
