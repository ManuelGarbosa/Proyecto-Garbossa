import {useState, useEffect} from 'react'
import { getUnproducto } from '../../asynmock'

const itemDetailContainer = () => {
    const[producto, setProducto] = useState(null);
    useEffect (()=> {
        getUnproducto(1)
        .then(res => setProducto(res))
    }, [])
  return (
    <div>itemDetailContainer</div>
  )
}

export default itemDetailContainer