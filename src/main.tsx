import ReactDOM from 'react-dom/client'
import './index.css'
RootPage
import CardList from './Pages/CardList.tsx'
import ErrorPage from './Pages/ErrorPage.tsx'
import DetailedCard from './components/DetailedCard.tsx'
import projectList from './data/projectList.json';


import { createBrowserRouter, createRoutesFromElements, LoaderFunctionArgs, Route, RouterProvider } from 'react-router-dom'
import RootPage from './Routes/Root.tsx'




const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootPage />}>
            <Route index element={<CardList/>} />
            <Route path='/:appId' element={<DetailedCard />} loader={loader} errorElement={<ErrorPage />} />
            <Route path='*' element={<ErrorPage />} />
        </Route>
    )
);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={router}/>
)
function loader({params}:LoaderFunctionArgs) {
    const uniqueCard = projectList.filter((e) => e.name.toLowerCase() === params.appId)
    return uniqueCard[0]
}