import React from 'react'
import { Image } from '@chakra-ui/react'
const page = () => {
  return (
    <div>
     <div className="py-14 bg-white">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between">

        <div className="sm:w-6/12 order-last sm:order-first">
            <ul className="grid grid-cols-2 col-gap-5 row-gap-5 md:col-gap-10 md:row-gap-10">

                <li className="bg-gray-100 p-5 py-10 text-center">
                    <div className="flex flex-col items-center">
                        <div className="flex-shrink-0">
                            <a
                                href="#"><Image className="mb-3 rounded-full mx-auto h-24 w-24" src="https://i.pravatar.cc/150?img=32"/></a>
                        </div>
                        <div className="text-center">
                            <h4
                                className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                                <a href="#" className="hover:text-indigo-600 transition duration-500 ease-in-out">jane
                                    doe</a>
                            </h4>
                            <p className="text-sm leading-6 text-gray-500 uppercase">
                                Surgeon
                            </p>
                        </div>
                    </div>
                </li>
                <li className="bg-gray-100 p-5 py-10 text-center">
                    <div className="flex flex-col items-center">
                        <div className="flex-shrink-0">
                            <a
                                href="#"><Image className="mb-3 rounded-full mx-auto h-24 w-24" src="https://i.pravatar.cc/150?img=32"/></a>
                        </div>
                        <div className="text-center">
                            <h4
                                className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                                <a href="#" className="hover:text-indigo-600 transition duration-500 ease-in-out">jane
                                    doe</a>
                            </h4>
                            <p className="text-sm leading-6 text-gray-500 uppercase">
                                Doctor
                            </p>
                        </div>
                    </div>
                </li>
                <li className="bg-gray-100 p-5 py-10 text-center">
                    <div className="flex flex-col items-center">
                        <div className="flex-shrink-0">
                            <a
                                href="#"><Image className="mb-3 rounded-full mx-auto h-24 w-24" src="https://i.pravatar.cc/150?img=32"/></a>
                        </div>
                        <div className="text-center">
                            <h4
                                className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                                <a href="#" className="hover:text-indigo-600 transition duration-500 ease-in-out">jane
                                    doe</a>
                            </h4>
                            <p className="text-sm leading-6 text-gray-500 uppercase">
                                Surgeon
                            </p>
                        </div>
                    </div>
                </li>
                <li className="bg-gray-100 p-5 py-10 text-center">
                    <div className="flex flex-col items-center">
                        <div className="flex-shrink-0">
                            <a
                                href="#"><Image className="mb-3 rounded-full mx-auto h-24 w-24" src="https://i.pravatar.cc/150?img=32"/></a>
                        </div>
                        <div className="text-center">
                            <h4
                                className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                                <a href="#" className="hover:text-indigo-600 transition duration-500 ease-in-out">jane
                                    doe</a>
                            </h4>
                            <p className="text-sm leading-6 text-gray-500 uppercase">
                                Doctor
                            </p>
                        </div>
                    </div>
                </li>

            </ul>
        </div>

        <div className="text-left mb-10 sm:ml-10 md:ml-24 sm:w-6/12 order-first sm:order-last">
            <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
                THE TEAM
            </p>
            <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
                Meet Our <span className="text-indigo-600">Team</span>
            </h3>
            <p className="mt-4 text-md leading-7 text-gray-500 font-light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
                <br/> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>

        </div>

    </div>
</div>
    </div>
  )
}

export default page
