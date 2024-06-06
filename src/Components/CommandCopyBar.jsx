import { useState, useRef } from 'react';
import './commandCopyBar.css'

const CommandCopyBar = ({ commands }) => {

    const pEl = useRef();
    const [copyText, setCopyText] = useState('Copy');

    const handleCopyTextOnClick = () => {
        navigator.clipboard.writeText(pEl.current.innerText).then(() => {
            setCopyText('Coppied');
            setTimeout(() => {
                setCopyText('Copy');
            }, 3000);
        });
    };



    return (
        <>
            {commands.length !== 0 && (<div className="commandCopyBar" >
                <div>
                    <div className='fullCommand'>
                        <p ref={pEl}>--brew install --cask {commands.join(' ')}</p>
                    </div>
                    <div className='fullCommandCopy' onClick={handleCopyTextOnClick}>
                        <span>{copyText}</span>
                    </div>
                </div>
            </div>)}
        </>
    );
};

export default CommandCopyBar;