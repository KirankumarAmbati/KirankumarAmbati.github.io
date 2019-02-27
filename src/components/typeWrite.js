import React from "react"
import Typed from 'react-typed'

function TypeWrite({strings, startDelay}) {
  return (
    <div style={{fontSize: "1.1rem", lineHeight: "2.6rem"}}>
        <Typed
          strings={strings}
          typeSpeed={50}
          smartBackspace
          startDelay = {startDelay}
          showCursor={false}
          cursorChar="|"
        />
    </div>
  )
}

export default TypeWrite