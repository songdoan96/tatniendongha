import { Link } from "react-router-dom";
import { employeesList } from "./libs/employees";
import useAwardStore from "./stores/award-store";
import { Home } from "lucide-react";
import { useEffect, useState } from "react";

export default function Winner() {
  const { won } = useAwardStore();
  const [winnerIndex, setWinnerIndex] = useState<number>();
  useEffect(() => {
    const dacbiet = won.find((a) => a.name === "dacbiet")?.index;
    const lastIndex = dacbiet?.pop();
    if (lastIndex) {
      setWinnerIndex(lastIndex);
    }
  }, [won]);
  return (
    <div className="w-screen h-screen relative flex justify-center items-center">
      <img src="/images/dacbiet-bg.png" alt="" className="absolute top-0 w-full h-full" />
      <div className="absolute top-1 right-1 w-8 z-90 flex justify-center items-center text-white">
        <Link to={"/"}>
          <Home />
        </Link>
      </div>
      <h1 className="z-90 mt-44 uppercase text-5xl font-black text-white">
        {winnerIndex && employeesList.find((e) => e.stt === winnerIndex)?.ten}
      </h1>
    </div>
  );
}
