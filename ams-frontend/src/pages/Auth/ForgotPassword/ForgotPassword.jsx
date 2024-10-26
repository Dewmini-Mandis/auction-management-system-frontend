// page for forgot password
// get the email from the user and send a request to the backend
// then redirect to the reset password page with the email

import React, { useState } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../utils/axiosInstance';
import Loading from '../../../components/Loading/Loading';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    // useState for loading
    const [loading, setLoading] = useState(false);

    const handleForgotPassword = async (event) => {
        event.preventDefault();

        setLoading(true);

        try {
            await axiosInstance.post('/api/Auth/ResetPasswordRequest', { email });

            // Show a success toast
            toast.success('Please check your email to get the OTP code!');

            // Redirect to the Reset Password page with the email address
            navigate('/reset-password', { state: { email } });

            setLoading(false);

        } catch (error) {
            console.error("Forgot password failed:", error);
            // Show an error toast
            toast.error('Forgot password failed!');
            setLoading(false);
        }

    };

    return (
        <React.Fragment>
            {loading && (
                <Loading />
            )}
            <div className="container mx-auto mt-10">
                <div className="w-96 mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className="text-2xl font-bold text-center mb-4">Forgot Password</h1>
                    <form onSubmit={handleForgotPassword}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ForgotPassword;