import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import axiosInstance from '../../../utils/axiosInstance';
import Loading from '../../../components/Loading/Loading';
import logo from "../../../assets/images/logos/logo.png";

const EmailVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const email = location.state?.email || '';

  
  const handleVerify = async () => {
    setLoading(true);
    try {
      if(email === '') {
        toast.error('Email address not found');
        throw new Error('Verification failed');
      }
      const response = await axiosInstance.post('/api/Auth/VerifyOtp', {
        email,
        otpCode,
      });
      if (response.status === 200) {
        toast.success('Email verified successfully');
        toast.success('Please login to continue');
        navigate('/signin');
      }
    } catch (error) {
      toast.error("Enter the correct OTP code");
      console.error("Verification failed :", error);
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

    <div className="flex items-center justify-center h-screen bg-[#FDFAFF] sm:bg-[#edeaf1]">

      <div className="grid md:grid-cols-2 gap-10 bg-[#FFFFFF] p-10 sm:border-[1px] sm:border-[#f4e8ff] md:rounded-[20px]">
        
        <div>
          <img src={logo} alt="svad" />
          <h1 className="text-3xl font-bold text-slate-900 font-light mt-6 text-[35px]" style={{ fontFamily: 'Poppins, sans-serif' }}>Verify Email</h1>
          <p className="text-slate-600 mt-3">Lansuwa.lk &nbsp;Bid Win Own</p>
        </div>

        <div>

          <div>
            <div htmlFor="" className='mb-2'>One time password - OTP</div>
            <input type="text" required className="w-[300px] h-[35px] p-2 mt-2 border-[1px] border-[#cccccc] rounded-[8px]" onChange={(e) => setOtpCode(e.target.value)} />
            <p className="text-[#4B5563] mt-2 text-sm w-[300px]">Please enter the OTP code sent to your email address</p>
          </div>

          <div className="pt-5 mt-2">
            <a className="text-[#480C7B] hover:underline" onClick={handleResend}>Re-send OTP</a>
            <button type="button" required className="float-end w-[120px] h-[35px] leading-[18px] p-2 bg-[#480C7B] text-white rounded-[10px]" onClick={handleVerify}>Verify</button>
          </div>

        </div>

      </div>

    </div>
    </React.Fragment>
    
  );
};

export default EmailVerification;
