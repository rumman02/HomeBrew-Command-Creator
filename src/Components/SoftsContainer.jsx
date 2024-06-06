import { useState, useEffect } from 'react';

import './softsContianer.css';

const SoftsContainer = ({ datas, getTotalCommands }) => {


    const [shortCommands, setShortCommands] = useState([]);

    const handleCheckedOnChange = (event) => {
        if (event.target.checked) {
            setShortCommands([...shortCommands, event.target.value]);
        } else if (!event.target.checked) {
            setShortCommands(shortCommands.filter(item => event.target.value !== item))
        }
    };

    useEffect(() => {
        getTotalCommands(shortCommands)
    })

    const groupElement = datas.map((data, index) => {

        const { id, softName, cost, command, shortCommand, hasUpgradePlan, hasTiral, tiralLength, icon } = data;

        return (
            <div className='softsContianer' htmlFor={shortCommand} key={id}>
                <label htmlFor={shortCommand}>
                    <div className='iconContainer'>
                        <input type="checkbox" id={shortCommand} name='package' value={shortCommand} onChange={handleCheckedOnChange} />
                        <img src={icon} />
                    </div>

                    <div className='detailsContainer'>
                        <h1 title={softName}>{softName}</h1>
                        <div className='details'>
                            <p>{cost}</p>
                            <div className='trialDetails'>
                                <p className='one'>Has upgrade plan</p>
                                <p className='two'>Has trial</p>
                                <p className='three'>10 days</p>
                            </div>
                        </div>

                        <div className='commandBar'>
                            <div className='command'>
                                <p>{command}</p>
                            </div>
                            <div className='copy'>
                                <span>Copy</span>
                            </div>
                        </div>
                    </div>
                </label>
            </div>
        );
    });

    return (
        <>
            {groupElement}
        </>
    );
};

export default SoftsContainer;