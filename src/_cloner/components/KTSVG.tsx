import React from 'react'
import SVG from 'react-inlinesvg'
import { toAbsoluteUrl } from '../helpers/assetsHelper'
type Props = {
  className?: string
  path: string
  svgClassName?: string
}

const KTSVG: React.FC<Props> = ({className = '', path, svgClassName = 'mh-50px'}) => {
  return (
    <span className={`svg-icon hover:text-blue-600 ${className}`}>
      <SVG src={toAbsoluteUrl(path)} className={svgClassName} />
    </span>
  )
}

export {KTSVG}
