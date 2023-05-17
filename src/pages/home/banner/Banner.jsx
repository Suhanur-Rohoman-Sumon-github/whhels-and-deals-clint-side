import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://media.istockphoto.com/id/1316414600/photo/hands-of-little-child-boy-playing-with-multicolored-toy-cars-on-white-wooden-background.jpg?b=1&s=170667a&w=0&k=20&c=sC0rDcF4PZDoOQJzWylvtq4_NoNuIlSp2E5J6sOt__0=" className='w-full h-screen' alt="" />
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className='absolute top-0 left-0 mt-32 ml-20  opacity-70 w-full text-left'>
                        <h1 className='text-5xl  text-white'>The Best Car Toys for Kids</h1>
                        <p className='my-6 text-white'>Car toys are a great way for kids to learn about cars and transportation. <br /> They can help kids develop their motor skills, hand-eye coordination, and problem-solving skills. <br /> There are many different types of car toys available, <br /> so you can find one that is perfect for your child's age and interests.</p>
                        <button className="btn btn-error">Error</button>
                        <button className="btn btn-outline btn-error ml-4">Error</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://media.istockphoto.com/id/1346110565/photo/car-accident-insurance-safety.jpg?b=1&s=170667a&w=0&k=20&c=MmWJZLl0PhVRZvha8VEnjmQzSvi-D6T9A83G2WIVUH0=" className='w-full h-screen' alt="" />
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className='absolute top-0 left-0 mt-32 ml-20  opacity-70 w-full text-left'>
                        <h1 className='text-5xl  text-white'>Car Toys That Teach Kids About Science</h1>
                        <p className='my-6 text-white'>Car toys can also be used to teach kids about science. For example, toy cars can be used to teach kids about physics, <br /> such as how force and motion affect the movement of objects. <br /> Toy trucks can be used to teach kids about engineering, such as how different types of materials can be used to build structures. <br /> Toy trains can be used to teach kids about geography, such as how different types of terrain can affect the movement of trains. <br /> Toy race cars can be used to teach kids about aerodynamics, such as how the shape of an object can affect its speed. <br /> Toy remote control cars can be used to teach kids about electronics, such as how electricity can be used to power motors.</p>
                        <button className="btn btn-error">Error</button>
                        <button className="btn btn-outline btn-error ml-4">Error</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://media.istockphoto.com/id/1363867603/photo/toy-car.jpg?b=1&s=170667a&w=0&k=20&c=2jM5S-LYyQUezLRZnLnJHL0pJBRHWHdUKWFiYf3fbjM=" className='w-full h-screen' alt="" />
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className='absolute top-0 left-0 mt-32 ml-20  opacity-70 w-full text-left'>
                        <h1 className='text-5xl  text-white'>Car Toys That Help Kids Develop Their Motor Skills</h1>
                        <p className='my-6 text-white'>Car toys can also help kids develop their motor skills. <br /> For example, toy cars that require kids to push or pull them can help kids develop their gross motor skills. <br /> Toy cars that require kids to use their hands to manipulate them can help kids develop their fine motor skills.</p>
                        <button className="btn btn-error">Error</button>
                        <button className="btn btn-outline btn-error ml-4">Error</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://media.istockphoto.com/id/1451103279/photo/miniature-car-model-flying-in-antigravity-on-gray-background-with-shadow-levitation-object-in.jpg?b=1&s=170667a&w=0&k=20&c=w85rcJ78hkmr-6UfrAI8AXOABtZH4vWeGzRfD6fDrYQ=" className='w-full h-screen' alt="" />
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className='absolute top-0 left-0 mt-32 ml-20  opacity-70 w-full text-left'>
                        <h1 className='text-5xl  text-white'>Car Toys That Are Fun for All Ages</h1>
                        <p className='my-6 text-white'>Car toys are fun for all ages. <br /> Kids of all ages will enjoy playing with car toys. <br /> Car toys can be used to promote creativity, imagination, and problem-solving skills. <br /> They can also be used to teach kids about different cultures and time periods.</p>
                        <button className="btn btn-error">Error</button>
                        <button className="btn btn-outline btn-error ml-4">Error</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://media.istockphoto.com/id/1410043516/photo/three-small-rolling-toy-cars-on-blue-background.jpg?b=1&s=170667a&w=0&k=20&c=Wm7tsg-z1d2hmDr8HBW_zDx39povjKz1vSf54wL5UNA=" className='w-full h-screen' alt="" />
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className='absolute top-0 left-0 mt-32 ml-20  opacity-70 w-full text-left'>
                        <h1 className='text-5xl  text-white'>Car Toys That Are a Great Value</h1>
                        <p className='my-6 text-white'>Car toys are a great value. They are relatively inexpensive and they can provide hours of entertainment. <br /> Car toys are also a great way to encourage kids to be creative and to learn about the world around them.</p>
                        <button className="btn btn-error">Error</button>
                        <button className="btn btn-outline btn-error ml-4">Error</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;