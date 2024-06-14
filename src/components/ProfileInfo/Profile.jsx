import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { modalContext } from "../../context/ModalProvider";
import "src/components/ProfileInfo/Profile.scss"
import { storeUser } from "src/helper";
import profileImg from "src/assets/Frame3.png"
import { getUserData } from "src/helper"

const { user } = getUserData()

const Profile = () => {
    const { setIsActive, isActive } = useContext(modalContext);
    
    return (
        
            <div className={`${isActive ? 'profile-details' : 'hide-profile'}`}>
                <div className='user-info'>
                    <img src={profileImg} />
                    <div className='user-name-email'>
                        <span className="username">{user?.username}</span>
                        <span className="user-gmail">{user?.email}</span>
                    </div>
                </div>
                <div className="user-options">
                    <div className="wallet-contains">
                        <span className="wallet">Wallet</span>
                        <div className="balance-info">
                            <div className="balance-name">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.3 7.91998V13.07C19.3 16.15 17.54 17.47 14.9 17.47H6.10995C5.65995 17.47 5.22996 17.43 4.82996 17.34C4.57996 17.3 4.33996 17.23 4.11996 17.15C2.61996 16.59 1.70996 15.29 1.70996 13.07V7.91998C1.70996 4.83998 3.46995 3.52002 6.10995 3.52002H14.9C17.14 3.52002 18.75 4.47001 19.18 6.64001C19.25 7.04001 19.3 7.44998 19.3 7.91998Z" stroke="#0B0F0E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22.3011 10.9201V16.0701C22.3011 19.1501 20.5411 20.4701 17.9011 20.4701H9.11105C8.37105 20.4701 7.70106 20.3701 7.12106 20.1501C5.93106 19.7101 5.12105 18.8001 4.83105 17.3401C5.23105 17.4301 5.66105 17.4701 6.11105 17.4701H14.9011C17.5411 17.4701 19.3011 16.1501 19.3011 13.0701V7.9201C19.3011 7.4501 19.2611 7.03014 19.1811 6.64014C21.0811 7.04014 22.3011 8.38011 22.3011 10.9201Z" stroke="#0B0F0E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.4984 13.1399C11.9564 13.1399 13.1384 11.9579 13.1384 10.4999C13.1384 9.04185 11.9564 7.85986 10.4984 7.85986C9.04038 7.85986 7.8584 9.04185 7.8584 10.4999C7.8584 11.9579 9.04038 13.1399 10.4984 13.1399Z" stroke="#0B0F0E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.77997 8.30005V12.7001" stroke="#0B0F0E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16.2217 8.30029V12.7003" stroke="#0B0F0E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Lenny Balance</span>
                            </div>
                            <span>0$</span>
                        </div>
                        <div className="balance-info">
                            <div className="balance-name">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 11.4C8 12.17 8.6 12.8 9.33 12.8H10.83C11.47 12.8 11.99 12.25 11.99 11.58C11.99 10.85 11.67 10.59 11.2 10.42L8.8 9.57995C8.32 9.40995 8 9.14995 8 8.41995C8 7.74995 8.52 7.19995 9.16 7.19995H10.66C11.4 7.20995 12 7.82995 12 8.59995" stroke="#0B0F0E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 12.85V13.59" stroke="#0B0F0E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 6.41003V7.19003" stroke="#0B0F0E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.99 17.98C14.4028 17.98 17.98 14.4028 17.98 9.99C17.98 5.57724 14.4028 2 9.99 2C5.57724 2 2 5.57724 2 9.99C2 14.4028 5.57724 17.98 9.99 17.98Z" stroke="#0B0F0E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.98 19.88C13.88 21.15 15.35 21.98 17.03 21.98C19.76 21.98 21.98 19.76 21.98 17.03C21.98 15.37 21.16 13.9 19.91 13" stroke="#0B0F0E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Lenny Coins</span>
                            </div>
                            <span>0</span>
                        </div>

                    </div>
                    <div className="menu-links">
                        <span className="menu">Menu</span>
                        <div className="purchase-link menu-link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z" stroke="#0B0F0E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z" stroke="#0B0F0E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 13.01H12" stroke="#0B0F0E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 9.01001H12" stroke="#0B0F0E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5.99561 13H6.00459" stroke="#0B0F0E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5.99561 9H6.00459" stroke="#0B0F0E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <Link>Purchase</Link>
                        </div>
                        <div className="wishlist-link menu-link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z" stroke="#0B0F0E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <Link>Wishlist</Link>
                        </div>
                        <div className="settings-link menu-link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#0B0F0E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 12.8801V11.1201C2 10.0801 2.85 9.22006 3.9 9.22006C5.71 9.22006 6.45 7.94006 5.54 6.37006C5.02 5.47006 5.33 4.30006 6.24 3.78006L7.97 2.79006C8.76 2.32006 9.78 2.60006 10.25 3.39006L10.36 3.58006C11.26 5.15006 12.74 5.15006 13.65 3.58006L13.76 3.39006C14.23 2.60006 15.25 2.32006 16.04 2.79006L17.77 3.78006C18.68 4.30006 18.99 5.47006 18.47 6.37006C17.56 7.94006 18.3 9.22006 20.11 9.22006C21.15 9.22006 22.01 10.0701 22.01 11.1201V12.8801C22.01 13.9201 21.16 14.7801 20.11 14.7801C18.3 14.7801 17.56 16.0601 18.47 17.6301C18.99 18.5401 18.68 19.7001 17.77 20.2201L16.04 21.2101C15.25 21.6801 14.23 21.4001 13.76 20.6101L13.65 20.4201C12.75 18.8501 11.27 18.8501 10.36 20.4201L10.25 20.6101C9.78 21.4001 8.76 21.6801 7.97 21.2101L6.24 20.2201C5.33 19.7001 5.02 18.5301 5.54 17.6301C6.45 16.0601 5.71 14.7801 3.9 14.7801C2.85 14.7801 2 13.9201 2 12.8801Z" stroke="#0B0F0E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <Link>Settings</Link>
                        </div>
                    </div>
                    <button onClick={() => {
                        storeUser("")
                        setIsActive(false)
                    }} className="sign-out-profile">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.44 14.62L20 12.06L17.44 9.5" stroke="#E04124" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.76001 12.0601H19.93" stroke="#E04124" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.76 20C7.34001 20 3.76001 17 3.76001 12C3.76001 7 7.34001 4 11.76 4" stroke="#E04124" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Sign Out</button>
                </div>
            </div>
    )
}

export default Profile