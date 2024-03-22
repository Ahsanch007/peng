/* eslint-disable react/prop-types */
import { createContext, useContext, useRef, useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const AccordianContext = createContext();

export default function Accordian({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
}

export function AccordianItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordianContext);
  const open = selected === value;

  const ref = useRef(null);

  return (
    <li className=" bg-[white] rounded-3xl " {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className={`flex justify-between items-center p-4 font-bold rounded-3xl  rs4:text-[24px] text-[20px] rs4:pl-9 pl-6 border-[6px] border-[black] ${
          open ? "bg-black text-[white]" : "bg-white text-[black]"
        }`}
      >
        {/* {trigger} */}
        <p className="">{trigger}</p>
        {open ? (
          <div className="rs4:w-[58px] w-[50px] rs4:h-[58px] h-[50px] flex justify-center items-center gap-9 bg-white text-[black] rounded-lg flex-shrink-0">
            {" "}
            <FaMinus
              size={23}
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </div>
        ) : (
          <div className="rs4:w-[58px] w-[50px] rs4:h-[58px] h-[50px] flex justify-center items-center bg-black text-[#FFF] rounded-lg gap-9 flex-shrink-0">
            <FaPlus
              size={23}
              className={`transition-transform ${open ? "rotate-360" : ""}`}
            />
          </div>
        )}
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="pt-2 p-4" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}
