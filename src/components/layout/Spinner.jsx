import React from "react"
import spinner from "./assets/spinner.gif"

const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img
        width={100}
        src={spinner}
        alt="Loading..."
        className="text-center mx-auto"
      />
    </div>
  )
}

export default Spinner
