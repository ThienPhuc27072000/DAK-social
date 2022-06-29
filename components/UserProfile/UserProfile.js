import { siteTitle } from "../Layout/Layout";
import Styled from "./UserProfile.module.css";
import Image from "next/image";
import Avatar from "../../public/images/avatar.jpg";
import Head from "next/head";
import BgImg from "../../public/images/bgImgProfile.jpg";
import React, { useState, useRef } from "react";
import { TiUserAdd } from "react-icons/ti";
import { FaFacebookMessenger, FaEdit } from "react-icons/fa";
import PopupStatistic from "./PopupStatistic/PopupStatistic";
import { ImCheckmark } from "react-icons/im";
import { AiOutlinePlusCircle } from "react-icons/ai";
import PopupEditProfile from "./PopupEditProfile/PopupEditProfile";

export default function UserProfile() {
  const [showPopupStatistic, setShowPopupStatistic] = useState(false);
  const openStatistic = () => {
    setShowPopupStatistic((prev) => !prev);
  };

  const [showEditProfile, setShowEditProfile] = useState(false);

  return (
    <>
      <Head>
        <title>{siteTitle} - Profile</title>
      </Head>
      <div className={Styled.themeProfile}>
        <div className={Styled.profileArea}>
          <div className={Styled.profileImageBackground}>
            <Image src={BgImg} alt="Ảnh bìa" />
          </div>
          <div className={Styled.infoProfile}>
            <div className={Styled.avatarProfile}>
              <Image className={Styled.imgAvatar} src={Avatar} alt="Avatar" />
            </div>
            <div className={Styled.textProfile}>
              <div className={Styled.mainInfo}>
                <h1 className={Styled.nameUser}>
                  Nguyễn Thiên Phúc
                  {/* <ImCheckmark /> */}
                </h1>
                <p className={Styled.captionUser}>
                  Hi, mình là Phúc. Nice to meet you. Hi, mình là Phúc. Nice to
                  meet you. Hi, mình là Phúc. Nice to meet you.
                </p>
                <div className={Styled.statisticInfo} onClick={openStatistic}>
                  <p className={Styled.contentSatistic}>
                    {" "}
                    Vote
                    <span className={Styled.quantitySatistic}>2000</span>
                  </p>
                  <p className={Styled.contentSatistic}>
                    {" "}
                    NFT
                    <span className={Styled.quantitySatistic}>1500</span>
                  </p>
                  <p className={Styled.contentSatistic}>
                    {" "}
                    Following
                    <span className={Styled.quantitySatistic}>100</span>
                  </p>
                  <p className={Styled.contentSatistic}>
                    {" "}
                    Follower
                    <span className={Styled.quantitySatistic}>500</span>
                  </p>
                </div>
              </div>
              <ul className={Styled.profile__action}>
                <li
                  className={Styled.profile__item}
                  onClick={() => setShowEditProfile(!showEditProfile)}
                >
                  {/* <FaFacebookMessenger className={Styled.profile__fixIcon} 
                                    style={{color: '#e40085'}}
                                />
                                <span className={Styled.profile__item_icon}>Messenger</span> */}
                  <FaEdit className={Styled.profile__fixIcon} />
                  <span className={Styled.profile__item_icon}>Chỉnh sửa</span>
                </li>
                {/* Có css inline ở nút tạo tin  */}
                <li
                  className={Styled.profile__item}
                  style={{ backgroundColor: "var(--main-color)" }}
                >
                  {/* <TiUserAdd className={Styled.profile__fixIcon} 
                                    style={{color: 'yellow'}}
                                />
                                <span className={Styled.profile__item_icon}>Follow</span> */}
                  <AiOutlinePlusCircle
                    className={Styled.profile__fixIcon}
                    style={{ color: "black" }}
                  />
                  <span
                    className={Styled.profile__item_icon}
                    style={{ color: "black" }}
                  >
                    Tạo tin
                  </span>
                </li>
                {/* <li className={Styled.profile__follow}>
                                <i className="fa-solid fa-circle-check"></i>
                                Đã theo dõi
                            </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <PopupStatistic
        showModal={showPopupStatistic}
        setShowModal={setShowPopupStatistic}
      />
      {showEditProfile && (
        <PopupEditProfile
          showEditProfile={showEditProfile}
          setShowEditProfile={setShowEditProfile}
        />
      )}
    </>
  );
}
