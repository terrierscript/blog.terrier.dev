import CMS from "netlify-cms"

// import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview"
// import ProductPagePreview from './preview-templates/ProductPagePreview'

// CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate("blog", BlogPostPreview)
