import React from 'react'
import { Link } from 'react-router-dom'

const BottomSticky = () => {
  return (
    <div className="sticky__bottom">
                 <div className='coures__pricing priceing'>
                 মূল্য:<span>৳ ৭,০০০</span>
                </div>
                    <div className="coures__pricing admission_now">
                    <Link role={"button"}><span>এখনই ভর্তি হোন <text className='btn__amount'>(৳ ৭,০০০)</text> </span></Link>
                    </div>
                    <div className="coures__pricing download__syllabus">
                    <Link role={"button"}> <span>ডাউনলোড সিলেবাস</span></Link>
                    </div>
                </div> 
  )
}

export default BottomSticky