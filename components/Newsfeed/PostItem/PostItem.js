import Logo from "/public/images/avatar.jpg";
import ImagePost from "/public/images/bg.jpg";
import Styles from "./PostItem.module.css";
import Image from "next/image";
import LazyLoad from "react-lazyload";
// import Spinner from 'react-bootstrap/Spinner'

export default function PostItem({key, content, link}) {

    return (
        <>
        <div className={Styles.profile__post__item} key={key}>
            <div className={Styles.profile__post__heading}>
                <div className={Styles.profile__post__avatar}>
                    <Image src={Logo} alt="Avatar"/>
                </div>
                <div className={Styles.profile__post__info}>
                    <h2>Thiên Phúc<span>Đã thay đổi ảnh hồ sơ.</span></h2>
                    <p>7 giờ trước</p>
                </div>
                <span>...</span>
            </div>
            <div className={Styles.profile__post__main}>
                <LazyLoad>
                    {/* <Spinner animation="border" /> */}
                    <p style={{color: 'yellow'}}>{content}</p>
                    <p style={{color: 'blue'}}>{link}</p>
                    <div className={Styles.profile__post__content}>
                        <img src='../../../public/images/avatar.jpg' alt="Avatar"/>
                    </div>
                </LazyLoad>
            </div>
        </div>
        </>
    )
}