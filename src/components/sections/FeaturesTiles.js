import React from 'react';
import classNames from 'classnames';
import {SectionTilesProps} from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import {featureTileObj} from "../../assets/Constants";
import FeatureTile from "../elements/FeatureTile";

const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}

class FeaturesTiles extends React.Component {

    render() {

        const {
            className,
            topOuterDivider,
            bottomOuterDivider,
            topDivider,
            bottomDivider,
            hasBgColor,
            invertColor,
            pushLeft,
            ...props
        } = this.props;

        const outerClasses = classNames(
            'features-tiles section',
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color',
            className
        );

        const innerClasses = classNames(
            'features-tiles-inner section-inner',
            topDivider && 'has-top-divider',
            bottomDivider && 'has-bottom-divider'
        );

        const tilesClasses = classNames(
            'tiles-wrap',
            pushLeft && 'push-left'
        );

        const sectionHeader = {
            title: '',
            paragraph: ''
        };

        const tiles = featureTileObj.map((obj, idx) => (
            <FeatureTile imageName={obj['image']} header={obj['header']} content={obj['content']}/>
        ))
        return (
            <section
                {...props}
                className={outerClasses}
            >
                <div className="container">
                    <div className={innerClasses}>
                        <SectionHeader data={sectionHeader} className="center-content"/>
                        <div className={tilesClasses}>
                            {tiles.map((tile, idx) => (
                                <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap"
                                     data-reveal-delay={'' + (idx * 100)} key={idx}>
                                    {tile}
                                </div>
                            ))}
                            {/*{tiles.map((tile) => (*/}
                            {/*    <div>*/}
                            {/*        {tile}*/}
                            {/*    </div>*/}
                            {/*))}*/}
                            {/*<div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap">*/}
                            {/*    <div className="tiles-item-inner">*/}
                            {/*        <div className="features-tiles-item-header">*/}
                            {/*            <div className="features-tiles-item-image mb-16">*/}
                            {/*                <Image*/}
                            {/*                    src={require('./../../assets/images/feature-tile-icon-01.svg')}*/}
                            {/*                    alt="Features tile icon 01"*/}
                            {/*                    width={64}*/}
                            {/*                    height={64}/>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div className="features-tiles-item-content">*/}
                            {/*            <h4 className="mt-0 mb-8">*/}
                            {/*                Personalization*/}
                            {/*            </h4>*/}
                            {/*            <p className="m-0 text-sm">*/}
                            {/*                We will learn your organisation, and work with your teams to create exactly*/}
                            {/*                the solutions you need*/}
                            {/*            </p>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="100">*/}
                            {/*  <div className="tiles-item-inner">*/}
                            {/*    <div className="features-tiles-item-header">*/}
                            {/*      <div className="features-tiles-item-image mb-16">*/}
                            {/*        <Image*/}
                            {/*          src={require('./../../assets/images/feature-tile-icon-02.svg')}*/}
                            {/*          alt="Features tile icon 02"*/}
                            {/*          width={64}*/}
                            {/*          height={64} />*/}
                            {/*      </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="features-tiles-item-content">*/}
                            {/*      <h4 className="mt-0 mb-8">*/}
                            {/*        Robust workflow*/}
                            {/*      </h4>*/}
                            {/*      <p className="m-0 text-sm">*/}
                            {/*        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.*/}
                            {/*      </p>*/}
                            {/*    </div>*/}
                            {/*  </div>*/}
                            {/*</div>*/}

                            {/*<div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="200">*/}
                            {/*  <div className="tiles-item-inner">*/}
                            {/*    <div className="features-tiles-item-header">*/}
                            {/*      <div className="features-tiles-item-image mb-16">*/}
                            {/*        <Image*/}
                            {/*          src={require('./../../assets/images/feature-tile-icon-03.svg')}*/}
                            {/*          alt="Features tile icon 03"*/}
                            {/*          width={64}*/}
                            {/*          height={64} />*/}
                            {/*      </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="features-tiles-item-content">*/}
                            {/*      <h4 className="mt-0 mb-8">*/}
                            {/*        Robust Workflow*/}
                            {/*      </h4>*/}
                            {/*      <p className="m-0 text-sm">*/}
                            {/*        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.*/}
                            {/*      </p>*/}
                            {/*    </div>*/}
                            {/*  </div>*/}
                            {/*</div>*/}

                            {/*<div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">*/}
                            {/*  <div className="tiles-item-inner">*/}
                            {/*    <div className="features-tiles-item-header">*/}
                            {/*      <div className="features-tiles-item-image mb-16">*/}
                            {/*        <Image*/}
                            {/*          src={require('./../../assets/images/feature-tile-icon-04.svg')}*/}
                            {/*          alt="Features tile icon 04"*/}
                            {/*          width={64}*/}
                            {/*          height={64} />*/}
                            {/*      </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="features-tiles-item-content">*/}
                            {/*      <h4 className="mt-0 mb-8">*/}
                            {/*        Robust Workflow*/}
                            {/*      </h4>*/}
                            {/*      <p className="m-0 text-sm">*/}
                            {/*        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.*/}
                            {/*      </p>*/}
                            {/*    </div>*/}
                            {/*  </div>*/}
                            {/*</div>*/}

                            {/*<div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="400">*/}
                            {/*  <div className="tiles-item-inner">*/}
                            {/*    <div className="features-tiles-item-header">*/}
                            {/*      <div className="features-tiles-item-image mb-16">*/}
                            {/*        <Image*/}
                            {/*          src={require('./../../assets/images/feature-tile-icon-05.svg')}*/}
                            {/*          alt="Features tile icon 05"*/}
                            {/*          width={64}*/}
                            {/*          height={64} />*/}
                            {/*      </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="features-tiles-item-content">*/}
                            {/*      <h4 className="mt-0 mb-8">*/}
                            {/*        Robust Workflow*/}
                            {/*      </h4>*/}
                            {/*      <p className="m-0 text-sm">*/}
                            {/*        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.*/}
                            {/*      </p>*/}
                            {/*    </div>*/}
                            {/*  </div>*/}
                            {/*</div>*/}

                            {/*<div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="500">*/}
                            {/*  <div className="tiles-item-inner">*/}
                            {/*    <div className="features-tiles-item-header">*/}
                            {/*      <div className="features-tiles-item-image mb-16">*/}
                            {/*        <Image*/}
                            {/*          src={require('./../../assets/images/feature-tile-icon-06.svg')}*/}
                            {/*          alt="Features tile icon 06"*/}
                            {/*          width={64}*/}
                            {/*          height={64} />*/}
                            {/*      </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="features-tiles-item-content">*/}
                            {/*      <h4 className="mt-0 mb-8">*/}
                            {/*        Robust Workflow*/}
                            {/*      </h4>*/}
                            {/*      <p className="m-0 text-sm">*/}
                            {/*        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.*/}
                            {/*      </p>*/}
                            {/*    </div>*/}
                            {/*  </div>*/}
                            {/*</div>              */}

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;