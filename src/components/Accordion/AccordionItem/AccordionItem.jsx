import React from 'react';
// import './AccordionItem.scss';
import PropTypes from 'prop-types';

const AccordionItem = ({ id, title, content, isActive, onAccordionClick }) => (
    <section className="accordion-item">
        <h2>
            <button
                id={`accordion-${id}`}
                aria-controls={`accordion-content-${id}`}
                aria-expanded={isActive}
                onClick={() => onAccordionClick(id)}
            >
                {title}
            </button>
        </h2>
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
    onAccordionClick: PropTypes.func.isRequired,
};


export default AccordionItem;