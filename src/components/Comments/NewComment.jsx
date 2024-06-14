import React, { useState } from 'react'
import Form from '../Form/Form'
import { Rate } from 'antd';
import Button from '../Button/Button';
import { useParams } from 'react-router-dom';
import { getUserData } from "src/helper"
import privateInstance from 'src/api';
import { useDispatch } from 'react-redux';
import "./Comments.scss"
import { addReview } from 'src/redux/reducers/reviewsReducer';

const { user } = getUserData()

const NewComment = () => {
    const dispatch = useDispatch()

    const [text, setText] = useState("");
    const [star, setStar] = useState(1);
    const id = useParams().id

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            star,
            productID: id,
            username: user.username,
            text,
        }
        newReview(data);
        setText("");
        setStar(0);
    };

    const newReview = async (data) => {
        try {
            const res = await privateInstance.post("/api/reviews/", {
                data,
            })
            dispatch(addReview(res.data.data));


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='new-comment-component'>
            <Rate value={star} onChange={setStar} />
            <form onSubmit={handleSubmit} className='input-form'>
                <Form
                    holder={"Write your review about product"}
                    type="text"
                    name="review"
                    value={text}
                    onChange={handleChange} />

                <Button
                    type="submit"
                    variant="outline"
                    size="xs"
                    text="Send"
                />
            </form>
        </div>
    )
}

export default NewComment