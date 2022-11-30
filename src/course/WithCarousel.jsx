import React from 'react'

import Slider from "react-slick";
import userImg from "./../images/userimg.jpg"
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const commentsData = [
  {
    profileImgSrc: userImg,
    userName: "Ashikur Rahman",
    comment: "প্রবলেম ফেস করলে মেন্টর সাপোর্ট ও ব্যাচের অন্যান্য স্টুডেন্টদের থেকে সাপোর্ট পেয়েছি। স্পেশালি ইন্সট্রাক্টরের কথা না বললেই নয়, আমি সীমান্ত পাল ভাইয়াকে একটা প্রবলেমের জন্য ১২/১৩ বার নক করেছি, উনি বিষয়টি বিস্তারিত আমাকে বুঝিয়েছেন। এছাড়া কোর্স কন্টেন্টগুলো সুন্দর করে সাজানো এবং প্রত্যেকটা বিষয় বিস্তারিত বর্ণনা করা হয়েছে।",

  },
  
  {
    profileImgSrc: userImg,
    userName: "Touhedur Rahman",
    comment: "সাজানো এবং প্রত্যেকটা বিষয় বিস্তারিত বর্ণনা করা হয়েছে। প্রবলেম ফেস করলে মেন্টর সাপোর্ট ও ব্যাচের অন্যান্য স্টুডেন্টদের থেকে সাপোর্ট পেয়েছি। স্পেশালি ইন্সট্রাক্টরের কথা না বললেই নয়, আমি সীমান্ত পাল ভাইয়াকে একটা প্রবলেমের জন্য ১২/১৩ বার নক করেছি, উনি বিষয়টি বিস্তারিত আমাকে বুঝিয়েছেন। এছাড়া কোর্স কন্টেন্টগুলো সুন্দর করে সাজানো এবং প্রত্যেকটা বিষয় বিস্তারিত বর্ণনা করা হয়েছে।,প্রবলেম ফেস করলে মেন্টর সাপোর্ট ও ব্যাচের অন্যান্য স্টুডেন্টদের থেকে সাপোর্ট পেয়েছি। স্পেশালি ইন্সট্রাক্টরের কথা না বললেই নয় |"

  }
  
]
const settings = {
  dots: true,
      // infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
      pauseOnDotsHover:"true", 
      pauseOnFocus: "true",
      autoplay:'true',
      adaptiveHeight:"true",
      // useCSS: 'true',
      // useTransform: 'true'
      


}
const WithCarousel = () => {
  return (
    <div className='carosol'>
      <Slider {...settings} className='cro'  >
    {commentsData.map((comment)=> {
      return(

    <div className='carosel__div'>
      <div className='carosel__div__top'>
        <FormatQuoteIcon sx={{
          rotate: "180deg",
          color: "#175fb6" ,
          fontSize: "3rem",
          // fontWeight: "700"
        }}  />
      </div>
      <div className='carosel__div__middle'>
        <p>
          {comment.comment}
        </p>
      </div>
      <div className='carosel__div__bottom'>
        <div className='user__profile__img'>
          <img alt={'user img'} src={comment.profileImgSrc} />
        </div>
        <div className='user__profile__name'>
          <span>{comment.userName}</span>
        </div>
      </div>
    </div>

)
})}
</Slider>
    </div>
  )
}

export default WithCarousel