import * as React from "react";

const Testimonials = ({ testimonials }) => (
  <div>
    {testimonials.map(testimonial => (
      <article className="message">
        <div className="message-body">
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
);

// Testimonials.propTypes = {
//   testimonials: PropTypes.arrayOf(
//     PropTypes.shape({
//       quote: PropTypes.string,
//       author: PropTypes.string
//     })
//   )
// };

export default Testimonials;
