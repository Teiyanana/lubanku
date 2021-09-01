import Menu from '../components/Menu/menu'
import MenuItem from '../components/Menu/menuItem'
import SubMenu from '../components/Menu/subMenu'

export default function MenuExample() {
  return (
    <Menu defaultIndex={'0'} mode="horizontal" onSelect={index => console.log(index)} defaultOpenSubMenus={['2']}>
      <MenuItem>首页</MenuItem>
      <MenuItem>控制台</MenuItem>
      <SubMenu title="下拉菜单">
        <MenuItem>选项一</MenuItem>
        <MenuItem>选项二</MenuItem>
        <MenuItem>选项三</MenuItem>
      </SubMenu>
      <MenuItem>关于我们</MenuItem>
    </Menu>
  )
}