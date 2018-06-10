import React from "react"
import Disqus from "disqus-react"
// Alternatively, import specific members:
// import { DiscussionEmbed, CommentCount } from 'disqus-react';
type Props = {
  url: string
  identifier: string
  title: string
}

export const Comment = ( props: Props) => {
  const disqusShortname = "example"
  const disqusConfig = props
  return (
    <div className="article">
      <h1>{props.title}</h1>
      <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
        Comments
      </Disqus.CommentCount>
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
