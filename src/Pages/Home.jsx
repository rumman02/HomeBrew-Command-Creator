import CommandCopyBar from "../Components/CommandCopyBar";
import ListsContainer from "../Components/ListsContainer";
import './home.css';

const Home = () => {
    return (
        <>
            <h1 className="home">HomeBrew package installer</h1>
            <ListsContainer />
            <CommandCopyBar />
        </>
    );
};

export default Home;