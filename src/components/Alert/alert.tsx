import React from 'react'
import classNames from 'classnames'

export enum Type {
  Default = 'info',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger'
}

interface BaseAlertProps {
  type?: string,
  title?: string;
  description?: string;
}

const Alert: React.FC<BaseAlertProps> = props => {
  const {
    type,
    title,
    description
  } = props

  const classes = classNames('alert', {
    [`alert-${type}`]: type
  })

  return (
    <div className={classes}>
      <div className="alert__content">
        {title && (<span>{title}</span>)}
        <p>{description}</p>
      </div>
    </div>
  )
}

Alert.defaultProps = {
  type: Type.Default
}

export default Alert