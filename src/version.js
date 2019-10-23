const getType = () => {
  console.log(process.env)
  if (process.env.NOW_BUILDER) {
    return "now.sh"
  }
  if (process.env.NETLIFY) {
    return "netlify"
  }
  return "unknown"
}
export const getVersion = () => {
  return {
    env: process.env.NODE_ENV,
    sha1: process.env.NOW_GITHUB_COMMIT_SHA || process.env.COMMIT_REF || "",
    type: getType()
  }
}

export const logVersion = () => {
  console.log(`Version:`, getVersion())
}
