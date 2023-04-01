import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from 'utils'

import Button from '.'

describe('<Button />', () => {
  it('1. should render the reading', () => {
    const { container } = renderWithTheme(<Button>Click me</Button>)

    expect(
      screen.getByRole('button', { name: /Click me/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('2. should render the small size', () => {
    const { getByText } = renderWithTheme(
      <Button size="small">Click me</Button>
    )
    expect(getByText('Click me')).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })
  it('3. should render the small medium by default', () => {
    const { getByText } = renderWithTheme(<Button>Click me</Button>)
    expect(getByText('Click me')).toHaveStyle({
      height: '4rem',
      'font-size': '1.4rem'
    })
  })
  it('4. should render the large size', () => {
    const { getByText } = renderWithTheme(
      <Button size="large">Click me</Button>
    )
    expect(getByText('Click me')).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem'
    })
  })
  it('5. should render the button with full width', () => {
    const { getByText } = renderWithTheme(<Button fullWidth>Click me</Button>)
    expect(getByText('Click me')).toHaveStyle('width: 100%')
  })
  it('6. should call onClick when clicked', () => {
    const onClick = jest.fn()
    const { getByText } = renderWithTheme(
      <Button onClick={onClick}>Click me</Button>
    )
    fireEvent.click(getByText('Click me'))
    expect(onClick).toHaveBeenCalled()
  })
  it('7. should render Button as a Link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Click me
      </Button>
    )

    expect(screen.getByRole('link', { name: /Click me/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
