import React from "react"

export const GaTracking = () => {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-5982830-12"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-5982830-12');

    `
        }}
      ></script>
    </>
  )
}
