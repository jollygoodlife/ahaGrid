# ahaGrid

A flexible and interactive grid layout component for React, supporting drag-and-drop widgets with multi-cell support.

## Demo
![Demo](/ahaGrid.gif)

## Features

- **Draggable Widgets**: Move widgets around the grid using drag-and-drop.
- **Multi-Cell Widgets**: Widgets can span multiple columns and rows (e.g., 2x1, 2x2, etc.).
- **Widget Swapping**: Swap positions with another widget if both have the same size.
- **No Overlap**: Widgets cannot overlap, except for valid swaps.
- **Visual Feedback**: Grid cells highlight when a widget can be dropped there. Only valid drop areas are highlighted.
- **Placeholders on Drag**: Placeholders for empty grid cells are only shown while dragging.
- **Customizable Grid**: Control grid size, cell size, and appearance.
- **Responsive and Accessible**: Works on all modern browsers.

## Usage Example

1. Copy ahaGrid.tsx and ahaGrid.css to your project
  
```tsx
import React, { useState } from 'react';
import AhaGrid from './ahaGrid';

function MyGridApp() {
  return <AhaGrid />;
}
```

### Example Widget Data Structure

```js
{
  id: 1,
  header: '🚀 Rocket Widget',
  content: 'Ready for launch!',
  colSize: 2,
  rowSize: 1,
  gridCol: 0,
  gridRow: 0
}
```

## Customization

- **Grid Size**: Change the number of columns/rows and cell size using the controls at the top of the demo.
- **Show/Hide Headers**: Toggle widget headers.
- **Show/Hide Grid Lines**: Toggle grid lines for a cleaner look.
- **Enable/Disable Dragging**: Toggle drag-and-drop functionality.


## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser to `http://localhost:5173`
