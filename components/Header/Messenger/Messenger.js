import React, { useState, useRef, useEffect, useContext } from 'react';
import Styles from './Messenger.module.css';
import {BsThreeDots} from 'react-icons/bs'
import Image from 'next/image';
import Square from '../../../public/images/testAnhVuong.jpg'
import { FaSearch, FaEllipsisH } from "react-icons/fa";
import Link from 'next/link';
import { BoxChatContext } from '../../BoxChat/BoxChatContext';

export default function Messenger({showMenuMess, setShowMenuMess}) {
    // Handle click outside to close Menu mess
    const menuMessRef = useRef();
    const closeMenuMess = e => {
        if (menuMessRef.current === e.target) {
            setShowMenuMess(false)
        }
    };

    const context = useContext(BoxChatContext)

    return (
        <>  
        <div className={Styles.overlayDropdownMess} ref={menuMessRef} onClick={closeMenuMess}>
            <div className={Styles.dropDownMess}>
                <div className={Styles.Text__Messengger}>
                    <h2 className={Styles.Text__h2__Messengger}> Tin nhắn  </h2>
                    {/* icon 3 chấm  */}
                    <BsThreeDots style={{fontSize: '20px'}}/>
                </div>
                <form className={Styles["popupchat__form-control"]}>
                    <input className={Styles["popupchat__form-input"]} placeholder="Nhập tên cuộc trò chuyện" type="text"/>
                    <FaSearch className={Styles["popupchat__form-icon"]}/>
                </form>
                <div className={Styles.info__Mess}>
                    <ul className={Styles.list__Mess}>
                        <li className={Styles.item__Mess} onClick={context.toggleBoxChat}> 
                            <div className={Styles.avatar__Mess}>
                                <Image src={Square} />
                            </div>
                            <div className={Styles.area__Mess}>
                                <p className={Styles.username__Mess}>
                                    Nguyễn Thiên Phúc
                                </p>
                                <span className={Styles.content__Mess}>
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                </span>
                                <p className={Styles.time__Mess}>
                                    5 giờ trước
                                </p>                                
                            </div>                                                     
                        </li>
                        <li className={Styles.item__Mess}> 
                            <div className={Styles.avatar__Mess}>
                                <Image src={Square} />
                            </div>
                            <div className={Styles.area__Mess}>
                                <p className={Styles.username__Mess}>
                                    Nguyễn Thiên Phúc
                                </p>
                                <p className={Styles.content__Mess}>
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                </p>
                                <p className={Styles.time__Mess}>
                                    5 giờ trước
                                </p>
                                
                            </div>                                                     
                        </li>
                        <li className={Styles.item__Mess}> 
                            <div className={Styles.avatar__Mess}>
                                <Image src={Square} />
                            </div>
                            <div className={Styles.area__Mess}>
                                <p className={Styles.username__Mess}>
                                    Nguyễn Thiên Phúc
                                </p>
                                <p className={Styles.content__Mess}>
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                </p>
                                <p className={Styles.time__Mess}>
                                    5 giờ trước
                                </p>
                            </div>                                                     
                        </li>
                        <li className={Styles.item__Mess}> 
                            <div className={Styles.avatar__Mess}>
                                <Image src={Square} />
                            </div>
                            <div className={Styles.area__Mess}>
                                <p className={Styles.username__Mess}>
                                    Nguyễn Thiên Phúc
                                </p>
                                <p className={Styles.content__Mess}>
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                </p>
                                <p className={Styles.time__Mess}>
                                    5 giờ trước
                                </p>
                                
                            </div>                                                     
                        </li>
                        <li className={Styles.item__Mess}> 
                            <div className={Styles.avatar__Mess}>
                                <Image src={Square} />
                            </div>
                            <div className={Styles.area__Mess}>
                                <p className={Styles.username__Mess}>
                                    Nguyễn Thiên Phúc
                                </p>
                                <p className={Styles.content__Mess}>
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                </p>
                                <p className={Styles.time__Mess}>
                                    5 giờ trước
                                </p>
                                
                            </div>                                                     
                        </li>
                        <li className={Styles.item__Mess}> 
                            <div className={Styles.avatar__Mess}>
                                <Image src={Square} />
                            </div>
                            <div className={Styles.area__Mess}>
                                <p className={Styles.username__Mess}>
                                    Nguyễn Thiên Phúc
                                </p>
                                <p className={Styles.content__Mess}>
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                </p>
                                <p className={Styles.time__Mess}>
                                    5 giờ trước
                                </p>
                            </div>                                                     
                        </li>
                        <li className={Styles.item__Mess}> 
                            <div className={Styles.avatar__Mess}>
                                <Image src={Square} />
                            </div>
                            <div className={Styles.area__Mess}>
                                <p className={Styles.username__Mess}>
                                    Nguyễn Thiên Phúc
                                </p>
                                <p className={Styles.content__Mess}>
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                </p>
                                <p className={Styles.time__Mess}>
                                    5 giờ trước
                                </p>
                            </div>                                                     
                        </li>
                        <li className={Styles.item__Mess}> 
                            <div className={Styles.avatar__Mess}>
                                <Image src={Square} />
                            </div>
                            <div className={Styles.area__Mess}>
                                <p className={Styles.username__Mess}>
                                    Nguyễn Thiên Phúc
                                </p>
                                <p className={Styles.content__Mess}>
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                </p>
                                <p className={Styles.time__Mess}>
                                    5 giờ trước
                                </p>
                                
                            </div>                                                     
                        </li>
                        <li className={Styles.item__Mess}> 
                            <div className={Styles.avatar__Mess}>
                                <Image src={Square} />
                            </div>
                            <div className={Styles.area__Mess}>
                                <p className={Styles.username__Mess}>
                                    Nguyễn Thiên Phúc
                                </p>
                                <p className={Styles.content__Mess}>
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                </p>
                                <p className={Styles.time__Mess}>
                                    5 giờ trước
                                </p>
                            </div>                                                     
                        </li>
                    </ul>
                    <div className={Styles["popupchat__footer"]}>
                    <p className={Styles["popupchat__footer-title"]}>
                        <Link href="/chat">
                            <a>Xem tất cả ở Tin nhắn</a>
                        </Link>
                    </p>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
