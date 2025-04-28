import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { submitContactForm } from "./../../utils/contactFormSubmit";
import Input from "../elements/Input";
import Button from "../elements/Button";
import SectionHeader from "./partials/SectionHeader";

const ContactForm = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    content: ""
  });
  const [submitting, setSubmitting] = useState(false);

  const apiUrl = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_API_KEY;
  const recaptchaSiteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    if (!document.getElementById("recaptcha-script")) {
      const script = document.createElement("script");
      script.id = "recaptcha-script";
      script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, [recaptchaSiteKey]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);

    try {
      await window.grecaptcha.ready(async () => {
        const token = await window.grecaptcha.execute(recaptchaSiteKey, { action: "submit" });

        const payload = {
          ...formData,
          recaptchaToken: token
        };

        await submitContactForm(apiUrl, apiKey, payload);

        alert("Your message was submitted successfully!");
        setFormData({
          email: "",
          subject: "",
          content: ""
        });
      });
    } catch (error) {
      console.error(error);
      alert("Failed to submit your message. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  const outerClasses = classNames(
    "signin section",
    props.topOuterDivider && "has-top-divider",
    props.bottomOuterDivider && "has-bottom-divider",
    props.hasBgColor && "has-bg-color",
    props.invertColor && "invert-color",
    props.className
  );

  const innerClasses = classNames(
    "signin-inner section-inner",
    props.topDivider && "has-top-divider",
    props.bottomDivider && "has-bottom-divider"
  );

  const sectionHeader = {
    title: "We are happy to hear from you"
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader tag="h2" data={sectionHeader} className="center-content" />
          <div className="tiles-wrap">
            <div className="tiles-item">
              <div className="tiles-item-inner">
                <form onSubmit={handleSubmit}>
                  <fieldset>
                    <div className="mb-12">
                      <Input
                        type="email"
                        label="Email"
                        placeholder="Your Email"
                        labelHidden
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-12">
                      <Input
                        type="text"
                        label="Subject"
                        placeholder="Subject"
                        labelHidden
                        required
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-12">
                      <Input
                        type="textarea"
                        label="Content"
                        placeholder="Please write your message"
                        labelHidden
                        required
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mt-24 mb-32">
                      <Button color="primary" wide type="submit" disabled={submitting}>
                        {submitting ? "Submitting..." : "Submit"}
                      </Button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
