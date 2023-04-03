import { SpaceProps, BorderProps, LayoutProps } from 'styled-system'

import * as Style from './styles'

export interface ImageProps extends SpaceProps, BorderProps, LayoutProps {
  src?: string
  alt?: string
  width?: string
  height?: string
  objectFit?: string
}

const Image = ({
  src,
  alt,
  width,
  height,
  objectFit,
  ...props
}: ImageProps) => (
  <Style.Figure width={width} height={height} {...props}>
    <Style.Img src={src} alt={alt} objectFit={objectFit} />
  </Style.Figure>
)

export default Image
