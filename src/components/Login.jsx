import React, { useEffect, useState } from 'react'
import PhoneInput from 'react-phone-input-2';
import OtpInput from 'otp-input-react'
import './login.css'
import "react-phone-input-2/lib/style.css";
import { auth } from '../../firebase.config';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useContext } from 'react';
import userContext from '../contexts/users/userContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {getUsers} = useContext(userContext);

    const [otp, setOtp] = useState("");
    const [ph, setPh] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOtp, setShowOtp] = useState(false);
    const [message, setMessage] = useState(null);

    const navigate = useNavigate(); 

    const onCaptchVarify = () => {
        if(!window.recaptchaVerifier){
            window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
                'size': 'invisible',
                'callback': (response) => {
                    onSignUp();
                },
                'expired-callback': () => {
                  
                }
            }, auth);
        }
        console.log('Re-capcha Set');
    }

    useEffect(() => {
        if(localStorage.getItem('user') !== null) {
            navigate('/');
        }
        onCaptchVarify();
    },[])

    const onSignUp = () => {
        setLoading(true);

        if(!ph){
            setMessage({title: "Enter Phone Number", type: "danger"})
        }else {
            const appVerifier = window.recaptchaVerifier;
            signInWithPhoneNumber(auth, `+${ph}`, appVerifier)
                .then((confirmationResult) => {
                    window.confirmationResult = confirmationResult;
                    setShowOtp(true);
                    setMessage({title: 'OTP Sended Successfully!', type: "success"})
                }).catch((error) => {
                    console.log(error);
                    console.log(error.code);
                    setMessage({title: error.code.split("/").pop().replace(/-/g, " "), type: "danger"})
                });

        }


        setLoading(false);
    }

    const onOtpVerify = () => {
        setLoading(true);
        if(!otp){
            setMessage({title: "Enter otp to verify", type: "danger"})
        }else{
            window.confirmationResult
                .confirm(otp)
                .then(async (res) => {
                    localStorage.setItem("user", JSON.stringify(res.user));
                    getUsers();
                    navigate('/');
                }).catch((error) => {
                    console.log(error);
                    console.log(error.code);
                    setMessage({title: error.code.split("/").pop().replace(/-/g, " "), type: "danger"})
                });
        }
        setLoading(false);
    }

    return (
        <div className="container-fluid mt-5 mb-5">
            <div id="recaptcha-container"></div>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="card w-100">
                        <div className="card-body">
                            <div className="card title mb-3 mt-3">
                                <div className="card-body p-1">
                                    <div className="l-tit">LOGIN</div>
                                </div>
                            </div>
                            {message &&
                                <div className={`alert alert-${message.type}`} role="alert">
                                    {message.title}
                                </div>
                            }
                            {(!showOtp)?(
                            <>
                                <div className="card form mb-3">
                                    <div className="card-body">
                                        <label htmlFor="mobile-no" className="form-label mt-1">Mobile No:</label>
                                        <PhoneInput country={"in"} value={ph} id="mobile-no" onChange={setPh} required/>
                                    </div>
                                </div>
                                <div className="card submit">
                                    <div className="card-body l-submit">
                                    <button className="btn btn-primary mt-2" type="button" onClick={onSignUp} disabled={loading}>
                                        {loading && <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>}
                                        Verify
                                    </button>
                                    </div>
                                </div>  
                            </>
                            ):(
                            <>
                                <div className="card form mb-3">
                                    <div className="card-body">
                                        <h5 className="text-success fw-bold mt-2">OPT Sent To +{ph}.</h5>
                                        <h6>Is'nt It Your Number ? <button type="button" className="btn btn-link link">Change Number</button></h6>
                                        <label htmlFor="otp" className="form-label">Enter Your OTP:</label>
                                        <OtpInput value={otp} id="otp" OTPLength={6} onChange={setOtp} otpType="number" disabled={false} autoFocus className="opt-container"></OtpInput>
                                        {/* <div className="d-flex resend">
                                            <h6>Not get code yet?</h6>
                                            <h6><a className="link" href="#">Resend Code</a></h6>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="card submit">
                                    <div className="card-body l-submit">
                                        <button className="btn btn-primary mt-2" type="button" onClick={onOtpVerify} disabled={loading}>
                                            {loading && <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>}
                                            Verify OTP
                                        </button>
                                    </div>
                                </div>
                            </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default Login
