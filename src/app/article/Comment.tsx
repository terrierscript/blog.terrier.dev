import React from "react"
import Disqus from "disqus-react"
// Alternatively, import specific members:
// import { DiscussionEmbed, CommentCount } from 'disqus-react';
type Props = {
  url: string
  identifier: string
  title: string
}
export class Comment extends React.Component<Props, {}> {
  render() {
    const disqusShortname = "example"
    const disqusConfig = this.props
    return (
      <div className="article">
        <h1>{this.props.article.title}</h1>
        <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
          Comments
        </Disqus.CommentCount>
        <p>{this.props.article.body}</p>
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    )
  }
}
