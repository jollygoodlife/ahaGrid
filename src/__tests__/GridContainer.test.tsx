import React from 'react';
import { render, screen } from '@testing-library/react';
import { GridContainer } from '../components/GridContainer';

describe('GridContainer', () => {
  it('renders with default items', () => {
    render(<GridContainer width={200} height={150} />);
    
    // Should render 10 default items
    expect(screen.getByText('Grid Item 1')).toBeInTheDocument();
    expect(screen.getByText('Grid Item 10')).toBeInTheDocument();
  });

  it('renders with custom items', () => {
    const customItems = [
      {
        id: 1,
        content: <div>Custom Item 1</div>
      },
      {
        id: 2,
        content: <div>Custom Item 2</div>
      }
    ];

    render(
      <GridContainer
        width={200}
        height={150}
        items={customItems}
      />
    );

    expect(screen.getByText('Custom Item 1')).toBeInTheDocument();
    expect(screen.getByText('Custom Item 2')).toBeInTheDocument();
  });

  it('applies correct grid dimensions', () => {
    const { container } = render(
      <GridContainer width={250} height={180} />
    );

    const gridContainer = container.querySelector('.grid-container');
    expect(gridContainer).toHaveStyle({
      gridTemplateColumns: 'repeat(auto-fit, 250px)',
      gridAutoRows: '180px'
    });
  });
}); 