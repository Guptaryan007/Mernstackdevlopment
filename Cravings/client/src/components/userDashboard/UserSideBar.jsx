import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImProfile } from "react-icons/im";
import { TbTransactionRupee } from "react-icons/tb";
import { TbChartTreemap } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";

const UserSideBar = ({ active, setActive }) => {
  return (
    <>
      <div className="p-3">
        <div className="text-xl font-bold flex items-center gap-2">
          {" "}
          <RxHamburgerMenu />
          User Dashboard
        </div>
        <hr />
        <div className="grid gap-3 p-6">
          <button
            className={`flex gap-3 items-center p-3 rounded-xl
              ${
                active === "overview"
                  ? "bg-(--color-secondary) text-white"
                  : "hover:bg-gray-100/70"
              }
              
              `}
            onClick={() => setActive("overview")}
          >
            <TbChartTreemap />
            Overview
          </button>
          <button
            className={`flex gap-3 items-center p-3 rounded-xl
              ${
                active === "profile"
                  ? "bg-(--color-secondary) text-white"
                  : "hover:bg-gray-100/70"
              }
              
              `}
            onClick={() => setActive("profile")}
          >
            {" "}
            <ImProfile />
            Profile
          </button>
          <button
            className={`flex gap-3 items-center p-3 rounded-xl
              ${
                active === "orders"
                  ? "bg-(--color-secondary) text-white"
                  : "hover:bg-gray-100/70"
              }
              
              `}
            onClick={() => setActive("orders")}
          >
            {" "}
            <TiShoppingCart />
            Orders
          </button>
          <button
            className={`flex gap-3 items-center p-3 rounded-xl
              ${
                active === "transactions"
                  ? "bg-(--color-secondary) text-white"
                  : "hover:bg-gray-100/70"
              }
              
              `}
            onClick={() => setActive("transactions")}
          >
            {" "}
            <TbTransactionRupee />
            Transactions
          </button>
          <button
            className={`flex gap-3 items-center p-3 rounded-xl
              ${
                active === "helpdesk"
                  ? "bg-(--color-secondary) text-white"
                  : "hover:bg-gray-100/70"
              }
              
              `}
            onClick={() => setActive("helpdesk")}
          >
            <RiCustomerService2Fill />
            Help Desk
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSideBar;
