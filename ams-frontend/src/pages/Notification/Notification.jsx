import React, { useState, useEffect } from "react";
import Header from "../../components/layout/Header/Header";
import Breadcrumb from "../../components/layout/Breadcrumb/Breadcrumb";
import SidebarBuyer from "../../components/layout/SidebarBuyer/SidebarBuyer";
import axiosInstance from "../../utils/axiosInstance";
import { toast } from 'sonner';

function Notification() {

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [breadcrumb, setBreadcrumb] = useState('Lansuwa > ');
    // Toggle sidebar visibility
    const toggleSidebarVisibility = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    // Handle breadcrumb change
    const handleBreadcrumbChange = (newBreadcrumb) => {
        setBreadcrumb(newBreadcrumb);
    };


    const [notifications, setNotifications] = useState([
        { id: 1, title: 'Welcome', message: 'Thank you for joining!', isRead: true },
        { id: 2, title: 'Auction Reminder', message: 'Your auction starts tomorrow!', isRead: true },
        { id: 3, title: 'New Bid', message: 'A new bid has been placed.', isRead: true },
        { id: 4, title: 'Profile Update', message: 'Your profile was updated successfully.', isRead: false },
        { id: 5, title: 'Payment Received', message: 'Your payment has been processed.', isRead: true },
        { id: 6, title: 'Auction Ended', message: 'Your auction has ended.', isRead: false },
        { id: 7, title: 'New Message', message: 'You received a new message.', isRead: false },
        { id: 8, title: 'Discount Offer', message: 'Limited-time discount for you!', isRead: false },
        { id: 9, title: 'Auction Won', message: 'Congratulations, you won the auction!', isRead: false },
        { id: 10, title: 'New Follower', message: 'You have a new follower.', isRead: true },
        { id: 11, title: 'Account Suspicious Activity', message: 'Check your account activity.', isRead: false },
        { id: 12, title: 'Maintenance Alert', message: 'Scheduled maintenance on the platform.', isRead: true },
        { id: 13, title: 'Bid Update', message: 'Your bid status was updated.', isRead: true },
        { id: 14, title: 'New Comment', message: 'Someone commented on your auction.', isRead: false },
        { id: 15, title: 'Item Shipped', message: 'Your item has been shipped.', isRead: true },
        { id: 16, title: 'Auction Canceled', message: 'An auction was canceled.', isRead: false },
        { id: 17, title: 'Weekly Summary', message: 'Here is your weekly summary.', isRead: true },
        { id: 18, title: 'Bid Outbid', message: 'Your bid was outbid by another user.', isRead: false },
        { id: 19, title: 'Auction Expiring Soon', message: 'An auction you follow is expiring soon.', isRead: true },
        { id: 20, title: 'Security Update', message: 'Update your password to secure your account.', isRead: false },
    ]);


    return (
        <React.Fragment>

            <Header
                toggleSidebarVisibility={toggleSidebarVisibility}
                isSidebarVisible={isSidebarVisible}
            />

            <Breadcrumb breadcrumb={breadcrumb} />


            <div className="flex w-full h-full ">

                <SidebarBuyer
                    isSidebarVisible={isSidebarVisible}
                    onBreadcrumbChange={handleBreadcrumbChange}
                    className={`${isSidebarVisible ? 'w-1/4' : 'w-0'}`}
                />


                <div className="container mx-auto p-4 w-[970px] ms-[300px] mt-[170px]">
                    <table className="min-w-full bg-white border border-gray-200">

                        <tbody>
                            {notifications.map((notification) => (
                                <tr
                                    key={notification.id}
                                    className={
                                        notification.isRead ? 'bg-[rgb(240,225,252)] hover:bg-[#e6c8f8] cursor-pointer' : 'bg-white hover:bg-[#e6c8f8] cursor-pointer'
                                    }
                                >
                                    <td className="py-2 px-6 border-b border-gray-200">{notification.title}</td>
                                    <td className="py-2 px-6 border-b border-gray-200">{notification.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>






            </div>
        </React.Fragment>
    );
}

export default Notification;