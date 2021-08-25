import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Alert from './components/Alert/alert';

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
