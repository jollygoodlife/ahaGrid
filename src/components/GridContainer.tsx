import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { GridContainerProps, GridItem, DragState } from '../types';
import './GridContainer.css';

const DEFAULT_ITEMS: GridItem[] = Array.from({ length: 10 }, (_, index) => ({
  id: index,
  header: `Widget ${index + 1}`,
  content: (
    <div className="grid-item-content">
      <p>This is a sample grid item content.</p>
    </div>
  ),
}));

export const GridContainer: React.FC<GridContainerProps> = ({
  width,
  height,
  items = DEFAULT_ITEMS,
  showGridLines = true,
  showHeaders = true,
  draggable = true,
  onItemsReorder,
  className = '',
  style = {},
}) => {
  const [currentItems, setCurrentItems] = useState<GridItem[]>(items);
  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    draggedItemId: null,
    draggedOverItemId: null,
  });

  // Synchronize currentItems when items prop changes
  useEffect(() => {
    setCurrentItems(items);
  }, [items]);

  const containerStyle = useMemo(() => ({
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, ${width}px)`,
    gridAutoRows: `${height}px`,
    gap: showGridLines ? '1px' : '0px',
    padding: showGridLines ? '1px' : '0px',
    backgroundColor: showGridLines ? '#e0e0e0' : 'transparent',
    ...style,
  }), [width, height, showGridLines, style]);

  const gridItemStyle = useMemo(() => ({
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: '#ffffff',
    border: showGridLines ? '1px solid #ccc' : 'none',
    display: 'flex',
    flexDirection: 'column' as const,
    boxSizing: 'border-box' as const,
  }), [width, height, showGridLines]);

  const handleDragStart = useCallback((e: React.DragEvent, itemId: string | number) => {
    if (!draggable) return;
    
    console.log('Drag start for item:', itemId);
    
    // Prevent the event from bubbling up to parent elements
    e.stopPropagation();
    
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', itemId.toString());
    
    setDragState({
      isDragging: true,
      draggedItemId: itemId,
      draggedOverItemId: null,
    });
  }, [draggable]);

  const handleDragOver = useCallback((e: React.DragEvent, itemId: string | number) => {
    if (!draggable) return;
    
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'move';
    
    setDragState(prev => ({
      ...prev,
      draggedOverItemId: itemId,
    }));
  }, [draggable]);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    if (!draggable) return;
    
    e.preventDefault();
    e.stopPropagation();
    setDragState(prev => ({
      ...prev,
      draggedOverItemId: null,
    }));
  }, [draggable]);

  const handleDrop = useCallback((e: React.DragEvent, targetItemId: string | number) => {
    if (!draggable) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    const draggedItemId = e.dataTransfer.getData('text/plain');
    console.log('Drop event - dragged:', draggedItemId, 'target:', targetItemId);
    
    if (draggedItemId && draggedItemId !== targetItemId.toString()) {
      const draggedIndex = currentItems.findIndex(item => item.id.toString() === draggedItemId);
      const targetIndex = currentItems.findIndex(item => item.id === targetItemId);
      
      console.log('Found indices - dragged:', draggedIndex, 'target:', targetIndex);
      
      if (draggedIndex !== -1 && targetIndex !== -1) {
        const newItems = [...currentItems];
        const [draggedItem] = newItems.splice(draggedIndex, 1);
        newItems.splice(targetIndex, 0, draggedItem);
        
        console.log('Reordering items:', newItems.map(item => item.header));
        
        setCurrentItems(newItems);
        onItemsReorder?.(newItems);
      }
    }
    
    setDragState({
      isDragging: false,
      draggedItemId: null,
      draggedOverItemId: null,
    });
  }, [draggable, currentItems, onItemsReorder]);

  const handleDragEnd = useCallback((e: React.DragEvent) => {
    if (!draggable) return;
    
    console.log('Drag end');
    e.stopPropagation();
    
    setDragState({
      isDragging: false,
      draggedItemId: null,
      draggedOverItemId: null,
    });
  }, [draggable]);

  return (
    <div 
      className={`grid-container ${className}`}
      style={containerStyle}
    >
      {currentItems.map((item) => {
        const isDragging = dragState.draggedItemId === item.id;
        const isDragOver = dragState.draggedOverItemId === item.id;
        
        return (
          <div
            key={item.id}
            className={`grid-item ${isDragging ? 'dragging' : ''} ${isDragOver ? 'drag-over' : ''}`}
            style={gridItemStyle}
            onDragOver={(e) => handleDragOver(e, item.id)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, item.id)}
          >
            {showHeaders && (
              <div 
                className="grid-item-header"
                draggable={draggable}
                onDragStart={(e) => handleDragStart(e, item.id)}
                onDragEnd={handleDragEnd}
                onMouseDown={(e) => {
                  // Prevent text selection during drag
                  if (draggable) {
                    e.preventDefault();
                  }
                }}
                style={{
                  height: '32px',
                  backgroundColor: '#f8f9fa',
                  borderBottom: '1px solid #e9ecef',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 8px',
                  cursor: draggable ? 'grab' : 'default',
                  userSelect: 'none' as const,
                }}
              >
                <span className="header-title">
                  {item.header || `Widget ${item.id}`}
                </span>
                {draggable && (
                  <span className="drag-handle">⋮⋮</span>
                )}
              </div>
            )}
            <div 
              className="grid-item-body"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
                overflow: 'hidden',
              }}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}; 