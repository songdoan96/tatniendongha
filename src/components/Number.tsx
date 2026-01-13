import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Number({
  isSpin,
  digit,
  keyName,
}: {
  isSpin: boolean;
  digit: number;
  keyName: string;
}) {
  const [value, setValue] = useState<number>(0);
  useEffect(() => {
    if (!isSpin) return;
    const interval = setInterval(() => {
      setValue(Math.floor(Math.random() * 10));
    }, 60);
    return () => clearInterval(interval);
  }, [isSpin]);
  useEffect(() => {
    if (!isSpin) setValue(digit);
  }, [isSpin, digit]);

  return (
    <div className="bg-[#9e0d08] text-white p-8 w-full">
      <motion.div
        key={keyName + value}
        initial={{ y: isSpin ? 0 : -50, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        // transition={{ duration: 0.15 }}
        className="text-9xl font-bold text-center select-none text-[#f7ee87]"
      >
        {value}
      </motion.div>
    </div>
  );
}
