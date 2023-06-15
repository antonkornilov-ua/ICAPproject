import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Quote from "../components/Quote";

const RootPage = () => {
    return (
        <div className='bg-gray-200 min-h-screen'>
            <div className='container mx-auto py-8'>
                <Header />
                <Outlet />
                <div className='mt-8 mx-5'>
                    <Quote />
                </div>
            </div>
        </div>
    );
};
export default RootPage