import React, { useState } from 'react';
import './Tabs.scss';
import PropTypes from 'prop-types';
import TabTitle from './TabTitle';

const Tabs = ({ data }) => {
    const [activeTab, setActiveTab] = useState(data[0].id);

    return (
        <>
            <nav aria-label="Tabs Navigation">
                <ul role="tablist">
                    {data.map((tab) => (
                        <li key={tab.id} role="presentation">
                            <TabTitle
                                id={tab.id}
                                title={tab.title}
                                isActive={tab.id === activeTab}
                                onTabClick={setActiveTab}
                            />
                        </li>
                    ))}
                </ul>
            </nav>
            <section>
                {data.map((tab) => (
                    <div
                        key={`content-${tab.id}`}
                        className={['tab-content', tab.id === activeTab && 'active'].filter(Boolean).join(' ')}
                        role="tabpanel"
                        id={`tabpanel-${tab.id}`}
                        tabIndex={0}
                        aria-labelledby={tab.id}
                        hidden={tab.id !== activeTab}
                    >
                        {tab.content}
                    </div>
                ))}
            </section>
        </>
    );
};

Tabs.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Tabs;
