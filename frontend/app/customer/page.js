"use client";
const machine_dict = {
  1: {
    id: 1,
    items: [
      {
        name: "Doritos",
        stock: 8,
        price: 3,
        id: 1,
        icon: "/icons/chips-1.png",
      },
      {
        name: "Ruffles",
        stock: 0,
        price: 1.5,
        id: 2,
        icon: "/icons/chips-2.png",
      },
      {
        name: "Sneakers",
        stock: 3,
        price: 2.29,
        id: 3,
        icon: "/icons/chips-3.png",
      },
      {
        name: "Pop-Tarts",
        stock: 9,
        price: 1.29,
        id: 4,
        icon: "/icons/chips-3.png",
      },
      {
        name: "SunChips",
        stock: 5,
        price: 1.29,
        id: 5,
        icon: "/icons/chips-3.png",
      },
      {
        name: "Granola Bars",
        stock: 2,
        price: 1.29,
        id: 6,
        icon: "/icons/chips-3.png",
      },
      {
        name: "Cookies",
        stock: 2,
        price: 1.29,
        id: 7,
        icon: "/icons/energy-bar.png",
      },
      {
        name: "Cheetos",
        stock: 10,
        price: 1.29,
        id: 8,
        icon: "/icons/energy-bar.png",
      },
      {
        name: "Ruffles",
        stock: 8,
        price: 1.29,
        id: 9,
        icon: "/icons/energy-bar.png",
      },
    ],
    theme: {
      primary_color: "#444",
    },
    properties: {
      location: "1234 Foo st., Anaheim",
      Status: "Operational",
    },
  },
  2: {
    id: 2,
    items: [
      {
        name: "Gatorade",
        stock: 8,
        price: 3,
        id: 10,
        icon: "/icons/energy-drink.png",
      },
      {
        name: "Iced Tea",
        stock: 3,
        price: 2,
        id: 11,
        icon: "/icons/energy-drink.png",
      },
      {
        name: "Monster",
        stock: 7,
        price: 1.29,
        id: 12,
        icon: "/icons/energy-drink.png",
      },
      {
        name: "Water",
        stock: 10,
        price: 1.29,
        id: 13,
        icon: "/icons/soda-1.png",
      },
      {
        name: "Sprite",
        stock: 10,
        price: 1.5,
        id: 14,
        icon: "/icons/soda-1.png",
      },
      {
        name: "Lemonade",
        stock: 10,
        price: 1.29,
        id: 15,
        icon: "/icons/soda-1.png",
      },
      {
        name: "Lemonade",
        stock: 10,
        price: 1.29,
        id: 15,
        icon: "/icons/soda-1.png",
      },
      {
        name: "Lemonade",
        stock: 10,
        price: 1.29,
        id: 15,
        icon: "/icons/soda-1.png",
      },
      {
        name: "Lemonade",
        stock: 10,
        price: 1.29,
        id: 15,
        icon: "/icons/soda-1.png",
      },
    ],
    theme: {
      primary_color: "#33c",
    },
  },
  3: {
    id: 3,
    items: [
      {
        name: "Chips Ahoy",
        stock: 7,
        price: 2.49,
        id: 13,
        icon: "/icons/cookies.png",
      },
      {
        name: "Pepsi",
        stock: 15,
        price: 1.99,
        id: 14,
        icon: "/icons/soda.png",
      },
      {
        name: "Oatmeal",
        stock: 4,
        price: 3.49,
        id: 15,
        icon: "/icons/oatmeal.png",
      },
      {
        name: "Yogurt",
        stock: 10,
        price: 1.79,
        id: 16,
        icon: "/icons/yogurt.png",
      },
      {
        name: "Oranges",
        stock: 20,
        price: 0.79,
        id: 17,
        icon: "/icons/fruit.png",
      },
      {
        name: "Cereal",
        stock: 6,
        price: 2.99,
        id: 18,
        icon: "/icons/cereal.png",
      },
      {
        name: "Bottled Water",
        stock: 18,
        price: 0.99,
        id: 19,
        icon: "/icons/water.png",
      },
      {
        name: "Frozen Pizza",
        stock: 3,
        price: 4.99,
        id: 20,
        icon: "/icons/pizza.png",
      },
      {
        name: "Ice Cream",
        stock: 8,
        price: 3.49,
        id: 21,
        icon: "/icons/ice-cream.png",
      },
      {
        name: "Cucumbers",
        stock: 10,
        price: 0.99,
        id: 22,
        icon: "/icons/vegetables.png",
      },
      {
        name: "Soda",
        stock: 12,
        price: 1.49,
        id: 23,
        icon: "/icons/soda.png",
      },
      {
        name: "Eggs",
        stock: 14,
        price: 2.29,
        id: 24,
        icon: "/icons/eggs.png",
      },
    ],
    theme: {
      primary_color: "#666",
    },
    properties: {
      location: "5678 Bar St., Springfield",
      Status: "Operational",
    },
  },
};

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTransition, animated } from "@react-spring/web";
import { ImSpinner8 } from "react-icons/im";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsFillGridFill } from "react-icons/bs";
const Page = () => {
  const [selectedMachine, setSelectedMachine] = useState();
  const [machines, setMachines] = useState();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [selected, setSelected] = useState({});
  const [windowOpen, setWindowOpen] = useState(false);
  const [basis, setBasis] = useState(1);
  const fetchMachineIds = async () => {
    try {
      setMachines(Object.keys(machine_dict));
      setSelectedMachine(machine_dict[1]);
      return;
      const data = await fetch("http://localhost:5001/machine").then((res) =>
        res.json()
      );
      setMachines(data);
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  const fetchItem = async (id) => {
    // if (id == selectedMachine.id) return;
    setSelectedMachine(machine_dict[id]);
    // const data = await fetch(`http://localhost:5001/machine/${id}`).then(
    //   (res) => res.json()
    // );
    // console.log(data);
    // setSelectedMachine(data);
  };
  const handleChangeMachine = (id) => {
    setSelected({});
    fetchItem(id);
  };
  const handleSelect = (item, key) => {
    console.log(item.key)
    setWindowOpen(true);
    setSelected(item);
    // e.target.focus();
  };

  useEffect(() => {
    fetchMachineIds();
  }, []);
  useEffect(() => {
    setTimeout(() => setMessage(""), 3000);
  }, [message]);
  useEffect(() => {
    setTimeout(() => setError(""), 3000);
  }, [error]);

  const transitions = useTransition(selectedMachine, {
    // ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(20%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-15%,0,0)" },
    trail: 200,
    // exitBeforeEnter: true,
  });
  return (
    <div className="">
      <OrderWindow
      selectedMachine={selectedMachine}
        open={windowOpen}
        setWindowOpen={setWindowOpen}
        item={selected}
      />
      <div className="py-5 mb-4 bg-gray-600 text-white">
        <h1 className=" text-3xl flex max-w-full md:max-w-[50vw] mx-auto ">
        Transaction Simulator
        </h1>
      </div>
      <div className="text-center text-xl flex max-w-full md:max-w-[50vw] mx-auto items-center mb-2">
        {machines &&
          machines.map((id, index) => (
            <button
              key={index}
              className="p-2  border-2 aspect-square min-w-[50px]"
              style={
                {
                  // backgroundColor: `${id == selectedMachine.id ? "#aaa" : "unset"}`,
                }
              }
              onClick={() => handleChangeMachine(id)}
            >
              {id}
            </button>
          ))}
        <div className="grow flex justify-end">
          <button
            className=" text-2xl p-4"
            onClick={() => setBasis((x) => (x + 1) % 4)}
          >
            <BsFillGridFill />
          </button>
        </div>
      </div>

      <div className=" max-w-full md:max-w-[50vw] mx-auto relative">
        {transitions((style, i) => (
          <animated.div style={style} className="flex flex-wrap absolute">
            {i.items &&
              i.items.map((item, index) => (
                <Item
                  basis={basis}
                  key={index}
                  item={{...item,key:index}}
                  selected={selected}
                  handleSelect={handleSelect}
                />
              ))}
          </animated.div>
        ))}
      </div>
    </div>
  );
};

// DIVIDER ITEM
const Item = ({ basis, item, handleSelect, selected }) => {
  return (
    <div
      className="p-2 shrink-0 grow"
      style={{
        flexBasis: `${(1 / (basis + 1)) * 100}%`,
        maxWidth: `${100 / (basis + 1)}%`,
      }}
    >
      <button
        className="w-full bg-gray-200 dark:bg-gray-800 border-2 rounded-md p-2 flex flex-col items-center shrink-0   "
        style={{
          borderColor: `${item.id == selected.id ? "#aa5555" : "#333333"}`,
        }}
        onClick={(e) => handleSelect(item)}
      >
        <div className="shrink-0">
          <Image
            alt="icon"
            src="/icons/chips-1.png"
            width={70}
            height={70}
            className="ico z-0"
          />
        </div>
        <div className=" text-left flex flex-col grow shrink whitespace-nowrap truncate">
          <span className="text-lg font-bold truncate ">{item.name}</span>
          {/* <span>stock: {item.stock}</span> */}
        </div>
        <span className="text-lg shrink-0 basis-2 grow text-right ">
          ${item.price}
        </span>
      </button>
    </div>
  );
};

// DIVIDER
const OrderWindow = ({ setWindowOpen, open, item,selectedMachine }) => {
  const [payMethod, setPayMethod] = useState("cash");
  const [selectedIdx, setSelectedIdx]=useState(item.key)
  const handleClose = () => {
    setWindowOpen(false);
  };
  const handleChangeItem =()=>{

  }
  const divStyle = {
    display: open ? "flex" : "none",
  };
  useEffect(()=>{
    setSelectedIdx(item.key)
  },[item])

  return (
    <>
      <div
        style={divStyle}
        className="fixed w-full h-full z-10 backdrop-blur-sm flex items-center justify-center"
        onClick={() => setWindowOpen(false)}
      >
        <div
          className="flex flex-wrap md:flex-nowrap gap-4 w-full z-20 items-stretch  max-w-3xl fixed aspect-[9/4] "
          onClick={(e) => e.stopPropagation()}
        >
          {/* ITEM DIVIDER CONTAINER */}
          <div className="basis-1/3 grow bg-white rounded-lg flex flex-col py-4">
            <button>NEXT</button>
            <div className="py-4 flex flex-col items-center justify-center grow">
              <div className="">
                <Image
                  alt="icon"
                  src="/icons/chips-1.png"
                  width={70}
                  height={70}
                  className="ico z-0"
                />
              </div>
              <div className="text-left">
                <span className="text-lg font-bold">{item.name}</span>
              </div>
              <span className="text-xl">${item.price}</span>
            </div>
            <button>PREV</button>
          </div>

          {/* PAYMENT DIVIDER CONTAINER */}
          <div className="basis-2/3 grow bg-white rounded-lg p-4 px-10 flex items-center justify-between">
            <div className=" w-full aspect-video flex justify-center items-stretch">
              <PayWindow
                setPayMethod={setPayMethod}
                item={item}
                payMethod={payMethod}
                open={open}
              />
            </div>
          </div>
          <button
            className=" p-2 rounded-md absolute bottom-0 translate-y-full "
            onClick={() => handleClose()}
          >
            -Back
          </button>
          {/* DIVIDER */}
        </div>
      </div>

      <div
        style={divStyle}
        className="fixed h-full w-full opacity-80 z-[9] bg-gray-800 "
        onClick={() => setWindowOpen(false)}
      />
    </>
  );
};

// DIVIDER
const PayWindow = ({ setPayMethod, item, payMethod, open }) => {
  const [transaction, setTransaction] = useState();
  const PayCashStyle = {
    backgroundColor: payMethod == "cash" ? "#222" : "transparent",
    color: payMethod == "cash" ? "white" : "inherit",
  };
  const PayCardStyle = {
    backgroundColor: payMethod != "cash" ? "#222" : "transparent",
    color: payMethod != "cash" ? "white" : "inherit",
  };
  const [statusIdx, setStatusIdx] = useState(0);
  const states = [
    ({ style }) => (
      <animated.div style={style}>{"PROCESSING ORDER"}</animated.div>
    ),
    ({ style }) => <animated.div style={style}>VENDING</animated.div>,
    ({ style, name }) => (
      <animated.div style={style}>DISPENSING {name.toUpperCase()}</animated.div>
    ),
    ({ style }) => (
      <animated.div style={style}>{"TRANSACTION COMPLETE"}</animated.div>
    ),
    ({ style }) => (
      <animated.div style={style}>AUTHENTICATING CARD</animated.div>
    ),
    ({ style }) => <animated.div style={style}>CARD APPROVED</animated.div>,
    ({ style, change }) => (
      <animated.div style={style}>DISPENSING CHANGE (${change})</animated.div>
    ),
  ];
  const transitions = useTransition(statusIdx, {
    keys: null,
    from: { opacity: 0, transform: "translate3d(0,10%,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(0%,-10%,0)" },
    config: {
      duration: 210,
    },
    exitBeforeEnter: true,
  });
  const processOrder = (itemBought, method) => {
    setTransaction({
      item: itemBought,
      payMethod: method,
    });
  };
  useEffect(() => {
    if (!transaction) return;
    if (transaction.payMethod == "cash") {
      // // TODO: VENDING
      // setTimeout(() => setStatusIdx(1), 2000);
      // TODO: DISPENSING ITEM
      setTimeout(() => setStatusIdx(2), 2000);
      // TODO: DISPENSING CHANGE
      setTimeout(() => setStatusIdx(6), 4500);
      // TODO: TRANSACTION COMPLETE
      setTimeout(() => setStatusIdx(3), 6000);
    } else {
      setStatusIdx(0);
      // AUTHENTICATING CARD START AT 1000ms
      setTimeout(() => setStatusIdx(4), 1000);
      // CARD APPROVCED
      setTimeout(() => setStatusIdx(5), 3500);
      // VENDING
      setTimeout(() => setStatusIdx(2), 5000);
      // TRANSACTION COMPLETE
      setTimeout(() => setStatusIdx(3), 7500);
    }
  }, [transaction]);
  useEffect(() => {
    if (!open) {
      setTransaction(null);
      setStatusIdx(0);
    }
  }, [open]);
  // DIVIDER PROCESSING TRANSACTION WINDOW
  if (transaction)
    return (
      <div className="  flex items-center flex-col justify-center ">
        <div className="text-[3vw]">
          {statusIdx != 3 ? (
            <ImSpinner8 className="spinner" />
          ) : (
            <AiOutlineCheckCircle />
          )}
        </div>
        {transitions((style, index) => {
          const Status = states[index];
          return (
            <Status
              style={style}
              change={transaction.item.fund - transaction.item.price}
              name={transaction.item.name}
            />
          );
        })}
        {/* <button onClick={()=>setTransaction({payMethod:'cash'})}>CASH</button> */}
        <div className=" min-h-[2rem] mt-2">
          {statusIdx == 3 ? (
            <button className="fade border-[1px] h-full px-2 border-black rounded-sm">
              View Receipt
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  // DIVIDER TAKING PAYMENT WINDOW
  else
    return (
      <div className="flex flex-col w-full">
        <div className="flex gap-6 items-start w-full mb-4 grow ">
          <button
            className="rounded-md border-2 border-gray-900 grow p-3"
            style={PayCashStyle}
            onClick={() => setPayMethod("cash")}
          >
            Pay with cash
          </button>
          <button
            className="rounded-md border-2 border-gray-900 grow p-3"
            style={PayCardStyle}
            onClick={() => setPayMethod("card")}
          >
            Pay with card
          </button>
        </div>
        <PaymentAcceptor
          method={payMethod}
          item={item}
          setPayMethod={setPayMethod}
          processOrder={processOrder}
        />
      </div>
    );
};

// DIVIDER
const PaymentAcceptor = ({ method, item, processOrder }) => {
  const [fund, setFund] = useState(0);
  const [loadingCash, setLoadingCash] = useState(false);
  const handleCashInsert = (val) => {
    setLoadingCash(true);
    setTimeout(() => setLoadingCash(false), 2000);
    setTimeout(() => {
      if (fund + val >= item.price) {
        processOrder({ ...item, fund: fund + val }, "cash");
      }
    }, 2000);
    setTimeout(() => {
      setFund((x) => x + val);
    }, 800);
  };
  const handleCardUse = () => {
    processOrder(item, "card");
  };
  if (method == "cash")
    return (
      <div className="flex flex-col grow">
        <div className="basis-full flex">
          <div className="text-green-200 flex flex-col basis-full text-3xl p-2 items-center justify-center bg-gray-900 rounded-sm">
            <span>${fund}</span>
            <span className="text-sm">Insert cash</span>
          </div>
        </div>
        {!loadingCash ? (
          <div className="basis-full flex  gap-2 mt-4">
            <button
              className="grow bg-green-300 rounded-md"
              onClick={() => handleCashInsert(1)}
            >
              {" "}
              $1
            </button>
            <button
              className="grow bg-green-300 rounded-md"
              onClick={() => handleCashInsert(5)}
            >
              $5
            </button>
            <button
              className="grow bg-green-300 rounded-md"
              onClick={() => handleCashInsert(10)}
            >
              $10
            </button>
          </div>
        ) : (
          <div className="basis-full mt-2 flex items-center justify-center">
            Inserting Cash
            <ImSpinner8 className="spinner text-[2.5vw] ml-2" />
          </div>
        )}
      </div>
    );
  // DIVIDER
  else
    return (
      <div className="flex flex-wrap">
        <div className="basis-4/6 grow p-2">
          <input
            placeholder="Card Number"
            className="border-[1px] border-black p-2 grow rounded-md w-full"
          />
        </div>
        <div className="basis-2/6 grow p-2">
          <input
            placeholder="CVC"
            className="border-[1px] border-black p-2 rounded-md w-full"
          />
        </div>
        <div className="basis-1/2 grow p-2">
          <input
            placeholder="Exp date"
            className="border-[1px] border-black p-2 rounded-md w-full"
          />
        </div>
        <div className="basis-1/2 grow p-2">
          <input
            placeholder="Zipcode"
            className="border-[1px] border-black p-2 rounded-md w-full"
          />
        </div>
        <button
          className="basis-full bg-black text-white rounded-md p-3 mt-2"
          onClick={handleCardUse}
        >
          Pay ${item.price}
        </button>
      </div>
    );
};
export default Page;
