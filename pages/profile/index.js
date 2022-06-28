import Layout, {siteTitle} from "../../components/Layout/Layout";
import Head from "next/head";
import Styled from "../../styles/Profile.module.css"
import Image from "next/image"
import Avatar from "../../public/images/avatar.jpg"
import BgImg from "../../public/images/bgImgProfile.jpg"
import Shortcut from "../../components/Shortcut/Shortcut";
import UserProfile from "../../components/UserProfile/UserProfile";
import Header from "../../components/Header/Header";
import BoxChat from "../../components/BoxChat/BoxChat";


export default function Profile() {
    return (
        <>
        <Head>
            <title>{siteTitle} - Profile</title>
        </Head>
        
        <Layout>
            
            <Header /> 

            <Shortcut />

            <UserProfile />

            <BoxChat isShowItemChatBox/>

        </Layout>
        </>
    )
}