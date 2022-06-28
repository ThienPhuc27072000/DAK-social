import React, { useState, useRef } from 'react';
import Styles from './Notification.module.css';
import {BsThreeDots} from 'react-icons/bs'
import Image from 'next/image';
import Square from '../../../public/images/testAnhVuong.jpg'

export default function Notification({showMenuNoti, setShowMenuNoti}) {
    // Handle click outside to close noti
    const menuNotiRef = useRef();
    const closeMenuNoti = e => {
        if (menuNotiRef.current === e.target) {
            setShowMenuNoti(false)
        }
    };

    return (
        <>   
        <div className={Styles.overlayDropdownNoti} ref={menuNotiRef} onClick={closeMenuNoti}>
            <div className={Styles.dropDownNoti}>
                <div className={Styles.Text__Notification}>
                    <h2 className={Styles.Text__h2__Notification}> Thông báo </h2>
                    {/* icon 3 chấm  */}
                    <BsThreeDots style={{fontSize: '20px'}}/>
                </div>
                <div className={Styles.info__Noti}>
                    <ul className={Styles.list__Noti}>
                        <li className={Styles.item__Noti}> 
                            <div className={Styles.avatar__Noti}>
                                <Image src={Square} />
                            </div>
                            <div className={Styles.area__Noti}>
                                <p className={Styles.username__Noti}>
                                    Nguyễn Thiên Phúc
                                </p>
                                <span className={Styles.content__Noti}>
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                </span>
                                <p className={Styles.time__Noti}>
                                    5 giờ trước
                                </p>
                                
                            </div>                                                     
                        </li>
                        <li className={Styles.item__Noti}> 
                            <div className={Styles.avatar__Noti}>
                                <Image src={Square} />
                            </div>
                            <div className={Styles.area__Noti}>
                                <p className={Styles.username__Noti}>
                                    Nguyễn Thiên Phúc
                                </p>
                                <p className={Styles.content__Noti}>
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                </p>
                                <p className={Styles.time__Noti}>
                                    5 giờ trước
                                </p>
                                
                            </div>                                                     
                        </li>
                        <li className={Styles.item__Noti}> 
                            <div className={Styles.avatar__Noti}>
                                <Image src={Square} />
                            </div>
                            <div className={Styles.area__Noti}>
                                <p className={Styles.username__Noti}>
                                    Nguyễn Thiên Phúc
                                </p>
                                <p className={Styles.content__Noti}>
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                </p>
                                <p className={Styles.time__Noti}>
                                    5 giờ trước
                                </p>
                                
                            </div>                                                     
                        </li>
                        <li className={Styles.item__Noti}> 
                            <div className={Styles.avatar__Noti}>
                                <Image src={Square} />
                            </div>
                            <div className={Styles.area__Noti}>
                                <p className={Styles.username__Noti}>
                                    Nguyễn Thiên Phúc
                                </p>
                                <p className={Styles.content__Noti}>
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                </p>
                                <p className={Styles.time__Noti}>
                                    5 giờ trước
                                </p>
                                
                            </div>                                                     
                        </li>
                        <li className={Styles.item__Noti}> 
                            <div className={Styles.avatar__Noti}>
                                <Image src={Square} />
                            </div>
                            <div className={Styles.area__Noti}>
                                <p className={Styles.username__Noti}>
                                    Nguyễn Thiên Phúc
                                </p>
                                <p className={Styles.content__Noti}>
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                </p>
                                <p className={Styles.time__Noti}>
                                    5 giờ trước
                                </p>
                                
                            </div>                                                     
                        </li>
                        <li className={Styles.item__Noti}> 
                            <div className={Styles.avatar__Noti}>
                                <Image src={Square} />
                            </div>
                            <div className={Styles.area__Noti}>
                                <p className={Styles.username__Noti}>
                                    Nguyễn Thiên Phúc
                                </p>
                                <p className={Styles.content__Noti}>
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                </p>
                                <p className={Styles.time__Noti}>
                                    5 giờ trước
                                </p>
                                
                            </div>                                                     
                        </li>
                        <li className={Styles.item__Noti}> 
                            <div className={Styles.avatar__Noti}>
                                <Image src={Square} />
                            </div>
                            <div className={Styles.area__Noti}>
                                <p className={Styles.username__Noti}>
                                    Nguyễn Thiên Phúc
                                </p>
                                <p className={Styles.content__Noti}>
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                </p>
                                <p className={Styles.time__Noti}>
                                    5 giờ trước
                                </p>
                                
                            </div>                                                     
                        </li>
                        <li className={Styles.item__Noti}> 
                            <div className={Styles.avatar__Noti}>
                                <Image src={Square} />
                            </div>
                            <div className={Styles.area__Noti}>
                                <p className={Styles.username__Noti}>
                                    Nguyễn Thiên Phúc
                                </p>
                                <p className={Styles.content__Noti}>
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                </p>
                                <p className={Styles.time__Noti}>
                                    5 giờ trước
                                </p>
                            </div>                                                     
                        </li>
                        <li className={Styles.item__Noti}> 
                            <div className={Styles.avatar__Noti}>
                                <Image src={Square} />
                            </div>
                            <div className={Styles.area__Noti}>
                                <p className={Styles.username__Noti}>
                                    Nguyễn Thiên Phúc
                                </p>
                                <p className={Styles.content__Noti}>
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                </p>
                                <p className={Styles.time__Noti}>
                                    5 giờ trước
                                </p>
                                
                            </div>                                                     
                        </li>
                        <li className={Styles.item__Noti}> 
                            <div className={Styles.avatar__Noti}>
                                <Image src={Square} />
                            </div>
                            <div className={Styles.area__Noti}>
                                <p className={Styles.username__Noti}>
                                    Nguyễn Thiên Phúc
                                </p>
                                <p className={Styles.content__Noti}>
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                </p>
                                <p className={Styles.time__Noti}>
                                    5 giờ trước
                                </p>
                                
                            </div>                                                     
                        </li>
                        <li className={Styles.item__Noti}> 
                            <div className={Styles.avatar__Noti}>
                                <Image src={Square} />
                            </div>
                            <div className={Styles.area__Noti}>
                                <p className={Styles.username__Noti}>
                                    Nguyễn Thiên Phúc
                                </p>
                                <p className={Styles.content__Noti}>
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                </p>
                                <p className={Styles.time__Noti}>
                                    5 giờ trước
                                </p>
                            </div>                                                     
                        </li>
                        <li className={Styles.item__Noti}> 
                            <div className={Styles.avatar__Noti}>
                                <Image src={Square} />
                            </div>
                            <div className={Styles.area__Noti}>
                                <p className={Styles.username__Noti}>
                                    Nguyễn Thiên Phúc
                                </p>
                                <p className={Styles.content__Noti}>
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                </p>
                                <p className={Styles.time__Noti}>
                                    5 giờ trước
                                </p>
                            </div>                                                     
                        </li>
                        <li className={Styles.item__Noti}> 
                            <div className={Styles.avatar__Noti}>
                                <Image src={Square} />
                            </div>
                            <div className={Styles.area__Noti}>
                                <p className={Styles.username__Noti}>
                                    Nguyễn Thiên Phúc
                                </p>
                                <p className={Styles.content__Noti}>
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                </p>
                                <p className={Styles.time__Noti}>
                                    5 giờ trước
                                </p>
                                
                            </div>                                                     
                        </li>
                        <li className={Styles.item__Noti}> 
                            <div className={Styles.avatar__Noti}>
                                <Image src={Square} />
                            </div>
                            <div className={Styles.area__Noti}>
                                <p className={Styles.username__Noti}>
                                    Nguyễn Thiên Phúc
                                </p>
                                <p className={Styles.content__Noti}>
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                    Đã chấp nhận lời mời kết bạn 
                                </p>
                                <p className={Styles.time__Noti}>
                                    5 giờ trước
                                </p>
                            </div>                                                     
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}
