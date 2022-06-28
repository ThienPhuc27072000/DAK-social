import Head from "next/head";
import Styles from "../../styles/SignInUp.module.css";
import ImageGifRes from "../../public/images/gif.gif";
import ImageGif from "../../public/images/gifweb.gif";
import Image from "next/image";
import { FaEye, FaGoogle, FaFacebookF, FaTwitter, FaYoutube, FaTiktok, FaAngleLeft, FaEyeSlash } from "react-icons/fa";
import { useState, useEffect } from "react";
import PopupVerify from "../../components/PopupLogin/PopupVerify/PopupVerify";
import PopupForgetPassword from "../../components/PopupLogin/PopupForgetPassword/PopupForgetPassword";
import { sendToLogin } from "../../config/auth/handle-login";
import axios from "axios";
import jwt_decode from 'jwt-decode'
import { signInWithGoogle, signInWithFaceBook } from '../../config/firebase'
import { BsCheckLg } from 'react-icons/bs'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { handleSetDate, formatDate, setCookieToClient } from "../../config/auth/handle-register";

import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai"

export default function SignInUp() {
    const [showPopup, setShowPopup] = useState(1);
    const [showPopupVerify, setShowPopupVerify] = useState(false);
    const [showPopupForget, setShowPopupForget] = useState(false);
    const [seePass, setSeePass] = useState([]);
    const [gender, setGender] = useState(0);
    const [errorsList, setErrorsList] = useState([]);
    const [date, setDate] = useState(new Date());
    const [toggleCalendar, setToggleCalendar] = useState(false)
    const [licenseCheckBox, setCheckBox] = useState(false)

    useEffect(() => {
        let auth = window.document.querySelectorAll(`.login`)
        axios.post("./api/save-account-user").
        then(res => {
            if (res.data.token != undefined && auth.length != 0)  
            {
                auth[0].value = jwt_decode(res.data.token).user.username;
            
                auth[1].value = jwt_decode(res.data.token).user.password;
            }
        })
    },[])

    const handleEventSeePass = (index) => {
        if (seePass.includes(index)) {
            setSeePass(seePass.filter(function(value){ 
                return value != index;
            }))
        } else {
            setSeePass([...seePass, index])
        }
        console.log(seePass)
    }

    const sendToRegister = (gender)  => {
        const auth = window.document.querySelectorAll(`.register`)
    
        var data = JSON.stringify({
            "name": auth[0].value,
            "username": auth[1].value,
            "email": auth[2].value,
            "password": auth[3].value,
            "phone_number": auth[6].value,
            "account_type": 1,
            "birthday": formatDate(auth[5].value),
            "sex": gender,
            
        });
    
        var config = {
            method: 'post',
            url: 'http://115.79.140.218:9008/api/auth/register?locale=en',
            headers: { 
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdiMDJhN2E1LWEwZmMtNWI2Ni1iZjYwLWU5NGM0NWQxYjYxYiIsImlhdCI6MTY0ODQzNzUwMiwiZXhwIjoxNjQ4NDU1NTAyfQ.EPFzHePqRM-lfIRYG9ghufOsCN6DZjUFrdZA8K0auR8', 
                'Content-Type': 'application/json'
            },
            data : data
        };
    
        axios(config)
        .then(function (response) {
            var errors = [];
            if (response.data.errors != undefined) {
                for (var i = 0; i < response.data.errors.length; i++) {
                    errors.push(response.data.errors[i].message)
                }   
                if (auth[3].value === auth[4].value)
                    setErrorsList(errors)
                else 
                    setErrorsList([...errors, "confirm password unmatched"])
            }
            if (response.data.success == true) {
                setCookieToClient(response.data.data, auth)
                location.replace("/")
            }
            console.log(response.data)
        })
        .catch(function (error) {
            
            console.log(error)
        });
    
    }
    

    return (
        <>
            <Head>
                <title>DAK - Đăng nhập</title>
                <link rel="stylesheet" href="/css/global.css"/>
            </Head>
            <div className={Styles["form__group"]}>
                <div className={Styles["form__group-left"]}>
                    { showPopup === 1 &&
                        <div className={Styles["form__control"]}>
                            <div className={Styles["form__control-heading"]}>
                                <h2 className={Styles["form__control-title"]}>Chào mừng đến với DAK</h2>
                            </div>
                            <div className={Styles["form__control-main"]}>
                                <div className={Styles["form__control-box"]}>
                                    <input type="text" className={`${Styles["form__control-input"]} login`} placeholder="Email"/>
                                </div>
                                <div className={Styles["form__control-box"]}>
                                    <input type={seePass.includes(1) ? "text" : "password"} className={`${Styles["form__control-input"]} login`} placeholder="Mật khẩu"/>
                                    <div onClick={()=> {handleEventSeePass(1)}}>
                                        { 
                                        seePass.includes(1) ?
                                            <FaEyeSlash className={Styles["form__control-icon-eye"]} />
                                        :   
                                            <FaEye className={Styles["form__control-icon-eye"]} />
                                        }
                                    </div>
                                </div>
                                <div className={Styles["form__control-option"]}>
                                    <div className={Styles["form__control-remember"]}>
                                        <input id="remember" className={`${Styles["form__control-remember-checkbox"]} login`} type="checkbox"/>
                                        <label htmlFor="remember" className={Styles["form__control-remember-title"]}>Ghi nhớ tài khoản</label>
                                    </div>
                                    <div className={Styles["form__control-forget"]}>
                                        <label className={Styles["form__control-forget-title"]} onClick={() => setShowPopupForget(!showPopupForget)}>Quên mật khẩu ?</label>
                                    </div>
                                </div>
                                <button className={Styles["form__control-btn"]}
                                    onClick={sendToLogin}
                                >Đăng nhập</button>
                                <ul className={Styles["form__control-social-list"]}>
                                    <li className={Styles["form__control-social-item"]}
                                        onClick={signInWithGoogle}
                                    >
                                        <FaGoogle className={Styles["form__control-social-item-icon"]}/>
                                    </li>
                                    <li className={Styles["form__control-social-item"]}
                                        onClick={signInWithFaceBook}
                                    >
                                        <FaFacebookF className={Styles["form__control-social-item-icon"]}/>
                                    </li>
                                    <li className={Styles["form__control-social-item"]}>
                                        <FaTwitter className={Styles["form__control-social-item-icon"]}/>
                                    </li>
                                    <li className={Styles["form__control-social-item"]}>
                                        <FaYoutube className={Styles["form__control-social-item-icon"]}/>
                                    </li>
                                    <li className={Styles["form__control-social-item"]}>
                                        <FaTiktok className={Styles["form__control-social-item-icon"]}/>
                                    </li>
                                </ul>
                                <p className={Styles["form__control-register-title"]}>
                                    Chưa có tài khoản ?
                                    <span className={Styles["form__control-register"]} onClick={() => setShowPopup(2)}>Đăng ký</span>
                                </p>
                            </div>
                        </div>
                    }
                    {showPopupForget && <PopupForgetPassword
                        handleClick={() => setShowPopupForget(!showPopupForget)} 
                        setShowPopupForget={setShowPopupForget}
                    />}
                    { showPopup === 2 &&
                        <div className={Styles["form__control"]}>
                            <div className={Styles["form__control-heading"]}>
                                <h2 className={Styles["form__control-title"]}>Chào mừng đến với DAK</h2>
                                <p className={Styles["form__control-login"]} onClick={() => setShowPopup(1)}>
                                    <FaAngleLeft className={Styles["form__control-login-icon"]} />
                                    Đăng nhập
                                </p>
                            </div>
                            <div className={Styles["form__control-main"]}>
                                <div className={Styles["form__control-box"]}>
                                    <input type="text" className={`${Styles["form__control-input"]} register`} placeholder="Họ và tên"/>
                                    {
                                       errorsList.length != 0 ?
                                            errorsList.includes("name must be longer than or equal to 1 characters") ?
                                            <span className={`${Styles["form__control-error-message"]} error`}>Name is required</span>
                                            : errorsList.includes("name must be shorter than or equal to 20 characters") ? 
                                                <span className={`${Styles["form__control-error-message"]} error`}>Name is too long</span>
                                                :  <span className={`${Styles["form__control-success-message"]} success`}><BsCheckLg/></span>
                                        : null
                                    }
                                </div>
                                <div className={Styles["form__control-box"]}>
                                    <input type="text" className={`${Styles["form__control-input"]} register`} placeholder="Tên đăng nhập"/>
                                    {
                                       errorsList.length != 0 ?
                                            errorsList.includes("username must be longer than or equal to 1 characters") ?
                                            <span className={`${Styles["form__control-error-message"]} error`}>Username is required</span>
                                            : errorsList.includes("username must be shorter than or equal to 20 characters") ? 
                                                <span className={`${Styles["form__control-error-message"]} error`}>Username is too long</span>
                                                :   errorsList.includes('Username already exist') ? <span className={`${Styles["form__control-error-message"]} error`}>Username already exist</span>
                                                    :   <span className={`${Styles["form__control-success-message"]} success`}><BsCheckLg/></span>
                                        : null
                                    }
                                </div>
                                <div className={Styles["form__control-box"]}>
                                    <input type="text" className={`${Styles["form__control-input"]} register`} placeholder="Email đăng nhập"/>
                                    {
                                       errorsList.length != 0 ?
                                            errorsList.includes("email must be an email") ?
                                            <span className={`${Styles["form__control-error-message"]} error`}>Invalid email</span>
                                            :  errorsList.includes('Email already exist') ? <span className={`${Styles["form__control-error-message"]} error`}>Email already exist</span>
                                                :   <span className={`${Styles["form__control-success-message"]} success`}><BsCheckLg/></span>
                                        : null
                                    }
                                </div>
                                <div className={Styles["form__control-box"]}>
                                    <input 
                                        type={seePass.includes(2) ? "text" : "password" }
                                        className={`${Styles["form__control-input"]} register`}
                                        placeholder="Mật khẩu"
                                    />
                                        
                                    <div onClick={() => {handleEventSeePass(2)}}>
                                        { 
                                            seePass.includes(2) ?
                                                <FaEyeSlash className={Styles["form__control-icon-eye"]} />
                                            :   
                                                <FaEye className={Styles["form__control-icon-eye"]} />
                                        }
                                    </div>
                                    {
                                       errorsList.length != 0 ?
                                            errorsList.includes("password must match ^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$ regular expression")
                                            ? <span className={`${Styles["form__control-error-message"]} error`}>Password must be at least 8 characters
                                                , includes 1 uppercase, 1 lowercase, a number and a special character</span>
                                            : <span className={`${Styles["form__control-success-message"]} success`}><BsCheckLg/></span>
                                        : null
                                    }
                                    
                                </div>
                                <div className={Styles["form__control-box"]}>
                                    <input 
                                        type={seePass.includes(3) ? "text" : "password" }
                                        className={`${Styles["form__control-input"]} register`}
                                        placeholder="Nhập lại mật khẩu"
                                    />
                                    <div onClick={() => {handleEventSeePass(3)}}>
                                        { 
                                        seePass.includes(3) ?
                                        <FaEyeSlash className={Styles["form__control-icon-eye"]} />
                                        :   
                                        <FaEye className={Styles["form__control-icon-eye"]} />
                                    }
                                    </div>
                                    {
                                       errorsList.length != 0 ?
                                            errorsList.includes("confirm password unmatched") || 
                                            errorsList.includes("password must match ^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$ regular expression") ? 
                                            <span className={`${Styles["form__control-error-message"]} error`}>Confirm password unmatched</span>
                                            : <span className={`${Styles["form__control-success-message"]} success`}><BsCheckLg/></span>
                                        : null
                                    }
                                </div>
                                <div className={Styles["form__control-box"]} >
                                    {toggleCalendar ? <Calendar onChange={setDate} value={date}/> : null}
                                </div>
                                <div className={Styles["form__control-box"]}>
                                    <input type="text" className={`${Styles["form__control-input"]} register`} disabled placeholder="Ngày sinh" value={handleSetDate(date.getDate(), date.getMonth(), date.getFullYear())}/>
                                    <div onClick={() => setToggleCalendar(!toggleCalendar)}>
                                        {
                                            toggleCalendar ? 
                                            <AiFillCaretUp className={Styles["form__control-icon-eye"]} />
                                            :
                                            <AiFillCaretDown className={Styles["form__control-icon-eye"]} />
                                        }
                                    </div>
                                    {
                                       errorsList.length != 0 ?
                                            errorsList.includes("birthday should not be empty") ? 
                                            <span className={`${Styles["form__control-error-message"]} error`}>Invalid date</span>
                                            : <span className={`${Styles["form__control-success-message"]} success`}><BsCheckLg/></span>
                                        : null
                                    }
                                </div>
                                <div className={Styles["form__control-box"]}>
                                    <input type="tel" className={`${Styles["form__control-input"]} register`} placeholder="Số điện thoại"/>
                                </div>
                                <div className={`${Styles["form__control-box"]} register`}>
                                    <label>Giới tính</label>

                                    <span onClick={() => setGender(1)} className={gender == 1 ? Styles["bordered"] : Styles["un-bordered"]}>Nam</span>
                                    <span onClick={() => setGender(2)} className={gender == 2 ? Styles["bordered"] : Styles["un-bordered"]}>Nữ</span>
                                    {
                                       errorsList.length != 0 ?
                                            errorsList.includes('sex must be a valid enum value') ? 
                                            <span className={`${Styles["form__control-error-message"]} error`}>Choose your gender</span>
                                            : <span className={`${Styles["form__control-success-message"]} success`}><BsCheckLg/></span>
                                        : null
                                    }
                                </div>
                                <div className={Styles["form__control-policy"]}>
                                    <input onClick={() => {setCheckBox(!licenseCheckBox)}} id="policy" className={`register ${Styles["form__control-policy-checkbox"]}`} type="checkbox" />
                                    <label htmlFor="policy" className={Styles["form__control-policy-title"]}>
                                        Tôi đồng ý với các
                                        <span className={Styles["form__control-policy-condition"]}>Điều khoản</span>
                                        {"&"}
                                        <span className={Styles["form__control-policy-condition"]}>Quyền riêng tư</span>
                                    </label>
                                </div>
                                {licenseCheckBox && <button 
                                    className={Styles["form__control-btn"]} 
                                    onClick={() => {
                                        sendToRegister(gender)
                                    }}
                                    
                                >Đăng ký</button>}
                            </div>
                        </div>
                    }
                    {showPopupVerify && <PopupVerify
                        handleClick={() => setShowPopupVerify(!showPopupVerify)} 
                        setShowPopupVerify={setShowPopupVerify}
                    />}
                </div>
                <div className={Styles["form__group-right"]}>
                    <Image src={ImageGif} alt="ImageGif"/>
                </div>
                <div className={Styles["form__group-right-res"]}>
                    <Image src={ImageGifRes} alt="ImageGif"/>
                </div>
            </div>
        </>
    )
}