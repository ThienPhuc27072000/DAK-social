
import Image from 'next/image';
import { useSpring, animated } from 'react-spring';
import Stories from '../Stories/Stories'
import Styled from './PopupStory.module.css'
import React, { useState, useRef } from 'react'
import {MdClose} from "react-icons/md"

export default function PopupStory({showModalStory, setShowModalStory}) {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 200
        }, opacity: showModalStory ? 1 : 0, 
        transform: showModalStory ? 'translateY(0%)' : `translateY(100%)`
    })

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModalStory(false)
        }
    };

    return(
    <>
        {showModalStory &&      
            <div className={Styled.overlayPopupStory} ref={modalRef} onClick={closeModal}>
                <animated.div style={animation}>
                    <div className={Styled.formShowStory}>
                        <div className={Styled.headerStory}>
                            <h1 className={Styled.titlePopupStory}>Story</h1>
                            <button className={Styled.btnClosePopupStory} 
                                    onClick={() => setShowModalStory(prev => !prev)}
                            >
                                <MdClose className={Styled.fixIconClose} />
                            </button>
                        </div>    
                        <Stories test={1}/>
                    </div>
                </animated.div>
            </div> 
        }
        </>
    );
}