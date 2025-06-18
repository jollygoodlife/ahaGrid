import React from 'react';

interface DebugInfoProps {
  dragState: {
    isDragging: boolean;
    draggedItemId: string | number | null;
    draggedOverItemId: string | number | null;
  };
  items: any[];
}

export const DebugInfo: React.FC<DebugInfoProps> = ({ dragState, items }) => {
  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      fontSize: '12px',
      fontFamily: 'monospace',
      zIndex: 9999,
      maxWidth: '300px'
    }}>
      <h4 style={{ margin: '0 0 10px 0' }}>Debug Info</h4>
      <div>
        <strong>Drag State:</strong>
        <ul style={{ margin: '5px 0', paddingLeft: '15px' }}>
          <li>Is Dragging: {dragState.isDragging ? 'Yes' : 'No'}</li>
          <li>Dragged Item: {dragState.draggedItemId || 'None'}</li>
          <li>Drag Over Item: {dragState.draggedOverItemId || 'None'}</li>
        </ul>
      </div>
      <div>
        <strong>Items Count:</strong> {items.length}
      </div>
      <div style={{ marginTop: '10px', fontSize: '10px', opacity: 0.7 }}>
        Check browser console for drag events
      </div>
    </div>
  );
}; 