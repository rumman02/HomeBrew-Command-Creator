import { useState, useEffect } from 'react';

import './softsContianer.css';

const SoftsContainer = ({ datas, getTotalCommands }) => {


    const [copyText, setCopyText] = useState('');
    const [element, setElement] = useState(``);
    const [checked, setChecked] = useState({});
    const [shortCommands, setShortCommands] = useState([]);


    const onClickSoftsContainer = (event) => {
        if (element) {
            setElement(``)
        } else {
            setChecked({
                ...checked,
                [event.target.value]: event.target.checked
            })

            if (event.target.checked) {
                setShortCommands([...shortCommands, event.target.value]);
            } else if (!event.target.checked) {
                setShortCommands(shortCommands.filter(item => event.target.value !== item))
            };

        }
    }
    const handleCheckedOnChange = (event) => {
        // setChecked({
        //     ...checked,
        //     [event.target.value]: event.target.checked
        // })


    };

    useEffect(() => {
        getTotalCommands(shortCommands);
    });

    const handleCommandBarOnClick = (event) => {
        let targetClassName;
        if (event.target.parentElement.className === 'command') {
            targetClassName = event.target.parentElement.parentElement;
        } else if (event.target.className === 'commandBar') {
            targetClassName = event.target;
        } else if (event.target.parentElement.classList.contains('copy')) {
            targetClassName = event.target.parentElement.parentElement;
        } else if (event.target.parentElement.className === 'commandBar') {
            targetClassName = event.target.parentElement;
        }

        targetClassName.children[1].classList.add('copyActive');

        navigator.clipboard.writeText(targetClassName.children[0].innerText).then(() => {
            setCopyText('Coppied');
            setTimeout(() => {
                targetClassName.children[1].classList.remove('copyActive');
            }, 3000);
        });
        setElement(targetClassName);
    }

    const groupElement = datas.map((data) => {

        const { id, softName, cost, command, shortCommand, hasUpgradePlan, hasTrial, trialLength, icon } = data;
        console.log(hasUpgradePlan, hasTrial, trialLength)
        return (
            <div className='softsContianer' htmlFor={shortCommand} key={id} onClick={onClickSoftsContainer}>
                <label htmlFor={shortCommand}>
                    <div className='iconContainer'>
                        <input type="checkbox" id={shortCommand} name={shortCommand} value={shortCommand} checked={!!checked[shortCommand]} onChange={handleCheckedOnChange} />
                        <div>
                            <img src={icon} alt={`${shortCommand} image`} />
                        </div>
                    </div>

                    <div className='detailsContainer'>
                        <h1 title={softName}>{softName}</h1>
                        <div className='details'>
                            <p>{cost}</p>
                            <div className='trialDetails'>
                                {hasUpgradePlan === 'Yes' && <p className='one'>Has upgrade plan</p>}
                                {hasTrial === 'Yes' && <p className='two'>Has trial</p>}
                                {trialLength !== '0 days' && <p className='three'>{trialLength}</p>}
                                {/* <p className='one'>{hasUpgradePlan === 'Yes' && 'Has upgrade plan'}</p> */}
                                {/* <p className='two'>{hasTiral === 'Yes' && 'Has trial'}</p> */}
                                {/* <p className='three'>{trialLength}</p> */}
                                {/* <p className='three'>{trialLength !== '0 days' && trialLength}</p> */}
                            </div>
                        </div>

                        <div className='commandBar' onClick={handleCommandBarOnClick}>
                            <div className='command'>
                                <p>{command}</p>
                            </div>
                            <div className='copy'  >
                                <span>{copyText}</span>
                            </div>
                        </div>
                    </div>
                </label >
            </div >
        );
    });

    return (
        <>
            {groupElement}
        </>
    );
};

export default SoftsContainer;