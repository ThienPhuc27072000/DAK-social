import Styles from "./PopupEditProfile.module.css";
import {
  FaRegTimesCircle,
  FaUserCircle,
  FaEnvelope,
  FaCalendarAlt,
  FaUser,
  FaAngleLeft,
  FaUpload,
  FaPlus,
  FaSearch,
  FaPlusCircle,
} from "react-icons/fa";
import Image from "next/image";
import Picture from "/public/images/logo.png";
import Background from "/public/images/bg.jpg";
import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-calendar/dist/Calendar.css";

export default function PopupEditProfile({
  showEditProfile,
  setShowEditProfile,
}) {
  const [showPopup, setShowPopup] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [showPopupRelationship, setShowPopupRelationship] = useState(false);
  const [showPopupFamily, setShowPopupFamily] = useState(false);
  const popupEditProfileRef = useRef();

  const closePopupChat = (e) => {
    if (popupEditProfileRef.current === e.target) {
      setShowEditProfile(false);
    }
  };

  const adjustDatePicker = () => {
    window.document.querySelector(".react-datepicker__triangle").style =
      "left: 215px";
    window.document.querySelector(".react-datepicker").style = "right: -25px";
  };

  return (
    <>
      <div
        className={Styles["overlayPopupEditProfile"]}
        ref={popupEditProfileRef}
        onClick={closePopupChat}
      >
        <div className={Styles["editprofile"]}>
          <div className={Styles["editprofile__heading"]}>
            <h3 className={Styles["editprofile__title"]}>
              Tùy chỉnh trang cá nhân
            </h3>
            <FaRegTimesCircle
              className={Styles["editprofile__icon-close"]}
              onClick={() => setShowEditProfile(false)}
            />
          </div>

          {/* Main Popup */}
          {showPopup == 1 && (
            <div className={Styles["editprofile__list"]}>
              {/* Avatar */}
              <div className={Styles["editprofile__item"]}>
                <div className={Styles["editprofile__item-heading"]}>
                  <h4 className={Styles["editprofile__item-heading-title"]}>
                    Ảnh đại diện
                  </h4>
                  <span
                    className={Styles["editprofile__item-heading-edit"]}
                    onClick={() => setShowPopup(2)}
                  >
                    Chỉnh sửa
                  </span>
                </div>
                <div className={Styles["editprofile__item-avatar"]}>
                  <Image src={Picture} alt="Image" />
                </div>
              </div>
              {/* Background Image */}
              <div className={Styles["editprofile__item"]}>
                <div className={Styles["editprofile__item-heading"]}>
                  <h4 className={Styles["editprofile__item-heading-title"]}>
                    Ảnh nền
                  </h4>
                  <span
                    className={Styles["editprofile__item-heading-edit"]}
                    onClick={() => setShowPopup(3)}
                  >
                    Chỉnh sửa
                  </span>
                </div>
                <div className={Styles["editprofile__item-background"]}>
                  <Image src={Background} alt="Background" />
                </div>
              </div>
              {/* Description */}
              <div className={Styles["editprofile__item"]}>
                <div className={Styles["editprofile__item-heading"]}>
                  <h4 className={Styles["editprofile__item-heading-title"]}>
                    Mô tả bản thân
                  </h4>
                  <span
                    className={Styles["editprofile__item-heading-edit"]}
                    onClick={() => setShowPopup(4)}
                  >
                    Chỉnh sửa
                  </span>
                </div>
                <p className={Styles["editprofile__item-des"]}>
                  Tôi tên là Nguyễn Văn A sinh năm 1998, hiện đang sinh sống và
                  làm việc tại Thành phố Hồ Chí Minh.
                </p>
              </div>
              {/* Info */}
              <div className={Styles["editprofile__item"]}>
                <div className={Styles["editprofile__item-heading"]}>
                  <h4 className={Styles["editprofile__item-heading-title"]}>
                    Cài đặt cơ bản
                  </h4>
                  <span
                    className={Styles["editprofile__item-heading-edit"]}
                    onClick={() => {
                      setShowPopup(5);
                    }}
                  >
                    Chỉnh sửa
                  </span>
                </div>
                <ul className={Styles["editprofile__list-info"]}>
                  <li className={Styles["editprofile__item-info"]}>
                    <FaUserCircle
                      className={Styles["editprofile__item-info-icon"]}
                    />
                    <span className={Styles["editprofile__item-info-title"]}>
                      Nguyễn Văn A
                    </span>
                  </li>
                  <li className={Styles["editprofile__item-info"]}>
                    <FaEnvelope
                      className={Styles["editprofile__item-info-icon"]}
                    />
                    <span className={Styles["editprofile__item-info-title"]}>
                      nguyenvana@gmail.com
                    </span>
                  </li>
                  <li className={Styles["editprofile__item-info"]}>
                    <FaCalendarAlt
                      className={Styles["editprofile__item-info-icon"]}
                    />
                    <span className={Styles["editprofile__item-info-title"]}>
                      22/03/1998
                    </span>
                  </li>
                  <li className={Styles["editprofile__item-info"]}>
                    <FaUser className={Styles["editprofile__item-info-icon"]} />
                    <span className={Styles["editprofile__item-info-title"]}>
                      Nam
                    </span>
                  </li>
                </ul>
              </div>
              {/* Block */}
              <div className={Styles["editprofile__item"]}>
                <div className={Styles["editprofile__item-heading"]}>
                  <h4 className={Styles["editprofile__item-heading-title"]}>
                    Tài khoản đã chặn
                  </h4>
                  <span
                    className={Styles["editprofile__item-heading-edit"]}
                    onClick={() => setShowPopup(6)}
                  >
                    Chi tiết
                  </span>
                </div>
                <p className={Styles["editprofile__item-count-block"]}>
                  Có
                  <span className={Styles["editprofile__item-count"]}>1</span>
                  tài khoản đang bị chặn
                </p>
              </div>
              {/* Delete Acount */}
              <div className={Styles["editprofile__item"]}>
                <div className={Styles["editprofile__item-heading"]}>
                  <h4 className={Styles["editprofile__item-heading-title"]}>
                    Xóa tài khoản cá nhân
                  </h4>
                  <span
                    className={Styles["editprofile__item-heading-edit"]}
                    onClick={() => setShowPopup(7)}
                  >
                    Xóa
                  </span>
                </div>
              </div>
              {/* Family */}
              <div className={Styles["editprofile__item"]}>
                <div className={Styles["editprofile__item-heading"]}>
                  <h4 className={Styles["editprofile__item-heading-title"]}>
                    Gia đình và mối quan hệ
                  </h4>
                  <span
                    className={Styles["editprofile__item-heading-edit"]}
                    onClick={() => setShowPopup(8)}
                  >
                    Chi tiết
                  </span>
                </div>
                <p className={Styles["editprofile__item-family"]}>Gia đình</p>
                <p className={Styles["editprofile__item-relationship"]}>
                  Mối quan hệ
                </p>
              </div>
            </div>
          )}

          {/* Popup Upload Image */}
          {showPopup == 2 && (
            <div className={Styles["editprofile__upload-image"]}>
              <div
                className={Styles["editprofile__upload-heading"]}
                onClick={() => setShowPopup(1)}
              >
                <FaAngleLeft
                  className={Styles["editprofile__upload-heading-icon"]}
                />
                <h4 className={Styles["editprofile__upload-heading-title"]}>
                  Cập nhật ảnh đại diện
                </h4>
              </div>
              <div className={Styles["editprofile__upload-box"]}>
                <div
                  className={Styles["editprofile__upload-left"]}
                  onClick={() => setShowPopup(21)}
                >
                  <FaPlus className={Styles["editprofile__upload-icon"]} />
                  <span className={Styles["editprofile__upload-title"]}>
                    Chọn ảnh từ hệ thống
                  </span>
                </div>
                <div className={Styles["editprofile__upload-right"]}>
                  <FaUpload className={Styles["editprofile__upload-icon"]} />
                  <span className={Styles["editprofile__upload-title"]}>
                    Chọn ảnh từ máy tính
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Popup ảnh từ hệ thống */}
          {showPopup == 21 && (
            <div className={Styles["editprofile__upload-image"]}>
              <div className={Styles["editprofile__upload-heading"]}>
                <FaAngleLeft
                  className={Styles["editprofile__upload-heading-icon"]}
                  onClick={() => setShowPopup(2)}
                />
                <h4 className={Styles["editprofile__upload-heading-title"]}>
                  Ảnh từ hệ thống
                </h4>
              </div>
              <div className={Styles["editprofile__image-list"]}>
                <div
                  className={Styles["editprofile__image-item"]}
                  onClick={() => setShowPopup(22)}
                >
                  <Image src={Background} alt="Image" />
                </div>
                <div
                  className={Styles["editprofile__image-item"]}
                  onClick={() => setShowPopup(22)}
                >
                  <Image src={Background} alt="Image" />
                </div>
                <div
                  className={Styles["editprofile__image-item"]}
                  onClick={() => setShowPopup(22)}
                >
                  <Image src={Background} alt="Image" />
                </div>
                <div
                  className={Styles["editprofile__image-item"]}
                  onClick={() => setShowPopup(22)}
                >
                  <Image src={Background} alt="Image" />
                </div>
                <div
                  className={Styles["editprofile__image-item"]}
                  onClick={() => setShowPopup(22)}
                >
                  <Image src={Background} alt="Image" />
                </div>
                <div
                  className={Styles["editprofile__image-item"]}
                  onClick={() => setShowPopup(22)}
                >
                  <Image src={Background} alt="Image" />
                </div>
                <div
                  className={Styles["editprofile__image-item"]}
                  onClick={() => setShowPopup(22)}
                >
                  <Image src={Background} alt="Image" />
                </div>
              </div>
            </div>
          )}

          {/* Popup Selected Image */}
          {showPopup == 22 && (
            <div className={Styles["editprofile__upload-image"]}>
              <div className={Styles["editprofile__upload-heading"]}>
                <FaAngleLeft
                  className={Styles["editprofile__upload-heading-icon"]}
                  onClick={() => setShowPopup(21)}
                />
                <h4 className={Styles["editprofile__upload-heading-title"]}>
                  Cập nhật ảnh đại diện
                </h4>
              </div>
              <div className={Styles["editprofile__image-selected"]}>
                <Image src={Background} alt="Image" />
              </div>
              <button className={Styles["btn-submit"]}>Lưu</button>
            </div>
          )}

          {/* Popup Upload Image Background */}
          {showPopup == 3 && (
            <div className={Styles["editprofile__upload-image"]}>
              <div
                className={Styles["editprofile__upload-heading"]}
                onClick={() => setShowPopup(1)}
              >
                <FaAngleLeft
                  className={Styles["editprofile__upload-heading-icon"]}
                />
                <h4 className={Styles["editprofile__upload-heading-title"]}>
                  Cập nhật ảnh bìa
                </h4>
              </div>
              <div className={Styles["editprofile__upload-box"]}>
                <div
                  className={Styles["editprofile__upload-left"]}
                  onClick={() => setShowPopup(31)}
                >
                  <FaPlus className={Styles["editprofile__upload-icon"]} />
                  <span className={Styles["editprofile__upload-title"]}>
                    Chọn ảnh từ hệ thống
                  </span>
                </div>
                <div className={Styles["editprofile__upload-right"]}>
                  <FaUpload className={Styles["editprofile__upload-icon"]} />
                  <span className={Styles["editprofile__upload-title"]}>
                    Chọn ảnh từ máy tính
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Popup ảnh từ hệ thống */}
          {showPopup == 31 && (
            <div className={Styles["editprofile__upload-image"]}>
              <div
                className={Styles["editprofile__upload-heading"]}
                onClick={() => setShowPopup(3)}
              >
                <FaAngleLeft
                  className={Styles["editprofile__upload-heading-icon"]}
                />
                <h4 className={Styles["editprofile__upload-heading-title"]}>
                  Ảnh bìa từ hệ thống
                </h4>
              </div>
              <div
                className={`${Styles["editprofile__image-list"]} ${Styles["background"]}`}
              >
                <div
                  className={Styles["editprofile__image-item"]}
                  onClick={() => setShowPopup(32)}
                >
                  <Image src={Background} alt="Image" />
                </div>
                <div
                  className={Styles["editprofile__image-item"]}
                  onClick={() => setShowPopup(32)}
                >
                  <Image src={Background} alt="Image" />
                </div>
                <div
                  className={Styles["editprofile__image-item"]}
                  onClick={() => setShowPopup(32)}
                >
                  <Image src={Background} alt="Image" />
                </div>
                <div
                  className={Styles["editprofile__image-item"]}
                  onClick={() => setShowPopup(32)}
                >
                  <Image src={Background} alt="Image" />
                </div>
                <div
                  className={Styles["editprofile__image-item"]}
                  onClick={() => setShowPopup(32)}
                >
                  <Image src={Background} alt="Image" />
                </div>
                <div
                  className={Styles["editprofile__image-item"]}
                  onClick={() => setShowPopup(32)}
                >
                  <Image src={Background} alt="Image" />
                </div>
                <div
                  className={Styles["editprofile__image-item"]}
                  onClick={() => setShowPopup(32)}
                >
                  <Image src={Background} alt="Image" />
                </div>
              </div>
            </div>
          )}

          {/* Popup Selected Image Background */}
          {showPopup == 32 && (
            <div className={`${Styles["editprofile__upload-image"]}`}>
              <div
                className={Styles["editprofile__upload-heading"]}
                onClick={() => setShowPopup(31)}
              >
                <FaAngleLeft
                  className={Styles["editprofile__upload-heading-icon"]}
                />
                <h4 className={Styles["editprofile__upload-heading-title"]}>
                  Cập nhật ảnh bìa
                </h4>
              </div>
              <div
                className={`${Styles["editprofile__image-selected"]} ${Styles["background"]}`}
              >
                <Image src={Background} alt="Image" />
              </div>
              <button className={Styles["btn-submit"]}>Lưu</button>
            </div>
          )}

          {/* Popup Desciption */}
          {showPopup == 4 && (
            <div className={`${Styles["editprofile__upload-image"]}`}>
              <div
                className={Styles["editprofile__upload-heading"]}
                onClick={() => setShowPopup(1)}
              >
                <FaAngleLeft
                  className={Styles["editprofile__upload-heading-icon"]}
                />
                <h4 className={Styles["editprofile__upload-heading-title"]}>
                  Cập nhật mô tả bản thân
                </h4>
              </div>
              <div className={Styles["editprofile__box-des"]}>
                <textarea
                  placeholder="Nhập mô tả bản thân..."
                  className={Styles["editprofile__des"]}
                ></textarea>
              </div>
              <button className={Styles["btn-submit"]}>Lưu</button>
            </div>
          )}

          {/* Popup Info */}
          {showPopup == 5 && (
            <div className={`${Styles["editprofile__upload-image"]}`}>
              <div
                className={Styles["editprofile__upload-heading"]}
                onClick={() => setShowPopup(1)}
              >
                <FaAngleLeft
                  className={Styles["editprofile__upload-heading-icon"]}
                />
                <h4 className={Styles["editprofile__upload-heading-title"]}>
                  Chỉnh sửa thông tin cá nhân
                </h4>
              </div>
              <div className={Styles["editprofile__info"]}>
                <div className={Styles["editprofile__form-control"]}>
                  <label className={Styles["editprofile__info-title"]}>
                    Họ và tên
                  </label>
                  <input
                    className={Styles["editprofile__form-input"]}
                    placeholder="Nhập họ và tên"
                    type="text"
                  />
                </div>
                <div className={Styles["editprofile__form-control"]}>
                  <label className={Styles["editprofile__info-title"]}>
                    Tên tài khoản
                  </label>
                  <input
                    className={Styles["editprofile__form-input"]}
                    placeholder="Nhập tên tài khoản"
                    type="text"
                  />
                </div>
                <div className={Styles["editprofile__form-control"]}>
                  <label className={Styles["editprofile__info-title"]}>
                    Email
                  </label>
                  <input
                    className={Styles["editprofile__form-input"]}
                    placeholder="Nhập email"
                    type="text"
                  />
                </div>
                <div
                  className={Styles["editprofile__form-control"]}
                  onClick={() => adjustDatePicker()}
                >
                  <label className={Styles["editprofile__info-title"]}>
                    Ngày sinh
                  </label>
                  <DatePicker
                    dayPlaceholder="--"
                    monthPlaceholder="--"
                    className={`${Styles["editprofile__form-input"]} ${Styles["dateTime"]}`}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                <div className={Styles["editprofile__form-control"]}>
                  <label className={Styles["editprofile__info-title"]}>
                    Giới tính
                  </label>
                  <ul className={Styles["editprofile__info-gender"]}>
                    <li className={Styles["editprofile__info-gender-item"]}>
                      <input
                        type="radio"
                        id="male"
                        className={Styles["editprofile__info-item-radio"]}
                        name="gender"
                      />
                      <label
                        className={Styles["editprofile__info-item-title"]}
                        htmlFor="male"
                      >
                        Nam
                      </label>
                    </li>
                    <li className={Styles["editprofile__info-gender-item"]}>
                      <input
                        type="radio"
                        id="famale"
                        className={Styles["editprofile__info-item-radio"]}
                        name="gender"
                      />
                      <label
                        className={Styles["editprofile__info-item-title"]}
                        htmlFor="famale"
                      >
                        Nữ
                      </label>
                    </li>
                    <li className={Styles["editprofile__info-gender-item"]}>
                      <input
                        type="radio"
                        id="other"
                        className={Styles["editprofile__info-item-radio"]}
                        name="gender"
                      />
                      <label
                        className={Styles["editprofile__info-item-title"]}
                        htmlFor="other"
                      >
                        Khác
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <button className={Styles["btn-submit"]}>Lưu</button>
            </div>
          )}

          {/* Popup Info */}
          {showPopup == 6 && (
            <div className={`${Styles["editprofile__upload-image"]}`}>
              <div
                className={Styles["editprofile__upload-heading"]}
                onClick={() => setShowPopup(1)}
              >
                <FaAngleLeft
                  className={Styles["editprofile__upload-heading-icon"]}
                />
                <h4 className={Styles["editprofile__upload-heading-title"]}>
                  Tài khoản đã chặn
                </h4>
              </div>
              <div className={Styles["editprofile__block"]}>
                <div className={Styles["editprofile__block-search"]}>
                  <input
                    type="text"
                    placeholder="Tìm kiếm"
                    className={Styles["editprofile__block-search-input"]}
                  />
                  <FaSearch
                    className={Styles["editprofile__block-search-icon"]}
                  />
                </div>
                <ul className={Styles["editprofile__block-list"]}>
                  <li className={Styles["editprofile__block-item"]}>
                    <label
                      htmlFor="blockitem"
                      className={Styles["editprofile__block-name"]}
                    >
                      Tuyết Mai
                    </label>
                    <input
                      type="checkbox"
                      id="blockitem"
                      name="block"
                      className={Styles["editprofile__block-checkbox"]}
                    />
                  </li>
                  <li className={Styles["editprofile__block-item"]}>
                    <label
                      htmlFor="blockitem"
                      className={Styles["editprofile__block-name"]}
                    >
                      Thiên Phúc
                    </label>
                    <input
                      type="checkbox"
                      id="blockitem"
                      name="block"
                      className={Styles["editprofile__block-checkbox"]}
                    />
                  </li>
                  <li className={Styles["editprofile__block-item"]}>
                    <label
                      htmlFor="blockitem"
                      className={Styles["editprofile__block-name"]}
                    >
                      Hùng
                    </label>
                    <input
                      type="checkbox"
                      id="blockitem"
                      name="block"
                      className={Styles["editprofile__block-checkbox"]}
                    />
                  </li>
                  <li className={Styles["editprofile__block-item"]}>
                    <label
                      htmlFor="blockitem"
                      className={Styles["editprofile__block-name"]}
                    >
                      Tuyết Mai
                    </label>
                    <input
                      type="checkbox"
                      id="blockitem"
                      name="block"
                      className={Styles["editprofile__block-checkbox"]}
                    />
                  </li>
                  <li className={Styles["editprofile__block-item"]}>
                    <label
                      htmlFor="blockitem"
                      className={Styles["editprofile__block-name"]}
                    >
                      Tuyết Mai
                    </label>
                    <input
                      type="checkbox"
                      id="blockitem"
                      name="block"
                      className={Styles["editprofile__block-checkbox"]}
                    />
                  </li>
                </ul>
                <p className={Styles["editprofile__count-block"]}>
                  Đã chọn
                  <span className={Styles["editprofile__count-number"]}>0</span>
                </p>
              </div>
              <button className={Styles["btn-submit"]}>Bỏ chặn</button>
            </div>
          )}

          {/* Popup delete account */}
          {showPopup == 7 && (
            <div className={Styles["editprofile__upload-image"]}>
              <div
                className={Styles["editprofile__upload-heading"]}
                onClick={() => setShowPopup(1)}
              >
                <FaAngleLeft
                  className={Styles["editprofile__upload-heading-icon"]}
                />
                <h4 className={Styles["editprofile__upload-heading-title"]}>
                  Xác nhận xóa tài khoản
                </h4>
              </div>
              <div className={Styles["editprofile__delete"]}>
                <div className={Styles["editprofile__delete-btn"]}>
                  Quay lại
                </div>
                <div
                  className={`${Styles["editprofile__delete-btn"]} ${Styles["delete"]}`}
                >
                  Xóa
                </div>
              </div>
            </div>
          )}

          {/* Popup Family */}
          {showPopup == 8 && (
            <div className={`${Styles["editprofile__upload-image"]}`}>
              <div
                className={Styles["editprofile__upload-heading"]}
                onClick={() => setShowPopup(1)}
              >
                <FaAngleLeft
                  className={Styles["editprofile__upload-heading-icon"]}
                />
                <h4 className={Styles["editprofile__upload-heading-title"]}>
                  Gia đình và mối quan hệ
                </h4>
              </div>
              <div className={Styles["editprofile__relationship-list"]}>
                <div className={Styles["editprofile__relationship-item"]}>
                  <h5
                    className={Styles["editprofile__relationship-item-title"]}
                  >
                    Mối quan hệ
                  </h5>
                  <div
                    className={Styles["editprofile__relationship-item-body"]}
                    onClick={() =>
                      setShowPopupRelationship(!showPopupRelationship)
                    }
                  >
                    <FaPlusCircle
                      className={Styles["editprofile__relationship-item-icon"]}
                    />
                    <p
                      className={
                        Styles["editprofile__relationship-item-content"]
                      }
                    >
                      Thêm mối quan hệ
                    </p>
                  </div>
                  {showPopupRelationship && (
                    <div
                      className={
                        Styles["editprofile__relationship-selected-box"]
                      }
                    >
                      <select
                        className={Styles["editprofile__relationship-selected"]}
                        name="relationship"
                        id="relationship"
                      >
                        <option
                          className={Styles["editprofile__relationship-option"]}
                          value="0"
                        >
                          Mối quan hệ
                        </option>
                        <option
                          className={Styles["editprofile__relationship-option"]}
                          value="1"
                        >
                          Độc thân
                        </option>
                        <option
                          className={Styles["editprofile__relationship-option"]}
                          value="2"
                        >
                          Kết hôn
                        </option>
                        <option
                          className={Styles["editprofile__relationship-option"]}
                          value="3"
                        >
                          Đang trong mối quan hệ
                        </option>
                        <option
                          className={Styles["editprofile__relationship-option"]}
                          value="4"
                        >
                          Đã li dị
                        </option>
                        <option
                          className={Styles["editprofile__relationship-option"]}
                          value="5"
                        >
                          Góa phụ
                        </option>
                      </select>
                      <label
                        htmlFor="private"
                        className={Styles["editprofile__relationship-title"]}
                      >
                        Riêng tư
                      </label>
                      <select
                        className={Styles["editprofile__relationship-selected"]}
                        name="private"
                        id="private"
                      >
                        <option
                          className={Styles["editprofile__relationship-option"]}
                          value="0"
                        >
                          ...
                        </option>
                        <option
                          className={Styles["editprofile__relationship-option"]}
                          value="1"
                        >
                          Mọi người
                        </option>
                        <option
                          className={Styles["editprofile__relationship-option"]}
                          value="2"
                        >
                          Chỉ mình tôi
                        </option>
                      </select>
                    </div>
                  )}
                </div>
                <div className={Styles["editprofile__relationship-item"]}>
                  <h5
                    className={Styles["editprofile__relationship-item-title"]}
                  >
                    Gia đình
                  </h5>
                  <div
                    className={Styles["editprofile__relationship-item-body"]}
                    onClick={() => setShowPopupFamily(!showPopupFamily)}
                  >
                    <FaPlusCircle
                      className={Styles["editprofile__relationship-item-icon"]}
                    />
                    <p
                      className={
                        Styles["editprofile__relationship-item-content"]
                      }
                    >
                      Thêm thành viên trong gia đình
                    </p>
                  </div>
                  {showPopupFamily && (
                    <div
                      className={
                        Styles["editprofile__relationship-selected-box"]
                      }
                    >
                      <div
                        className={
                          Styles["editprofile__relationship-search-box"]
                        }
                      >
                        <input
                          type="text"
                          className={
                            Styles["editprofile__relationship-search-input"]
                          }
                          placeholder="Tìm kiếm"
                        />
                        <FaSearch
                          className={
                            Styles["editprofile__relationship-search-icon"]
                          }
                        />
                      </div>
                      <label
                        htmlFor="private"
                        className={Styles["editprofile__relationship-title"]}
                      >
                        Vai trò
                      </label>
                      <select
                        className={Styles["editprofile__relationship-selected"]}
                        name="relationship"
                        id="relationship"
                      >
                        <option
                          className={Styles["editprofile__relationship-option"]}
                          value="0"
                        >
                          Cha/Mẹ
                        </option>
                        <option
                          className={Styles["editprofile__relationship-option"]}
                          value="1"
                        >
                          Con trai/Con gái
                        </option>
                        <option
                          className={Styles["editprofile__relationship-option"]}
                          value="2"
                        >
                          Ông/Bà
                        </option>
                        <option
                          className={Styles["editprofile__relationship-option"]}
                          value="3"
                        >
                          Chú/Dì
                        </option>
                        <option
                          className={Styles["editprofile__relationship-option"]}
                          value="4"
                        >
                          Anh/Em họ
                        </option>
                      </select>
                      <label
                        htmlFor="private"
                        className={Styles["editprofile__relationship-title"]}
                      >
                        Riêng tư
                      </label>
                      <select
                        className={Styles["editprofile__relationship-selected"]}
                        name="private"
                        id="private"
                      >
                        <option
                          className={Styles["editprofile__relationship-option"]}
                          value="0"
                        >
                          ...
                        </option>
                        <option
                          className={Styles["editprofile__relationship-option"]}
                          value="1"
                        >
                          Mọi người
                        </option>
                        <option
                          className={Styles["editprofile__relationship-option"]}
                          value="2"
                        >
                          Chỉ mình tôi
                        </option>
                      </select>
                    </div>
                  )}
                </div>
              </div>
              <button className={Styles["btn-submit"]}>Lưu</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
