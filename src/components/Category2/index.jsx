import React from 'react'
import Images from "../../assets/erkek.jpg"
import Image from "../../assets/kadin.jpg"


const Category2 = () => {
    return (
        <div className='container max-w-[1420px] w-full mx-auto'>
            <div className='mt-5 flex items-center justify-between md:w-full w-[90%] mx-auto '>
                <a href="#" className='w-[48%]'><img src={Image}  alt="" /></a>
                <a href="#"className='w-[48%]' ><img src={Images} alt="" /></a>
            </div>
        </div>)
}

export default Category2