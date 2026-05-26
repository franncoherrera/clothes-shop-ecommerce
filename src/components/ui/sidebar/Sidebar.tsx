"use client";
import { useUIStore } from "@/store";
import clsx from "clsx";
import { signOut, useSession } from "next-auth/react";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";
import { SidebarLink } from "./SidebarLink";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);
  const { data: session } = useSession();
  const isAuthenticated = !!session?.user;
  const isAdmin = session?.user.role === "admin";

  return (
    <div>
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}
      {isSideMenuOpen && (
        <div
          onClick={closeMenu}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-xs"
        />
      )}

      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 h-screen bg-white z-20 shadow-2xl transform transition-all duration-300 w-full md:w-125",
          {
            "translate-x-full": !isSideMenuOpen,
          },
        )}
      >
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute left-2 top-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-lg border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>
        {!isAuthenticated && (
          <SidebarLink
            href="/auth/login"
            icon={<IoLogInOutline size={30} />}
            label="Ingresar"
            onClick={() => closeMenu()}
          />
        )}
        <IoCloseOutline
          size={35}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => closeMenu()}
        />
        {isAuthenticated && (
          <>
            <SidebarLink
              href="/profile"
              icon={<IoPersonOutline size={30} />}
              label="Perfil"
              onClick={closeMenu}
            />
            <SidebarLink
              href="/orders"
              icon={<IoTicketOutline size={30} />}
              label="Ordenes"
            />
          </>
        )}

        {isAuthenticated && (
          <button
            onClick={() => {
              signOut();
              closeMenu();
            }}
            className="w-full flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoLogOutOutline size={30} />
            <span className="ml-3 text-lg">Salir</span>
          </button>
        )}
        {/* {isAdmin && (
          <>
            <div className="w-full h-px bg-gray-200 my-10"></div>
            <SidebarLink
              href="/"
              icon={<IoShirtOutline size={30} />}
              label="Productos"
            />
            <SidebarLink
              href="/"
              icon={<IoTicketOutline size={30} />}
              label="Órdenes"
            />
            <SidebarLink
              href="/"
              icon={<IoPeopleOutline size={30} />}
              label="Usuarios"
            />
          </>
        )} */}
      </nav>
    </div>
  );
};
