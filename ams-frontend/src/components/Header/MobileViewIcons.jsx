import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function MobileViewIcons(props) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null); // Reference to the dropdown element

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // Unbind the event listener on cleanup
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Menu Icon or Button */}
            <div onClick={toggleDropdown} className="block mt-3 border-solid cursor-pointer me-3 md:hidden border border-[#5b238d] ">
                <img src={props.imgsrc} alt={props.alt} className={props.className} title={props.alt} />
            </div>

            {/* Dropdown Content */}
            {isDropdownOpen && (
                <div className="md:hidden block absolute right-0 z-50 w-40 mt-2 bg-white text-[#5b238d] font-medium text-[12px] rounded-md shadow-lg">
                    <ul className="py-2">
                        <li className="px-4 py-2 hover:bg-[#F8F0FF]">
                            <Link to="/signin">Sign in</Link>
                            <span className="text-[#480C7B] text-[12px] lg:text-[12px]">&nbsp; or &nbsp;</span>
                            <Link to="/register">Register</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-[#F8F0FF]">
                            <Link to="/country">Ship to</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-[#F8F0FF]">
                            <Link to="/cart">Cart</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-[#F8F0FF]">
                            <Link to="/watchlist">Watchlist</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-[#F8F0FF]">
                            <Link to="/notification">Notification</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-[#F8F0FF]">
                            <Link to="/categories">Categories</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default MobileViewIcons;
