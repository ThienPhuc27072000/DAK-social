import Image from 'next/image';
import Styled from './FormCreatePost.module.css';
import InputContentPost from "./InputContentPost/InputContentPost";
import Avatar from '../../public/images/avatar.jpg'
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { useRouter } from 'next/router'
import { IoEarth, IoClose } from 'react-icons/io5';
import { AiFillCaretDown, AiOutlineLink, AiOutlineGlobal } from "react-icons/ai";
import { FaPaste, FaUserPlus, FaAngleLeft, FaSearch} from "react-icons/fa";
import { RiGitRepositoryPrivateLine } from "react-icons/ri"
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/actions'
import { v4 as uuidv4 } from 'uuid'
import Editor, { createEditorStateWithText, EditorState } from '@draft-js-plugins/editor';
import createHashtagPlugin from '@draft-js-plugins/hashtag';
import createLinkifyPlugin from "@draft-js-plugins/linkify";
// import EditorStyles from './InputContentPost.module.css';
import HashtagStyles from './HashtagStyles.module.css';
const hashtagPlugin = createHashtagPlugin({ theme: HashtagStyles });
// const plugins = [hashtagPlugin];
// const hashtagPlugin = createHashtagPlugin();
const linkifyPlugin = createLinkifyPlugin();
const plugins = [linkifyPlugin, hashtagPlugin];

const text = `#TIL: This editor can have all sorts of #hashtags. Pretty #cool :)
Try it yourself by starting a word with a # (hash character) …
`;
import { convertToHTML } from 'draft-convert';

export default function FormCreatePost({showModal, setShowModal}) {
    const modalRef = useRef();
    const [titlePopup, setTitlePopup] = useState("Đăng bài");
    const [openInputLink, setOpenInputLink] = useState(false); 
    const [openFormCreatePost, setOpenFormCreatePost] = useState(true); 
    const [openFormTagUsers, setOpenFormTagUsers] = useState(false); 
    const [openFormChangePermission, setOpenFormChangePermission] = useState(false)
    const [listUsers, setListUsers] = useState([
        {
            id: 1,
            avt: "https://cdn.pixabay.com/photo/2012/06/08/06/19/clouds-49520_1280.jpg",
            name: "Huỳnh Đăng Khoa 1",
            active: false
        },{
            id: 2,
            avt: "https://cdn.pixabay.com/photo/2012/06/08/06/19/clouds-49520_1280.jpg",
            name: "Huỳnh Đăng Khoa 2",
            active: false
        },{
            id: 3,
            avt: "https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/photos/term-bg-1-c98135712157fb21286eafd480f610f9.jpg",
            name: "Huỳnh Đăng Khoa 3",
            active: false
        },{
            id: 4,
            avt: "https://cdn.pixabay.com/photo/2012/06/08/06/19/clouds-49520_1280.jpg",
            name: "Huỳnh Đăng Khoa 4",
            active: false
        },{
            id: 5,
            avt: "https://cdn.pixabay.com/photo/2012/06/08/06/19/clouds-49520_1280.jpg",
            name: "Huỳnh Đăng Khoa 5",
            active: false
        },{
            id: 6,
            avt: "https://cdn.pixabay.com/photo/2012/06/08/06/19/clouds-49520_1280.jpg",
            name: "Huỳnh Đăng Khoa 6",
            active: false
        },
    ]); 
    const router = useRouter()

    const dispatch = useDispatch();

    const animation = useSpring({
        config: {
            duration: 200
        }, opacity: showModal ? 1 : 0, 
        transform: showModal ? 'translateY(0%)' : `translateY(100%)`
    })

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    };

    const handleShowInputLink = () => {
        setOpenInputLink(!openInputLink);
    }

    const handleShowFormTagUsers = () => {
        setTitlePopup("Tags bạn bè");
        setOpenFormCreatePost(!openFormCreatePost);
        setOpenFormTagUsers(!openFormTagUsers);
    }

    const handlePassPreForm = () => {
        setTitlePopup("Đăng bài");
        setOpenFormCreatePost(true);
        setOpenFormTagUsers(false);
        setOpenFormChangePermission(false)
    }

    const handleAddUserTag = (event, id, action) => {
        for (var i = 0; i < listUsers.length; i++) {
            if (listUsers[i].id === id) {
                setListUsers([...listUsers], listUsers[i].active = action);
                break;
            }
        }
    }

    const handleShowFormChangePermission = () => {
        setTitlePopup("Thay đổi quyền riêng tư")
        setOpenFormChangePermission(true)
        setOpenFormCreatePost(false);
        setOpenFormTagUsers(false);
    }

    // const [editorState, setEditorState] = useState(() => EditorState.createEmpty(),);        
    const [contentPost, setContentPost] = useState('')
    const [permission, setPermission] = useState("Everyone")
    const [linkPath, setLinkPath] = useState('')
    const focusInput = useRef(null)

    const handleInputChange = (e) => {
        // let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
        // setEditorState(currentContentAsHTML);
        // setEditorState(editorState.getCurrentContent());
        setContentPost(e.target.value)
        // setContentPost(contentPost)
        // setContentPost(editorState)
    }

    const handleLinkInputChange = (e) => {
        setLinkPath(e.target.value)
    }

    const handlePermissionChange = () => {
        setPermission(permission)
        console.log(permission)
    }

    const handleAddPostClick = () => {
        dispatch(addPost({
            id: uuidv4(),
            content: contentPost,
            // content: editorState,
            link: linkPath,
            permission: permission,
            tagFriend: []
        }))
        setShowModal(false)
        setContentPost('')
        // setEditorState('')
        setLinkPath('')
        router.push('/')
    }

    return(
        <>
        {showModal &&      
            <div className={Styled.overlayFormCreatePost} ref={modalRef} onClick={closeModal}>
                <animated.div style={animation}>
                    <div className={Styled.formCreatePost} showModal={showModal}>
                        <div className={Styled.formHeader}>
                            <h2 className={Styled.formTitle}>{titlePopup}</h2>
                            <button className={Styled.btnGetOut} 
                                    onClick={() => setShowModal(prev => !prev)}
                            >
                                <i className="fa-solid fa-x"></i>
                            </button>
                        </div>
                        <div className={Styled.formBody}>
                            { openFormCreatePost &&
                                <div className={Styled.createPost}>
                                    <div className={Styled.avtAndName}>
                                        <img className={Styled.avt} src={"https://cdn.pixabay.com/photo/2012/06/08/06/19/clouds-49520_1280.jpg"}/>
                                        <h2 className={Styled.name} >Huỳnh Đăng Khoa</h2>
                                        <div className={Styled.viewingRights} onClick={handleShowFormChangePermission}>
                                            <IoEarth className={Styled.iconViewingRights} />
                                            <AiFillCaretDown className={Styled.iconDown}/>
                                        </div>
                                    </div>
                                    <div className={Styled.inputLinkAndContent}>
                                        <InputContentPost value={contentPost} onChange={handleInputChange} 
                                            editorState={contentPost}
                                        />

                                        {/* <div className={Styled.editor}>
                                            <Editor
                                                editorState={editorState}
                                                onEditorStateChange={setEditorState}
                                                value={editorState}  
                                                onChange={handleInputChange}
                                                plugins={plugins}
                                                ref={focusInput}
                                            />
                                        </div> */}

                                        <input 
                                            type="text" 
                                            placeholder={text} 
                                            value={contentPost}
                                            onChange={handleInputChange}
                                        />
                                        {/* <InputContentPost value={contentPost} onChangeEditor={handleInputChange} /> */}

                                        {/* <div className={Styled.editor}>
                                            <Editor
                                                editorState={editorState}
                                                onEditorStateChange={setEditorState}
                                                value={contentPost}  
                                                onChange={handleInputChange}
                                                plugins={plugins}
                                                ref={focusInput}
                                            />
                                        </div> */}

                                        {openInputLink && 
                                            <div className={Styled.boxInputLink}>
                                                <input className={Styled.inputLink} placeholder={"Dán link bài viết ở đây"}
                                                    value={linkPath} onChange={handleLinkInputChange} 
                                                />
                                                <button className={Styled.btnPasteLink}>
                                                    <FaPaste className={Styled.iconPasteLink}/>
                                                </button>
                                            </div>
                                        }
                                        <div className={Styled.boxFunctionAndBtnPost}>
                                            <div className={Styled.boxFunction}>
                                                <AiOutlineLink className={Styled.iconFunction} onClick={handleShowInputLink}/>
                                                <FaUserPlus className={Styled.iconFunction} onClick={handleShowFormTagUsers}/>
                                            </div>
                                            <div className={Styled.boxBtnPost}>
                                                <button className={Styled.btnPost} 
                                                        onClick={handleAddPostClick}
                                                >Đăng</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }

                            {openFormChangePermission &&
                                <div className={Styled.formChoosePermission}>
                                    <div className={Styled.pass} onClick={(event) => handlePassPreForm(event)}>
                                        <FaAngleLeft className={Styled.iconPass} />
                                        <h4 className={Styled.titleFormPost}>Đăng bài</h4>
                                    </div>
                                    <form className={Styled.areaChoosePermission}>
                                        <div className={Styled.areaPress}>
                                            <AiOutlineGlobal className={Styled.iconPermission}/>
                                            <label className={Styled.choosePermission}> 
                                                Mọi người
                                                <input className={Styled.inputChoose} 
                                                    type="radio" value="Everyone" 
                                                    name="permission" checked
                                                    onChange={handlePermissionChange} 
                                                /> 
                                            </label>
                                        </div>
                                        <div className={Styled.areaPress}>
                                            <RiGitRepositoryPrivateLine />
                                            <label className={Styled.choosePermission}> 
                                                Chỉ mình tôi
                                                <input className={Styled.inputChoose} 
                                                    type="radio" value="Alone" 
                                                    name="permission" 
                                                    onChange={handlePermissionChange}
                                                />                                           
                                            </label>
                                        </div>
                                        {/* <button className={Styled.btnSavePermission}> Lưu </button> */}
                                    </form>
                                </div>
                            }

                            {openFormTagUsers &&
                                <div className={Styled.formTagsUser}>
                                    <div className={Styled.pass} onClick={(event) => handlePassPreForm(event)}>
                                        <FaAngleLeft className={Styled.iconPass} />
                                        <h4 className={Styled.titleFormPost}>Đăng bài</h4>
                                    </div>
                                
                                    <div className={Styled.boxInputSearch}>
                                        <input className={Styled.inputSearch} placeholder="Tìm kiếm bạn bè ..."/>
                                        <FaSearch className={Styled.buttonSearch}/>
                                    </div>

                                    <div className={Styled.taggedUserList}>
                                        <p className={Styled.title}>Tags: </p>
                                        {
                                            listUsers.map(user => (user.active &&
                                                <div className={Styled.user} 
                                                    onClick={(event) => handleAddUserTag(event, user.id, false)}
                                                >
                                                    <h2 className={Styled.name} >{user.name}</h2>
                                                    <IoClose className={Styled.close} 
                                                        onClick={(event) => handleAddUserTag(event, user.id, false)}
                                                    />
                                                </div>                                          
                                            ))
                                        }                                        
                                    </div>

                                    <div className={Styled.usersSearchResults}>
                                        {
                                            listUsers.map((user) => (
                                                <div className={Styled.user} key={user.id}>
                                                    <img className={Styled.avt} src={user.avt}/>
                                                    <h2 className={Styled.name} 
                                                        onClick={(event) => handleAddUserTag(event, user.id, !user.active)}
                                                    >
                                                        {user.name}
                                                    </h2>
                                                    <div className={`${user.active && Styled.checkBox} 
                                                                    ${user.active && Styled.checkBox2} 
                                                                    ${!user.active && Styled.checkBox3}`} 
                                                        onClick={(event) => handleAddUserTag(event, user.id, !user.active)}>    
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </animated.div>
            </div> 
        }
        </>
    );
}