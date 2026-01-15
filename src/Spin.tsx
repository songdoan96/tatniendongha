import { Trash, TriangleAlert, TvMinimal } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ModalConfirm from "./components/ModalConfirm";
import Number from "./components/Number";
import { awards } from "./libs/awards";
import { employeesList, type EmployeesType } from "./libs/employees";
import type { NumberState } from "./libs/spin";
import useAwardStore from "./stores/award-store";
const delay1 = 1000;
const delay2 = 2000;
const delay3 = 3000;
const delay4 = 4000;
const totalDelay = 5000;
export default function Spin() {
  let { award } = useParams();
  const findAward = awards.find((awardItem) => awardItem.name === award);
  const { blacklist, addWon, won, addBlacklist, resetBlackList, remove } = useAwardStore();
  const [currentUser, setCurrentUser] = useState<EmployeesType>();
  const navigate = useNavigate();

  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [numA, setNumA] = useState<NumberState>({
    digit: 0,
    isSpin: false,
  });
  const [numB, setNumB] = useState<NumberState>({
    digit: 0,
    isSpin: false,
  });
  const [numC, setNumC] = useState<NumberState>({
    digit: 0,
    isSpin: false,
  });
  const [numD, setNumD] = useState<NumberState>({
    digit: 0,
    isSpin: false,
  });
  useEffect(() => {
    if (isSpinning) {
      const filterBlackList = employeesList.filter((emp) => !blacklist.includes(emp.stt));
      const randomEmployeeIndex = Math.floor(Math.random() * filterBlackList.length);
      const randomEmployee = filterBlackList[randomEmployeeIndex];
      if (!randomEmployee) {
        resetState();
        return;
      }
      setCurrentUser(randomEmployee);
      console.log("🚀 ~ Spin ~ filterBlackList:", randomEmployee);
      setTimeout(() => {
        setNumA({
          isSpin: false,
          digit: +randomEmployee.msnv.charAt(0),
        });
      }, delay1);
      setTimeout(() => {
        setNumB({
          isSpin: false,
          digit: +randomEmployee.msnv.charAt(1),
        });
      }, delay2);
      setTimeout(() => {
        setNumC({
          isSpin: false,
          digit: +randomEmployee.msnv.charAt(2),
        });
      }, delay3);
      setTimeout(() => {
        setNumD({
          isSpin: false,
          digit: +randomEmployee.msnv.charAt(3),
        });
      }, delay4);
    }
  }, [isSpinning]);
  useEffect(() => {
    if (!isSpinning) return;
    setTimeout(() => {
      setIsSpinning(false);
    }, totalDelay);
  }, [isSpinning]);

  useEffect(() => {
    if (isSpinning || blacklist.length === employeesList.length) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" && !currentUser) {
        handleSpin();
      } else if (event.key === "Enter" && currentUser && !isSpinning) {
        handleConfirm();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleSpin, handleConfirm, isSpinning, currentUser, blacklist]);

  function handleSpin() {
    setIsSpinning(true);
    setNumA({
      digit: 0,
      isSpin: true,
    });
    setNumB({
      digit: 0,
      isSpin: true,
    });
    setNumC({
      digit: 0,
      isSpin: true,
    });
    setNumD({
      digit: 0,
      isSpin: true,
    });
  }
  function handleConfirm() {
    if (currentUser && findAward && award) {
      addWon(findAward.name, currentUser.stt);
      addBlacklist(currentUser.stt);
    }
    resetState();
  }
  function resetState() {
    setCurrentUser(undefined);
    setIsSpinning(false);
    setNumA((pre) => ({ ...pre, loading: false, value: 0 }));
    setNumB((pre) => ({ ...pre, loading: false, value: 0 }));
    setNumC((pre) => ({ ...pre, loading: false, value: 0 }));
    setNumD((pre) => ({ ...pre, loading: false, value: 0 }));
  }
  function shuffleList() {
    resetBlackList();
  }
  const awardList = won.find((award) => award.name === findAward?.name)?.index || [];
  return (
    <div className="h-screen w-screen relative p-2 overflow-hidden">
      {findAward && (
        <div className="absolute bg-[#7f0c09] top-8 right-8 z-80 shadow-2xl shadow-black p-4 rounded-2xl">
          <img src={`/images/${findAward.name}.svg`} alt="" className="w-32 h-auto" />
        </div>
      )}
      <div className="absolute w-12 h-12 top-2 left-4 bg-cover bg-center z-90">
        <Link to="/">
          <img src="/images/logo.png" alt="" className="cursor-pointer" />
        </Link>
      </div>
      {!isSpinning && !currentUser && (
        <div className="z-80 absolute right-1 bottom-1">
          <select
            value={award}
            onChange={(e) => {
              if (e.target.value === "dacbiet") {
                if (confirm("Xác nhận quay giải đặc biệt")) {
                  resetBlackList();
                  navigate("/spin/" + e.target.value);
                }
              } else {
                navigate("/spin/" + e.target.value);
              }
            }}
            className="text-[#f0b100] bg-[#9e0d08] font-bold uppercase block w-auto p-2 px-1 text-center bg-neutral-secondary-medium rounded-lg border-2 border-default-medium border-[#f0b100] text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
          >
            {awards.map((award) => {
              return (
                <option key={award.name} value={award.name}>
                  {award.title}
                </option>
              );
            })}
          </select>
        </div>
      )}
      <img
        src="/images/bg-2.png"
        alt=""
        className="absolute h-full w-full top-0 left-0 object-cover bg-center bg-cover"
      />
      <div className="bg-black absolute h-full w-full top-0 left-0 z-20 opacity-20"></div>
      {!isSpinning && currentUser && <ModalConfirm user={currentUser} onClick={handleConfirm} />}

      {awardList && awardList.length > 0 && (
        <div className="absolute left-2 h-full z-80 flex flex-col py-10 pt-14 overflow-hidden">
          <div className="bg-[#820702] opacity-90 border flex-1 border-[#f3d170] p-1 my-auto text-[#f3d170]">
            <h1 className="text-3xl font-black pb-2 text-center tet-font">Ds Trúng Thưởng</h1>
            {awardList.map((stt, index) => (
              <div
                key={index}
                data-stt={stt}
                className={`flex items-center gap-1 font-semibold group ${
                  awardList.length > 32
                    ? "text-[13px]"
                    : awardList.length > 23
                    ? "text-[15px]"
                    : awardList.length > 20
                    ? "text-[18px]"
                    : awardList.length > 15
                    ? "text-xl"
                    : "text-2xl"
                }`}
              >
                <span>
                  {index + 1}. {employeesList.find((employee) => employee.stt === stt)?.ten}
                </span>
                <button
                  className="hidden group-hover:block cursor-pointer"
                  onClick={() => {
                    if (confirm("Xoá người nhận ?")) {
                      remove(stt);
                    }
                  }}
                >
                  <Trash />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="relative z-20 w-full h-full grid grid-rows-3 mt-10">
        <div className="flex  flex-col justify-center items-center text-2xl mx-auto">
          {findAward && (
            <div className="flex flex-col gap-4 items-center justify-center text-[#f3d170] relative">
              {/* <img
                src="/images/award-bg.png"
                alt=""
                className="w-full absolute top-0 left-0 h-full"
              /> */}
              {/* <div className="flex items-center gap-4">
                <div className="flex">
                  <Star size={40} color="#f8ce10" />
                  <Star size={40} color="#f8ce10" />
                  <Star size={40} color="#f8ce10" />
                </div>
                <span className="uppercase font-black text-6xl text-[#f7e71e]">
                  {findAward.title}
                </span>
                <div className="flex">
                  <Star size={40} color="#f8ce10" />
                  <Star size={40} color="#f8ce10" />
                  <Star size={40} color="#f8ce10" />
                </div>
              </div> */}

              <div className="flex items-center gap-8 relative ">
                {findAward.qty && (
                  <h2 className="absolute right-full mr-8 font-bold text-9xl italic text-[white] drop-shadow-[0_0_10px_#000]">
                    {findAward.qty}
                  </h2>
                )}
                <div className="flex flex-col gap-4 items-center justify-center">
                  <div className="flex items-center gap-2">
                    <span className="uppercase font-black text-5xl text-[#f7e71e]">
                      {findAward.title}
                    </span>
                  </div>
                  {findAward.money && <span className="text-4xl font-bold">{findAward.money}</span>}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="my-auto mx-auto w-1/2 flex justify-center items-center">
          <div
            id="border-container"
            className="bg-[#f9e5b0] relative flex gap-8 p-4 w-full rounded border-20 border-solid border-[#f3ac38] shadow-2xl"
          >
            <div className="grid grid-cols-4 gap-4 w-full">
              <Number digit={numA.digit} isSpin={numA.isSpin} keyName={"A"} />
              <Number digit={numB.digit} isSpin={numB.isSpin} keyName={"B"} />
              <Number digit={numC.digit} isSpin={numC.isSpin} keyName={"C"} />
              <Number digit={numD.digit} isSpin={numD.isSpin} keyName={"D"} />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center relative">
          {blacklist.length === employeesList.length ? (
            <div className="flex flex-col justify-center items-center">
              <div className="flex gap-2 items-center mb-2 text-[#f4dd73]">
                <TriangleAlert />
                <h1 className="uppercase text-2xl">Đã hết danh sách nhận thưởng</h1>
                <TriangleAlert />
              </div>
              <button
                onClick={() => shuffleList()}
                className="p-2 inline-flex w-auto cursor-pointer text-xl border border-[#ff0] bg-[#f00] text-[#ff0] font-semibold rounded-lg disabled:opacity-50"
              >
                Làm mới danh sách
              </button>
            </div>
          ) : (
            !isSpinning &&
            !currentUser && (
              <div className="w-1/6 pt-10 h-full flex flex-col gap-8 items-center">
                {/* <span className="text-2xl font-semibold uppercase italic text-[#f4dd73]">
                  Lần quay thứ {awardList.length + 1}
                </span> */}
                <button
                  onClick={handleSpin}
                  disabled={isSpinning}
                  className="pt-2 relative w-48 cursor-pointer flex flex-col justify-center items-center disabled:opacity-50"
                >
                  <img className="absolute w-full z-10" src="/images/button.png" alt="" />
                  <span className="z-20 w-full text-[#f4dd73] font-bold text-3xl uppercase">
                    Quay số
                  </span>
                </button>
              </div>
            )
          )}
        </div>
      </div>
      <div className="absolute top-1 w-full z-70 flex justify-center items-center">
        <h1 className="text-[#ff0] text-2xl font-bold uppercase">Công ty may hoà thọ đông hà</h1>
      </div>
      <div className="absolute bottom-1 w-full z-70 flex justify-center items-center">
        <h1 className="text-[#ff0] tet-font text-4xl font-bold">
          Chúc Mừng Năm Mới - Vạn Sự Như Ý
        </h1>
      </div>
      {won.find((a) => a.name === "dacbiet")?.index.length && (
        <div className="absolute top-1 right-1 w-8 z-90 flex justify-center items-center text-white">
          <Link to={"/dacbiet"}>
            <TvMinimal />
          </Link>
        </div>
      )}
    </div>
  );
}
