import React, {useState} from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../utils/SectionProps';
import {Link} from 'react-router-dom';
import SectionHeader from './partials/SectionHeader';
import Input from '../elements/Input';
import Button from '../elements/Button';
import ReactDom from 'react-dom';
import {value} from "lodash/seq";
import sectionHeader from "./partials/SectionHeader";

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            subject: "",
            content: ""
        }
        this.api_key = process.env.REACT_APP_API_KEY;
        this.api_url = process.env.REACT_APP_API_URL;
    }

    submit(e) {
        fetch(this.api_url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'x-api-key': `${this.api_key}/contact`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                // 'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Credentials': 'true',
                // 'Access-Control-Allow-Methods' : ['GET', 'POST', 'OPTIONS']
            },
            body: JSON.stringify(this.state)
        }).then((r)=>console.log(r)).catch((e)=>console.log(e));
    }
    render() {

        const {
            className,
            topOuterDivider,
            bottomOuterDivider,
            topDivider,
            bottomDivider,
            hasBgColor,
            invertColor,
            ...props
        } = this.props;

        const outerClasses = classNames(
            'signin section',
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color',
            className
        );

        const innerClasses = classNames(
            'signin-inner section-inner',
            topDivider && 'has-top-divider',
            bottomDivider && 'has-bottom-divider'
        );

        const sectionHeader = {
            title: 'We are happy to hear from you'
        };


        return (
            <section
                {...props}
                className={outerClasses}
            >
                <div className="container">
                    <div className={innerClasses}>
                        <SectionHeader tag="h2" data={sectionHeader} className="center-content"/>
                        <div className="tiles-wrap">
                            <div className="tiles-item">
                                <div className="tiles-item-inner">
                                    <form>
                                        <fieldset>
                                            <div className="mb-12">
                                                <Input
                                                    type="email"
                                                    label="Email"
                                                    placeholder="Your Email"
                                                    labelHidden
                                                    required
                                                    value={this.state.email}
                                                    onChange={(e) => (this.setState({email: e.target.value}))}
                                                />
                                            </div>
                                            <div className="mb-12">
                                                <Input
                                                    type="text"
                                                    label="Subject"
                                                    placeholder="Subject"
                                                    labelHidden
                                                    required
                                                    value={this.state.subject}
                                                    onChange={(e) => (this.setState({subject: e.target.value}))}
                                                />
                                            </div>
                                            <div className="mb-12">
                                                <Input
                                                    type="textarea"
                                                    label="content"
                                                    placeholder="Please write your message"
                                                    labelHidden
                                                    required
                                                    value={this.state.content}
                                                    onChange={(e) => (this.setState({content: e.target.value}))}
                                                />
                                            </div>
                                            <div className="mt-24 mb-32">
                                                <Button color="primary" wide onClick={(e) => {
                                                    e.preventDefault();
                                                    this.submit();
                                                }}>Submit</Button>
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
    }
}

ContactForm.propTypes = propTypes;
ContactForm.defaultProps = defaultProps;

export default ContactForm;