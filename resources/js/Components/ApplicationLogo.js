import React from 'react';

export default function ApplicationLogo({ className }) {
    return (
        <div className='flex space-x-2'>
            <img className='w-auto h-20' src='/img/logo.png'/>
            <p className='my-auto text-2xl font-semibold'>Allqu</p>
        </div>
    );
}
