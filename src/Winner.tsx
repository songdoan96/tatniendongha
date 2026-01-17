import { Home } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { employeesList, type EmployeesType } from "./libs/employees";
import useAwardStore from "./stores/award-store";
import { awards } from "./libs/awards";

export default function Winner() {
  let { award } = useParams();
  const findAward = awards.find((awardItem) => awardItem.name === award);
  const { won } = useAwardStore();
  // const [winnerUsers, setWinnerUsers] = useState<EmployeesType[]>();
  const [winnerUsers2, setWinnerUsers2] = useState<EmployeesType[]>();
  useEffect(() => {
    // if (findAward?.qty) {
    //   const giai = won.find((a) => a.name === findAward.name)?.index;
    //   if (giai?.length) {
    //     const indexResult = giai.slice(-1 * findAward.qty);
    //     setWinnerUsers(employeesList.filter((user) => indexResult.includes(user.stt)));
    //   }
    // }
    if (
      findAward?.name === "dacbiet" ||
      findAward?.name === "giainhat" ||
      findAward?.name === "giainhi" ||
      findAward?.name === "giaiba"
    ) {
      const giai = won.find((a) => a.name === findAward.name)?.index;
      if (giai?.length && findAward.qty) {
        const indexResult = giai.slice(-1 * findAward.qty);
        setWinnerUsers2(employeesList.filter((user) => indexResult.includes(user.stt)));
      }
    } else {
      const empIndex = won.find((a) => a.name === findAward?.name)?.index;
      if (empIndex) {
        setWinnerUsers2(employeesList.filter((user) => empIndex.includes(user.stt)));
      }
    }
  }, [won, findAward]);
  // ffd576
  return (
    <div className="w-screen h-screen relative flex justify-center items-center">
      <img src="/images/dacbiet-bg.png" alt="" className="absolute top-0 w-full h-full" />

      <div className="absolute top-1 right-1 w-8 z-90 flex justify-center items-center text-white">
        <Link to={"/"}>
          <Home />
        </Link>
      </div>
      <div className="absolute z-80 h-full w-full top-0 left-0 flex flex-col justify-center items-center">
        <div className="h-16 flex justify-center w-full items-center gap-8">
          <img src="/images/logo.png" alt="" className="w-12" />
          <div className=" flex flex-col items-center uppercase text-[yellow] text-2xl">
            <h1>Tổng công ty cp dệt may Hòa Thọ</h1>
            <h1>Công ty may hòa thọ đông hà</h1>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6 justify-center items-center">
          <h1 className="tet-font text-[yellow] text-9xl">Trao thưởng</h1>
          <h1 className="uppercase text-[#ebbe2b] text-6xl font-black">{findAward?.title}</h1>
          {findAward?.money && (
            <h2 className="text-white text-5xl font-black">Trị giá {findAward.money}</h2>
          )}
        </div>
        {findAward?.name === "dacbiet" ||
        findAward?.name === "giainhat" ||
        findAward?.name === "giainhi" ||
        findAward?.name === "giaiba" ? (
          <>
            <div className="h-2/5 w-full flex justify-around overflow-hidden">
              {winnerUsers2?.map((user, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="h-12">
                    <h1 className="uppercase font-bold text-3xl text-[yellow]">{user.ten}</h1>
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="h-72 w-64">
                      <img
                        id={`winner-${user.msnv}`}
                        src={`https://res.cloudinary.com/song-doan/image/upload/v1768534131/dongha/${user.msnv}.jpg`}
                        alt=""
                        className="object-contain w-full h-72"
                        onError={() =>
                          document
                            .querySelector(`#winner-${user.msnv}`)
                            ?.setAttribute("src", "/images/user.png")
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="h-2/5 w-full flex justify-around overflow-hidden flex-wrap">
            {winnerUsers2?.map((user, idx) => (
              <div
                className={`w-1/4 text-center font-bold text-[yellow] line-clamp-1 ${
                  winnerUsers2.length > 20 ? "text-2xl" : "text-3xl"
                }`}
                key={idx}
              >
                {user.ten}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
