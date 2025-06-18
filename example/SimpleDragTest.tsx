import React, { useState } from 'react';
import { GridContainer, GridItem } from '../src';

export const SimpleDragTest: React.FC = () => {
  const [items] = useState<GridItem[]>([
    {
      id: 1,
      header: 'Widget 1',
      content: <div>Content 1</div>
    },
    {
      id: 2,
      header: 'Widget 2',
      content: <div>Content 2</div>
    },
    {
      id: 3,
      header: 'Widget 3',
      content: <div>Content 3</div>
    }
  ]);

  const handleReorder = (newItems: GridItem[]) => {
    console.log('Reorder detected:', newItems.map(item => item.header));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <h2>Simple Drag Test</h2>
      <p>Try dragging the header bars to rearrange widgets:</p>
      
      <GridContainer
        width={150}
        height={100}
        items={items}
        showHeaders={true}
        draggable={true}
        showGridLines={true}
        onItemsReorder={handleReorder}
      />
      
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
        <h4>Instructions:</h4>
        <ul>
          <li>Click and hold on the gray header bar</li>
          <li>Drag to another widget's position</li>
          <li>Release to drop and reorder</li>
          <li>Check console for reorder events</li>
        </ul>
      </div>
    </div>
  );
}; 