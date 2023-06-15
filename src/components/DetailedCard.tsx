import { Link, useLoaderData } from 'react-router-dom';
import { CardInterface } from '../interfaces/cardInterface';

import { MdArrowBackIosNew } from 'react-icons/md';

const DetailedCard = () => {
    const detailedAppData: CardInterface = useLoaderData() as CardInterface

    return (
        <div className='bg-white rounded-lg shadow-md p-4 mx-5'>
            <div>
                <Link to='/'>
                    <MdArrowBackIosNew className='text-5xl hover:text-blue-700 my-2' />
                </Link>
            </div>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-5 mx-5'>
                <div className='flex items-center md:justify-star justify-center md:my-4 my-1'>
                    <img src={detailedAppData.logo} alt='name' className='rounded-md' />
                </div>
                <div>
                    <h2 className='md:text-4xl text-2xl text-center font-bold md:my-4 my-1'>{detailedAppData.name}</h2>
                    <p className='text-gray-700 md:mb-32 text-center md:text-lg'>{detailedAppData.description}</p>
                    <div className='flex justify-between mt-5'>
                        <Link
                            to={detailedAppData.appStoreUrl}
                            target='_blank'
                            className='text-blue-400 hover:text-blue-700 text-xl'>
                            App Store
                        </Link>
                        <Link
                            to={detailedAppData.learnMoreUrl}
                            target='_blank'
                            className='text-blue-400 hover:text-blue-700 text-xl'>
                            Go to official site
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailedCard;
