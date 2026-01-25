import React from "react";
import { TbChartTreemap } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { ImProfile } from "react-icons/im";
import { TbTransactionRupee } from "react-icons/tb";
import { SiHelpdesk } from "react-icons/si";
import { RiCustomerService2Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdLogout } from "react-icons/md";
import api from "../../config/Api"
import toast from 'react-hot-toast'
import { useAuth } from "../../context/AuthContext";

const UserSideBar = ({ active, setActive, isCollapsed, setIsCollapsed }) => {
  const {setUser,setIsLogin} =useAuth("")
  const menuItems = [
    { key: "overview", title: "Overview", icon: <TbChartTreemap /> },
    { key: "profile", title: "Profile", icon: <ImProfile /> },
    { key: "orders", title: "Orders", icon: <TiShoppingCart /> },
    {
      key: "transactions",
      title: "Transactions",
      icon: <TbTransactionRupee />,
    },
    { key: "helpdesk", title: "Help Desk", icon: <RiCustomerService2Line /> },
  ];


  const handleLogout =async ()=>{
    try {
      const res = await api.get('/auth/logout')
      toast.success(res.data.message)
      setUser("")
      setIsLogin(false)
      sessionStorage.removeItem("CravingUser");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  }

  return (
    <>
      <div className="p-2 flex flex-col h-full">
        <div >
          <div className="text-xl font-bold flex items-center gap-5 mb- h-10">
            <button
              className="hover:scale-105 ms-2"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <RxHamburgerMenu />
            </button>{" "}
            {!isCollapsed && (
              <span className="overflow-hidden text-nowrap">
                User Dashboard
              </span>
            )}
          </div>
          <hr />

          <div className="py-6 space-y-5 w-full">
            {menuItems.map((item, idx) => (
              <button
                className={`flex gap-3 items-center px-2 text-lg rounded-xl h-10 w-full text-nowrap overflow-hidden duration-300 ${
                  active === item.key
                    ? "bg-(--color-secondary) text-white"
                    : "hover:bg-gray-100/70"
                }`}
                onClick={() => setActive(item.key)}
                key={idx}
              >
                {" "}
                {item.icon}
                {!isCollapsed && item.title}
              </button>
            ))}
          </div>
        </div>

        <div>
          <button
            className="flex gap-3 items-center px-2 text-lg rounded-xl h-10 w-full text-nowrap overflow-hidden duration-300 hover:bg-red-600"
            onClick={handleLogout}
          >
            <MdLogout />
            {!isCollapsed && "Logout"}
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSideBar;