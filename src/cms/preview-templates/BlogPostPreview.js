import React from "react";
import PropTypes from "prop-types";
import { BlogPostTemplate } from "../../templates/blog-post";

const BlogPostPreview = ({ entry, widgetFor }) => {
  return <div>aa</div>;
  console.log(entry.toJson());
  return (
    <BlogPostTemplate
      content={widgetFor("body")}
      description={entry.getIn(["data", "description"])}
      tags={entry.getIn(["data", "tags"])}
      title={entry.getIn(["data", "title"])}
    />
  );
};

export default BlogPostPreview;
