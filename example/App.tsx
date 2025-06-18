import React, { useState, useEffect } from 'react';
import { GridContainer, GridItem } from '../src';
import { DebugInfo } from './DebugInfo';
import { DragDebugTest } from './DragDebugTest';
import './App.css';

// Type definition for grid items
interface GridItemType {
  id: number;
  header: string;
  content: string;
  colSize: number;
  rowSize: number;
  isPlaceholder?: boolean;
  gridCol?: number;
  gridRow?: number;
}

const App: React.FC = () => {
  // Load initial state from localStorage or use defaults
  const [gridWidth, setGridWidth] = useState(() => {
    const saved = localStorage.getItem('windowgrid_gridWidth');
    return saved ? Number(saved) : 200;
  });
  
  const [gridHeight, setGridHeight] = useState(() => {
    const saved = localStorage.getItem('windowgrid_gridHeight');
    return saved ? Number(saved) : 150;
  });
  
  const [gridColumns, setGridColumns] = useState(() => {
    const saved = localStorage.getItem('windowgrid_gridColumns');
    return saved ? Number(saved) : 6;
  });
  
  const [gridRows, setGridRows] = useState(() => {
    const saved = localStorage.getItem('windowgrid_gridRows');
    return saved ? Number(saved) : 10;
  });
  
  const [showGridLines, setShowGridLines] = useState(() => {
    const saved = localStorage.getItem('windowgrid_showGridLines');
    return saved ? JSON.parse(saved) : true;
  });
  
  const [showHeaders, setShowHeaders] = useState(() => {
    const saved = localStorage.getItem('windowgrid_showHeaders');
    return saved ? JSON.parse(saved) : true;
  });
  
  const [draggable, setDraggable] = useState(() => {
    const saved = localStorage.getItem('windowgrid_draggable');
    return saved ? JSON.parse(saved) : true;
  });
  
  const [reorderCount, setReorderCount] = useState(0);
  const [invalidDropMessage, setInvalidDropMessage] = useState<string | null>(null);
  const [debugDragState, setDebugDragState] = useState({
    isDragging: false,
    draggedItemId: null as string | number | null,
    draggedOverItemId: null as string | number | null,
  });

  // Load widget positions from localStorage or use defaults
  const [interactiveItems, setInteractiveItems] = useState<GridItemType[]>(() => {
    const saved = localStorage.getItem('windowgrid_widgets');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (error) {
        console.error('Failed to parse saved widgets:', error);
      }
    }
    
    // Default widget positions
    return [
      {
        id: 1,
        header: '🚀 Rocket Widget',
        content: 'Ready for launch!',
        colSize: 1,
        rowSize: 1,
        gridCol: 0,
        gridRow: 0
      },
      {
        id: 2,
        header: '🌟 Star Widget',
        content: 'Shining bright',
        colSize: 2,
        rowSize: 1,
        gridCol: 1,
        gridRow: 0
      },
      {
        id: 3,
        header: '🎨 Art Widget',
        content: 'Creative expression',
        colSize: 1,
        rowSize: 2,
        gridCol: 3,
        gridRow: 0
      },
      {
        id: 4,
        header: '💻 Code Widget',
        content: 'Building the future',
        colSize: 1,
        rowSize: 1,
        gridCol: 0,
        gridRow: 1
      },
      {
        id: 5,
        header: '🎵 Music Widget',
        content: 'Harmony in motion',
        colSize: 1,
        rowSize: 1,
        gridCol: 4,
        gridRow: 0
      },
      {
        id: 6,
        header: '🌍 World Widget',
        content: 'Connected globally',
        colSize: 2,
        rowSize: 2,
        gridCol: 0,
        gridRow: 2
      },
      {
        id: 7,
        header: '⚡ Energy Widget',
        content: 'Powerful and fast',
        colSize: 1,
        rowSize: 1,
        gridCol: 5,
        gridRow: 0
      },
      {
        id: 8,
        header: '🎯 Target Widget',
        content: 'Precision focused',
        colSize: 1,
        rowSize: 1,
        gridCol: 2,
        gridRow: 1
      },
      {
        id: 9,
        header: '🌈 Rainbow Widget',
        content: 'Colorful diversity',
        colSize: 1,
        rowSize: 1,
        gridCol: 4,
        gridRow: 2
      },
      {
        id: 10,
        header: '🔮 Magic Widget',
        content: 'Mysterious wonders',
        colSize: 1,
        rowSize: 1,
        gridCol: 5,
        gridRow: 1
      },
    ];
  });

  // Wrapper functions to save state to localStorage
  const setGridWidthAndSave = (value: number) => {
    setGridWidth(value);
    localStorage.setItem('windowgrid_gridWidth', value.toString());
  };

  const setGridHeightAndSave = (value: number) => {
    setGridHeight(value);
    localStorage.setItem('windowgrid_gridHeight', value.toString());
  };

  const setGridColumnsAndSave = (value: number) => {
    setGridColumns(value);
    localStorage.setItem('windowgrid_gridColumns', value.toString());
  };

  const setGridRowsAndSave = (value: number) => {
    setGridRows(value);
    localStorage.setItem('windowgrid_gridRows', value.toString());
  };

  const setShowGridLinesAndSave = (value: boolean) => {
    setShowGridLines(value);
    localStorage.setItem('windowgrid_showGridLines', JSON.stringify(value));
  };

  const setShowHeadersAndSave = (value: boolean) => {
    setShowHeaders(value);
    localStorage.setItem('windowgrid_showHeaders', JSON.stringify(value));
  };

  const setDraggableAndSave = (value: boolean) => {
    setDraggable(value);
    localStorage.setItem('windowgrid_draggable', JSON.stringify(value));
  };

  const setInteractiveItemsAndSave = (items: GridItemType[]) => {
    setInteractiveItems(items);
    localStorage.setItem('windowgrid_widgets', JSON.stringify(items));
  };

  // Function to reset all settings to defaults
  const resetToDefaults = () => {
    // Clear localStorage
    localStorage.removeItem('windowgrid_gridWidth');
    localStorage.removeItem('windowgrid_gridHeight');
    localStorage.removeItem('windowgrid_gridColumns');
    localStorage.removeItem('windowgrid_gridRows');
    localStorage.removeItem('windowgrid_showGridLines');
    localStorage.removeItem('windowgrid_showHeaders');
    localStorage.removeItem('windowgrid_draggable');
    localStorage.removeItem('windowgrid_widgets');
    
    // Reset state to defaults
    setGridWidth(200);
    setGridHeight(150);
    setGridColumns(6);
    setGridRows(10);
    setShowGridLines(true);
    setShowHeaders(true);
    setDraggable(true);
    setReorderCount(0);
    setInvalidDropMessage(null);
    
    // Reset widgets to default positions
    const defaultWidgets = [
      {
        id: 1,
        header: '🚀 Rocket Widget',
        content: 'Ready for launch!',
        colSize: 1,
        rowSize: 1,
        gridCol: 0,
        gridRow: 0
      },
      {
        id: 2,
        header: '🌟 Star Widget',
        content: 'Shining bright',
        colSize: 2,
        rowSize: 1,
        gridCol: 1,
        gridRow: 0
      },
      {
        id: 3,
        header: '🎨 Art Widget',
        content: 'Creative expression',
        colSize: 1,
        rowSize: 2,
        gridCol: 3,
        gridRow: 0
      },
      {
        id: 4,
        header: '💻 Code Widget',
        content: 'Building the future',
        colSize: 1,
        rowSize: 1,
        gridCol: 0,
        gridRow: 1
      },
      {
        id: 5,
        header: '🎵 Music Widget',
        content: 'Harmony in motion',
        colSize: 1,
        rowSize: 1,
        gridCol: 4,
        gridRow: 0
      },
      {
        id: 6,
        header: '🌍 World Widget',
        content: 'Connected globally',
        colSize: 2,
        rowSize: 2,
        gridCol: 0,
        gridRow: 2
      },
      {
        id: 7,
        header: '⚡ Energy Widget',
        content: 'Powerful and fast',
        colSize: 1,
        rowSize: 1,
        gridCol: 5,
        gridRow: 0
      },
      {
        id: 8,
        header: '🎯 Target Widget',
        content: 'Precision focused',
        colSize: 1,
        rowSize: 1,
        gridCol: 2,
        gridRow: 1
      },
      {
        id: 9,
        header: '🌈 Rainbow Widget',
        content: 'Colorful diversity',
        colSize: 1,
        rowSize: 1,
        gridCol: 4,
        gridRow: 2
      },
      {
        id: 10,
        header: '🔮 Magic Widget',
        content: 'Mysterious wonders',
        colSize: 1,
        rowSize: 1,
        gridCol: 5,
        gridRow: 1
      },
    ];
    setInteractiveItems(defaultWidgets);
  };

  // Function to generate placeholder items for empty grid spaces
  const generatePlaceholders = (items: GridItemType[]): GridItemType[] => {
    const placeholders: GridItemType[] = [];
    let placeholderId = 1000; // Start placeholder IDs at 1000 to avoid conflicts

    // Create a grid representation to find empty spaces
    const grid = Array(gridColumns).fill(null).map(() => Array(gridRows).fill(null));

    // Place existing items in the grid at their actual positions
    items.forEach(item => {
      if (item.gridCol !== undefined && item.gridRow !== undefined) {
        // Place the item at its actual position
        for (let r = item.gridRow; r < item.gridRow + item.rowSize; r++) {
          for (let c = item.gridCol; c < item.gridCol + item.colSize; c++) {
            if (r < gridRows && c < gridColumns) {
              grid[c][r] = item.id;
            }
          }
        }
      }
    });

    // Add placeholder items for empty spaces
    for (let row = 0; row < gridRows; row++) {
      for (let col = 0; col < gridColumns; col++) {
        if (grid[col][row] === null) {
          placeholders.push({
            id: placeholderId++,
            header: '',
            content: '',
            colSize: 1,
            rowSize: 1,
            isPlaceholder: true,
            gridCol: col,
            gridRow: row
          });
          grid[col][row] = 'placeholder';
        }
      }
    }

    console.log('Generated placeholders:', placeholders.length, 'for empty spaces');
    return placeholders;
  };

  // Function to create placeholders for the original position when a widget moves
  const createPlaceholdersForOriginalPosition = (widget: GridItemType): GridItemType[] => {
    const placeholders: GridItemType[] = [];
    let placeholderId = 1000;

    if (widget.gridCol !== undefined && widget.gridRow !== undefined) {
      // Create placeholders for each grid cell the widget occupied
      for (let row = widget.gridRow; row < widget.gridRow + widget.rowSize; row++) {
        for (let col = widget.gridCol; col < widget.gridCol + widget.colSize; col++) {
          placeholders.push({
            id: placeholderId++,
            header: '',
            content: '',
            colSize: 1,
            rowSize: 1,
            isPlaceholder: true,
            gridCol: col,
            gridRow: row
          });
        }
      }
    }

    return placeholders;
  };

  // Function to place a widget at a specific grid position
  const placeWidgetAtPosition = (widget: GridItemType, targetCol: number, targetRow: number) => {
    const newItems = [...interactiveItems];

    // Find the widget and update its position
    const widgetIndex = newItems.findIndex(item => item.id === widget.id);
    if (widgetIndex !== -1) {
      // Update the widget's position instead of removing and re-adding
      newItems[widgetIndex] = {
        ...newItems[widgetIndex],
        gridCol: targetCol,
        gridRow: targetRow
      };
    }

    return newItems;
  };

  // Function to assign default grid positions to widgets
  const assignDefaultPositions = (items: GridItemType[]): GridItemType[] => {
    const positionedItems: GridItemType[] = [];
    const grid = Array(gridColumns).fill(null).map(() => Array(gridRows).fill(null));

    // First, place all items that already have positions
    items.forEach(item => {
      if (item.gridCol !== undefined && item.gridRow !== undefined) {
        // Item already has a position, place it there
        positionedItems.push(item);
        for (let r = item.gridRow; r < item.gridRow + item.rowSize; r++) {
          for (let c = item.gridCol; c < item.gridCol + item.colSize; c++) {
            if (r < gridRows && c < gridColumns) {
              grid[c][r] = item.id;
            }
          }
        }
      }
    });

    // Then, find positions for items that don't have coordinates yet
    items.forEach(item => {
      if (item.gridCol === undefined || item.gridRow === undefined) {
        // Find next available position for this item
        let placed = false;
        for (let row = 0; row < gridRows && !placed; row++) {
          for (let col = 0; col < gridColumns && !placed; col++) {
            let canPlace = true;

            // Check if the item can fit at current position
            for (let r = row; r < row + item.rowSize; r++) {
              for (let c = col; c < col + item.colSize; c++) {
                if (r >= gridRows || c >= gridColumns || grid[c][r] !== null) {
                  canPlace = false;
                  break;
                }
              }
              if (!canPlace) break;
            }

            if (canPlace) {
              // Place the item
              const positionedItem = {
                ...item,
                gridCol: col,
                gridRow: row
              };
              positionedItems.push(positionedItem);

              for (let r = row; r < row + item.rowSize; r++) {
                for (let c = col; c < col + item.colSize; c++) {
                  grid[c][r] = item.id;
                }
              }
              placed = true;
            }
          }
        }
      }
    });

    return positionedItems;
  };

  // Combine real items with placeholders
  const positionedItems = interactiveItems; // All widgets already have positions
  const allGridItems = [...positionedItems, ...generatePlaceholders(positionedItems)];

  // Validate grid state to detect overlaps
  useEffect(() => {
    validateGridState(positionedItems);
  }, [positionedItems]);

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
      const draggedItem = positionedItems.find(item => item.id.toString() === draggedItemId);
      const targetItem = allGridItems.find(item => item.id === targetItemId);

      console.log('Found dragged item:', draggedItem, 'target item:', targetItem);

      if (draggedItem && targetItem) {
        if (targetItem.isPlaceholder && targetItem.gridCol !== undefined && targetItem.gridRow !== undefined) {
          // If dropping on a placeholder, check if the widget can fit there
          if (canWidgetFitAtPosition(draggedItem, targetItem.gridCol, targetItem.gridRow)) {
            // Store the original position before moving
            const originalCol = draggedItem.gridCol;
            const originalRow = draggedItem.gridRow;

            // Move the widget to the new position
            const newItems = placeWidgetAtPosition(draggedItem, targetItem.gridCol, targetItem.gridRow);
            console.log('Moving widget from', originalCol, originalRow, 'to', targetItem.gridCol, targetItem.gridRow, draggedItem.header);
            console.log('Original position will become a placeholder for future moves');
            setInteractiveItemsAndSave(newItems);
            setReorderCount(prev => prev + 1);

            // Validate the new grid state
            setTimeout(() => {
              validateGridState(newItems);
            }, 100);
          } else {
            console.log('Widget cannot fit at this position:', draggedItem.header);
            // Show feedback that the move is not allowed
            setInvalidDropMessage(`Cannot place ${draggedItem.header} here - not enough space`);
            // setTimeout(() => setInvalidDropMessage(null), 3000);
          }
        } else if (!targetItem.isPlaceholder) {
          // If dropping on another widget, check if they can swap positions
          const targetRealItem = positionedItems.find(item => item.id === targetItemId);
          if (targetRealItem && targetRealItem.gridCol !== undefined && targetRealItem.gridRow !== undefined) {
            const draggedCanFitAtTarget = canWidgetFitAtPosition(draggedItem, targetRealItem.gridCol, targetRealItem.gridRow);
            const targetCanFitAtDragged = canWidgetFitAtPosition(targetRealItem, draggedItem.gridCol || 0, draggedItem.gridRow || 0);

            if (draggedCanFitAtTarget && targetCanFitAtDragged) {
              // Both widgets can fit in each other's positions, so swap them
              const newItems = placeWidgetAtPosition(draggedItem, targetRealItem.gridCol, targetRealItem.gridRow);
              const updatedItems = placeWidgetAtPosition(targetRealItem, draggedItem.gridCol || 0, draggedItem.gridRow || 0);
              console.log('Swapping widget positions:', draggedItem.header, 'and', targetRealItem.header);
              setInteractiveItemsAndSave(updatedItems);
              setReorderCount(prev => prev + 1);

              // Validate the new grid state
              setTimeout(() => {
                validateGridState(updatedItems);
              }, 100);
            } else {
              console.log('Widgets cannot swap positions due to size constraints');
              // Show feedback that the swap is not allowed
              setInvalidDropMessage(`Cannot swap ${draggedItem.header} and ${targetRealItem.header} - size mismatch`);
              setTimeout(() => setInvalidDropMessage(null), 3000);
            }
          }
        }
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

  // Function to check if a widget can fit at a specific grid position
  const canWidgetFitAtPosition = (widget: GridItemType, targetCol: number, targetRow: number): boolean => {
    // Check if the widget would fit within grid bounds
    if (targetCol + widget.colSize > gridColumns || targetRow + widget.rowSize > gridRows) {
      console.log('Widget would exceed grid bounds:', widget.header, 'at', targetCol, targetRow);
      return false;
    }

    // Check if the space is occupied by other widgets
    for (let row = targetRow; row < targetRow + widget.rowSize; row++) {
      for (let col = targetCol; col < targetCol + widget.colSize; col++) {
        const existingItem = positionedItems.find(item =>
          item.gridCol !== undefined &&
          item.gridRow !== undefined &&
          item.id !== widget.id && // Don't check against the widget itself
          col >= item.gridCol &&
          col < item.gridCol + item.colSize &&
          row >= item.gridRow &&
          row < item.gridRow + item.rowSize
        );

        if (existingItem) {
          console.log('Collision detected:', widget.header, 'would overlap with', existingItem.header, 'at position', col, row);
          console.log('Widget dimensions:', widget.colSize, 'x', widget.rowSize, 'at', targetCol, targetRow);
          console.log('Existing widget dimensions:', existingItem.colSize, 'x', existingItem.rowSize, 'at', existingItem.gridCol, existingItem.gridRow);
          return false; // Space is occupied
        }
      }
    }

    console.log('Widget can fit at position:', widget.header, 'at', targetCol, targetRow);
    return true; // Widget can fit here
  };

  // Function to find the best available position for a widget
  const findBestPositionForWidget = (widget: GridItemType): { col: number, row: number } | null => {
    // Try to find the first available position
    for (let row = 0; row < gridRows; row++) {
      for (let col = 0; col < gridColumns; col++) {
        if (canWidgetFitAtPosition(widget, col, row)) {
          return { col, row };
        }
      }
    }
    return null; // No position available
  };

  // Function to validate the current grid state and detect overlaps
  const validateGridState = (items: GridItemType[]): void => {
    const grid = Array(gridColumns).fill(null).map(() => Array(gridRows).fill(null));
    const overlaps: Array<{ widget1: GridItemType, widget2: GridItemType, position: [number, number] }> = [];

    // Place all widgets in the grid and detect overlaps
    items.forEach(item => {
      if (item.gridCol !== undefined && item.gridRow !== undefined) {
        for (let row = item.gridRow; row < item.gridRow + item.rowSize; row++) {
          for (let col = item.gridCol; col < item.gridCol + item.colSize; col++) {
            if (row < gridRows && col < gridColumns) {
              if (grid[col][row] !== null) {
                // Found an overlap
                const existingWidget = items.find(w => w.id === grid[col][row]);
                if (existingWidget) {
                  overlaps.push({
                    widget1: item,
                    widget2: existingWidget,
                    position: [col, row]
                  });
                }
              } else {
                grid[col][row] = item.id;
              }
            }
          }
        }
      }
    });

    if (overlaps.length > 0) {
      console.error('Grid validation failed - overlaps detected:', overlaps);
      overlaps.forEach(overlap => {
        console.error(`Overlap at position ${overlap.position}: ${overlap.widget1.header} overlaps with ${overlap.widget2.header}`);
      });
    } else {
      console.log('Grid validation passed - no overlaps detected');
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>WindowGrid Library</h1>
        <p>A flexible grid container component with draggable widgets</p>
      </header>

      <div className="controls">
        <div className="control-group">
          <label>
            Grid Width (px):
            <input
              type="range"
              min="100"
              max="400"
              value={gridWidth}
              onChange={(e) => setGridWidthAndSave(Number(e.target.value))}
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
              onChange={(e) => setGridHeightAndSave(Number(e.target.value))}
            />
            <span>{gridHeight}px</span>
          </label>
        </div>

        <div className="control-group">
          <label>
            Number of Columns:
            <input
              type="range"
              min="3"
              max="12"
              value={gridColumns}
              onChange={(e) => setGridColumnsAndSave(Number(e.target.value))}
            />
            <span>{gridColumns}</span>
          </label>
        </div>

        <div className="control-group">
          <label>
            Number of Rows:
            <input
              type="range"
              min="5"
              max="20"
              value={gridRows}
              onChange={(e) => setGridRowsAndSave(Number(e.target.value))}
            />
            <span>{gridRows}</span>
          </label>
        </div>

        <div className="control-group">
          <label>
            <input
              type="checkbox"
              checked={showGridLines}
              onChange={(e) => setShowGridLinesAndSave(e.target.checked)}
            />
            Show Grid Lines
          </label>
        </div>

        <div className="control-group">
          <label>
            <input
              type="checkbox"
              checked={showHeaders}
              onChange={(e) => setShowHeadersAndSave(e.target.checked)}
            />
            Show Headers
          </label>
        </div>

        <div className="control-group">
          <label>
            <input
              type="checkbox"
              checked={draggable}
              onChange={(e) => setDraggableAndSave(e.target.checked)}
            />
            Enable Dragging
          </label>
        </div>

        {reorderCount > 0 && (
          <div className="reorder-info">
            <p>🔄 Widgets reordered {reorderCount} time{reorderCount !== 1 ? 's' : ''}</p>
          </div>
        )}

        {invalidDropMessage && (
          <div className="invalid-drop-message" style={{
            backgroundColor: '#ffebee',
            color: '#c62828',
            padding: '8px 12px',
            borderRadius: '4px',
            border: '1px solid #ffcdd2',
            marginTop: '8px',
            fontSize: '0.9em'
          }}>
            <p>⚠️ {invalidDropMessage}</p>
          </div>
        )}

        <div className="grid-info" style={{
          backgroundColor: '#e3f2fd',
          color: '#1976d2',
          padding: '8px 12px',
          borderRadius: '4px',
          border: '1px solid #bbdefb',
          marginTop: '8px',
          fontSize: '0.9em'
        }}>
          <p>📐 <strong>Grid Size:</strong> {gridColumns} × {gridRows} = {gridColumns * gridRows} cells | Total Width: {gridColumns * gridWidth + (showGridLines ? gridColumns - 1 : 0)}px</p>
        </div>

        <div className="control-group" style={{ marginTop: '16px' }}>
          <button
            onClick={resetToDefaults}
            style={{
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#c82333';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#dc3545';
            }}
          >
            🔄 Reset to Defaults
          </button>
          <p style={{ fontSize: '0.8em', color: '#666', marginTop: '4px' }}>
            Clears all saved settings and widget positions
          </p>
        </div>

        <div className="stored-data-display" style={{ marginTop: '16px' }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#333' }}>📦 Stored Data (localStorage):</h4>
          <div style={{
            backgroundColor: '#f8f9fa',
            border: '1px solid #dee2e6',
            borderRadius: '4px',
            padding: '12px',
            fontSize: '11px',
            fontFamily: 'monospace',
            maxHeight: '200px',
            overflow: 'auto',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-all'
          }}>
            {(() => {
              const storedData: any = {};
              
              // Collect all stored data
              storedData.gridWidth = localStorage.getItem('windowgrid_gridWidth');
              storedData.gridHeight = localStorage.getItem('windowgrid_gridHeight');
              storedData.gridColumns = localStorage.getItem('windowgrid_gridColumns');
              storedData.gridRows = localStorage.getItem('windowgrid_gridRows');
              storedData.showGridLines = localStorage.getItem('windowgrid_showGridLines');
              storedData.showHeaders = localStorage.getItem('windowgrid_showHeaders');
              storedData.draggable = localStorage.getItem('windowgrid_draggable');
              
              // Get widgets data (truncated for display)
              const widgetsData = localStorage.getItem('windowgrid_widgets');
              if (widgetsData) {
                try {
                  const parsed = JSON.parse(widgetsData);
                  storedData.widgets = `[${parsed.length} widgets] - ${JSON.stringify(parsed.slice(0, 2))}...`;
                } catch (error) {
                  storedData.widgets = 'Error parsing widgets data';
                }
              } else {
                storedData.widgets = 'No widgets data stored';
              }
              
              return JSON.stringify(storedData, null, 2);
            })()}
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>Interactive Draggable Grid (Simple Implementation)</h2>
        <p>Drag the ⋮⋮ handle in widget headers to rearrange widgets (simple implementation)</p>
        <p style={{ color: '#666', fontSize: '0.9em' }}>
          💡 <strong>Tip:</strong> Click and drag the ⋮⋮ handle in the header to move widgets around. You can also drop widgets into the dashed placeholder areas to fill empty grid spaces!
        </p>
        <p style={{ color: '#666', fontSize: '0.9em' }}>
          📏 <strong>Size Rules:</strong> Widgets can only move to spaces that can accommodate their size. Large widgets can't fit in small spaces, and widgets can only swap if they have the same dimensions.
        </p>
        <p style={{ color: '#666', fontSize: '0.9em' }}>
          🚫 <strong>No Displacement:</strong> When a widget moves to an empty space, other widgets stay in their positions. The original position becomes available as a drop target.
        </p>

        <div className="grid-demo">
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${gridColumns}, ${gridWidth}px)`,
            gridAutoRows: `${gridHeight}px`,
            gap: showGridLines ? '1px' : '0px',
            padding: showGridLines ? '1px' : '0px',
            backgroundColor: showGridLines ? '#e0e0e0' : 'transparent',
            width: `${gridColumns * gridWidth + (showGridLines ? gridColumns - 1 : 0)}px`,
            maxWidth: '100%'
          }}>
            {allGridItems.map((item) => (
              <div
                key={item.id}
                data-widget-id={item.id}
                onDragEnd={handleInteractiveDragEnd}
                onDragOver={handleInteractiveDragOver}
                onDrop={(e) => handleInteractiveDrop(e, item.id)}
                onMouseEnter={(e) => {
                  if (item.isPlaceholder) {
                    e.currentTarget.style.backgroundColor = '#e3f2fd';
                    e.currentTarget.style.border = '2px dashed #2196f3';
                    e.currentTarget.style.opacity = '0.8';
                  }
                }}
                onMouseLeave={(e) => {
                  if (item.isPlaceholder) {
                    e.currentTarget.style.backgroundColor = '#f8f9fa';
                    e.currentTarget.style.border = '2px dashed #ddd';
                    e.currentTarget.style.opacity = '0.6';
                  }
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: item.isPlaceholder ? 'transparent' : '#ffffff',
                  border: showGridLines ? '1px solid #ccc' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  boxSizing: 'border-box',
                  cursor: item.isPlaceholder ? 'default' : 'default',
                  userSelect: 'none',
                  gridColumn: item.gridCol !== undefined ? `${item.gridCol + 1} / span ${item.colSize}` : `span ${item.colSize}`,
                  gridRow: item.gridRow !== undefined ? `${item.gridRow + 1} / span ${item.rowSize}` : `span ${item.rowSize}`,
                  minHeight: item.isPlaceholder ? '20px' : 'auto',
                  transition: 'all 0.2s ease',
                  ...(item.isPlaceholder && {
                    border: '2px dashed #ddd',
                    backgroundColor: '#f8f9fa',
                    opacity: 0.6
                  })
                }}
              >
                {showHeaders && !item.isPlaceholder && (
                  <div style={{
                    height: '48px',
                    backgroundColor: '#f8f9fa',
                    borderBottom: '1px solid #e9ecef',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '0px 8px 0 4px',
                    cursor: 'default',
                    userSelect: 'none',
                    fontWeight: 'bold'
                  }}>

                    {draggable && (
                      <span
                        draggable={true}
                        onDragStart={(e) => {
                          handleInteractiveDragStart(e, item.id);
                          // Set custom drag image to show the entire widget
                          const widgetElement = e.currentTarget.closest('[data-widget-id]') as HTMLElement;
                          if (widgetElement) {
                            e.dataTransfer.setDragImage(widgetElement, 20, 20);

                            // Create a clone of the widget for the drag preview
                            // const clone = widgetElement.cloneNode(true) as HTMLElement;
                            // clone.style.position = 'absolute';
                            // clone.style.top = '-1000px';
                            // clone.style.left = '-1000px';
                            // clone.style.opacity = '0.8';
                            // clone.style.transform = 'rotate(5deg)';
                            // clone.style.pointerEvents = 'none';
                            // clone.style.zIndex = '10000';
                            // document.body.appendChild(clone);

                            // e.dataTransfer.setDragImage(clone, 20, 20);

                            // // Remove the clone after a short delay
                            // setTimeout(() => {
                            //   if (document.body.contains(clone)) {
                            //     document.body.removeChild(clone);
                            //   }
                            // }, 100);
                          }
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',    // vertical center
                          justifyContent: 'center',// horizontal center
                          width: '32px',
                          height: '32px',
                          padding: '0px',
                          cursor: 'grab',
                          borderRadius: '50%', // More round
                          transition: 'background-color 0.2s ease',
                          userSelect: 'none'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#ccccff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                        onMouseDown={(e) => {
                          e.currentTarget.style.cursor = 'grabbing';
                        }}
                        onMouseUp={(e) => {
                          e.currentTarget.style.cursor = 'grab';
                        }}
                      >
                        ⋮⋮
                      </span>
                    )}
                    <span>{item.header}</span>
                  </div>
                )}
                {!item.isPlaceholder && (
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
                )}
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
            <li><strong>Interactive Grid:</strong> Drag the ⋮⋮ handle in widget headers to rearrange widgets (simple implementation)</li>
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