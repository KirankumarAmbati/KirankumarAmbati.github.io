import React from "react"
import Typed from 'react-typed'

function TypeWrite({strings, startDelay, onComplete}) {
  return (
    <div style={{fontSize: "1.1rem", lineHeight: "2.6rem"}}>
        <Typed
          strings={strings}
          typeSpeed={50}
          smartBackspace
          startDelay = {startDelay}
          showCursor={false}
          cursorChar="|"
          onComplete={onComplete}
        />
    </div>
  )
}

export default TypeWrite