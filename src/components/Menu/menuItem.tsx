import React from 'react'
import classNames from 'classnames'

export interface MenuItemProps {
  index?: number;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const {
    index,
    className,
    style,
    disabled,
    children
  } = props
  const classes = classNames('menu-item', classNames, {
    'is-disabled': disabled
  })

  return (
    <li className={classes} style={style}>
      {children}
    </li>
  )
}

export default MenuItem