import React, { useState } from 'react'
import './login.css'

const Login = () => {
    const [otpSent, setOtpSent] = useState(false);

    return (
        <div className="container-fluid mt-5 mb-5">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="card w-100">
                        <div className="card-body">
                            <div className="card title mb-3">
                                <div className="card-body p-1">
                                    <div className="l-tit">LOGIN</div>
                                </div>
                            </div>
                            <div className="card form mb-3">
                            {otpSent?(
                                <div className="card-body">
                                    <h5 className="text-success fw-bold">OPT Sent To 6327894682.</h5>
                                    <h6>Is'nt It Your Number ? <a className="link" href="#">Change Number</a></h6>
                                    <br/>
                                    <label for="otp" className="form-label">One Time Password</label>
                                    <div className="opt-field">
                                        <input type="number" className="form-control form-control-lg otp" id="otp" placeholder="0" />
                                        <input type="number" className="form-control form-control-lg otp" id="otp" placeholder="0" />
                                        <input type="number" className="form-control form-control-lg otp" id="otp" placeholder="0" />
                                        <input type="number" className="form-control form-control-lg otp" id="otp" placeholder="0" />
                                        <input type="number" className="form-control form-control-lg otp" id="otp" placeholder="0" />
                                        <input type="number" className="form-control form-control-lg otp" id="otp" placeholder="0" />
                                    </div>
                                    <div className="d-flex resend">
                                        <h6>Not get code yet?</h6>
                                        <h6><a className="link" href="#">Resend Code</a></h6>
                                    </div>
                                </div>
                            ):(
                                <div className="card-body">
                                    <label for="mobile-no" className="form-label">Mobile No</label>
                                    <input type="tel" className="form-control form-control-lg" id="mobile-no" placeholder="e.g. 6327894682" />
                                </div>
                            )}
                            </div>
                            <div className="card submit">
                                <div className="card-body l-submit">
                                {otpSent?(
                                    <button type="button" style="width: 150px;" className="btn btn-secondary fw-bold">Verify & Continue</button>
                                ):(
                                    <button type="button" style="width: 150px;" onClick={() => setOtpSent(true)} className="btn btn-secondary fw-bold">Verify</button>
                                )} 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default Login
