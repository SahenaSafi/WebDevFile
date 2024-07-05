import React from 'react';

function Container({children}){
    //here we remove () of return
    return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
}

export default Container