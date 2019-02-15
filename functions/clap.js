const { promisify } = require("util")
const request = require("request")

const webhookUrl = process.env['WEBHOOK_URL']

const buildPayload = () => {
  return {
    // TODO
  }
}
exports.handler = function(event, context, callback) {
  // if(event.httpMethod !== "POST"){
  //   return callback(new Error("invalid method"), {
  //     statusCode: 400
  //   })
  // }
  console.log(event)
  const post = promisify(request.post)
  post({
    url: webhookUrl,
    json: true,
    form: {
      payload: JSON.stringify(buildPayload(event)),
    }
  }, undefined).then( () => {
    callback(null, {
      statusCode: 200,
      body: "success"
    });
  })
}