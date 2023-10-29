import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Link.css'

function Anchor(props) {
  return (
<Link  to={props.href} className={`customAnchor hover:cursor-[url(/cursorFinger.png),_pointer] hover:text-black ${props.exStyle}`}>{props.content}</Link>
  )
}

export default Anchor
