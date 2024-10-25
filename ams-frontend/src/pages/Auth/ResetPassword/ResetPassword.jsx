// page for reset password
// get the email from the location state and send a request to the backend
// request formate to the backend
// {
//     "email": "user@example.com",
//     "newPassword": "RG%Wf PnSd)c\"'",
//     "confirmPassword": "r<i@+4%Q",
//     "otpCode": "string"
//   }

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import axiosInstance from '../../../utils/axiosInstance';
import Loading from '../../../components/Loading/Loading';

const ResetPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [otpCode, setOtpCode] = useState('');
    const [email, setEmail] = useState(location.state?.email || '');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleResetPassword = async () => {
        setLoading(true);
        try {
            const response = await axiosInstance.post('/api/Auth/ResetPassword', {
                email,
                newPassword,
                confirmPassword,
                otpCode,
            });
            if (response.status === 200) {
                toast.success('Password reset successfully');
                toast.success('Please sign in to continue');
                navigate('/signin');
            }
        } catch (error) {
            toast.error("Enter the correct OTP code");
        }
        setLoading(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-semibold text-center mb-4">Reset Password</h3>
                <p className="text-center text-gray-600 mb-6">
                    Please enter the OTP code sent to your email address
                </p>
                <div className="mb-4">
                    <label htmlFor="otpCode" className="block text-gray-700 font-medium mb-2">
                        OTP Code
                    </label>
                    <input
                        type="text"
                        id="otpCode"
                        name="otpCode"
                        value={otpCode}
                        onChange={(e) => setOtpCode(e.target.value)}
                        placeholder="OTP Code"
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 focus:ring-opacity-75"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="newPassword" className="block text-gray-700 font-medium mb-2">
                        New Password
                    </label>
                    <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="New Password"
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 focus:ring-opacity-75"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 focus:ring-opacity-75"
                    />
                </div>
                <button
                    type="button"
                    onClick={handleResetPassword}
                    disabled={loading}
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none disabled:opacity-50"
                >
                    {loading ? <Loading /> : 'Reset Password'}
                </button>
            </div>
        </div>
    );
}

export default ResetPassword;

