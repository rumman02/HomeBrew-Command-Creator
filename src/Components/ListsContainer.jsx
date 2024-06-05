import { useState, useEffect } from "react";

import SoftsContainer from "./SoftsContainer";
import './listsContainer.css';

const ListsContainer = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch('../../public/Data.json').then(res => {
            if (!res.ok) throw new Error('New error');
            return res.json();
        }).then(data => {
            setDatas(data);
        });
    }, []);


    return (
        <div className="listsContainer">
            {datas.length && <SoftsContainer datas={datas} />}
        </div>
    );
};

export default ListsContainer;