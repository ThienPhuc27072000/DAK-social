import Head from "next/head";
import Header from "../../components/Header/Header";
import Styles from "../../styles/Chat.module.css";
import {
  FaSearch,
  FaEllipsisH,
  FaUserPlus,
  FaUsers,
  FaRegUserCircle,
  FaSpellCheck,
  FaRegGrinBeam,
  FaRegFileImage,
  FaRegFileAlt,
  FaLink,
  FaRegBellSlash,
  FaUserLock,
  FaExclamationTriangle,
  FaPhoneAlt,
  FaBrush,
  FaEyeSlash,
  FaVideo,
  FaInfoCircle,
  FaCheckCircle,
  FaRegCheckCircle,
  FaImages,
  FaHeart,
  FaAngleLeft,
  FaRegPaperPlane,
  FaQuoteRight,
  FaRegLaugh,
} from "react-icons/fa";
import Image from "next/image";
import Avatar from "../../public/images/avatar.jpg";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import BoxChat from "../../components/BoxChat/BoxChat";

export default function Chat() {
  const [toggleState, setToggleState] = useState(1); // Set trạng thái chuyển tab của tin nhắn và group
  const messageRef = useRef(); // Biến set giá trị vị trí cho tin nhắn
  const [mess, setMess] = useState("");
  const [messagers, setMessagers] = useState([]);
  const messFocusInput = useRef(null); // Biến auto focus vào ô input

  //  Xử lý chuyển tab tin nhắn & nhóm
  const handleToggleTab = (index) => {
    setToggleState(index);
  };

  // Xử lý vị trí tin nhắn và tự động trượt lên khi có tin nhắn mới
  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({
        behavior: "auto",
        block: "end",
        inline: "nearest",
      });
    }
  });

  // Xử lý khi click button send hoặc nhấn Enter để gửi
  const handleSubmit = () => {
    setMessagers((prev) => [...prev, mess]);
    setMess("");
  };

  const handlePressEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  // Xử lý auto focus vào ô input
  useEffect(() => {
    messFocusInput.current.focus();
  });

  //  Xử lý gửi link
  const linkify = (text) => {
    var urlRegex =
      /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    return text.replace(urlRegex, function (url) {
      return (
        '<a style="color: #087cce; text-decoration: underline" target="_blank" href="' +
        url +
        '">' +
        url +
        "</a>"
      );
    });
  };

  return (
    <>
      <Head>
        <title>DAK - Chat</title>
      </Head>
      <Layout>
        <BoxChat isShowItemChatBox />
        <Header />
        <div className={Styles["chat__box"]}>
          {/* Box Left */}
          <div className={Styles["chat__box-left"]}>
            <div className={Styles["chat__box-left-heading"]}>
              <div className={Styles["chat__box-title"]}>
                <h2 className={Styles["chat__title"]}>Tin nhắn</h2>
                <ul className={Styles["chat__create-list"]}>
                  <li className={Styles["chat__create-item"]}>
                    <FaUserPlus className={Styles["chat__create-icon"]} />
                    <span className={Styles["tooltip__create"]}>
                      Tin nhắn mới
                    </span>
                  </li>
                  <li className={Styles["chat__create-item"]}>
                    <FaUsers className={Styles["chat__create-icon"]} />
                    <span className={Styles["tooltip__create"]}>
                      Tạo nhóm mới
                    </span>
                  </li>
                </ul>
              </div>
              <form action="" className={Styles["chat__form-group"]}>
                <input
                  type="text"
                  className={Styles["chat__form-input"]}
                  placeholder="Tìm kiếm trong tin nhắn"
                />
                <FaSearch className={Styles["chat__icon-search"]} />
              </form>
            </div>
            <div className={Styles["chat__box-left-body"]}>
              <ul className={Styles["chat__nav-list"]}>
                <li
                  className={`${Styles["chat__nav-item"]} ${
                    toggleState === 1 ? Styles["active"] : ""
                  }`}
                  onClick={() => handleToggleTab(1)}
                >
                  Tin nhắn
                  {/* Thêm class ${Styles["active"]} để bật tick đỏ khi có tin nhắn chưa đọc */}
                  <span
                    className={`${Styles["chat__noti"]} ${Styles["active"]}`}
                  ></span>
                </li>
                <li
                  className={`${Styles["chat__nav-item"]} ${
                    toggleState === 2 ? Styles["active"] : ""
                  }`}
                  onClick={() => handleToggleTab(2)}
                >
                  Nhóm
                  <span className={`${Styles["chat__noti"]}`}></span>
                </li>
              </ul>
              <div
                className={`${Styles["chat__list"]} ${
                  toggleState === 1 ? Styles["active"] : ""
                }`}
              >
                <div
                  className={`${Styles["chat__item"]} ${Styles["mess-select"]}`}
                >
                  <div className={Styles["chat__avatar"]}>
                    <Image src={Avatar} alt="Avatar" />
                  </div>
                  <div className={Styles["chat__content"]}>
                    <div className={Styles["chat__content-top"]}>
                      <h3 className={Styles["chat__content-name"]}>
                        Nguyễn Văn A
                      </h3>
                      <span className={Styles["chat__content-time"]}>
                        1 phút
                      </span>
                    </div>
                    <div className={Styles["chat__content-bottom"]}>
                      <p className={Styles["chat__content-mess"]}>
                        Rất vui được gặp bạn Rất vui được gặp bạn
                      </p>
                      <span className={Styles["chat__noti-count"]}>9+</span>
                    </div>
                  </div>
                  <FaEllipsisH className={Styles["chat__icon-ellipsis"]} />
                </div>
                <div
                  className={`${Styles["chat__item"]} ${Styles["have-mess"]}`}
                >
                  <div className={Styles["chat__avatar"]}>
                    <Image src={Avatar} alt="Avatar" />
                  </div>
                  <div className={Styles["chat__content"]}>
                    <div className={Styles["chat__content-top"]}>
                      <h3 className={Styles["chat__content-name"]}>
                        Nguyễn Văn A
                      </h3>
                      <span className={Styles["chat__content-time"]}>
                        1 phút
                      </span>
                    </div>
                    <div className={Styles["chat__content-bottom"]}>
                      <p className={Styles["chat__content-mess"]}>
                        Rất vui được gặp bạn Rất vui được gặp bạn
                      </p>
                      <span className={Styles["chat__noti-count"]}>9+</span>
                    </div>
                  </div>
                  <FaEllipsisH className={Styles["chat__icon-ellipsis"]} />
                </div>
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
              </div>
              <div
                className={`${Styles["chat__list"]} ${
                  toggleState === 2 ? Styles["active"] : ""
                }`}
              >
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
              </div>
            </div>
          </div>
          {/* Box Content */}
          <div className={Styles["chat__box-content"]}>
            <div className={Styles["chat__box-content-heading"]}>
              <FaAngleLeft className={Styles["chat__box-back-icon"]} />
              <div className={Styles["chat__user-avatar"]}>
                <Image src={Avatar} alt="Avatar" />
              </div>
              <div className={Styles["chat__user-info"]}>
                <h3 className={Styles["chat__user-name"]}>Nguyễn Văn A</h3>
                {/* Thêm class ${Styles["show"]} để hiện hoạt động hoặc hoạt động trước đó */}
                <p className={`${Styles["chat__user-item"]} ${Styles["show"]}`}>
                  <span></span>
                  Đang hoạt động
                </p>
                <p className={`${Styles["chat__user-item"]}`}>
                  <span></span>
                  Hoạt động 30 phút trước
                </p>
              </div>
              <ul className={Styles["chat__user-action-list"]}>
                <li className={Styles["chat__user-action-item"]}>
                  <FaPhoneAlt className={Styles["chat__user-icon"]} />
                  <span className={Styles["tooltip__create"]}>
                    Bắt đầu gọi thoại
                  </span>
                </li>
                <li className={Styles["chat__user-action-item"]}>
                  <FaVideo className={Styles["chat__user-icon"]} />
                  <span className={Styles["tooltip__create"]}>
                    Bắt đầu gọi video
                  </span>
                </li>
                <li className={Styles["chat__user-action-item"]}>
                  <label htmlFor="show-tab-info">
                    <FaInfoCircle className={Styles["chat__user-icon"]} />
                    <span className={Styles["tooltip__create"]}>
                      Thông tin cuộc trò chuyện
                    </span>
                  </label>
                </li>
              </ul>
            </div>
            <div className={Styles["chat__box-content-body"]}>
              <div className={Styles["chat__box-mess"]}>
                <div className={Styles["message-group-received"]}>
                  <div className={Styles["message-group-received-avatar"]}>
                    <Image src={Avatar} alt="Avatar" />
                  </div>
                  <div className={Styles["message-group-chat"]}>
                    <MessReceived />
                    <MessReceived />
                    <MessReceived />
                  </div>
                </div>
                <div className={Styles["message-group-sent"]}>
                  <MessViewed />
                </div>
                <div className={Styles["message-group-received"]}>
                  <div className={Styles["message-group-received-avatar"]}>
                    <Image src={Avatar} alt="Avatar" />
                  </div>
                  <div className={Styles["message-group-chat"]}>
                    <MessReceived />
                    <MessReceived />
                  </div>
                </div>
                <div className={Styles["message-group-sent"]}>
                  {messagers.map((messager, index) => {
                    return (
                      <div className={Styles["message-sent"]} key={index}>
                        <div className={Styles["message-sent-text"]}>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: linkify(`${messager}`),
                            }}
                          />
                          <ul className={Styles["message-list-icon"]}>
                            <li className={Styles["message-item-icon"]}>
                              <FaQuoteRight
                                className={Styles["message-icon"]}
                              />
                              <span className={Styles["message-icon-tooltip"]}>
                                Trả lời
                              </span>
                            </li>
                            <li className={Styles["message-item-icon"]}>
                              <FaRegLaugh className={Styles["message-icon"]} />
                              <span className={Styles["message-icon-tooltip"]}>
                                Bày tỏ cảm xúc
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className={Styles["message-sent-status"]}>
                          <FaCheckCircle
                            className={Styles["message-status-icon"]}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div ref={messageRef} />
              </div>
              <div className={Styles["chat__box-chat"]}>
                <ul className={Styles["chat__sent-list"]}>
                  <li className={Styles["chat__sent-item"]}>
                    <FaImages className={Styles["chat__sent-icon"]} />
                    <span className={Styles["chat__sent-tooltip"]}>
                      Đính kèm ảnh
                    </span>
                  </li>
                  <li className={Styles["chat__sent-item"]}>
                    <FaRegFileAlt className={Styles["chat__sent-icon"]} />
                    <span className={Styles["chat__sent-tooltip"]}>
                      Đính kèm tệp
                    </span>
                  </li>
                </ul>
                <div className={Styles["chat__form-control-sent"]}>
                  <input
                    type="text"
                    name="chat"
                    placeholder="Nhập nội dung..."
                    className={Styles["chat__form-input-sent"]}
                    value={mess}
                    onChange={(e) => setMess(e.target.value)}
                    onKeyDown={
                      mess.match(/[^\s]/g) != null
                        ? (e) => handlePressEnter(e)
                        : null
                    }
                    ref={messFocusInput}
                  />
                  <FaRegGrinBeam className={Styles["chat__form-icon"]} />
                </div>
                <FaHeart className={Styles["chat__icon-like"]} />
                <FaRegPaperPlane
                  className={Styles["chat__icon-like"]}
                  onClick={mess.match(/[^\s]/g) != null ? handleSubmit : null}
                />
              </div>
            </div>
          </div>
          {/* Box Right */}
          <input
            type="checkbox"
            className={Styles["tab-info"]}
            id="show-tab-info"
          />
          <label
            htmlFor="show-tab-info"
            className={Styles["tab-info-overlay"]}
          ></label>
          <div className={Styles["chat__box-right"]}>
            <div className={Styles["chat__box-right-heading"]}>
              <label htmlFor="show-tab-info">
                <FaAngleLeft className={Styles["chat__box-icon-back"]} />
              </label>
              <div className={Styles["chat__info-avatar"]}>
                <Image src={Avatar} alt="Avatar" />
              </div>
              <h3 className={Styles["chat__info-name"]}>Nguyễn Văn A</h3>
              {/* Thêm class ${Styles["show"]} để hiện đang hoạt động hoặc hoạt động bao nhiêu phút trước */}
              <p
                className={`${Styles["chat__info-time-onl"]} ${Styles["show"]}`}
              >
                Đang hoạt động
              </p>
              <p className={`${Styles["chat__info-time-off"]}`}>
                Hoạt động 30 phút trước
              </p>
              <div className={Styles["chat__info-button"]}>
                <div className={Styles["chat__info-btn"]}>
                  <Link href="/profile">
                    <a className={Styles["chat__info-btn-link"]}>
                      <FaRegUserCircle className={Styles["chat__info-icon"]} />
                      <span>Xem trang cá nhân</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={Styles["chat__box-right-body"]}>
              <div className={Styles["chat__info-option"]}>
                <h4 className={Styles["chat__info-title"]}>
                  Tùy chỉnh tin nhắn
                </h4>
                <ul className={Styles["chat__info-option-list"]}>
                  <li className={Styles["chat__info-option-item"]}>
                    <FaBrush className={Styles["chat__info-option-icon"]} />
                    <span>Thay đổi ảnh nền</span>
                  </li>
                  <li className={Styles["chat__info-option-item"]}>
                    <FaSpellCheck
                      className={Styles["chat__info-option-icon"]}
                    />
                    <span>Chỉnh sửa biệt danh</span>
                  </li>
                </ul>
              </div>
              <div className={Styles["chat__info-option"]}>
                <h4 className={Styles["chat__info-title"]}>
                  Các tùy chỉnh khác
                </h4>
                <ul className={Styles["chat__info-option-list"]}>
                  <li className={Styles["chat__info-option-item"]}>
                    <FaUsers className={Styles["chat__info-option-icon"]} />
                    <span>Tạo nhóm với người dùng</span>
                  </li>
                  <li className={Styles["chat__info-option-item"]}>
                    <FaRegFileImage
                      className={Styles["chat__info-option-icon"]}
                    />
                    <span>Hình ảnh & File</span>
                  </li>
                  <li className={Styles["chat__info-option-item"]}>
                    <FaLink className={Styles["chat__info-option-icon"]} />
                    <span>Liên kết</span>
                  </li>
                  <li className={Styles["chat__info-option-item"]}>
                    <FaSearch className={Styles["chat__info-option-icon"]} />
                    <span>Tìm kiếm trong tin nhắn</span>
                  </li>
                </ul>
              </div>
              <div className={Styles["chat__info-option"]}>
                <h4 className={Styles["chat__info-title"]}>
                  Quyền riêng tư - hỗ trợ
                </h4>
                <ul className={Styles["chat__info-option-list"]}>
                  <li className={Styles["chat__info-option-item"]}>
                    <FaRegBellSlash
                      className={Styles["chat__info-option-icon"]}
                    />
                    <span>Tắt thông báo</span>
                  </li>
                  <li className={Styles["chat__info-option-item"]}>
                    <FaEyeSlash className={Styles["chat__info-option-icon"]} />
                    <span>Ẩn cuộc trò chuyện</span>
                  </li>
                  <li className={Styles["chat__info-option-item"]}>
                    <FaUserLock className={Styles["chat__info-option-icon"]} />
                    <span>Chặn</span>
                  </li>
                  <li className={Styles["chat__info-option-item"]}>
                    <FaExclamationTriangle
                      className={Styles["chat__info-option-icon"]}
                    />
                    <span>Báo cáo & hỗ trợ</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export function ChatItem() {
  return (
    // Thêm class ${Styles["have-mess"]} khi có tin nhắn mới để thông báo cho người dùng
    // Thêm class ${Styles["mess-select"]} khi có tin nhắn mới để thông báo cho người dùng
    <div className={`${Styles["chat__item"]}`}>
      <div className={Styles["chat__avatar"]}>
        <Image src={Avatar} alt="Avatar" />
      </div>
      <div className={Styles["chat__content"]}>
        <div className={Styles["chat__content-top"]}>
          <h3 className={Styles["chat__content-name"]}>Nguyễn Văn A</h3>
          <span className={Styles["chat__content-time"]}>1 phút</span>
        </div>
        <div className={Styles["chat__content-bottom"]}>
          <p className={Styles["chat__content-mess"]}>
            Rất vui được gặp bạn Rất vui được gặp bạn
          </p>
          <span className={Styles["chat__noti-count"]}>9+</span>
        </div>
      </div>
      <FaEllipsisH className={Styles["chat__icon-ellipsis"]} />
    </div>
  );
}

export function MessReceived() {
  return (
    <>
      <div className={Styles["message-received"]}>
        <div className={Styles["message-received-text"]}>
          Việc chăm sóc khách hàng cũ cũng là một phần không thể thiếu trong
          chiến dịch marketing của các doanh nghiệp, của hàng.
          <ul className={Styles["message-list-icon"]}>
            <li className={Styles["message-item-icon"]}>
              <FaQuoteRight className={Styles["message-icon"]} />
              <span className={Styles["message-icon-tooltip"]}>Trả lời</span>
            </li>
            <li className={Styles["message-item-icon"]}>
              <FaRegLaugh className={Styles["message-icon"]} />
              <span className={Styles["message-icon-tooltip"]}>
                Bày tỏ cảm xúc
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export function MessViewed() {
  return (
    <>
      <div className={Styles["message-sent"]}>
        <div className={Styles["message-sent-text"]}>
          Việc chăm sóc khách hàng cũ cũng là một phần không thể thiếu trong
          chiến dịch marketing của các doanh nghiệp, của hàng.
          <ul className={Styles["message-list-icon"]}>
            <li className={Styles["message-item-icon"]}>
              <FaQuoteRight className={Styles["message-icon"]} />
              <span className={Styles["message-icon-tooltip"]}>Trả lời</span>
            </li>
            <li className={Styles["message-item-icon"]}>
              <FaRegLaugh className={Styles["message-icon"]} />
              <span className={Styles["message-icon-tooltip"]}>
                Bày tỏ cảm xúc
              </span>
            </li>
          </ul>
        </div>
        <div className={Styles["message-sent-status"]}>
          <div className={Styles["message-sent-avatar"]}>
            <Image src={Avatar} alt="Avatar" />
          </div>
        </div>
      </div>
    </>
  );
}

export function MessSent() {
  return (
    <>
      <div className={Styles["message-sent"]}>
        <div className={Styles["message-sent-text"]}>
          Việc chăm sóc khách hàng cũ cũng là một
          <ul className={Styles["message-list-icon"]}>
            <li className={Styles["message-item-icon"]}>
              <FaQuoteRight className={Styles["message-icon"]} />
              <span className={Styles["message-icon-tooltip"]}>Trả lời</span>
            </li>
            <li className={Styles["message-item-icon"]}>
              <FaRegLaugh className={Styles["message-icon"]} />
              <span className={Styles["message-icon-tooltip"]}>
                Bày tỏ cảm xúc
              </span>
            </li>
          </ul>
        </div>
        <div className={Styles["message-sent-status"]}>
          <FaCheckCircle className={Styles["message-status-icon"]} />
        </div>
      </div>
    </>
  );
}

export function MessSending() {
  return (
    <>
      <div className={Styles["message-sent"]}>
        <div className={Styles["message-sent-text"]}>
          Việc chăm sóc khách hàng cũ cũng là một phần không thể thiếu trong
          chiến dịch marketing của các doanh nghiệp, của hàng.
          <ul className={Styles["message-list-icon"]}>
            <li className={Styles["message-item-icon"]}>
              <FaQuoteRight className={Styles["message-icon"]} />
              <span className={Styles["message-icon-tooltip"]}>Trả lời</span>
            </li>
            <li className={Styles["message-item-icon"]}>
              <FaRegLaugh className={Styles["message-icon"]} />
              <span className={Styles["message-icon-tooltip"]}>
                Bày tỏ cảm xúc
              </span>
            </li>
          </ul>
        </div>
        <div className={Styles["message-sent-status"]}>
          <FaRegCheckCircle className={Styles["message-status-icon"]} />
        </div>
      </div>
    </>
  );
}
