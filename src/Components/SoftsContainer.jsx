import { useState } from 'react';

import './softsContianer.css';

const SoftsContainer = ({ datas }) => {

    const groupElement = datas.map((data) => {
        const { id, softName, cost, command, shortCommand, hasUpgradePlan, hasTiral, tiralLength, icon } = data;
        return <label className='softsContianer' htmlFor={shortCommand} key={id}>
            <div className='iconContainer'>
                <input type="checkbox" id={shortCommand} />
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
    });

    return (
        <>
            {groupElement}
        </>
    );
};

export default SoftsContainer;