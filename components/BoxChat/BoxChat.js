import Image from 'next/image'
import Styles from './BoxChat.module.css'
import Avatar from '../../public/images/avatar.jpg'
import Link from 'next/link';
import {
    FaRegTimesCircle, FaAngleDown, FaVideo,
    FaTimes, FaPhoneAlt, FaImages,
    FaRegFileAlt, FaRegGrinBeam, FaRegPaperPlane,
    FaQuoteRight, FaRegLaugh, FaCheckCircle, FaRegCheckCircle
} from "react-icons/fa";
import { BsArrowBarDown } from 'react-icons/bs'
import { useState, useEffect, useRef, useContext } from "react";
import { BoxChatContext } from './BoxChatContext';

export default function BoxChat({isShowItemChatBox}) {
    const messageRef = useRef(); // Biến set giá trị vị trí cho tin nhắn
    const [mess, setMess] = useState('');
    const [messagers, setMessagers] = useState([]);
    const messFocusInput = useRef(null); // Biến auto focus vào ô input
    // const [showChatBox, setShowChatBox] = useState(true)

    // Xử lý vị trí tin nhắn và tự động trượt lên khi có tin nhắn mới
    useEffect(() => {
        if (messageRef.current) {
            messageRef.current.scrollIntoView(
                {
                    behavior: 'auto',
                    block: 'end',
                    inline: 'nearest'
                })
        }
    }
    )

    // Xử lý khi click button send hoặc nhấn Enter để gửi
    const handleSubmit = () => {
        setMessagers(prev => [...prev, mess]);
        setMess('');
    }
    const handlePressEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSubmit();
        }
    }

    //  Xử lý gửi link
    const linkify = (text) => {
        var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
        return text.replace(urlRegex, function (url) {
            return '<a style="color: #087cce; text-decoration: underline" target="_blank" href="' + url + '">' + url + '</a>';
        });
    }

    // handle add and remove class to show/hidden boxchat
    const [showBoxChat, setShowBoxChat] = useState(true)
    const btnHandleShowBoxChat = () => {
        setShowBoxChat(!showBoxChat);   
    }

    // Xử lý auto focus vào ô input
    // useEffect(() => {
    //     messFocusInput.current.focus();
    // });

    const context = useContext(BoxChatContext)

    return(
        <>
        {isShowItemChatBox && context.openBoxChat ? 
            <>
            <ul className={Styles["chatnoti-list"]} >
                <li className={Styles["chatnoti-item"]}
                    onClick={btnHandleShowBoxChat}
                >
                    <div className={Styles["chatnoti-avatar"]}>
                        <Image src={Avatar} alt="Avatar" />
                    </div>
                    {/* <span className={`${Styles["chatnoti-count-mess"]} ${Styles["haveMess"]}`}>9+</span> */}                            
                    <div className={Styles["chatnoti-active"]}></div>
                    <FaRegTimesCircle className={Styles["chatnoti-close-icon"]} 
                        onClick={context.deleteBoxChat}
                    />
                    {/* <div className={Styles["chatnoti-tooltip"]}>Nguyễn Văn A</div> */}
                </li>
            </ul>

            <div className={`${Styles["chatbox"]} ${showBoxChat && Styles["showBoxChat"]}`}>
                <div className={Styles["chatbox-heading"]}>            
                    <div className={Styles["chatbox-info"]}>
                        <div className={Styles["chatbox-heading-avatar"]}>
                            <Link href="/profile">
                                <a>
                                    <Image src={Avatar} alt="Avatar" />
                                </a>
                            </Link>
                        </div>
                        <div className={Styles["chatbox-info-main"]}>
                            <p className={Styles["chatbox-info-name"]}>Nguyễn Văn A</p>
                            <span className={Styles["chatbox-info-active"]}>
                                Đang hoạt động
                                <span className={Styles["chatbox-info-active-tick"]}></span>
                            </span>
                        </div>
                        {/* <FaAngleDown className={Styles["chatbox-info-arrow-icon"]} /> */}
                        <span className={Styles["chatbox-info-tooltip"]}>Mở tiện ích</span>
                    </div>
                    <ul className={Styles["chatbox-action-list"]}>
                        <li className={Styles["chatbox-action-item"]}>
                            <FaPhoneAlt className={Styles["chatbox-action-icon"]} />
                            <span className={Styles["chatbox-action-tooltip"]}>Bắt đầu gọi thoại</span>
                        </li>
                        <li className={Styles["chatbox-action-item"]}>
                            <FaVideo className={Styles["chatbox-action-icon"]} />
                            <span className={Styles["chatbox-action-tooltip"]}>Bắt đầu gọi video</span>
                        </li>
                        <li className={Styles["chatbox-action-item"]}>
                            <BsArrowBarDown className={Styles["chatbox-action-icon"]}
                                onClick={btnHandleShowBoxChat}
                            />
                            <span className={Styles["chatbox-action-tooltip"]}>Đóng đoạn trò chuyện</span>
                        </li>
                        <li className={Styles["chatbox-action-item"]} 
                            onClick={context.deleteBoxChat}
                        >
                            <FaTimes className={Styles["chatbox-action-icon"]} />
                            <span className={Styles["chatbox-action-tooltip"]}>Đóng đoạn trò chuyện</span>
                        </li>
                    </ul>
                </div>
                <div className={Styles["chatbox-body"]}>
                    <div className={Styles["chatbox-body-main"]}>
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
                            <MessViewed />
                        </div>
                        <div className={Styles["message-group-received"]}>
                            <div className={Styles["message-group-received-avatar"]}>
                                <Image src={Avatar} alt="Avatar" />
                            </div>
                            <div className={Styles["message-group-chat"]}>
                                <MessReceived />
                            </div>
                        </div>
                        <div className={Styles["message-group-sent"]}>
                            {messagers.map((messager, index) => {
                                return (
                                    <div className={Styles["message-sent"]} key={index}>
                                        <div className={Styles["message-sent-text"]}>
                                            <div dangerouslySetInnerHTML={{ __html: linkify(`${messager}`) }} />
                                            <ul className={Styles["message-list-icon"]}>
                                                <li className={Styles["message-item-icon"]}>
                                                    <FaQuoteRight className={Styles["message-icon"]} />
                                                    <span className={Styles["message-icon-tooltip"]}>Trả lời</span>
                                                </li>
                                                <li className={Styles["message-item-icon"]}>
                                                    <FaRegLaugh className={Styles["message-icon"]} />
                                                    <span className={Styles["message-icon-tooltip"]}>Bày tỏ cảm xúc</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={Styles["message-sent-status"]}>
                                            <FaCheckCircle className={Styles["message-status-icon"]} />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div ref={messageRef} />
                    </div>
                    <div className={Styles["chatbox-body-chat"]}>
                        <ul className={Styles["chatbox-body-action-list"]}>
                            <li className={Styles["chatbox-action-body-item"]}>
                                <FaImages className={Styles["chatbox-action-body-icon"]} />
                                <span className={Styles["chatbox-action-body-tooltip"]}>Đính kèm ảnh</span>
                            </li>
                            <li className={Styles["chatbox-action-body-item"]}>
                                <FaRegFileAlt className={Styles["chatbox-action-body-icon"]} />
                                <span className={Styles["chatbox-action-body-tooltip"]}>Đính kèm tệp</span>
                            </li>
                        </ul>
                        <div className={Styles["chatbox-body-form-control"]}>
                            <input
                                type="text"
                                name="chat"
                                placeholder="Nhập nội dung..."
                                className={Styles["chatbox-body-input"]}
                                value={mess}
                                onChange={e => setMess(e.target.value)}
                                onKeyDown={mess.match(/[^\s]/g) != null ? e => handlePressEnter(e) : null}
                                ref={messFocusInput}
                            />
                            <FaRegGrinBeam className={Styles["chatbox-body-icon"]} />
                        </div>
                        <FaRegPaperPlane
                            className={Styles["chatbox-body-icon-sent"]}
                            onClick={mess.match(/[^\s]/g) != null ? handleSubmit : null}
                        />
                    </div>
                </div>
            </div>
            </>
        : null} 
        </>
    )
}

export function MessReceived() {
    return (
        <>
            <div className={Styles["message-received"]}>
                <div className={Styles["message-received-text"]}>
                    Việc chăm sóc khách hàng cũ cũng là một phần không thể thiếu trong chiến dịch marketing của các doanh nghiệp, của hàng.
                    <ul className={Styles["message-list-icon"]}>
                        <li className={Styles["message-item-icon"]}>
                            <FaQuoteRight className={Styles["message-icon"]} />
                            <span className={Styles["message-icon-tooltip"]}>Trả lời</span>
                        </li>
                        <li className={Styles["message-item-icon"]}>
                            <FaRegLaugh className={Styles["message-icon"]} />
                            <span className={Styles["message-icon-tooltip"]}>Bày tỏ cảm xúc</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export function MessViewed() {
    return (
        <>
            <div className={Styles["message-sent"]}>
                <div className={Styles["message-sent-text"]}>
                    Việc chăm sóc khách hàng cũ cũng là một phần không thể thiếu trong chiến dịch marketing của các doanh nghiệp, của hàng.
                    <ul className={Styles["message-list-icon"]}>
                        <li className={Styles["message-item-icon"]}>
                            <FaQuoteRight className={Styles["message-icon"]} />
                            <span className={Styles["message-icon-tooltip"]}>Trả lời</span>
                        </li>
                        <li className={Styles["message-item-icon"]}>
                            <FaRegLaugh className={Styles["message-icon"]} />
                            <span className={Styles["message-icon-tooltip"]}>Bày tỏ cảm xúc</span>
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
    )
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
                            <span className={Styles["message-icon-tooltip"]}>Bày tỏ cảm xúc</span>
                        </li>
                    </ul>
                </div>
                <div className={Styles["message-sent-status"]}>
                    <FaCheckCircle className={Styles["message-status-icon"]} />
                </div>
            </div>
        </>
    )
}

export function MessSending() {
    return (
        <>
            <div className={Styles["message-sent"]}>
                <div className={Styles["message-sent-text"]}>
                    Việc chăm sóc khách hàng cũ cũng là một phần không thể thiếu trong chiến dịch marketing của các doanh nghiệp, của hàng.
                    <ul className={Styles["message-list-icon"]}>
                        <li className={Styles["message-item-icon"]}>
                            <FaQuoteRight className={Styles["message-icon"]} />
                            <span className={Styles["message-icon-tooltip"]}>Trả lời</span>
                        </li>
                        <li className={Styles["message-item-icon"]}>
                            <FaRegLaugh className={Styles["message-icon"]} />
                            <span className={Styles["message-icon-tooltip"]}>Bày tỏ cảm xúc</span>
                        </li>
                    </ul>
                </div>
                <div className={Styles["message-sent-status"]}>
                    <FaRegCheckCircle className={Styles["message-status-icon"]} />
                </div>
            </div>
        </>
    )
}