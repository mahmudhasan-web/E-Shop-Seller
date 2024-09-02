import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <section className="bg-[#16325B] text-white p-3">
      <div id="responsive"></div>
      <div className="flex justify-around">
        <h1 className="text-2xl font-bold">E-Shop Seller</h1>
        <div>
          <ul className="flex gap-5 text-lg font-semibold">
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
            to={"/add-product"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }>
              <li>Add Product</li>
            </NavLink>
            <NavLink
            to={"/all-product"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }>
              <li>All Product</li>
            </NavLink>
            <NavLink
            to={"/support"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }>
              <li>Support</li>
            </NavLink>
          </ul>
        </div>
        <div>
          <Button variant="outlined" className="bg-[#cf3737]">
            LogOut
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
