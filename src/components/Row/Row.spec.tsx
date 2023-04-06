import { render, screen } from '@testing-library/react'

import Row, { RowProps } from '.'

describe('<Row />', () => {
  it('1. should render the reading', () => {
    const { container } = render(
      <Row data-testid="row">a simple description</Row>
    )

    expect(screen.getByTestId('row')).toBeInTheDocument()
    expect(screen.getByText(/a simple description/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('2. should render a row with the correct props', () => {
    const props: RowProps = {
      gap: '10px',
      cursor: 'pointer',
      wordBreak: 'break-all',
      wordWrap: 'wrap'
    }

    const { container } = render(<Row {...props} />)

    expect(container.firstChild).toHaveStyle({
      gap: '10px',
      cursor: 'pointer',
      'word-break': 'break-all',
      'word-wrap': 'wrap'
    })
  })
})
