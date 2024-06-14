import React, { useEffect } from 'react'
import { Rate } from 'antd';
import "./Comments.scss"
import userImg from 'src/assets/Frame3.png'
import NewComment from './NewComment';
import { useParams } from 'react-router-dom';
import { getReviews } from 'src/redux/actions/reviews';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from "src/helper";


export const Comments = () => {
    const id = useParams().id
    const dispatch = useDispatch()
    const reviews = useSelector((state) => state.reviews)
    const comments = reviews?.data;
    const { jwt } = getUserData();

    useEffect(() => {
        dispatch(getReviews(id))
    }, [id, dispatch])

    return (
        <div className='comments-component'>
            {comments.map((comment) => (
                <div key={comment.id} className='comment-container'>
                    <Rate disabled defaultValue={comment?.attributes?.star} />
                    <h2 className='comment'>{comment?.attributes?.text}</h2>
                    <p className='comment-date'>July 2, 2020 03:29 PM</p>
                    <div className='info-and-likes'>
                        <div className='users-info'>
                            <img src={userImg} className='user-img' />
                            <p className='user-name'>{comment?.attributes?.username}</p>
                        </div>
                        <div className='like-dislike-btns'>
                            <button className='like-btn'>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_148_8374)">
                                        <path d="M7.98047 18.3502L11.0805 20.7502C11.4805 21.1502 12.3805 21.3502 12.9805 21.3502H16.7805C17.9805 21.3502 19.2805 20.4502 19.5805 19.2502L21.9805 11.9502C22.4805 10.5502 21.5805 9.3502 20.0805 9.3502H16.0805C15.4805 9.3502 14.9805 8.8502 15.0805 8.1502L15.5805 4.9502C15.7805 4.0502 15.1805 3.0502 14.2805 2.7502C13.4805 2.4502 12.4805 2.8502 12.0805 3.4502L7.98047 9.5502" stroke="#0B0F0E" strokeWidth="1.5" strokeMiterlimit="10" />
                                        <path d="M2.87988 18.3502V8.5502C2.87988 7.1502 3.47988 6.6502 4.87988 6.6502H5.87988C7.27988 6.6502 7.87988 7.1502 7.87988 8.5502V18.3502C7.87988 19.7502 7.27988 20.2502 5.87988 20.2502H4.87988C3.47988 20.2502 2.87988 19.7502 2.87988 18.3502Z" stroke="#0B0F0E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_148_8374">
                                            <rect width="24" height="24" fill="white" transform="translate(0.5 0.000198364)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span>1</span>
                            </button>
                            <button className='dislike-btn'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_61_3790)">
                                        <path d="M7.48047 5.65012L10.5805 3.25012C10.9805 2.85012 11.8805 2.65012 12.4805 2.65012H16.2805C17.4805 2.65012 18.7805 3.55012 19.0805 4.75012L21.4805 12.0501C21.9805 13.4501 21.0805 14.6501 19.5805 14.6501H15.5805C14.9805 14.6501 14.4805 15.1501 14.5805 15.8501L15.0805 19.0501C15.2805 19.9501 14.6805 20.9501 13.7805 21.2501C12.9805 21.5501 11.9805 21.1501 11.5805 20.5501L7.48047 14.4501" stroke="#0B0F0E" strokeWidth="1.5" strokeMiterlimit="10" />
                                        <path d="M2.37988 5.65012V15.4501C2.37988 16.8501 2.97988 17.3501 4.37988 17.3501H5.37988C6.77988 17.3501 7.37988 16.8501 7.37988 15.4501V5.65012C7.37988 4.25012 6.77988 3.75012 5.37988 3.75012H4.37988C2.97988 3.75012 2.37988 4.25012 2.37988 5.65012Z" stroke="#0B0F0E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_61_3790">
                                            <rect width="24" height="24" fill="white" transform="matrix(1 0 0 -1 0 24.0001)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            {jwt && <NewComment />}


        </div>
    )
}
