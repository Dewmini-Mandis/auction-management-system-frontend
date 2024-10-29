import React, { useState } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../utils/axiosInstance';
import Loading from '../../../components/Loading/Loading';

import logo from "../../../assets/images/logos/logo.png";


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
            toast.error(error.response.data);
            setLoading(false);
        }

    };

    return (

        <React.Fragment>

            {loading && (
                <Loading />
            )}

            <div className="flex items-center justify-center h-screen bg-[#FFFFFF] sm:bg-[#edeaf1]">

                <div className="grid md:grid-cols-2 gap-2 bg-[#FFFFFF] p-10 sm:border-[1px] sm:border-[#f4e8ff] md:rounded-[20px]">

                    <div className='mb-[20px]'>
                        <img src={logo} alt="svad" />
                        <h1 className="text-3xl font-bold text-slate-900 font-light mt-10 text-[35px]" style={{ fontFamily: 'Poppins, sans-serif' }}>Forgot </h1>
                        <h1 className="text-3xl font-bold text-slate-900 font-light mt-2 text-[35px]" style={{ fontFamily: 'Poppins, sans-serif' }}>Password</h1>
                        {/* welcome message */}
                        <p className="text-slate-600 mt-3 w-[300]">No worries, we got you covered</p>
                    </div>

                    <form onSubmit={handleForgotPassword}>

                        <div className="pt-5">
                            <div htmlFor="">Email</div>
                            <input type="email" required className="w-[335px] h-[35px] p-2 mt-2 border-[1px] border-[#cccccc] rounded-[8px]" onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="pt-5 mt-2">
                            <button type="submit" className="w-[120px] h-[35px] leading-[0px] float-end p-2 bg-[#480C7B] text-white rounded-[10px]" >Next</button>
                        </div>

                        <div className="pt-[60px]">
                            <p>Do you remember the password? &nbsp;<a href="/signin" className="text-[#4B5563] hover:underline">Sign In</a></p>
                        </div>

                    </form>

                </div>

            </div>
        </React.Fragment>

    );
};

export default ForgotPassword;