import { useState } from "react";

import CommandCopyBar from "../Components/CommandCopyBar";
import ListsContainer from "../Components/ListsContainer";
import './home.css';

const Home = () => {

    const [commands, setCommands] = useState([]);

    const getTotalCommands = (totalCommands) => {
        setCommands(totalCommands);
    }

    return (
        <>
            <h1 className="home">HomeBrew package installer</h1>
            <ListsContainer getTotalCommands={getTotalCommands} />
            <CommandCopyBar commands={commands} />
        </>
    );
};

export default Home;