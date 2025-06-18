import React, { useState } from 'react';

// Simple draggable div for testing
const DraggableTestDiv: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e: React.DragEvent) => {
    console.log('DRAG START - Simple div');
    setIsDragging(true);
    e.dataTransfer.setData('text/plain', 'test');
  };

  const handleDragEnd = (e: React.DragEvent) => {
    console.log('DRAG END - Simple div');
    setIsDragging(false);
  };

  return (
    <div
      draggable={true}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{
        width: '100px',
        height: '50px',
        backgroundColor: isDragging ? 'red' : 'blue',
        color: 'white',
        padding: '10px',
        cursor: 'grab',
        userSelect: 'none',
        margin: '10px',
        border: '2px solid black'
      }}
    >
      Drag Me
    </div>
  );
};

// Test the GridContainer with minimal props
export const DragDebugTest: React.FC = () => {
  const [items, setItems] = useState([
    { id: 1, header: 'Test 1', content: 'Content 1' },
    { id: 2, header: 'Test 2', content: 'Content 2' },
  ]);

  const handleDragStart = (e: React.DragEvent, itemId: string | number) => {
    console.log('GRID DRAG START for item:', itemId);
    e.dataTransfer.setData('text/plain', itemId.toString());
  };

  const handleDragEnd = (e: React.DragEvent) => {
    console.log('GRID DRAG END');
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, targetItemId: string | number) => {
    e.preventDefault();
    const draggedItemId = e.dataTransfer.getData('text/plain');
    console.log('GRID DROP - dragged:', draggedItemId, 'target:', targetItemId);
    
    if (draggedItemId && draggedItemId !== targetItemId.toString()) {
      const draggedIndex = items.findIndex(item => item.id.toString() === draggedItemId);
      const targetIndex = items.findIndex(item => item.id === targetItemId);
      
      console.log('Found indices - dragged:', draggedIndex, 'target:', targetIndex);
      
      if (draggedIndex !== -1 && targetIndex !== -1) {
        const newItems = [...items];
        const [draggedItem] = newItems.splice(draggedIndex, 1);
        newItems.splice(targetIndex, 0, draggedItem);
        
        console.log('Reordering items:', newItems.map(item => item.header));
        setItems(newItems);
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Drag Debug Test</h2>
      
      <h3>1. Simple Draggable Div (Should work):</h3>
      <DraggableTestDiv />
      
      <h3>2. Grid Container Test (Should reorder):</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 150px)', gap: '10px' }}>
        {items.map((item) => (
          <div
            key={item.id}
            draggable={true}
            onDragStart={(e) => handleDragStart(e, item.id)}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, item.id)}
            style={{
              width: '150px',
              height: '100px',
              backgroundColor: '#f0f0f0',
              border: '1px solid #ccc',
              padding: '10px',
              cursor: 'grab',
              userSelect: 'none'
            }}
          >
            <div style={{ 
              height: '30px', 
              backgroundColor: '#e0e0e0', 
              padding: '5px',
              cursor: 'grab',
              fontWeight: 'bold'
            }}>
              {item.header}
            </div>
            <div style={{ padding: '5px' }}>
              {item.content}
            </div>
          </div>
        ))}
      </div>
      
      <h3>3. Instructions:</h3>
      <ul>
        <li>Try dragging the blue "Drag Me" div first - should log to console</li>
        <li>Then try dragging the gray header bars in the grid - should reorder items</li>
        <li>Check browser console for any logs</li>
        <li>If grid items reorder, the logic works and the issue is in GridContainer</li>
      </ul>
      
      <h3>4. Current Items Order:</h3>
      <div style={{ backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px' }}>
        {items.map((item, index) => (
          <div key={item.id} style={{ margin: '2px 0' }}>
            {index + 1}. {item.header}
          </div>
        ))}
      </div>
    </div>
  );
}; 