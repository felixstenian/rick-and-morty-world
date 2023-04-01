import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
  `,
  fullWidth: () => css`
    width: 100%;
  `
}

export const Wrapper = styled.button<ButtonProps>`
  border: 0;
  cursor: pointer;
  width: 20rem;

  ${({ theme, size, fullWidth }) => css`
    background: ${theme.colors.gradients.button};
    color: ${theme.colors.darkGray};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};

    &:hover {
      background: ${theme.colors.green[200]};
    }

    ${!!size && wrapperModifiers[size](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth};
  `}
`
