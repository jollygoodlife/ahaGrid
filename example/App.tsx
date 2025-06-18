import React, { useState } from 'react';
import { GridContainer, GridItem } from '../src';
import { DebugInfo } from './DebugInfo';
import { DragDebugTest } from './DragDebugTest';
import './App.css';

const App: React.FC = () => {
  const [gridWidth, setGridWidth] = useState(200);
  const [gridHeight, setGridHeight] = useState(150);
  const [showGridLines, setShowGridLines] = useState(true);
  const [showHeaders, setShowHeaders] = useState(true);
  const [draggable, setDraggable] = useState(true);
  const [reorderCount, setReorderCount] = useState(0);
  const [debugDragState, setDebugDragState] = useState({
    isDragging: false,
    draggedItemId: null as string | number | null,
    draggedOverItemId: null as string | number | null,
  });

  const [interactiveItems, setInteractiveItems] = useState([
    {
      id: 1,
      header: '🚀 Rocket Widget',
      content: 'Ready for launch!'
    },
    {
      id: 2,
      header: '🌟 Star Widget',
      content: 'Shining bright'
    },
    {
      id: 3,
      header: '🎨 Art Widget',
      content: 'Creative expression'
    },
    {
      id: 4,
      header: '💻 Code Widget',
      content: 'Building the future'
    },
    {
      id: 5,
      header: '🎵 Music Widget',
      content: 'Harmony in motion'
    },
    {
      id: 6,
      header: '🌍 World Widget',
      content: 'Connected globally'
    },
    {
      id: 7,
      header: '⚡ Energy Widget',
      content: 'Powerful and fast'
    },
    {
      id: 8,
      header: '🎯 Target Widget',
      content: 'Precision focused'
    },
    {
      id: 9,
      header: '🌈 Rainbow Widget',
      content: 'Colorful diversity'
    },
    {
      id: 10,
      header: '🔮 Magic Widget',
      content: 'Mysterious wonders'
    },
  ]);

  // Interactive grid drag handlers (based on working debug test)
  const handleInteractiveDragStart = (e: React.DragEvent, itemId: string | number) => {
    console.log('Interactive drag start for item:', itemId);
    e.dataTransfer.setData('text/plain', itemId.toString());
  };

  const handleInteractiveDragEnd = (e: React.DragEvent) => {
    console.log('Interactive drag end');
  };

  const handleInteractiveDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleInteractiveDrop = (e: React.DragEvent, targetItemId: string | number) => {
    e.preventDefault();
    const draggedItemId = e.dataTransfer.getData('text/plain');
    console.log('Interactive drop - dragged:', draggedItemId, 'target:', targetItemId);
    
    if (draggedItemId && draggedItemId !== targetItemId.toString()) {
      const draggedIndex = interactiveItems.findIndex(item => item.id.toString() === draggedItemId);
      const targetIndex = interactiveItems.findIndex(item => item.id === targetItemId);
      
      console.log('Found indices - dragged:', draggedIndex, 'target:', targetIndex);
      
      if (draggedIndex !== -1 && targetIndex !== -1) {
        const newItems = [...interactiveItems];
        
        // Swap the items instead of reordering
        [newItems[draggedIndex], newItems[targetIndex]] = [newItems[targetIndex], newItems[draggedIndex]];
        
        console.log('Swapping items:', newItems.map(item => item.header));
        setInteractiveItems(newItems);
        setReorderCount(prev => prev + 1);
      }
    }
  };

  // Custom drag handlers for debugging
  const handleDragStart = (e: React.DragEvent, itemId: string | number) => {
    console.log('Custom drag start for item:', itemId);
    setDebugDragState({
      isDragging: true,
      draggedItemId: itemId,
      draggedOverItemId: null,
    });
  };

  const handleDragOver = (e: React.DragEvent, itemId: string | number) => {
    e.preventDefault();
    setDebugDragState(prev => ({
      ...prev,
      draggedOverItemId: itemId,
    }));
  };

  const handleDrop = (e: React.DragEvent, targetItemId: string | number) => {
    e.preventDefault();
    const draggedItemId = e.dataTransfer.getData('text/plain');
    console.log('Custom drop - dragged:', draggedItemId, 'target:', targetItemId);
    
    setDebugDragState({
      isDragging: false,
      draggedItemId: null,
      draggedOverItemId: null,
    });
  };

  const handleDragEnd = () => {
    console.log('Custom drag end');
    setDebugDragState({
      isDragging: false,
      draggedItemId: null,
      draggedOverItemId: null,
    });
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>WindowGrid Library</h1>
        <p>A flexible grid container component with draggable widgets</p>
      </header>

      {/* Debug Test Section */}
      <div className="demo-section">
        <h2>🔧 Drag Debug Test</h2>
        <p>Test basic drag functionality first:</p>
        <DragDebugTest />
      </div>

      <div className="controls">
        <div className="control-group">
          <label>
            Grid Width (px):
            <input
              type="range"
              min="100"
              max="400"
              value={gridWidth}
              onChange={(e) => setGridWidth(Number(e.target.value))}
            />
            <span>{gridWidth}px</span>
          </label>
        </div>

        <div className="control-group">
          <label>
            Grid Height (px):
            <input
              type="range"
              min="100"
              max="300"
              value={gridHeight}
              onChange={(e) => setGridHeight(Number(e.target.value))}
            />
            <span>{gridHeight}px</span>
          </label>
        </div>

        <div className="control-group">
          <label>
            <input
              type="checkbox"
              checked={showGridLines}
              onChange={(e) => setShowGridLines(e.target.checked)}
            />
            Show Grid Lines
          </label>
        </div>

        <div className="control-group">
          <label>
            <input
              type="checkbox"
              checked={showHeaders}
              onChange={(e) => setShowHeaders(e.target.checked)}
            />
            Show Headers
          </label>
        </div>

        <div className="control-group">
          <label>
            <input
              type="checkbox"
              checked={draggable}
              onChange={(e) => setDraggable(e.target.checked)}
            />
            Enable Dragging
          </label>
        </div>

        {reorderCount > 0 && (
          <div className="reorder-info">
            <p>🔄 Widgets reordered {reorderCount} time{reorderCount !== 1 ? 's' : ''}</p>
          </div>
        )}
      </div>

      <div className="demo-section">
        <h2>Interactive Draggable Grid (Simple Implementation)</h2>
        <p>Drag the header bars to rearrange the widgets! This uses the same logic as the working debug test.</p>
        <p style={{ color: '#666', fontSize: '0.9em' }}>
          💡 <strong>Tip:</strong> Click and drag the gray header bars to move widgets around.
        </p>
        
        <div className="grid-demo">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: `repeat(auto-fill, minmax(${gridWidth}px, 1fr))`,
            gridAutoRows: `${gridHeight}px`,
            gap: showGridLines ? '1px' : '0px',
            padding: showGridLines ? '1px' : '0px',
            backgroundColor: showGridLines ? '#e0e0e0' : 'transparent',
            width: '100%',
            maxWidth: '1200px'
          }}>
            {interactiveItems.map((item) => (
              <div
                key={item.id}
                draggable={draggable}
                onDragStart={(e) => handleInteractiveDragStart(e, item.id)}
                onDragEnd={handleInteractiveDragEnd}
                onDragOver={handleInteractiveDragOver}
                onDrop={(e) => handleInteractiveDrop(e, item.id)}
                style={{
                  width: '100%',
                  height: `${gridHeight}px`,
                  backgroundColor: '#ffffff',
                  border: showGridLines ? '1px solid #ccc' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  boxSizing: 'border-box',
                  cursor: draggable ? 'grab' : 'default',
                  userSelect: 'none'
                }}
              >
                {showHeaders && (
                  <div style={{
                    height: '32px',
                    backgroundColor: '#f8f9fa',
                    borderBottom: '1px solid #e9ecef',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 8px',
                    cursor: draggable ? 'grab' : 'default',
                    userSelect: 'none',
                    fontWeight: 'bold'
                  }}>
                    <span>{item.header}</span>
                    {draggable && <span>⋮⋮</span>}
                  </div>
                )}
                <div style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px',
                  textAlign: 'center',
                  color: '#333'
                }}>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>Instructions</h2>
        <div className="instructions">
          <ul>
            <li><strong>Debug Test:</strong> Try the blue "Drag Me" div first to test basic drag functionality</li>
            <li><strong>Interactive Grid:</strong> Drag the gray header bars to rearrange widgets (simple implementation)</li>
            <li><strong>GridContainer:</strong> The component-based implementation for reference</li>
            <li><strong>Visual Feedback:</strong> Widgets show visual feedback during drag operations</li>
            <li><strong>Toggle Features:</strong> Use the controls above to enable/disable headers and dragging</li>
            <li><strong>Responsive:</strong> Grid automatically adjusts to different sizes</li>
            <li><strong>Debug Info:</strong> Check the debug panel in the top-right corner for drag state</li>
          </ul>
        </div>
      </div>

      <footer className="app-footer">
        <p>Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  );
};

export default App; 