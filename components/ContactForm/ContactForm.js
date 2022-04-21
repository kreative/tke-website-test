import React, { Component } from "react";
import Button from "../Button/Button";
import { Container, Row, Col } from "react-grid-system";

class ContactForm extends Component {
  render() {
    return (
      <div>
        <div className="contact-form">
          <form
            className="f-form"
            action="/success"
            name="contact-form"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <div className="f-field">
              <input
                  className="ss"
                  type="text"
                  name="email"
                  id="email_field"
                  placeholder="Email Address"
                  required
              />
            </div>
            <div className="f-field">
              <input
                className="ss"
                type="text"
                name="website"
                id="website_field"
                placeholder="Subject"
              />
            </div>
            <div className="f-field">
              <textarea
                className="ss"
                name="message"
                id="message_field"
                placeholder="Message"
                rows={6}
                required
              />
            </div>
            <div id={"button_holder"}>
              <Button
                  type="submit"
                  fill="#950EFF"
                  hoverColor="#730CC5"
                  textColor="white"
                  radius="3px"
                  border="1px solid #001AFF"
                  hoverBorder="1px solid #004893"
                  padding="15px 50px"
                  width={"100%"}
              >
                Analyze Email
              </Button>
            </div>
          </form>
        </div>
        <style jsx>{`
          .ss {
            outline: none;
            padding: 0.9em 1.1em;
            background: #fefefe;
            border: 1px solid #cfcfcf;
            border-radius: 3px;
            box-sizing: border-box;
            font-family: monospace;
            font-weight: normal;
            font-size: 1em;
            width: 100%;
          }
          
          .ss:focus {
            outline: 1px #FF0E9F solid;
          }

          .f-formfield {
            margin-bottom: 15px;
          }

          .f-field {
            margin-bottom: 15px;
          }
        `}</style>
      </div>
    );
  }
}

export default ContactForm;
