import React, { useState, useRef, useEffect } from "react";
import logo from "../images/_NEW-LOGO-Giotto-legno-250.png";
import ".././App.css";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import {useCart} from '../context/cartContext';
import PropTypes from 'prop-types';

function Navbar({ isCartOpen, setIsCartOpen }){
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(80); 
  const menuRef = useRef(null);
  
  const { state } = useCart();
  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight + 80); // Expanded height
    } else {
      setMenuHeight(80); // Default height
    }
  }, [isMenuOpen]);

  const hamburgerHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        style={{ height: `${menuHeight}px` }}
        className="flex md:flex-row items-center justify-between py-3 px-8 bg-green-800 z-10 fixed w-full top-0 transition-all duration-300"
      >
        {/* Logo */}
        <figure>
          <img className="w-10 h-10 md:w-16 md:h-16" src={logo} alt="Logo" />
        </figure>

        {/* Search Input */}
        <Input
          className="hidden md:block w-1/3 mx-4"
          type="text"
          placeholder="Search"
        />

        {/* Navigation Links */}
        <ul
          ref={menuRef}
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row space-y-4 md:space-y-0 md:space-x-8 navItems`}
        >
          <li className="text-lg md:text-lg cursor-pointer text-center text-gray-100 hover:text-gray-400">
            <Link to="/">Home</Link>
          </li>
          <li className="text-lg md:text-lg cursor-pointer text-center text-gray-100 hover:text-gray-400">
            <Link to="/giottofood">Giotto Food UK</Link>
          </li>
          <li className="text-lg md:text-lg cursor-pointer text-center text-gray-100 hover:text-gray-400">
            <Link to="/products">Products</Link>
          </li>
          <li className="text-lg md:text-lg cursor-pointer text-center text-gray-100 hover:text-gray-400">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="text-lg md:text-lg cursor-pointer text-center text-gray-100 hover:text-gray-400">
            <Link to="/about">About</Link>
          </li>
        </ul>

        {/* Hamburger Button */}
        <div className="flex justify-center items-center">
          <Button
            variant="none"
            className="md:hidden text-2xl right-2 bottom-4"
            onClick={hamburgerHandler}
          >
            {isMenuOpen ? "X" : "☰"}
          </Button>
          <button
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="p-2 rounded-full hover:bg-green-900 relative"
        >
          <ShoppingCart className="text-white bg-transparent" size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  isCartOpen: PropTypes.bool.isRequired,
  setIsCartOpen: PropTypes.func.isRequired,
};

export default Navbar;
