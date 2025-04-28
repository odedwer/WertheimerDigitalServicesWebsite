import React from "react";
import classNames from "classnames";
import TimelineItem from "../elements/TimelineItem";
import {whyWorkWithMeTitle, whyWorkWithMeDescription, experiencePoints} from "../../assets/Constants";

const Roadmap = ({
                     topOuterDivider = false,
                     bottomOuterDivider = false,
                     hasBgColor = false,
                     invertColor = false,
                     topDivider = false,
                     bottomDivider = false,
                     className = '',
                     id,
                     style,
                     ...props
                 }) => {
    const outerClasses = classNames(
        "features-split section",
        topOuterDivider && "has-top-divider",
        bottomOuterDivider && "has-bottom-divider",
        hasBgColor && "has-bg-color",
        invertColor && "invert-color",
        className
    );

    const innerClasses = classNames(
        "features-split-inner section-inner",
        topDivider && "has-top-divider",
        bottomDivider && "has-bottom-divider"
    );

    return (
        <section id={id} style={style} className={outerClasses}>
            <div className="container">
                <div className={innerClasses}>
                    <div className="section-header center-content">
                        <h2 className="section-title mt-0">{whyWorkWithMeTitle}</h2>
                        <p className="section-paragraph">{whyWorkWithMeDescription}</p>
                    </div>
                    <div className="split-wrap">
                        {experiencePoints.map((item, index) => {
                                const animationClass = index % 2 === 0 ? 'reveal-from-left' : 'reveal-from-right';
                                return (
                                    <TimelineItem title={item.strong} className={animationClass}>
                                        {item.text}
                                    </TimelineItem>
                                )
                            }
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
