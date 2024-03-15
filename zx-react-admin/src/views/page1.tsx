import { useSelector } from 'react-redux'
import { useStoreTrigger } from '@/hooks'
import { Button } from 'antd'
import { useState, useEffect } from 'react'
import axios from 'axios'
import UpImage from '@/components/upImage'
import TestHools from '@/components/testHooks'
const View = () => {
  const fatherInfo: string = 'messege'
  const name: string = 'John'
  const age: number = 13
  const StoreTrigger = useStoreTrigger()
  const [imageUrl, setImageurl] = useState('')
  const [idCard, setidCard] = useState({})
  const count = useSelector((state: RootState) => state.testStore.count)
  const add2 = () => {
    StoreTrigger.dispatch({ type: 'addCount', num: 2 })
  }
  const asyncAdd2 = () => {
    StoreTrigger.asyncDispatch({ type: 'asyncAddCount', num: 2 })
  }
  const getOil = () => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.oioweb.cn/api/common/GasolinePriceQuery')
    xhr.send(null)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status == 200) {
          let obj = JSON.parse(xhr.responseText)
          console.log('请求回来的数据：', obj)
        } else if (xhr.status >= 400) {
          console.log('错误信息', xhr.status)
        }
      }
    }
  }
  const getMusic = () => {
    const xhr = new XMLHttpRequest()
    xhr.open(
      'GET',
      'https://api.uomg.com/api/rand.music?sort=热歌榜&format=json'
    )
    xhr.send(null)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status == 200) {
          let obj = JSON.parse(xhr.responseText)
          console.log('请求回来的数据：', obj)
        } else if (xhr.status >= 400) {
          console.log('错误信息', xhr.status)
        }
      }
    }
  }
  const getCode = () => {
    axios
      .get('https://api.uomg.com/api/qrcode?url=http://www.aeink.com', {
        responseType: 'arraybuffer'
      })
      .then((response) => {
        const blob = new Blob([response.data], {
          type: response.headers['content-type']
        })
        const imageUrl = URL.createObjectURL(blob)
        setImageurl(imageUrl)
      })
      .catch((error) => {
        console.error(error)
      })
  }
  const ocr = () => {
    axios
      .post('https://api.oioweb.cn/api/ocr/RecognizeIdcard', {
        type: 'face',
        file: { idCard }
      })
      .then((res: any) => {
        console.log('==res=', res)
      })
  }
  const handleClick = () => {
    console.log('Button clicked!')
  }
  const sonTofather = (data: string) => {
    console.log('----', data)
    setidCard(data)
  }
  useEffect(() => {}, [idCard])
  return (
    <>
      <p>我是页面1</p>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button type="primary" onClick={getOil}>
          查询全国油价
        </Button>
        <Button type="primary" onClick={getMusic}>
          获取网易随机音乐
        </Button>
        <Button type="primary" onClick={getCode}>
          生成二维码
        </Button>
        <div style={{ width: '100px', height: '100px' }}>
          <img src={imageUrl} style={{ width: '100px' }} />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <UpImage
          fatherInfo={fatherInfo}
          name={name}
          age={age}
          handleClick={handleClick}
          sonTofather={sonTofather}
        ></UpImage>
        <Button type="primary" onClick={ocr}>
          身份证ocr识别
        </Button>
      </div>
      <div>{count}</div>
      <TestHools></TestHools>
      <Button type="primary" onClick={add2}>
        +2
      </Button>
      <Button type="primary" onClick={asyncAdd2}>
        异步+2
      </Button>
    </>
  )
}

export default View
