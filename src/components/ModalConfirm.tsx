import { UserCheck2 } from "lucide-react";
import type { EmployeesType } from "../libs/employees";

export default function ModalConfirm({
  user,
  onClick,
}: {
  user: EmployeesType;
  onClick: () => void;
}) {
  return (
    <div className="absolute h-full w-full top-0 left-0 z-80 flex justify-center items-center">
      <div className="w-full md:w-1/2 h-1/2 flex flex-col items-center justify-center relative mt-20 border-8 border-white">
        <img src="/images/bg-1.jpg" alt="" className="absolute top-0 left-0 h-full w-full" />
        <div className="absolute top-0 left-0 h-full w-full z-10 text-white uppercase flex flex-col">
          <div className="flex justify-center items-center h-full">
            <h1 className="text-center text-5xl font-bold text-[#ff0]">Xin chúc mừng !!!</h1>
          </div>
          <div className="mx-auto text-red-500 text-5xl px-4 h-2/3 my-auto w-full">
            <div className="py-4 bg-white w-full  font-black flex flex-col justify-center items-center">
              <h1 className="text-center animate-blink">{user.ten}</h1>
              <h1 className="text-center mt-4 animate-blink">{user.msnv}</h1>
            </div>
          </div>
          <div className="flex gap-10 justify-center items-center h-full relative">
            {/* <button
              className="cursor-pointer w-48 text-center justify-center flex items-center gap-2 bg-yellow-500 p-4 rounded uppercase text-black font-bold border-2 border-white"
              // onClick={spinReload}
            >
              <RefreshCcw />
              <span>HUỶ KẾT QUẢ</span>
            </button> */}
            <button
              className="cursor-pointer w-48 text-center justify-center bg-green-500 p-4 rounded uppercase text-black font-bold border-2 border-white flex items-center gap-2"
              // onClick={reset}
              onClick={onClick}
            >
              <UserCheck2 />
              <span>NHẬN GIẢI</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
