const { promisify } = require("util")
const request = require("request")
// const fetch = require("node-fetch")
const webhookUrl = process.env["SLACK_WEBHOOK_URL"]

const buildPayload = body => {
  const { title, id, count } = JSON.parse(body)
  // console.log(title, id)
  return {
    text: `${title} が ${count} 回clapされました👏`
  }
}
exports.handler = function(event, context, callback) {
  console.log(event)
  // if (event.httpMethod === "OPTIONS") {
  //   callback(null, { statusCode: 200, body: "" })
  //   return
  // }
  if (event.httpMethod !== "POST") {
    return callback("invalid method", {
      statusCode: 4001
    })
  }
  console.log(event)
  const post = promisify(request.post)
  post(
    {
      url: webhookUrl,
      json: true,
      form: {
        payload: JSON.stringify(buildPayload(event.body))
      }
    },
    undefined
  )
    .then(res => res.json())
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
