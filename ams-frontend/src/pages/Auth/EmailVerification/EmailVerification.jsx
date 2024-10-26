import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import axiosInstance from '../../../utils/axiosInstance';
import Loading from '../../../components/Loading/Loading';

const EmailVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [email, setEmail] = useState(location.state?.email || '');

  const handleVerify = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.post('/api/Auth/VerifyOtp', {
        email,
        otpCode,
      });
      if (response.status === 200) {
        toast.success('Email verified successfully');
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
        toast.error(error.response.data.message);
        }
        setLoading(false);
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-center mb-4">Email Verification</h3>
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
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter OTP Code"
            value={otpCode}
            onChange={(e) => setOtpCode(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none disabled:opacity-50"
          onClick={handleVerify}
          disabled={loading}
        >
          {loading ? <Loading /> : 'Verify Email'}
        </button>

        <button type="button" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none disabled:opacity-50 mt-4" onClick={handleResend} disabled={loading}>
            {loading ? <Loading /> : 'Resend OTP'}
        </button>
      </div>
    </div>
  );
};

export default EmailVerification;
