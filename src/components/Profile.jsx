import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import userContext from '../contexts/users/userContext'

const Profile = () => {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDOB] = useState("");

    const {users, getUsers, updateUser} = useContext(userContext);

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        const userData = {
            fname: fname,
            lname: lname,
            phone: JSON.parse(localStorage.getItem('user')).phoneNumber,
            email: email,
            gender: gender,
            dob: dob
        };

        console.log(userData);

        let arr = users.filter(user => user.phone === JSON.parse(localStorage.getItem('user')).phoneNumber);
        if(arr.length <= 0){
            updateUser(JSON.stringify(userData));
            navigate('/')
        }
        console.log(users);
    }
    
    useEffect(() => {
        if(localStorage.getItem('user') !== null) {
            if(users.length <= 0){
                getUsers();
            }
        }
    },[users])

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
                                    <div className="l-tit">Profile</div>
                                </div>
                            </div>
                                <div className="card form mb-3">
                                    <div className="card-body">
                                        <label htmlFor="mobile-no" className="form-label mt-1">First Name:</label>
                                        <input value={fname} onChange={e => setFname(e.target.value)} className='form-control' type="text" id="fname" name="fname" required placeholder='eg. Jainil'/>
                                    </div>
                                    <div className="card-body">
                                        <label htmlFor="mobile-no" className="form-label mt-1">Last Name:</label>
                                        <input value={lname} onChange={e => setLname(e.target.value)} className='form-control' type="text" id="lname" name="lname" required placeholder='eg. Dalwadi'/>
                                    </div>
                                    <div className="card-body">
                                        <label htmlFor="mobile-no" className="form-label mt-1">Email:</label>
                                        <input value={email} onChange={e => setEmail(e.target.value)} className='form-control' type="text" id="email" name="email" required placeholder='eg. jhondeo@gmail.com'/>
                                    </div>
                                    <div className="card-body">
                                        <label htmlFor="mobile-no" className="form-label mt-1">Gender:</label>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <input type="radio" className='form-check-input' id='male' name="gender" onChange={() => setGender('Male')}/>
                                                <label class="form-check-label" for="male">
                                                    Male
                                                </label>
                                            </div>
                                            <div className="col-md-6">
                                                <input type="radio" className='form-check-input' id='female' name="gender"  onChange={() => setGender('Female')}/>
                                                <label class="form-check-label" for="female">
                                                    Female
                                                </label>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <label htmlFor="mobile-no" className="form-label mt-1">Date Of Birth:</label>
                                        <input value={dob} onChange={e => setDOB(e.target.value)} className='form-control' type="text" id="dob" name="dob" required placeholder='eg. 30/12/2023'/>
                                    </div>
                                </div>
                                <div className="card submit">
                                    <div className="card-body l-submit">
                                        <button className="btn btn-primary mt-2" type="button" onClick={onSubmit}>
                                            Update Profile
                                        </button>
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

export default Profile;