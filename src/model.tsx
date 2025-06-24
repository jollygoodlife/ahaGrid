export const defaultWidgets = [
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
        rowSize: 2,
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
        gridCol: 1,
        gridRow: 1
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
        gridCol: 3,
        gridRow: 2
    },
    {
        id: 9,
        header: '🌈 Rainbow Widget',
        content: 'Colorful diversity',
        colSize: 2,
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
    {
        id: 11,
        header: '🔮 Apple Widget',
        content: 'Mysterious wonders',
        colSize: 1,
        rowSize: 1,
        gridCol: 4,
        gridRow: 1
    }
];


export function recalculateGridLayout(
    minWidth: number,
    containerWidth: number,
    columnsPerRow: number,
    widgets?: typeof defaultWidgets
) {
    // Dynamically adjust columnsPerRow based on containerWidth and minWidth
    let maxColumns = Math.max(1, Math.floor(containerWidth / Math.max(1, minWidth)));
    const effectiveColumns = Math.max(1, Math.min(columnsPerRow, maxColumns));
    const cellWidth = containerWidth / effectiveColumns;
    const grid = [];
    const newWidgets = [];

    let occupied = new Set();

    const markOccupied = (
        col: number,
        row: number,
        colSize: number,
        rowSize: number
    ): void => {
        for (let r = row; r < row + rowSize; r++) {
            for (let c = col; c < col + colSize; c++) {
                occupied.add(`${r},${c}`);
            }
        }
    };

    const canPlace = (
        col: number,
        row: number,
        colSize: number,
        rowSize: number
    ): boolean => {
        if (col + colSize > effectiveColumns) return false;
        for (let r = row; r < row + rowSize; r++) {
            for (let c = col; c < col + colSize; c++) {
                if (occupied.has(`${r},${c}`)) return false;
            }
        }
        return true;
    };

    let currentRow = 0;
    let widgetsToLayout = widgets || defaultWidgets;
    widgetsToLayout = [...widgetsToLayout].sort((a, b) => {
      const rowA = typeof a.gridRow === 'number' ? a.gridRow : Infinity;
      const rowB = typeof b.gridRow === 'number' ? b.gridRow : Infinity;
      if (rowA !== rowB) return rowA - rowB;
      const colA = typeof a.gridCol === 'number' ? a.gridCol : Infinity;
      const colB = typeof b.gridCol === 'number' ? b.gridCol : Infinity;
      return colA - colB;
    });
    for (const widget of widgetsToLayout) {
        const { colSize, rowSize } = widget;
        let placed = false;
        let tryRow = currentRow;
        let attempts = 0;
        // Failsafe: try up to 1000 rows to avoid infinite loop
        while (!placed && attempts < 1000) {
            for (let col = 0; col <= effectiveColumns - Math.min(colSize, effectiveColumns); col++) {
                if (canPlace(col, tryRow, Math.min(colSize, effectiveColumns), rowSize)) {
                    newWidgets.push({
                        ...widget,
                        gridCol: col,
                        gridRow: tryRow,
                        colSize: Math.min(colSize, effectiveColumns),
                    });
                    markOccupied(col, tryRow, Math.min(colSize, effectiveColumns), rowSize);
                    placed = true;
                    break;
                }
            }
            tryRow++;
            attempts++;
        }
        if (!placed) {
            // If still not placed, force it at the next available row, col 0
            newWidgets.push({
                ...widget,
                gridCol: 0,
                gridRow: tryRow,
                colSize: Math.min(colSize, effectiveColumns),
            });
            markOccupied(0, tryRow, Math.min(colSize, effectiveColumns), rowSize);
        }
    }

    console.log("widgets" + JSON.stringify(newWidgets));

    return {
      layout: newWidgets,
      columns: effectiveColumns
    };
}