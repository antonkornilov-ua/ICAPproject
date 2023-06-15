import Card from '../components/Card';
import projectList from './../data/projectList.json';

const CardList: React.FC = () => {
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 '>
                {projectList.map((app) => (
                    <Card
                        key={app.name}
                        name={app.name}
                        logo={app.logo}
                        description={app.description}
                        appStoreUrl={app.appStoreUrl}
                        learnMoreUrl={app.learnMoreUrl}
                    />
                ))}
            </div>
            
        </>
    );
};

export default CardList;
