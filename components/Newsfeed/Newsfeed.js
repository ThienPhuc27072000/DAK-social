import Link from 'next/link';
import Styled from './Newsfeed.module.css'
import React, { useState, useEffect, useRef } from 'react'
import FormCreatePost from '../FormCreatePost/FormCreatePost'
import Stories from './Stories/Stories'
import { useSelector } from 'react-redux'
import { listPostSelector } from '../../redux/selectors';
import PostItem from './PostItem/PostItem';
import PopupStory from './PopupStory/PopupStory'
import LazyLoad from "react-lazyload";


export const siteTitle = "Personal Dak";

export default function Newsfeed() {
    // Handle show form create post
    const [showFormCreatePost, setShowFormCreatePost] = useState(false);
    const openFormCreatePost = () => {
        setShowFormCreatePost(prev => !prev)
    }

    const [showPopupStory, setShowPopupStory] = useState(false)
    const openPopupStory = () => {
        setShowPopupStory(prev => !prev)
    }
    
    // Start handle sticky nav 
    const [sticky, setSticky] = useState(false);
    const controlNav = () => {
        if(window.scrollY > 370) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }
    useEffect(() => {   
        window.addEventListener('scroll', controlNav)
        return () => {
            window.removeEventListener('scroll', controlNav)
        }
    }, [])
    // End handle sticky nav

    const listPost = useSelector(listPostSelector)
    console.log({listPost})

    return (
        <>  
        <PopupStory showModalStory={showPopupStory} setShowModalStory={setShowPopupStory} />
        <FormCreatePost showModal={showFormCreatePost} setShowModal={setShowFormCreatePost} />
        <div className={Styled.newsfeed}>
            <div className={Styled.newsfeedStory}>
                <Stories />
            </div>
            {/* Nav chọn tab của Newsfeed bản tin */}
            <div className={`${Styled["nav_of_newsfeed"]} ${sticky && Styled["is_Sticky"]}`}>          
                <ul className={Styled.nav_of_newsfeed_list}>
                    <li className={Styled.nav_of_newsfeed_item}>
                        <Link href="/">
                            <a className={Styled.nav_item_transfer_link}> Phổ biến </a>
                        </Link>
                    </li>
                    <li className={Styled.nav_of_newsfeed_item}>
                        <Link href="/">
                            <a className={Styled.nav_item_transfer_link}> Mới nhất </a>
                        </Link>
                    </li>
                    <li className={Styled.nav_of_newsfeed_item}>
                        <Link href="/">
                            <a className={Styled.nav_item_transfer_link}> Xem nhiều nhất </a>     
                        </Link>
                    </li>
                    <li className={Styled.nav_of_newsfeed_item}>
                        {/* <Link href="/"> */}
                            <div className={Styled.nav_item_transfer_link} onClick={openPopupStory}> Story </div>     
                        {/* </Link> */}
                        
                    </li>
                    <li className={Styled.nav_of_newsfeed_item}>
                        <button className={Styled.btn_create_post} 
                                onClick={openFormCreatePost}
                        >
                            Tạo bài viết
                        </button>
                    </li>
                </ul>
            </div>

            {/*  */}
            <div className={Styled.listNewsFeed}>
                <div className={Styled.listNewFeedLeft}>
                    {listPost.map(post => <> 
                        <LazyLoad
                            key={post.id}
                            height={100}
                            offset={[-100, 0]}
                            placeholder={<div><h1>Loading...</h1></div>}
                        >
                            <PostItem key={post.id} content={post.content} link={post.link} />
                        </LazyLoad>
                    </> )}
                </div>
                <div className={Styled.listNewFeedRight}>
                    {/* <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
                        <LoadingPosts />
                    </div> */}
                </div>
            </div>
        </div>        
        </>
    )
}