import React from 'react';
import { Progress as ProgressBar } from 'antd';
import { useSelector } from 'react-redux';
import "./Progress.scss"
import StarImg from 'src/assets/star.png'

const Progress = () => {
    const reviews = useSelector((state) => state.reviews.data)
    const fiveStarCount = reviews.filter(review => review?.attributes?.star === 5).length;
    const fourstarCount = reviews.filter(review => review?.attributes?.star === 4).length;
    const threeStarCount = reviews.filter(review => review?.attributes?.star === 3).length;
    const twoStarCount = reviews.filter(review => review?.attributes?.star === 2).length;
    const oneStarCount = reviews.filter(review => review?.attributes?.star === 1).length;
    let fiveStarPercent = parseInt(fiveStarCount / reviews.length * 100);
    let fourStarPercent = parseInt(fourstarCount / reviews.length * 100);
    let threeStarPercent = parseInt(threeStarCount / reviews.length * 100);
    let twoStarPercent = parseInt(twoStarCount / reviews.length * 100);
    let oneStarPercent = parseInt(oneStarCount / reviews.length * 100);
    return (
        <>
            <div className='flex-bar'><span>5.0 <img src={StarImg} /></span><ProgressBar percent={fiveStarPercent} /></div>
            <div className='flex-bar'><span>4.0 <img src={StarImg} /></span><ProgressBar percent={fourStarPercent} /></div>
            <div className='flex-bar'><span>3.0 <img src={StarImg} /></span><ProgressBar percent={threeStarPercent} /></div>
            <div className='flex-bar'><span>2.0 <img src={StarImg} /></span><ProgressBar percent={twoStarPercent} /></div>
            <div className='flex-bar'><span>1.0 <img src={StarImg} /></span><ProgressBar percent={oneStarPercent} /></div>
        </>
    )
}

export default Progress
