import { useRef } from "react";
import Styles from "./PopupVerify.module.css";
import { FaRegTimesCircle } from "react-icons/fa";

export default function PopupVerify({handleClick, setShowPopupVerify}) {
    const popupVerify = useRef();
    const closePopupVerify = e => {
        if (popupVerify.current === e.target) {
            setShowPopupVerify(false);
        }
    };
    return (
        <>
            <div className={Styles["overlayPopupVerify"]} ref={popupVerify} onClick={closePopupVerify}>
                <div className={Styles["verify"]}>
                    <div className={Styles["verify__heading"]}>
                        <h3 className={Styles["verify__title"]}>Xác minh tài khoản</h3>
                        <FaRegTimesCircle className={Styles["verify__icon-close"]} onClick={handleClick}/>
                    </div>
                    <div className={Styles["verify__body"]}>
                        <p className={Styles["verify__body-heading"]}>
                            Mã xác minh đã được gửi đến email bạn đăng ký
                            <p className={Styles["verify__body-heading-email"]}>dangvietanh1706@gmail.com</p>
                        </p>
                        <div className={Styles["verify__body-form"]}>
                            <input className={Styles["verify__body-form-input"]} type="number" />
                            <input className={Styles["verify__body-form-input"]} type="number" />
                            <input className={Styles["verify__body-form-input"]} type="number" />
                            <input className={Styles["verify__body-form-input"]} type="number" />
                            <input className={Styles["verify__body-form-input"]} type="number" />
                            <input className={Styles["verify__body-form-input"]} type="number" />
                        </div>
                        <p className={Styles["verify__body-resend-box"]}>
                            Chưa nhận được mã ?
                            <span className={Styles["verify__body-resend"]}>Gửi lại mã xác minh</span>
                        </p>
                        <button className={Styles["btn-submit"]}>Xác minh</button>
                    </div>
                </div>
            </div>
        </>
    )
}