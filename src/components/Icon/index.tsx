import Icon from '@ant-design/icons'
import { CSSProperties } from 'react'
interface Props {
  /* 是否为svg组件 */
  isSvg?: boolean
  iconSvgName?: React.FC
  /* icon组件名称 */
  iconName?: React.ForwardRefExoticComponent<any>
  /* 图标旋转角度（IE9 无效） */
  rotate?: number | undefined
  /* 是否有旋转动画,默认false */
  spin?: boolean
  style?: CSSProperties
  /* 仅适用双色图标。设置双色图标的主要颜色 */
  twoToneColor?: string
}

const MyIcon: React.FC<Props> = (props) => {
  const { isSvg = false, iconSvgName, iconName, rotate, spin, style } = props
  return isSvg ? (
    <Icon component={iconSvgName} rotate={rotate} spin={spin} style={style} />
  ) : (
    <Icon
      component={iconName as React.ForwardRefExoticComponent<any>}
      rotate={rotate}
      spin={spin}
      style={style}
    />
  )
}

export default MyIcon
