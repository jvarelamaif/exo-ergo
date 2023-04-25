import React from 'react';
import './TabTitle.scss';
import PropTypes from 'prop-types';

const TabTitle = ({ id, title, isActive, onTabClick }) => (
        <button
            role="tab"
            id={`tab-${id}`}
            aria-controls={`tabpanel-${id}`}
            aria-selected={isActive}
            tabIndex={0}
            onClick={() => onTabClick(id)}
        >
            {title}
        </button>
);

TabTitle.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onTabClick: PropTypes.func.isRequired,
};

export default TabTitle;