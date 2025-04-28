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
  const [submitted, setSubmitted] = useState(false); // ✨ NEW
  const [error, setError] = useState(""); // ✨ NEW

  let apiUrl, apiKey, recaptchaSiteKey;
  try {
    apiUrl = process.env.REACT_APP_API_URL;
    apiKey = process.env.REACT_APP_API_KEY;
    recaptchaSiteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
  } catch (error) {
    apiUrl = "https://api.example.com/submit";
    apiKey = "your-api-key";
    recaptchaSiteKey = "your-recaptcha-site-key";
  }

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

    // Reset success and error when user starts typing
    setSubmitted(false);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSubmitted(false);

    try {
      await window.grecaptcha.ready(async () => {
        try {
          const token = await window.grecaptcha.execute(recaptchaSiteKey, { action: "submit" });

          const payload = {
            ...formData,
            recaptchaToken: token
          };

          await submitContactForm(apiUrl, apiKey, payload);

          setFormData({
            email: "",
            subject: "",
            content: ""
          });
          setSubmitted(true);
        } catch (submissionError) {
          console.error(submissionError);
          setError(
              "We're sorry, but your request could not be sent right now. Please send an email to wertheimer.digital.services+contact@gmail.com directly."
          );
        }
      });
    } catch (grecaptchaError) {
      console.error(grecaptchaError);
      setError(
          "We're sorry, but we could not verify your request. Please send an email to wertheimer.digital.services+contact@gmail.com directly."
      );
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
                    <fieldset disabled={submitting}>
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
                      {/* ✨ NEW - Messages */}
                      {submitted && (
                          <div className="form-message success-message" style={{ color: "green", textAlign: "center", marginTop: "1rem" }}>
                            Your message was sent successfully!
                          </div>
                      )}
                      {error && (
                          <div className="form-message error-message" style={{ color: "red", textAlign: "center", marginTop: "1rem" }}>
                            {error}
                          </div>
                      )}
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
