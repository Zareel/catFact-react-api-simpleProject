import axios from "axios";
import { useState } from "react";

function App() {
  const [catFact, setCatFact] = useState("Cats are curious");

  const fetchData = async () => {
    const { data } = await axios.get("https://catfact.ninja/fact");
    console.log(data);
    setCatFact(data.fact);
  };

  return (
    <div className="bg-black text-white w-full min-h-screen flex flex-col items-center gap-10 pt-24">
      <h1 className="text-6xl lg:text-7xl text-orange-600 font-head font-bold  ">
        CatFact
      </h1>
      <button
        onClick={fetchData}
        className="px-6 py-2 mt-10 bg-amber-500 text-black text-xl font-mono font-bold rounded-md "
      >
        Click Here
      </button>
      <h1 className="text-4xl lg:text-5xl font-fact font-semibold mt-10 px-20 text-center">
        {catFact}
      </h1>
    </div>
  );
}
export default App;
