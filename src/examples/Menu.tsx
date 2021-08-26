import Menu from '../components/Menu/menu'
import MenuItem from '../components/Menu/menuItem'

export default function MenuExample() {
  return (
    <Menu>
      <MenuItem>首页</MenuItem>
      <MenuItem>控制台</MenuItem>
      <MenuItem>账单</MenuItem>
      <MenuItem>关于我们</MenuItem>
    </Menu>
  )
}