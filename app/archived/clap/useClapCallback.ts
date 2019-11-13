import { useCallback } from "react"

const url = "/api/clap"

const useGoogleAnalyticsEvent = title => {
  return useCallback(
    count => {
      if (typeof ga === "function") {
        ga("send", {
          hitType: "event",
          eventCategory: "clap",
          eventAction: title,
          eventLabel: count
        })
      }
    },
    [title]
  )
}

const useFetchClap = title => {
  return useCallback(
    count => {
      // if (process.env.NODE_ENV !== "production") {
      //   return
      // }
      return fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, count })
      })
    },
    [title]
  )
}

export const useClapCallback = title => {
  const clapCallback = useFetchClap(title)
  const gaEvent = useGoogleAnalyticsEvent(title)

  return useCallback(
    count => {
      clapCallback(count)
      gaEvent(count)
    },
    [title]
  )
}
