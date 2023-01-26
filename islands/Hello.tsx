import { useState } from "preact/hooks"
//aca en island van las paginas que se van actualizando, (por ejemplo esta ya que tiene un useState)
export default function Hello() {

        const [message, setMessage] = useState('hello')

        const handleClick = () => {
                setMessage('new message')
        }


  return (
    <div>
        <h1>{message}</h1>
        <button onClick={handleClick}>
                Click me
        </button>
    </div>
  )
}
