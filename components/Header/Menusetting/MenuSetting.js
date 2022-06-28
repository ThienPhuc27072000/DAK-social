import Image from "next/image";
import Square from "../../../public/images/testAnhVuong.jpg";
import Link from "next/link";
import Styled from "./Menusetting.module.css";
import { useEffect, useState, useRef } from "react";
import { MdArrowBackIos, MdSettings, MdLogout } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import Cookies from "universal-cookie";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { BsFillGearFill } from "react-icons/bs";
import Avatar from "../../../public/images/avatar.jpg"

export default function MenuSetting({
  showMenuSetting,
  setShowMenuSetting,
  loginInfo,
}) {
  // Start handle transfer light-dark mode
  const [darkTheme, setDarkTheme] = useState(undefined);
  const [showMenuLanguage, setShowMenuLanguage] = useState(false);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === "dark");
  }, []);

  // End handle transfer light-dark mode

  const menuSettingRef = useRef();
  const closeMenuSetting = (e) => {
    if (menuSettingRef.current === e.target) {
      setShowMenuSetting(false);
    }
  };

//   const handleLogoutInfo = () => {
//     const cookies = new Cookies();
//     cookies.remove("info");
//     if (loginInfo) window.location.replace("http://localhost:3000");
//     else window.location.replace("http://localhost:3000/signinup");
//   };

  return (
    <>
      <div
        className={Styled.overlayDropdownMenu}
        ref={menuSettingRef}
        onClick={closeMenuSetting}
      >
        <div className={Styled.dropDownMenu}>
          <div className={Styled.menu_setting}>
            {/* {loginInfo == undefined ? null : ( */}
              <Link href="/profile">
                <a>
                  <div className={Styled.goTo_profile}>
                    <div className={Styled.avatar_user}>
                      {/* <img className={Styled.avatar} src={loginInfo.avatar} /> */}
                      <Image className={Styled.avatar} src={Avatar}/>
                    </div>
                    <div className={Styled.info_user}>
                      {/* <p className={Styled.name_user}>{loginInfo.name}</p> */}
                      <p className={Styled.name_user}>Nguyễn Thiên Phúc</p>
                      <span className={Styled.sub_name_user}>
                        Xem trang cá nhân của bạn
                      </span>
                    </div>
                  </div>
                </a>
              </Link>
            {/* )} */}
            <div className={Styled.features}>
              <ul className={Styled.list_feature}>
                <li className={Styled.feature_item}>
                  <Link href="">
                    <a>Chuyển đổi giao diện</a>
                  </Link>
                  <div>
                    <form action="#">
                      <label className={Styled.switch}>
                        <input
                          type="checkbox"
                          checked={darkTheme}
                          onChange={handleToggle}
                        />
                        <span className={Styled.slider}></span>
                      </label>
                    </form>
                  </div>
                </li>
                <li
                  className={Styled.feature_item}
                  onClick={() => setShowMenuLanguage(!showMenuLanguage)}
                >
                  <Link href="">
                    <a>Cài đặt ngôn ngữ</a>
                  </Link>
                  <AiOutlineGlobal className={Styled.editReactIcon} />
                </li>
                {showMenuLanguage && (
                  <div
                    className={Styled.dropDownMenu}
                    style={{ top: 0, right: 0 }}
                  >
                    <div className={Styled.menu_setting}>
                      <div className={Styled.goTo_profile}>
                        <p
                          className={Styled.goBackMainMenu}
                          onClick={() => setShowMenuLanguage(!showMenuLanguage)}
                        >
                          <span
                            style={{ marginRight: "10px", display: "flex" }}
                          >
                            <MdArrowBackIos />
                          </span>
                          Go back
                        </p>
                      </div>
                      <div className={Styled.features}>
                        <ul className={Styled.list_feature}>
                          <li className={Styled.feature_item}>
                            <Link href="">
                              <a>English</a>
                            </Link>
                          </li>
                          <li className={Styled.feature_item}>
                            <Link href="">
                              <a>Vietnamese</a>
                            </Link>
                          </li>
                          <li className={Styled.feature_item}>
                            <Link href="">
                              <a>India</a>
                            </Link>
                          </li>
                          <li className={Styled.feature_item}>
                            <Link href="">
                              <a>America</a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                <li className={Styled.feature_item}>
                  <Link href="">
                    <a>Cài đặt và quyền riêng tư</a>
                  </Link>
                  <MdSettings className={Styled.editReactIcon} />
                </li>
                {/* {loginInfo == undefined ? null : (
                  <li className={Styled.feature_item}>
                    <Link href="">
                      <a>Cài đặt và quyền riêng tư</a>
                    </Link>
                    <BsFillGearFill className={Styled.menusetting_icon} />
                  </li>
                )} */}
                {/* <li className={Styled.feature_item} onClick={handleLogoutInfo}>
                  <Link href="">
                    <a>{loginInfo == undefined ? "Đăng nhập" : "Đăng xuất"}</a>
                  </Link>
                  {loginInfo == undefined ? <FiLogIn /> : <FiLogOut />}
                </li> */}
                <li className={Styled.feature_item}>
                  <Link href="/signinup">
                    <a>Đăng xuất</a>
                  </Link>
                  <MdLogout className={Styled.editReactIcon} />
                </li>
              </ul>
            </div>
            <div className={Styled.copyright_menusetting}>
              <Link href="">
                <a>Quyền riêng tư · Điều khoản · Quảng cáo </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
