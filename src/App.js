import React from 'react';
import Tabs from './components/Tabs';
import Accordion from './components/Accordion';

const App = () => {
  const accordionData = [
    {
      id: '1',
      title: 'Titre 1',
      content: 'Contenu de l\'élément 1',
    },
    {
      id: '2',
      title: 'Titre 2 avec Tabs',
      content: (
          <Tabs
              data={[
                {
                  id: 'tab-1',
                  title: 'Onglet 1',
                  content: 'Contenu de l\'onglet 1',
                },
                {
                  id: 'tab-2',
                  title: 'Onglet 2',
                  content: 'Contenu de l\'onglet 2',
                },
                {
                  id: 'tab-3',
                  title: 'Onglet 3',
                  content: 'Contenu de l\'onglet 3',
                },
              ]}
          />
      ),
    },
    {
      id: '3',
      title: 'Titre 3',
      content: 'Contenu de l\'élément 3',
    },
  ];

  return (
      <div>
        <h1>Exemple d'Accordion contenant des Tabs</h1>
        <Accordion data={accordionData} />
      </div>
  );
};

export default App;