import Image from 'next/image'
import Logo from '../../public/images/logo.png'
import Link from 'next/link'
import Avatar from '../../public/images/logo.png'
import navhead from './Header.module.css'
import React, { useEffect, useState, useRef, useCallback } from 'react';
import MenuSetting from './Menusetting/MenuSetting'
import Notification from './Notification/Notification'
import { BsInstagram, BsTwitch } from 'react-icons/bs'
import { FaUserFriends, FaFacebookF, FaFacebookMessenger,
         FaTwitter, FaTiktok, FaYoutube, FaBars, FaWallet
        } from 'react-icons/fa'
import { GoBell  }from 'react-icons/go'
import { BiSearch } from 'react-icons/bi'
import Messenger from './Messenger/Messenger'
import Cookies from 'universal-cookie';


export default function Header () {
  const [openMenuSetting, setOpenMenuSetting] = useState(false);  
  const [openNoti, setOpenNoti] = useState(false);
  const [openMess, setOpenMess] = useState(false);
  const cookies = new Cookies();
  // const [loginInfo, setLoginInfo] = useState(cookies.get('info'))

  // Start handle show menu setting 
  const showMenuSetting = () => {
    setOpenMenuSetting(!openMenuSetting)
    setOpenNoti(false)
    setOpenMess(false)
  }
  // End handle show menu setting

  // Start handle show noti
  const showMenuNoti = () => {
    setOpenNoti(!openNoti)
    setOpenMenuSetting(false)
    setOpenMess(false)
  }
  // End handle show noti

  // Start handle show message
  const showMenuMess = () => {
    setOpenMess(!openMess)
    setOpenMenuSetting(false)
    setOpenNoti(false)
  }
  // End handle show messenger


  // Start handle show history search menu
  // const [openHistorySearch, setOpenHistorySearch] = useState(false);  

  // const historySearchRef = useRef();
  // const closeHistorySearch = e => {
  //     if (historySearchRef.current === e.target) {
  //         setOpenHistorySearch(true)
  //     }
  // };

  // const showHistorySearch = () => {
  //   setOpenHistorySearch(!openHistorySearch)
  //   setOpenNoti(false)
  //   setOpenMenuSetting(false)
  // }
  // End handle show history search menu

  return (
    <>
      <div className={navhead.nav}>

        {/* Logo */}
        <div className={navhead.nav_left}>
          <Link href ="/" >
            <div className={navhead.logo}>
              <Image src={Logo} alt="Logo"/>
            </div>
          </Link>  

          {/* Khung search */}
          <div className={navhead.search_box}>
            <input className={navhead.form_search} type="text" placeholder="Tìm kiếm trong DAK"

            /> 
            <div className={navhead.form_search_icon}>
              <BiSearch />
            </div>
          </div>
        </div>

        {/* Social network */}
        <div className={navhead.nav_middle}>
          <ul className={navhead.nav_middle_list}>
            <li className={navhead.nav_middle_item}>
              <FaUserFriends/>
            </li>
            <li className={navhead.nav_middle_item}>
              <FaFacebookF/>
            </li>
            <li className={navhead.nav_middle_item}>
              <FaTwitter/>
            </li>
            <li className={navhead.nav_middle_item}>
              <FaTiktok/>
            </li>
            <li className={navhead.nav_middle_item}>
              <FaYoutube/>
            </li>
            <li className={navhead.nav_middle_item}>
              <BsTwitch/>    
            </li>
            <li className={navhead.nav_middle_item}>
              <BsInstagram/>
            </li>
          </ul>
        </div>

        {/* Nav chức năng */}
        <div className={navhead.nav_right}>
          <ul className={navhead.nav_right_list}>
            <li className={navhead.nav_right_item}>
              <Link href='/wallet'><FaWallet className={navhead.css_icon_right}/></Link>
            </li>
            <li className={navhead.nav_right_item} onClick={showMenuMess}>
              <FaFacebookMessenger className={navhead.css_icon_right}/>
            </li>
            <li className={navhead.nav_right_item} onClick={showMenuNoti}>
              <GoBell className={navhead.css_icon_right}/>
              <span className={navhead.notification}><i className="fas fa-circle"></i></span>
            </li>
            <li className={navhead.nav_right_item} onClick={showMenuSetting}>
              <div className={navhead.avatar}>
                <Image className={navhead.radius} src={Avatar} alt="Avatar"/>
                {/* {loginInfo == undefined 
                  ?
                  <Image className={navhead.radius} src={Avatar} alt="Avatar"/> 
                  : 
                  <img className={Styles.avatar} src={loginInfo.avatar} alt="Avatar" />
                } */}
              </div>
              <span className={navhead.btn_setting}>
                <FaBars className={navhead.css_icon_right}/>
              </span>
            </li>    
          </ul>
          {openMenuSetting && <MenuSetting showMenuSetting={openMenuSetting} 
                                        setShowMenuSetting={setOpenMenuSetting} 
                                        // loginInfo={loginInfo}
                              />}
          {openNoti && <Notification showMenuNoti={openNoti} setShowMenuNoti={setOpenNoti} />}

          {openMess && <Messenger showMenuMess={openMess} setShowMenuMess={setOpenMess} />}
        </div>
      </div>
    </>
  );
} 



