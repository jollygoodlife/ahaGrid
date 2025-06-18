import { ReactNode } from 'react';

export interface GridItem {
  id: string | number;
  content: ReactNode;
  header?: ReactNode;
  x?: number;
  y?: number;
}

export interface GridContainerProps {
  width: number;
  height: number;
  items?: GridItem[];
  showGridLines?: boolean;
  showHeaders?: boolean;
  draggable?: boolean;
  onItemsReorder?: (items: GridItem[]) => void;
  className?: string;
  style?: React.CSSProperties;
}

export interface DragState {
  isDragging: boolean;
  draggedItemId: string | number | null;
  draggedOverItemId: string | number | null;
} 