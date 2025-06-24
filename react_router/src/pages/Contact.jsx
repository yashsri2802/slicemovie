import { Form } from "react-router-dom";

export const contactData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
    return null;
  } catch (error) {
    console.log(error.message);
  }
};

export const Contact = () => {
  return (
    <>
      <section className="container ">
       
        <h2 className="section-common--heading">📞 Contact Us</h2>
        <br />
        <p className="section-common--subheading">
          We'd love to hear from you! Whether you have a question, feedback, or
          just want to say hello — drop us a message below.
        </p>
        <br />
        <br />

        <div className="section-contact">
          <div className=" grid grid-two--cols">
            <div className="contact-content">
              <Form method="POST" action="/contact">
                <div className="grid grid-two-cols mb-3">
                  <div>
                    <label htmlFor="username">Full Name</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      required
                      autoComplete="off"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      autoComplete="off"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message "
                    cols="30"
                    rows="6"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <div className="mt-3">
                  <button type="submit" className="btn contact-btn">
                    ✉️ Send Message
                  </button>
                </div>
              </Form>
            </div>
            <div className="contact-image">
              <figure>
                <img
                  src="./contact.png"
                  alt="contact pic"
                  className="contact_image"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
