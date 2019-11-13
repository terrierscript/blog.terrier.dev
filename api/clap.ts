import { NowRequest, NowResponse } from "@now/node"

const { promisify } = require("util")
const request = require("request")
const axios = require("axios")
// const fetch = require("node-fetch")
const webhookUrl = process.env["SLACK_WEBHOOK_URL"]

const buildPayload = body => {
  const { title, count } = JSON.parse(body)
  // console.log(title, id)
  return {
    text: `${title} が ${count} 回clapされました👏`
  }
}
// TODO: to now.sh api

const handler = function(body, _, callback) {
  console.log(webhookUrl)
  // console.log(event)
  // if (event.httpMethod === "OPTIONS") {
  //   callback(null, { statusCode: 200, body: "" })
  //   return
  // }
  // if (event.httpMethod !== "POST") {
  //   return callback("invalid method", {
  //     statusCode: 4001
  //   })
  // }
  // console.log(event)
  const post = promisify(request.post)
  post(
    {
      url: webhookUrl,
      json: true,
      form: {
        payload: JSON.stringify(buildPayload(body))
      }
    },
    undefined
  )
    // .then(res => res.json())
    .then(res => {
      callback(null, {
        statusCode: 200,
        body: "success"
      })
    })
    .catch(e => {
      console.error(e)
      callback(null, {
        statusCode: 200,
        body: "success"
      })
    })
}

module.exports = (req, res: NowResponse) => {
  if (req.method !== "POST") {
    res.status(401)
    return
  }
  console.log(webhookUrl)
  handler(req.body, undefined, (err, r) => {
    res.status(r.statusCode)
    res.json({ result: r.body })
    res.end()
  })
}
