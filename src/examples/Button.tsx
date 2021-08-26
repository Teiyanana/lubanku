import React from 'react';
import Button, { ButtonType, ButtonSize } from '../components/Button/button';

export default function ButtonExample() {
  return (
    <div>
      <p>不同颜色的按钮</p>
      <Button>Default</Button>
      <Button btnType={ButtonType.Primary}>Primary</Button>
      <Button btnType={ButtonType.Success}>Success</Button>
      <Button btnType={ButtonType.Warning}>Warning</Button>
      <Button btnType={ButtonType.Danger}>Danger</Button>

      <p>不同尺寸的按钮</p>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large</Button>
      <Button btnType={ButtonType.Primary}>Normal</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Small</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Mini}>Mini</Button>

      <p>链接按钮</p>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com">Baidu Link</Button>

      <p>不可点击按钮</p>
      <Button disabled={true}>Hello</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled={true}>Hello</Button>
    </div>
  )
}