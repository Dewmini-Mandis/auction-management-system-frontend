import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import axiosInstance from '../../../utils/axiosInstance';
import Loading from '../../../components/Loading/Loading';
import logo from "../../../assets/images/logos/logo.png";


const ResetPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [otpCode, setOtpCode] = useState('');
    const email = location.state?.email || '';
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleResetPassword = async () => {
        event.preventDefault()
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


    // re send otp code
    const handleResend = async () => {
        setLoading(true);
        try {
            const response = await axiosInstance.post('/api/Auth/ReGenerateOtp', {
                email,
            });
            if (response.status === 200) {
                toast.success('Resend OTP successfully');
            }
        } catch (error) {
            toast.error(error);

        }
        setLoading(false);
    }


    return (
        <React.Fragment>

            {loading && (
                <Loading />
            )}

            <div className="flex items-center justify-center h-screen bg-[#FFFFFF] sm:bg-[#edeaf1]">

                <div className="grid md:grid-cols-2 gap-2 bg-[#FFFFFF] p-10 sm:border-[1px] sm:border-[#f4e8ff] md:rounded-[20px]">

                    <div className='mb-[20px]'>
                        <img src={logo} alt="svad" />
                        <h1 className="text-3xl font-bold text-slate-900 font-light mt-10 text-[35px]" style={{ fontFamily: 'Poppins, sans-serif' }}>Change</h1>
                        <h1 className="text-3xl font-bold text-slate-900 font-light mt-2 text-[35px]" style={{ fontFamily: 'Poppins, sans-serif' }}>Password</h1>
                        {/* welcome message */}
                        <p className="text-slate-600 mt-3">No worries, we got you covered</p>
                    </div>

                    <form onSubmit={handleResetPassword}>

                        <div className="pt-5">
                            <div htmlFor="">One time password - OTP</div>
                            <input type="text" required className="w-[335px] h-[35px] p-2 mt-2 border-[1px] border-[#cccccc] rounded-[8px]" onChange={(e) => setOtpCode(e.target.value)} />
                        </div>

                        <div className="pt-5">
                            <div htmlFor="">Password</div>
                            <input type="password" required className="w-[335px] h-[35px] p-2 mt-2 border-[1px] border-[#cccccc] rounded-[8px]" onChange={(e) => setNewPassword(e.target.value)} />
                        </div>

                        <div className="pt-5">
                            <div htmlFor="">Confirm password</div>
                            <input type="password" required className="w-[335px] h-[35px] p-2 mt-2 border-[1px] border-[#cccccc] rounded-[8px]" onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>

                        <div className="pt-5 mt-2">
                            <a href="" className="text-[#4B5563] hover:underline" onClick={handleResend}>Re-send OTP</a>
                            <button type="submit" required className="w-[120px] h-[35px] leading-[18px] float-end p-2 bg-[#480C7B] text-white rounded-[10px]">Change</button>
                        </div>

                        <div className="pt-[65px]">
                            <p>Don't you want to change password? &nbsp;<a href="/signin" className="text-[#4B5563] hover:underline">Sign In</a></p>
                        </div>

                    </form>

                </div>

            </div>
        </React.Fragment>
    );
}

export default ResetPassword;

