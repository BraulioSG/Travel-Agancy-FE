import { useState } from 'react';
import './Accordion.scss';

function Accordion(props) {
    const { title, children } = props;
    const [icon, setIcon] = useState('');
    const [panel, setPanel] = useState('');
    const toggleAccordion = evt => {
        evt.preventDefault();
        if (icon === '') {
            setIcon('accordion-icon-up');
            setPanel('accordion-content-show');
        } else {
            setIcon('');
            setPanel('');
        }
    };
    return (
        <>
            <div className="accordion">
                <button className="accordion-title" onClick={toggleAccordion}>
                    {title}
                    <span
                        className={`material-symbols-outlined accordion-icon ${icon}`}
                    >
                        expand_more
                    </span>
                </button>
                <div className={`accordion-content ${panel}`}>{children}</div>
            </div>
        </>
    );
}

export default Accordion;
