interface ChildProps {
  toChildData: string
  sendToFather: (data: string) => void
}
const testChild: React.FC<ChildProps> = (props) => {
  const { toChildData, sendToFather } = props
  const toFatherData: string = '我是子组件的值'
  const handleSendToFather = () => {
    sendToFather(toFatherData)
  }
  const myStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: 'green'
  }
  const myStyle1 = {
    width: '100px',
    height: '100px',
    backgroundColor: 'red'
  }
  const GrandChild: React.FC = () => {
    return <div style={myStyle1}>我是孙组件</div>
  }
  return (
    <div style={myStyle}>
      <div>我是子组件</div>
      <GrandChild></GrandChild>
      <div>父组件传来的值:{toChildData}</div>
      <div onClick={handleSendToFather}>传值给父组件</div>
    </div>
  )
}
export default testChild
