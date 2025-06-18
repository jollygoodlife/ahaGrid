# WindowGrid

A flexible and responsive grid container library for React applications with draggable widgets. WindowGrid allows you to create customizable grid layouts with precise control over grid item dimensions, draggable headers, and interactive reordering.

## Features

- 🎯 **Precise Control**: Set exact width and height for each grid item
- 📱 **Responsive Design**: Automatically adapts to different screen sizes
- 🎨 **Customizable**: Support for custom content, styling, and grid lines
- 🖱️ **Draggable Headers**: Drag and drop functionality to rearrange widgets
- ⚡ **Performance Optimized**: Built with React hooks and memoization
- 🔧 **TypeScript Support**: Full TypeScript definitions included
- 🎭 **Interactive Demo**: Live example with real-time controls

## Installation

```bash
npm install windowgrid
# or
yarn add windowgrid
```

## Quick Start

```tsx
import React from 'react';
import { GridContainer, GridItem } from 'windowgrid';

const MyComponent = () => {
  const items: GridItem[] = [
    {
      id: 1,
      header: 'Widget 1',
      content: <div>Grid Item 1</div>
    },
    {
      id: 2,
      header: 'Widget 2',
      content: <div>Grid Item 2</div>
    },
    // ... more items
  ];

  return (
    <GridContainer
      width={200}
      height={150}
      items={items}
      showGridLines={true}
      showHeaders={true}
      draggable={true}
    />
  );
};
```

## API Reference

### GridContainer Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `number` | **Required** | Width of each grid item in pixels |
| `height` | `number` | **Required** | Height of each grid item in pixels |
| `items` | `GridItem[]` | `DEFAULT_ITEMS` | Array of grid items to display |
| `showGridLines` | `boolean` | `true` | Whether to show grid lines between items |
| `showHeaders` | `boolean` | `true` | Whether to show header bars on widgets |
| `draggable` | `boolean` | `true` | Whether to enable drag and drop functionality |
| `onItemsReorder` | `(items: GridItem[]) => void` | `undefined` | Callback when items are reordered |
| `className` | `string` | `''` | Additional CSS class name |
| `style` | `React.CSSProperties` | `{}` | Additional inline styles |

### GridItem Interface

```typescript
interface GridItem {
  id: string | number;        // Unique identifier
  content: ReactNode;         // React content to render
  header?: ReactNode;         // Optional header content
  x?: number;                 // Optional x position (future feature)
  y?: number;                 // Optional y position (future feature)
}
```

### DragState Interface

```typescript
interface DragState {
  isDragging: boolean;                    // Whether a drag operation is active
  draggedItemId: string | number | null;  // ID of the item being dragged
  draggedOverItemId: string | number | null; // ID of the item being dragged over
}
```

## Examples

### Basic Usage with Draggable Headers

```tsx
import { GridContainer } from 'windowgrid';

function BasicExample() {
  return (
    <GridContainer
      width={200}
      height={150}
      showGridLines={true}
      showHeaders={true}
      draggable={true}
    />
  );
}
```

### Custom Items with Headers

```tsx
import { GridContainer, GridItem } from 'windowgrid';

function CustomItemsExample() {
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
    }
  ];

  return (
    <GridContainer
      width={250}
      height={180}
      items={items}
      showGridLines={false}
      showHeaders={true}
      draggable={true}
    />
  );
}
```

### With Reorder Callback

```tsx
import { GridContainer, GridItem } from 'windowgrid';

function ReorderExample() {
  const handleReorder = (newItems: GridItem[]) => {
    console.log('Items reordered:', newItems.map(item => item.header));
    // Save new order to database, update state, etc.
  };

  return (
    <GridContainer
      width={180}
      height={120}
      showGridLines={true}
      showHeaders={true}
      draggable={true}
      onItemsReorder={handleReorder}
    />
  );
}
```

### Non-Draggable Grid

```tsx
import { GridContainer } from 'windowgrid';

function NonDraggableExample() {
  return (
    <GridContainer
      width={200}
      height={150}
      showGridLines={true}
      showHeaders={true}
      draggable={false}
    />
  );
}
```

### Grid Without Headers

```tsx
import { GridContainer } from 'windowgrid';

function NoHeadersExample() {
  return (
    <GridContainer
      width={200}
      height={150}
      showGridLines={true}
      showHeaders={false}
      draggable={false}
    />
  );
}
```

## Drag and Drop Features

### How It Works

1. **Drag Handle**: Each widget has a draggable header bar with a visual drag handle (⋮⋮)
2. **Visual Feedback**: During drag operations, widgets show visual feedback:
   - Dragged item becomes semi-transparent and slightly rotated
   - Target items scale up and show a blue border
3. **Reorder Logic**: Items are reordered by swapping positions in the array
4. **Callback Support**: Use `onItemsReorder` to handle reorder events

### Visual States

- **Normal**: Widgets display normally
- **Dragging**: Dragged widget becomes semi-transparent and rotated
- **Drag Over**: Target widget scales up with blue border
- **Hover**: Header bar highlights on hover

## Development

### Running the Example

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

### Building the Library

```bash
npm run build
```

This will create the distribution files in the `dist/` directory.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Roadmap

- [x] Drag and drop functionality
- [ ] Grid item positioning (x, y coordinates)
- [ ] Resizable grid items
- [ ] Grid templates and layouts
- [ ] Animation support
- [ ] Virtual scrolling for large datasets
- [ ] Touch support for mobile devices 