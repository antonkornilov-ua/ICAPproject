import { useRouteError, Link } from 'react-router-dom';

const ErrorPage = () => {
    const errorMessage = useRouteError();
    console.error(errorMessage);
    return (
        <div className='text-center'>
            <h1 className='text-3xl font-bold mb-4'>Oops!</h1>
            <p className='text-lg mb-2'>Sorry, this page doesn't exist.</p>
            <p className='mb-4'>
                <Link to='/' className='text-blue-500 hover:text-blue-700'>
                    Return to main page
                </Link>
            </p>
        </div>
    );
};

export default ErrorPage;
