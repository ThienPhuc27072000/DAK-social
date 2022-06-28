import Styles from "./PopupForgetPassword.module.css";
import { FaRegTimesCircle, FaEye } from "react-icons/fa";
import { useRef, useState } from "react";

export default function PopupForgetPassword({handleClick, setShowPopupForget}) {
    const [showPopup, setShowPopup] = useState(1);
    const popupForget = useRef();
    const closePopupForget = e => {
        if (popupForget.current === e.target) {
            setShowPopupForget(false);
        }
    };
    return (
        <>
            <div className={Styles["overlayPopupForget"]} ref={popupForget} onClick={closePopupForget}>
                <div className={Styles["forget"]}>
                    <div className={Styles["forget__heading"]}>
                        <h3 className={Styles["forget__title"]}>Quên mật khẩu</h3>
                        <FaRegTimesCircle className={Styles["forget__icon-close"]} onClick={handleClick}/>
                    </div>
                    { showPopup === 1 &&
                        <div className={Styles["forget__body"]}>
                            <p className={Styles["forget__body-heading"]}>
                                Hãy nhập email mà bạn đã dùng để tạo tài khoản
                            </p>
                            <div className={Styles["forget__body-form"]}>
                                <input className={Styles["forget__body-form-input"]} type="email" placeholder="Nhập email tại đây" />
                            </div>
                            <p className={Styles["forget__body-resend-box"]}>
                                Chưa nhận được mã ?
                                <span className={Styles["forget__body-resend"]}>Gửi lại mã xác minh</span>
                            </p>
                            <button className={Styles["btn-submit"]} onClick={() => setShowPopup(2)}>Gửi mã xác minh</button>
                        </div>
                    }
                    { showPopup === 2 &&
                        <div className={`${Styles["forget__body"]} ${Styles["animation"]}`}>
                            <p className={`${Styles["forget__body-heading"]}`}>
                                Mã xác minh đã được gửi đến email bạn đăng ký
                                <p className={Styles["forget__body-heading-email"]}>dangvietanh1706@gmail.com</p>
                            </p>
                            <div className={Styles["forget__body-form"]}>
                                <input className={Styles["forget__body-form-input"]} type="number" />
                                <input className={Styles["forget__body-form-input"]} type="number" />
                                <input className={Styles["forget__body-form-input"]} type="number" />
                                <input className={Styles["forget__body-form-input"]} type="number" />
                                <input className={Styles["forget__body-form-input"]} type="number" />
                                <input className={Styles["forget__body-form-input"]} type="number" />
                            </div>
                            <p className={Styles["forget__body-resend-box"]}>
                                Chưa nhận được mã ?
                                <span className={Styles["forget__body-resend"]}>Gửi lại mã xác minh</span>
                            </p>
                            <button className={Styles["btn-submit"]} onClick={() => setShowPopup(3)}>Xác minh</button>
                        </div>
                    }
                    { showPopup === 3 &&
                        <div className={`${Styles["forget__body"]} ${Styles["animation"]}`}>
                            <div className={`${Styles["forget__body-form"]} ${Styles["pass"]}`}>
                                <div className={Styles["form__control-box"]}>
                                    <input type="password" className={Styles["form__control-input"]} placeholder="Mật khẩu"/>
                                    <FaEye className={Styles["form__control-icon-eye"]} />
                                </div>
                                <div className={Styles["form__control-box"]}>
                                    <input type="password" className={Styles["form__control-input"]} placeholder="Nhập lại mật khẩu"/>
                                    <FaEye className={Styles["form__control-icon-eye"]} />
                                </div>
                            </div>
                            <p className={Styles["forget__control-sub-title"]}>* Mật khẩu mới nên khác so với mật khẩu cũ</p>
                            <button className={Styles["btn-submit"]}>Lưu mật khẩu</button>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}