"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTransition, animated } from "@react-spring/web";
const page = () => {
  const [selectedMachine, setSelectedMachine] = useState({
    id: 1,
    items: [
      {
        name: "Doritos",
        stock: 10,
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
        stock: 10,
        price: 2.29,
        id: 3,
        icon: "/icons/chips-3.png",
      },
    ],
    theme: {
      primary_color: "#444",
    },
  });
  const [machines, setMachines] = useState([]);
  const [paymentType, setPaymentType] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [credit, setCredit] = useState(0);
  const [selected, setSelected] = useState({});
  const [windowOpen, setWindowOpen] = useState(false);

  const fetchIds = async () => {
    try {
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
    if (id==selectedMachine.id) return
    const data = await fetch(`http://localhost:5001/machine/${id}`).then(
      (res) => res.json()
    );
    console.log(data);
    setSelectedMachine(data);
  };
  const validateCard = () => {
    return true;
  };
  const handleChangeMachine = (id) => {
    setSelected({});
    fetchItem(id);
  };
  const handleCardPayment = () => {
    if (validateCard) {
      setCredit(3);
      setPaymentType("Credit");
    }
  };
  const handleCashPayment = (value) => {
    if (credit > 10) {
      setMessage("Max cash reached");
      return;
    }
    setCredit((prev) => prev + value);
    if (selected) {
      if (credit + value >= selected.price) {
        handleDispense(credit + value);
      }
    }
  };
  const handleSelect = (item, e) => {
    setWindowOpen(true);
    setSelected(item);
    e.target.focus();
  };
  const handleDispense = (cash) => {
    try {
      if (selected.price > cash) {
        throw "Insufficient funds";
      } else if (selected.stock == 0) {
        throw "Item out of stock";
      } else if (selectedMachine.status == "broken") {
        throw "Machine Unoperational";
      } else {
        setSelected({});
        setMessage(`Dispensing ${selected.name}`);
        setTimeout(() => handleChange(cash - selected.price), 4000);
      }
    } catch (error) {
      handleError(error);
    }
  };
  const handleError = (msg) => {
    setError(msg);
  };
  const handleChange = (change) => {
    setCredit(0);
    setMessage(`Dispensing Change ($${change})`);
  };

  useEffect(() => {
    fetchIds();
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
    trail:200
    // exitBeforeEnter: true,
  })
  return (
    <div className="">
      <PaymentWindow
        open={windowOpen}
        setWindowOpen={setWindowOpen}
        item={selected}
      />
      <header className="text-3xl text-center p-6 mb-4 bg-gray-600 text-white">
        Transaction Simulator
      </header>
      <div className="text-center text-xl flex max-w-full md:max-w-[50vw] mx-auto items-center mb-2">
        {machines.map((id, index) => (
          <button
            key={index}
            className="p-2  border-2 aspect-square min-w-[50px]"
            style={{
              backgroundColor: `${id == selectedMachine.id ? "#aaa" : "unset"}`,
            }}
            onClick={() => handleChangeMachine(id)}
          >
            {id}
          </button>
        ))}
      </div>

      <div className=" max-w-full md:max-w-[50vw] mx-auto relative">
        {transitions((style,i)=><animated.div style={style} className="flex flex-wrap min-h-[30vh] absolute">
          {i.items &&
            i.items.map((item, index) => (
              <Item
                key={index}
                item={item}
                selected={selected}
                handleSelect={handleSelect}
              />
            ))}
        </animated.div>)}
      </div>
    </div>
  );
};
const Item = ({ item, handleSelect, selected }) => {

  return (
        <div className="basis-1/2 p-2">
          <button
            className="disabled:bg-gray-300 w-full bg-gray-200 dark:bg-gray-800 border-2 rounded-md p-2 flex"
            style={{
              borderColor: `${item.id == selected.id ? "#aa5555" : "#333333"}`,
            }}
            onClick={(e) => handleSelect(item, e)}
          >
            <div className="">
              <Image
                alt="icon"
                src="/icons/chips-1.png"
                width={70}
                height={70}
                className="ico z-0"
              />
            </div>
            <div className="grow text-left flex flex-col">
              <span className="text-lg font-bold">{item.name}</span>
              <span>stock: {item.stock}</span>
            </div>
            <span className="text-xl">${item.price}</span>
          </button>
        </div>

  );
};
const PaymentWindow = ({ setWindowOpen, open, item }) => {
  const [payMethod, setPayMethod] = useState("cash");
  const handleClose = () => {
    setWindowOpen(false);
  };
  const divStyle = {
    display: open ? "block" : "none",
  };
  const PayCashStyle = {
    backgroundColor: payMethod == "cash" ? "#222" : "transparent",
    color: payMethod == "cash" ? "white" : "inherit",
  };
  const PayCardStyle = {
    backgroundColor: payMethod != "cash" ? "#222" : "transparent",
    color: payMethod != "cash" ? "white" : "inherit",
  };

  return (
    <>
      <div
        style={divStyle}
        className="fixed w-full h-full z-10 backdrop-blur-sm"
      >
        <div className="h-full flex items-center justify-center">
          <div className="flex flex-wrap md:flex-nowrap  gap-4 w-full max-w-3xl relative">
            <div className="basis-1/3 grow bg-white rounded-lg">
              <div className="py-4 flex flex-col items-center justify-center h-full">
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
            </div>

            <div className="basis-2/3 grow bg-white rounded-lg p-4 px-10">
              <div className="flex gap-6 w-full mb-4">
                <button
                  className="rounded-md border-2 border-gray-900 grow py-2"
                  style={PayCashStyle}
                  onClick={() => setPayMethod("cash")}
                >
                  Pay with cash
                </button>
                <button
                  className="rounded-md border-2 border-gray-900 grow py-2"
                  style={PayCardStyle}
                  onClick={() => setPayMethod("card")}
                >
                  Pay with card
                </button>
              </div>
              <PaymentAcceptor method={payMethod} item={item} />
            </div>

            <button
              className=" p-2 rounded-md absolute bottom-0 translate-y-full "
              onClick={() => handleClose()}
            >
              -Back
            </button>
          </div>
        </div>
      </div>

      <div
        style={divStyle}
        className="fixed h-full w-full opacity-40 z-0 bg-gray-800 "
      />
    </>
  );
};
// DIVDER
const PaymentAcceptor = ({ method, item }) => {
  const [fund, setFund] = useState(0);
  const [loadingCash, setLoadingCash] = useState(false);
  const handleCashInsert = (val) => {
    setLoadingCash(true);
    setTimeout(() => setLoadingCash(false), 1500);
    setFund((x) => x + val);
  };
  if (method == "cash")
    return (
      <div className="flex flex-wrap">
        <div className="basis-full flex">
          <div className="text-green-200 basis-1/6 grow-0 text-3xl flex items-center justify-center bg-gray-900 aspect-square rounded-sm">
            ${fund}
          </div>
        </div>
        {!loadingCash ? (
          <div className="basis-full flex  gap-2 mt-4 aspect-[36/9]">
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
          <div className="basis-full aspect-[36/9] mt-4 ">LOADING</div>
        )}
      </div>
    );
  // DIVIDER
  else
    return (
      <div className="flex gap-2 flex-wrap">
        <input
          placeholder="Card Number"
          className="border-[1px] border-black p-2 grow rounded-md basis-5/6"
        />
        <input
          placeholder="CVC"
          className="border-[1px] border-black p-2 rounded-md basis-0 grow-0"
        />
        <input
          placeholder="Zipcode"
          className="border-[1px] border-black p-2 rounded-md"
        />
        <input
          placeholder="Exp date"
          className="border-[1px] border-black p-2 rounded-md"
        />
        <button className="basis-full bg-black text-white rounded-md p-4">
          Pay ${item.price}
        </button>
      </div>
    );
};
export default page;
