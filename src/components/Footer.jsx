import React from 'react';
import {
    FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagramSquare,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-[1680px] m-auto px-4 py-2 bg-[#24262b]'>
            <div className='py-16 px-4 gird md:gird-cols-3 gap-8 text-gray-300'>
                <div>
                    <h1 className='w-full text-3xl font-bold text-orange-500'>Family Restaurant</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat numquam facere dignissimos. Accusantium eum animi quibusdam molestiae id molestias deserunt rerum, quas officia temporibus magni commodi nemo esse aperiam maxime.</p>
                    <div className='flex justify-between my-6'>
                        <FaFacebookSquare size={30} />
                        <FaInstagramSquare size={30} />
                        <FaTwitterSquare size={30} />
                        <FaGithubSquare size={30} />
                        <FaDribbbleSquare size={30} />

                    </div>
                </div>
                <div>
                <h1 className='text-3xl text-center'>Locations</h1>
                </div>
                <div className='md:col-span-2 flex justify-between mt-6'>

                    <div>
                        <ul>
                            <li className='py-2 text-sm'>New York</li>
                            <li className='py-2 text-sm'>USA</li>
                            <li className='py-2 text-sm'>India</li>
                            <li className='py-2 text-sm'>China</li>
                        </ul>
                    </div>

                    <div>
                        {/* <h6 className='font-medium text-[#9b9b9b]'>Location</h6> */}
                        <ul>
                            <li className='py-2 text-sm'>Tokyo</li>
                            <li className='py-2 text-sm'>Singapore</li>
                            <li className='py-2 text-sm'>Bangkok</li>
                            <li className='py-2 text-sm'>Rangoon</li>
                        </ul>
                    </div>

                    <div>
                        {/* <h6 className='font-medium text-[#9b9b9b]'>Location</h6> */}
                        <ul>
                            <li className='py-2 text-sm'>Mumbai</li>
                            <li className='py-2 text-sm'>Taiwan</li>
                            <li className='py-2 text-sm'>Kentucky</li>
                            <li className='py-2 text-sm'>Laos</li>
                        </ul>
                    </div>

                    <div>
                        {/* <h6 className='font-medium text-[#9b9b9b]'>Location</h6> */}
                        <ul>
                            <li className='py-2 text-sm'>England</li>
                            <li className='py-2 text-sm'>DenMark</li>
                            <li className='py-2 text-sm'>Norway</li>
                            <li className='py-2 text-sm'>New Zealand</li>
                        </ul>
                    </div>

                    <div>
                        {/* <h6 className='font-medium text-[#9b9b9b]'>Location</h6> */}
                        <ul>
                            <li className='py-2 text-sm'>Washington DC</li>
                            <li className='py-2 text-sm'>South Africa</li>
                            <li className='py-2 text-sm'>Italy</li>
                            <li className='py-2 text-sm'>Ireland</li>
                        </ul>
                    </div>



                </div>
            </div>

        </div>
    )
}

export default Footer
6