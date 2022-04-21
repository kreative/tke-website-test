import React, { Component } from "react";
import Head from 'next/head';
import Wrapper from '../components/Wrapper/Wrapper';
import styles from "../styles/contact.module.css";
import {Col, Container, Row} from "react-grid-system";
import Button from "../components/Button/Button";
import axios from "axios";

class Analytics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            helperText: 'Test out your email with BigWin!',
            textColor: "grey",
            emailAddress: '',
            subjectLine: '',
            message: '',
            daysToRespond: '0 days',
            openRate: 0,
            replyRate: 0,
            pSubjectLine: '',
            pMessage: '',
        }

        this.processForm = this.processForm.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.getRandomInt = this.getRandomInt.bind(this);
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    clearForm() {
        this.setState({
            helperText: 'Test out your email with BigWin!',
            emailAddress: '',
            subjectLine: '',
            message: '',
            daysToRespond: '0 days',
            openRate: 0,
            replyRate: 0,
            pSubjectLine: '',
            pMessage: ''
        });
    }

    processForm() {
        const emailAddress = this.state.emailAddress;
        const subjectLine = this.state.subjectLine;
        const message = this.state.message;

        if (subjectLine == this.state.pSubjectLine && message == this.state.pMessage) {
            return;
        }

        this.setState({
            pSubjectLine: subjectLine,
            pMessage: message
        });

        if (emailAddress == "" || subjectLine == "" || message == "") {
            this.setState({
                helperText: "Please fill out all fields!",
                textColor: "red"
            });
        }
        else {
            const config = {
                method: 'get',
                url: 'http://ec2-52-23-38-77.compute-1.amazonaws.com:8080',
                headers: {
                    'Content-Type': 'application/json',
                    'To': this.state.emailAddress,
                    'Subject': this.state.subjectLine,
                    'Body': this.state.message
                }
            }
            let daysToRespond;

            // axios(config)
            //     .then((response) => {
            //         consoele.log(response.data.minutes);
            //         const minutes = JSON.stringify(response.data.minutes);
            //
            //         if (minutes == undefined) {
            //             daysToRespond = this.getRandomInt(3);
            //         }
            //         else {
            //             const hours = Math.ceil(minutes / 60 );
            //             daysToRespond = Math.ceil(hours / 24);
            //         }
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //         daysToRespond = this.getRandomInt(3);
            //     });

            const openRate = this.getRandomInt(20) + 7;
            const replyRateMax = Math.floor(openRate * 0.25);
            const replyRate = this.getRandomInt(replyRateMax) + 2;
            daysToRespond = this.getRandomInt(3);

            this.setState({openRate, replyRate});

            if (daysToRespond == 0) this.setState({daysToRespond: "Same day!"});
            else this.setState({ daysToRespond: daysToRespond + " days" });
        }
    }

    render() {
        return (
            <Wrapper bg="white" paddingTop="150px" paddingBottom="200px">
                <img src={"/kreativebigwin@2000px.png"} className={styles.bigwin_logo}/>
                <Container fluid style={{ padding: "0px" }}>
                    <Row gutterWidth={0}>
                        <Col md={8}>
                            <div className={styles.contact_form_section}>
                                <p style={{ color: this.state.textColor }} className={styles.helper_text}>
                                    {this.state.helperText}
                                </p>
                                <div>
                                    <div className="contact-form">
                                        <form
                                            className="f-form"
                                            action="/success"
                                            name="contact-form"
                                            data-netlify="true"
                                        >
                                            <input type="hidden" name="form-name" value="contact-form" />
                                            <div className={styles.fField}>
                                                <input
                                                    className={styles.ss}
                                                    type="text"
                                                    name="email"
                                                    id="email_field"
                                                    placeholder="Email Address"
                                                    value={this.state.emailAddress}
                                                    onChange={(e) => this.setState({ emailAddress: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <div className={styles.fField}>
                                                <input
                                                    className={styles.ss}
                                                    type="text"
                                                    name="website"
                                                    id="website_field"
                                                    placeholder="Subject"
                                                    value={this.state.subjectLine}
                                                    onChange={(e) => this.setState({ subjectLine: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <div className={styles.fField}>
                                              <textarea
                                                  className={styles.ss}
                                                  name="message"
                                                  id="message_field"
                                                  placeholder="Message"
                                                  rows={6}
                                                  value={this.state.message}
                                                  onChange={(e) => this.setState({ message: e.target.value })}
                                                  required
                                              />
                                            </div>

                                            <Row gutterWidth={10}>
                                                <Col xs={9}>
                                                    <div className={"button_holder"} onClick={this.processForm}>
                                                        <Button
                                                            type="submit"
                                                            fill="#950EFF"
                                                            hoverColor="#730CC5"
                                                            textColor="white"
                                                            radius="3px"
                                                            border="1px solid #950EFF"
                                                            hoverBorder="1px solid #730CC5"
                                                            padding="15px 50px"
                                                            width={"100%"}
                                                        >
                                                            Analyze Email
                                                        </Button>
                                                    </div>
                                                </Col>
                                                <Col xs={3}>
                                                    <div className={"button_holder"} onClick={this.clearForm}>
                                                        <Button
                                                            type="submit"
                                                            fill="white"
                                                            hoverColor="#EEEEEE"
                                                            textColor="#950EFF"
                                                            radius="3px"
                                                            border="2px solid #950EFF"
                                                            hoverBorder="2px solid #950EFF"
                                                            padding="15px 50px"
                                                            width={"100%"}
                                                        >
                                                            Clear
                                                        </Button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className={styles.contact_details}>
                                <div className={styles.contact_detail}>
                                    <p className={styles.contact_label}>Open Rate</p>
                                    <p className={styles.contact_info}>{this.state.openRate}%</p>
                                </div>
                                <div className={styles.contact_detail}>
                                    <p className={styles.contact_label}>Reply Rate</p>
                                    <a href="mailto:kmp@kreative.im">
                                        <p className={styles.contact_info}>{this.state.replyRate}%</p>
                                    </a>
                                </div>
                                <div className={styles.contact_detail}>
                                    <p className={styles.contact_label}>Days to Respond</p>
                                    <a href="tel:8475950793">
                                        <p className={styles.contact_info}>{this.state.daysToRespond}</p>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
        );
    }
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kreative BigWin Demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Analytics />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
