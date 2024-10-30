import React, { useState } from 'react';
import SidebarBuyer from '../../../components/layout/SidebarBuyer/SidebarBuyer';
import Breadcrumb from '../../../components/layout/Breadcrumb/Breadcrumb';
import Header from '../../../components/layout/Header/Header';

function UserProfile() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State for sidebar visibility
  const [breadcrumb, setBreadcrumb] = useState('Lansuwa > '); // State for breadcrumb

  // Toggle sidebar visibility
  const toggleSidebarVisibility = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Handle breadcrumb change
  const handleBreadcrumbChange = (newBreadcrumb) => {
    setBreadcrumb(newBreadcrumb);
  };

  return (
    <React.Fragment>
      {/* Full-width Header */}
      <Header
        toggleSidebarVisibility={toggleSidebarVisibility}
        isSidebarVisible={isSidebarVisible}
      />

      <Breadcrumb breadcrumb={breadcrumb} />

      {/* Flex container for Sidebar and Content */}
      <div className="flex w-full h-full">
        {/* Sidebar */}
        <SidebarBuyer
          isSidebarVisible={isSidebarVisible}
          onBreadcrumbChange={handleBreadcrumbChange}
          className={`${isSidebarVisible ? 'w-1/4' : 'w-0'}`} // Adjust width based on sidebar visibility
        />

        {/* Main Content */}
        <div className={`flex flex-col flex-grow bg-[#F5F0FA] p-8 ${isSidebarVisible ? 'w-3/4' : 'w-full'}`}>
          <h1 className="flex justify-center mb-4 text-lg font-medium text-gray-800">User Profile</h1>

          <form className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block mb-1 font-medium text-gray-700">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium text-gray-700">Address</label>
              <input
                type="text"
                placeholder="Enter your address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-4 font-semibold text-white transition duration-200 bg-purple-500 rounded-lg hover:bg-blue-600"
            >
              Save Profile
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserProfile;
