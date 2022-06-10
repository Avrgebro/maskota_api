import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Public from '@/Layouts/Public';
import { Head } from '@inertiajs/inertia-react';

export default function Welcome({ }) {
    return (
        <Public>
            <Head>
                <title>Home</title>
                <meta name="description" content="Una nueva manera de interactuar con tus mascotas" />
            </Head>

            <div className="w-full flex flex-col lg:flex-row justify-around items-center">
                <div className='order-2 lg:order-1 px-4 lg:px-0 mt-4 lg:mt-0'>
                    <div className='text-start max-w-md flex flex-col space-y-4'>
                        <span className='text-4xl'>Una aplicación donde podrás <strong>ayudar</strong> y <strong>encontrar</strong> a quien más lo necesita</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                        <div className='flex space-x-8'>
                            <a href='#'>
                                <img className='h-12 w-auto' src='img/download/apple.png'/>
                            </a>
                            <a href='#'>
                                <img className='h-12 w-auto' src='img/download/google.png'/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='order-1 lg:order-2'>
                    <img className='h-96 lg:h-[600px] w-auto' src='img/iphones.png' alt='phones showing app preview'/>
                </div>
            </div>
            
        </Public>
        
    );
}
