import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Timeline from '../elements/Timeline';
import TimelineItem from '../elements/TimelineItem';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class Roadmap extends React.Component {

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
      'roadmap section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'roadmap-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const sectionHeader = {
      title: 'Experience',
      paragraph: ''
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <Timeline>
              <TimelineItem title="October 2017">
                CS & Psychology B.Sc in the Hebrew University of Jerusalem
              </TimelineItem>
              <TimelineItem title="May 2018">
                Programmer in a cognitive neuroscience lab, specializing in EEG & eye-tracking.
              </TimelineItem>
              <TimelineItem title="October 2019">
                TA in a programming course for CS students in the Hebrew University, teaching C/C++
              </TimelineItem>
              <TimelineItem title="March 2020">
                Programmer in "Computational Principles of Cognition" course in the Hebrew University, Led by a Harvard Postdoc
              </TimelineItem>
              <TimelineItem title="October 2020">
                Accepted into an excellence direct PhD program in computational neuroscience, in ELSC
              </TimelineItem>
              <TimelineItem title="October 2020">
                Promoted to the head of the C/C++ course
              </TimelineItem>
              <TimelineItem title="October 2021">
                TA and Programmer in a statistics course in the Hebrew University
              </TimelineItem>
              <TimelineItem title="October 2022">
                Promoted to the head of the statistics course
              </TimelineItem>
              <TimelineItem title="October 2023">
                BI, assimilation of a new information system & development of custom code for automations in the design department of the IDF ground forces
              </TimelineItem>
              <TimelineItem title="December 2023">
                BI, assimilation of a new information system & development of automatic processes in the organization department of the IDF C4I wing
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </section>
    );
  }
}

Roadmap.propTypes = propTypes;
Roadmap.defaultProps = defaultProps;

export default Roadmap;