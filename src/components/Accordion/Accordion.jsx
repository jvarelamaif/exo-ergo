import React, {useState} from 'react';
// import './Accordion.scss';
import AccordionItem from './AccordionItem';
import PropTypes from 'prop-types';

const Accordion = ({ data }) => {
    const [activeItem, setActiveItem] = useState('');

    const handleAccordionClick = (id) => {
        setActiveItem(activeItem === id ? '' : id);
    };

    return (
        <div>
            {data.map((item) => (
                <AccordionItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    content={item.content}
                    isActive={item.id === activeItem}
                    onAccordionClick={handleAccordionClick}
                />
            ))}
        </div>
    );
};

Accordion.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Accordion;