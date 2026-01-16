import { UserCheck2 } from "lucide-react";
import { useState } from "react";
import type { EmployeesType } from "../libs/employees";

export default function ModalConfirm({
  user,
  onClick,
}: {
  user: EmployeesType;
  onClick: () => void;
}) {
  const [src, setSrc] = useState(
    `https://res.cloudinary.com/song-doan/image/upload/v1768534131/dongha/${user.msnv}.jpg`
  );
  return (
    <div className="absolute h-full w-full top-0 left-0 z-80 flex justify-center items-center">
      {/* <div className="bg-black absolute w-full h-full top-0 opacity-55"></div> */}
      <div className="w-full md:w-1/2 h-3/4 flex flex-col items-center justify-center relative border-8 border-white">
        <img src="/images/bg-1.jpg" alt="" className="absolute top-0 left-0 h-full w-full" />
        <div className="absolute top-0 left-0 h-full w-full z-10 text-white uppercase flex flex-col gap-1">
          <div className="flex justify-center items-center h-1/6">
            <h1 className="text-center text-5xl font-bold text-[#ff0]">Xin chúc mừng !!!</h1>
          </div>
          <div className="mx-auto text-red-500 flex-1 flex my-auto w-full h-full p-2">
            <div className="p-2 h-full w-full flex bg-white">
              <div className="w-1/2 h-full font-black flex flex-col justify-center items-center text-5xl flex-1 gap-2">
                <h1 className="text-center animate-blink leading-snug">{user.ten}</h1>
                <h1 className="text-center mt-4 animate-blink text-7xl">{user.msnv}</h1>
              </div>
              <div className="w-1/2 rounded overflow-hidden border-2 flex justify-center items-center">
                <img
                  src={src}
                  alt=""
                  className="w-full h-auto max-h-100 object-contain"
                  onError={() => setSrc("/images/user.png")}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center relative h-1/6">
            {/* <button
              className="cursor-pointer w-48 text-center justify-center flex items-center gap-2 bg-yellow-500 p-4 rounded uppercase text-black font-bold border-2 border-white"
              // onClick={spinReload}
            >
              <RefreshCcw />
              <span>HUỶ KẾT QUẢ</span>
            </button> */}
            <button
              className="cursor-pointer w-48 text-center justify-center bg-green-500 p-4 rounded uppercase text-white font-bold border-2 border-white flex items-center gap-2"
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
