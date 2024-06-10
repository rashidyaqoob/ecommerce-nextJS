"use client";
import { adminNavOptions, navOptions, styles } from "@/utils";
import React from "react";
import { Fragment } from "react";

const isAdminView = false;
const isAuthUser = true;

const user = {
  role: "admin",
};

function NavItems() {
  return (
    <div
      className="items-center justify-between w-full md:flex md:w-auto"
      id="nav-items"
    >
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row">
        {isAdminView
          ? adminNavOptions.map((item) => (
              <li
                className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded"
                key={item.id}
              >
                {item.label}
              </li>
            ))
          : navOptions.map((item) => (
              <li
                className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded"
                key={item.id}
              >
                {item.label}
              </li>
            ))}
      </ul>
    </div>
  );
}

export const Navbar = () => {
  return (
    <>
      <nav className=" bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center cursor-pointer">
            <span className="slef-center text-2x1 font-semibold whitespace-nowrap">
              Ecommerce
            </span>
          </div>
          <div className="flex md: order-2 gap-2">
            {!isAdminView && isAuthUser ? (
              <Fragment>
                <button className={styles.button}>Account</button>
                <button className={styles.button}>Cart</button>
              </Fragment>
            ) : null}
            {user?.role === "admin" && isAdminView ? (
              <button className={styles.button}>Admin View</button>
            ) : (
              <button className={styles.button}>Client View</button>
            )}
            {isAuthUser ? (
              <button className={styles.button}>Logout</button>
            ) : (
              <button className={styles.button}>Login</button>
            )}
          </div>
          <NavItems />
        </div>
      </nav>
    </>
  );
};
