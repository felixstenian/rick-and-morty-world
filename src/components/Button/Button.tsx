import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as Style from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <Style.Wrapper size={size} fullWidth={fullWidth} {...props}>
    {children}
  </Style.Wrapper>
)

export default Button
