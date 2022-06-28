import React,{ useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Styled from './Stories.module.css'

import Thumbnail1 from "/public/images/thumbnail1.jpg"
import Thumbnail2 from "/public/images/thumbnail2.jpg"
import Thumbnail3 from "/public/images/thumbnail3.jpg"
import Thumbnail4 from "/public/images/thumbnail4.jpg"
import Thumbnail5 from "/public/images/thumbnail5.jpg"
import Thumbnail6 from "/public/images/thumbnail6.jpg"
import Thumbnail7 from "/public/images/thumbnail7.jpg"

import { BsArrowRight, BsArrowLeft } from "react-icons/bs"
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'


export default function Stories() {
    const scrollbar = useRef(null)

    const [isLeft, setIsLeft] = useState(true);

    let isDown = false;
    let startX ;
    let scrollLeft;

    const stories = [
        {
            title: "Xe tăng xuất hiện tại vùng ly khai Ukraine",
            thumbnail_img: Thumbnail1,
            link: "https://vnexpress.net/xe-tang-xuat-hien-tai-vung-ly-khai-ukraine-4430344.html",
        },
        {
            title: "Tổng thống Ukraine nói gì sau quyết định lớn của Nga?",
            thumbnail_img: Thumbnail2,
            link: "https://thanhnien.vn/tong-thong-ukraine-noi-gi-sau-quyet-dinh-lon-cua-nga-post1431828.html",
        },
        {
            title: "Bộ Y tế hướng dẫn 4 bước xử trí khi phát hiện F0 trong trường học",
            thumbnail_img: Thumbnail3,
            link: "https://vietnamnet.vn/vn/suc-khoe/bo-y-te-huo-ng-da-n-4-buo-c-xu-tri-khi-phat-hien-f0-trong-truo-ng-ho-c-817466.html",
        },
        {
            title: "Dự báo thời tiết 22/2: Miền Bắc rét run cầm cập, sắp đón tiếp ...",
            thumbnail_img: Thumbnail4,
            link: "https://vietnamnet.vn/vn/thoi-su/du-bao-thoi-tiet-22-2-mien-bac-ret-run-cam-cap-sap-don-tiep-khong-khi-lanh-817447.html",
        }, 
        {
            title: "Hải Tú mặc đồ của Sơn Tùng, 1 chi tiết lộ rõ chuyện sống chung nhà?",
            thumbnail_img: Thumbnail5,
            link: "https://kenh14.vn/hai-tu-mac-do-cua-son-tung-1-chi-tiet-lo-ro-chuyen-song-chung-nha-20220221120240367.chn",
        },
        {
            title: 'Hóa ra "đồng chí tlinh, lên đồ" đã được học trò Suboi mang lên...',
            thumbnail_img: Thumbnail6,
            link: "https://kenh14.vn/hoa-ra-dong-chi-tlinh-len-do-da-duoc-hoc-tro-suboi-mang-len-rap-viet-tu-tan-2-nam-truoc-20220221094536979.chn",
        },
        {
            title: "Gần 3 triệu học sinh dừng học trực tiếp vì Covid-19",
            thumbnail_img: Thumbnail7,
            link: "https://vnexpress.net/gan-3-trieu-hoc-sinh-dung-hoc-truc-tiep-vi-covid-19-4430282.html",
        }
    ]
  
    return (
        <>
        <div className={Styled.containerStory}>
            <PerfectScrollbar
                onScrollX={(scrbar) => {
                        if (scrbar.scrollLeft==0) {
                            setIsLeft(true)
                        } else {
                            setIsLeft(false)
                        }
                    }     
                }             
                className={`${Styled["scroll-container"]} scroll-container`}
               
                onMouseEnter={() => {
                    let html = window.document.querySelector("html")
                    html.style = "overflow: hidden"
                }}

                onMouseLeave={() => {
                    let html = window.document.querySelector("html")
                    html.style = "overflow: overlay"
                }}

                onWheel={(e) => {
                    let container = window.document.querySelector(".scroll-container")
                    let html = window.document.querySelector("html")
                    html.style
                     
                    if (e.deltaY < 0)
                    {
                        container.scrollLeft -= 20;
                    }
                    else if (e.deltaY > 0)
                    {
                        container.scrollLeft += 20;
                        
                    }
                     
                }}
            >
                {/* content */}
                <div ref={scrollbar} className={Styled["scrollbar"]}>
                    {stories.map((story,i) => (
                        <>
                        <div className={Styled["story"]}>
                            <a onDoubleClick={true} href={story.link}>
                                <Image 
                                    className={Styled["story-image"]} 
                                    src={story.thumbnail_img} 
                                    alt={story.title} 
                                    width={400} height={300} 
                                />
                            </a>
                            <p className={Styled["story-title"]}>{story.title}</p>
                        </div>
                        </>
                    ))}
                </div>               
            </PerfectScrollbar>
             
            <MdOutlineKeyboardArrowRight
                className={Styled["right-pagination"]}
                onClick={() => {
                    let container = window.document.querySelector(".scroll-container");

                    var moveTime;
                    if (container.offsetLeft <= 188) {
                        moveTime = 40;
                    }
                    else {
                        if (container.offsetLeft <= 229) {
                            moveTime = 58;
                        }
                        else moveTime = 76;
                    }
                    
                    const moveInterval = setInterval(() => {          
                        if (moveTime <= 0) clearInterval(moveInterval);
                        else {
                            container.scrollLeft += 5;
                            moveTime -= 1;
                        }
                    }, 5);                  
                }}
            />
            
            <MdOutlineKeyboardArrowLeft
                style={{display: isLeft ? "none" : "block"}}
                className={Styled["left-pagination"]}
                onClick={() => {
                    let container = window.document.querySelector(".scroll-container");

                    var moveTime;
                    if (container.offsetLeft <= 188) {
                        moveTime = 40;
                    }
                    else {
                        if (container.offsetLeft <= 229) {
                            moveTime = 58;
                        }
                        else moveTime = 76;
                    }
                    
                    const moveInterval = setInterval(() => {  
                        
                        if (moveTime <= 0) clearInterval(moveInterval);
                        else {
                            container.scrollLeft -= 5;
                            moveTime -= 1;
                        }
                    }, 5);            
                }}
            /> 
        </div>         
        </>
    )
}
