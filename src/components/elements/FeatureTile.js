import React from 'react';
import PropTypes from 'prop-types';
import Image from "./Image";

const propTypes = {
    tag: PropTypes.elementType,
    imageName: PropTypes.string,
    header: PropTypes.string,
    content: PropTypes.string,
}

const defaultProps = {
    tag: 'feature-tile',
    imageName: '',
    header: 'Header',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}

const FeatureTile = ({
                         className,
                         tag,
                         imageName,
                         header,
                         content,
                         ...props
                     }) => {

    return (
        <div className="tiles-item-inner">
            <div className="features-tiles-item-header">
                <div className="features-tiles-item-image mb-16">
                    <Image
                        src={require('./../../assets/images/' + imageName)}
                        alt="Features tile icon 01"
                        width={64}
                        height={64}/>
                </div>
            </div>
            <div className="features-tiles-item-content">
                <h4 className="mt-0 mb-8">
                    {header}
                </h4>
                <p className="m-0 text-sm">
                    {content}
                </p>
            </div>
        </div>
    );
}

FeatureTile.propTypes = propTypes;
FeatureTile.defaultProps = defaultProps;

export default FeatureTile;