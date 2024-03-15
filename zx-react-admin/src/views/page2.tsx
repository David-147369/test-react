import TestChild from '@/components/testChild'
import { useState } from 'react'
import './page2.scss'
const View = () => {
  const [data, setData] = useState('')
  const handleSend = (data: string) => {
    console.log('----', data)
    setData(data)
  }
  return (
    <>
      <div className="father">
        <div>我是页面2</div>
        <div>子组件传的值:{data}</div>
        <TestChild toChildData={data} sendToFather={handleSend} />
      </div>
    </>
  )
}

export default View
