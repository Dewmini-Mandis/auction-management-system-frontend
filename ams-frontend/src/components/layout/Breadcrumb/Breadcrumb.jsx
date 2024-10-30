import React from 'react';

function Breadcrumb({ breadcrumb }) {
  return (
    <div className="fixed mt-[108px] w-full py-1 ps-6 text-[13px]  text-gray-600 h-fit bg-[#FDFAFF] border-b border-solid border-gray-300">
      {breadcrumb} {/* Display the current breadcrumb */}
    </div>
  );
}

export default Breadcrumb;
