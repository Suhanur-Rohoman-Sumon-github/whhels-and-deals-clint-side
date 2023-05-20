import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const { error, status } = useRouteError()
    return (
        <div>
             <section className='flex items-center h-screen   text-gray-900'>
        
        <div className='container flex flex-col items-center justify-center px-5 mx-auto '>
         <img src="https://static.vecteezy.com/system/resources/thumbnails/008/568/878/small/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space-site-crash-on-technical-work-web-design-template-with-chatbot-mascot-cartoon-online-bot-assistance-failure-vector.jpg" alt="" />
            
          <div className='max-w-md text-center'>
            <h2 className='mb-8 font-extrabold text-9xl text-error'>
              <span className='sr-only'>Error</span> {status || 404}
            </h2>
            <p className='text-2xl text-error font-semibold md:text-3xl mb-8'>
              {error?.message}
            </p>
            <Link
              to='/'
              className='px-8 py-3 font-semibold rounded bg-error text-gray-900'
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
        </div>
    );
};

export default Error;