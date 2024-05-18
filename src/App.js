import axios from "axios";
import {useState, useEffect } from "react";

function App() {
const [catFact, setCatFact] = useState("")

const fetchData = async () => {
  const {data} = await axios.get("https://catfact.ninja/fact")
  console.log(data);
  setCatFact(data.fact)
}

useEffect(() => {
  fetchData()
},[])

  return (
    <div className="bg-black text-white w-full min-h-screen flex flex-col items-center gap-10 pt-24">
      <button onClick={fetchData}  className="px-6 py-2 bg-purple-700 rounded-md">
        Generate cat fact
      </button>
        <h1 className="text-2xl">{catFact}</h1>
    </div>
  );
}
export default App;
