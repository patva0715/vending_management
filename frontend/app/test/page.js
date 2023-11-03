"use client";
import { useTransition, animated } from "@react-spring/web";
import { useState } from "react";

const Page = ({ }) => {
  const [data,setData] = useState("ffff")
  const [transitions, api] = useTransition(data, () => ({
    from: { opacity: .2 },
    enter: { opacity: 1 },
    leave: { opacity: .1 },
  }));

  return (
    <div>
      {transitions((style,i)=>(
        <animated.div
        onClick={()=>setData('eofijeifj')}
        style={style}
        className="text-black duration-200">
          {data}
        </animated.div>
      ))}
    </div>
  );
};
export default Page;
