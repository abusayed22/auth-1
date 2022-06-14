import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { pre_get_data } from '../../../redux/action/action'

function Read() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(pre_get_data())
  },[])
  return (
    <div>
        <center>
                <h3></h3>
        </center>
    </div>
  )
}

export default Read