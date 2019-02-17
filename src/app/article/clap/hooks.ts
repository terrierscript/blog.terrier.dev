import { useCallback } from "react";

const url =
  process.env.NODE_ENV === "production"
    ? "https://snippet.terrierscript.com/.netlify/functions/clap"
    : "http://localhost:9000/clap"

const useGoogleAnalyticsEvent = (title, id) => {
  // @ts-ignore
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
    [title, id]
  )
}

const useFetchClap = (title, id) => {
  return useCallback(
    count => {
      if (process.env.NODE_ENV !== "production") {
        return
      }
      return fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id, title, count })
      })
    },
    [title, id]
  )
}

export const useClapCallback = (title, id) => {
  const clapCallback = useFetchClap(title, id)
  const gaEvent = useGoogleAnalyticsEvent(title, id)
  
  return useCallback( (count) => {
    clapCallback(count)
    gaEvent(count)
  }, [title, id])
}