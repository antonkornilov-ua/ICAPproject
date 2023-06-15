import { NavLink } from 'react-router-dom';
import { CardInterface } from '../interfaces/cardInterface';

const Card: React.FC<CardInterface> = (app) => {
    const getFirstSentence = (description: string) => {
        const sentences = description.split(/[.!?]/);
        return sentences[0].trim();
    };
    const firstSentence = getFirstSentence(app.description);
    return (
        <div className='bg-white rounded-lg shadow-md p-4 flex flex-col justify-between transition duration-300 ease-in-out transform hover:scale-105'>
            <div className='flex items-center justify-center mb-4'>
                <img src={app.logo} alt='name' className='scale-90 rounded-md' />
            </div>
            <div>
                <h2 className='text-lg text-center font-bold mb-2'>{app.name}</h2>
                <p className='text-gray-700 mb-4 text-center'>{firstSentence}</p>
                <div className='flex justify-between'>
                    <a
                        href={app.appStoreUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-400 hover:text-blue-700'>
                        App Store
                    </a>
                    <NavLink to={`/${app.name.toLowerCase()}`} className='text-blue-400 hover:text-blue-700'>
                        Learn More
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Card;
