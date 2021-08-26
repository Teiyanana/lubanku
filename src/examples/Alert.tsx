import React from 'react';
import Alert from '../components/Alert/alert';

export default function AlertExample() {
  return (
    <div>
      <p>基础Alert</p>
      <Alert
        description="这是一个提示文字">
      </Alert>
      <Alert
        description="这是一个提示文字"
        type="success">
      </Alert>
      <Alert
        description="这是一个提示文字"
        type="warning">
      </Alert>
      <Alert
        description="这是一个提示文字"
        type="danger">
      </Alert>
      
      <p>带有标题的Alert</p>
      <Alert
        title="文案提示"
        description="这是一个提示文字">
      </Alert>
      <Alert
        title="成功提示"
        description="这是一个提示文字"
        type="success">
      </Alert>
      <Alert
        title="警告提示"
        description="这是一个提示文字"
        type="warning">
      </Alert>
      <Alert
        title="错误提示"
        description="这是一个提示文字"
        type="danger">
      </Alert>
    </div>
  )
}