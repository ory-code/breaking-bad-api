import React from 'react'
import spinner from "../images/Glitchy-Loading-Indicator.gif"

const Loading = () => {
    return (
      <img src={spinner} style={{width:"500px", margin:"auto", display: "block" }} alt="loading spinner"/>
    )
}

export default Loading
