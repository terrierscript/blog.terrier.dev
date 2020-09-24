import React, { useState } from "react"

const NotFoundPage = () => {
  const [maybe, setMaybe] = useState()
  console.log(window)
  if (typeof window !== 'undefined') {
    const href = window.location.href
    const replaced = href.replace("/blog/", "/archive/")
    console.log(href, replaced)
    if (replaced !== href) {
      // @ts-ignore
      setMaybe(replaced)
    }
  }

  return <div>
    <h1>404</h1>
    <p>見つかりませんでした</p>
    {maybe && <div><a href={maybe}>{maybe}</a>にあるかもしれません
    </div>}
  </div>
}

export default NotFoundPage
