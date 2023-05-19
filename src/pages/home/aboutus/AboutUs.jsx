import React, { } from 'react';



const AboutUs = () => {
    
    return (
        <div className="hero min-h-screen  bg-gray-300">
            <div data-aos="fade-up" className="hero-content flex-col lg:flex-row ">
                <div className='lg:w-1/2 relative'>
                    <img src="https://thumbs.dreamstime.com/b/sport-car-toy-12456033.jpg" className="w-64 md:w-80 rounded-lg shadow-2xl" />
                    <img src="https://media.istockphoto.com/id/620006890/photo/toy-car-truck.jpg?s=612x612&w=0&k=20&c=m4UBEwLfrG55Zc0S7Y2mbqMraIm9JtzOp_u5tEeNe6U=" className=" w-64 md:w-80 rounded-lg shadow-2xl border  border-gray-700 border-spacing-20 absolute  top-20 left-11 md:left-52" />
                </div>
                <div data-aos="fade-up" className='lg:w-1/2 mt-24 lg:mt-0'>
                    <h1 className='text-orange-500 text-2xl py-4'>About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">Car toys are a great way for kids to learn about cars and transportation. They can help kids develop their motor skills, hand-eye coordination, and problem-solving skills. There are many different types of car toys available, so you can find one that is perfect for your child's age and interests.

                        Some popular car toys include: </p>
                    <p>Toy cars: Toy cars come in all shapes and sizes, from small toy cars that fit in your hand to large toy cars that kids can sit in and drive.
                        Toy trucks: Toy trucks are another popular type of car toy. They can be used to haul cargo or to help kids learn about construction.
                        Toy trains: Toy trains are a classic car toy. They can be used to create elaborate train sets or to simply be enjoyed by watching them go around and around.</p>
                    <button className="btn btn-error my-4">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;