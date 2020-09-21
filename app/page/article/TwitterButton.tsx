import React from "react"
import { FaTwitter } from "react-icons/fa"
import { getFilename } from "./ArticleFooter"
import { TwitterShareButton } from "react-share"
const getShareUrl = fileAbsolutePath => {
  if (typeof location === "undefined") {
    const filename = getFilename(fileAbsolutePath).replace(/.md/, "")
    return `https://blog.terrier.dev/blog/${filename}`
  }
  return location.origin + location.pathname
}

export const TweetButtons = ({ title, fileAbsolutePath }) => {
  const url = getShareUrl(fileAbsolutePath)
  return (
    <TwitterShareButton
      title={title}
      // data-size="large"
      // rel="nofollow"
      // target="_blank"
      // className="twitter-share-button"
      via={"terrierscript"}
      url={url}
    >
      <FaTwitter color={"rgb(29, 161, 242)"} fontSize={"1.5em"} />
    </TwitterShareButton>
  )
}
