import React from 'react';
// import './AccordionItem.scss';
import PropTypes from 'prop-types';

const AccordionItem = ({id, title, content, isActive, onAccordionClick}) => (
    <section className="accordion-item">
        <button
            id={`accordion-${id}`}
            aria-controls={`accordion-content-${id}`}
            aria-expanded={isActive}
            onClick={() => onAccordionClick(id)}
        >
            <h2>{title}</h2>
        </button>
        <div
            id={`accordion-content-${id}`}
            aria-labelledby={`accordion-${id}`}
            role="region"
            hidden={!isActive}
        >
            {content}
        </div>
    </section>
);

AccordionItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onAccordionClick: PropTypes.func.isRequired
};


export default AccordionItem;