import React from "react"

export const AdsenseTracking = () => {
  return null
  if (process.env.NODE_ENV === "development") {
    return null
  }
  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `

          (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-9836926490768601",
            enable_page_level_ads: true
          });`
        }}
      ></script>
    </>
  )
}
