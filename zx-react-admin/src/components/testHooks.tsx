import { useState, useEffect } from 'react'
import { Button } from 'antd'
import { Spin } from 'antd'
interface Name {
  name: string
}
interface Myperson {
  names: string
}
const usePerson = (name: string) => {
  const [loading, setLoading] = useState(true)
  const [person, setPerson] = useState<Myperson>({ names: '' })

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setPerson({ names: name })
    }, 2000)
  }, [name])
  return [loading, person]
}
const AsyncPage: React.FC<Name> = (props) => {
  const [loading, person] = usePerson(props.name)
  const { names } = person as Myperson
  return (
    <>
      {loading ? (
        <div>
          <Spin />
        </div>
      ) : (
        <p>{names}</p>
      )}
    </>
  )
}

const PersonPage: React.FC = () => {
  const [state, setState] = useState<string>('')
  const changeName = (name: string) => {
    setState(name)
  }
  return (
    <>
      <AsyncPage name={state} />
      <Button
        type="primary"
        onClick={() => {
          changeName('郭靖')
        }}
      >
        郭靖
      </Button>
      <Button
        type="primary"
        onClick={() => {
          changeName('黄蓉')
        }}
      >
        黄蓉
      </Button>
    </>
  )
}
export default PersonPage
