import React from 'react';
import { GridContainer, GridItem } from '../src';

// Basic usage example with draggable headers
export const BasicExample: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Basic GridContainer with Draggable Headers</h2>
      <GridContainer
        width={200}
        height={150}
        showGridLines={true}
        showHeaders={true}
        draggable={true}
      />
    </div>
  );
};

// Custom items with headers example
export const CustomItemsExample: React.FC = () => {
  const items: GridItem[] = [
    {
      id: 1,
      header: '🚀 Rocket Widget',
      content: (
        <div style={{ padding: '10px', textAlign: 'center' }}>
          <p>Ready for launch!</p>
        </div>
      )
    },
    {
      id: 2,
      header: '🌟 Star Widget',
      content: (
        <div style={{ padding: '10px', textAlign: 'center' }}>
          <p>Shining bright</p>
        </div>
      )
    },
    {
      id: 3,
      header: '🎨 Art Widget',
      content: (
        <div style={{ padding: '10px', textAlign: 'center' }}>
          <p>Creative expression</p>
        </div>
      )
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Custom Items with Headers</h2>
      <GridContainer
        width={250}
        height={180}
        items={items}
        showGridLines={false}
        showHeaders={true}
        draggable={true}
      />
    </div>
  );
};

// Styled example with reorder callback
export const StyledExample: React.FC = () => {
  const handleReorder = (newItems: GridItem[]) => {
    console.log('Items reordered:', newItems.map(item => item.header));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Styled GridContainer with Reorder Callback</h2>
      <GridContainer
        width={180}
        height={120}
        showGridLines={true}
        showHeaders={true}
        draggable={true}
        onItemsReorder={handleReorder}
        className="my-custom-grid"
        style={{
          backgroundColor: '#f5f5f5',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      />
    </div>
  );
};

// Non-draggable example
export const NonDraggableExample: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Non-Draggable Grid (Headers Only)</h2>
      <GridContainer
        width={200}
        height={150}
        showGridLines={true}
        showHeaders={true}
        draggable={false}
      />
    </div>
  );
};

// Headers disabled example
export const NoHeadersExample: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Grid Without Headers</h2>
      <GridContainer
        width={200}
        height={150}
        showGridLines={true}
        showHeaders={false}
        draggable={false}
      />
    </div>
  );
}; 