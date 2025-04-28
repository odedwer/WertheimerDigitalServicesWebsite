import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SmoothScroll = ({
  className,
  children,
  to,
  onLinkClick,
  ...props
}) => {
  const handleClick = (e) => {
    e.preventDefault();

    const targetId = to;
    const target = document.getElementById(targetId);

    if (!target) return;

    onLinkClick && onLinkClick();

    // ✅ Native smooth scroll
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const classes = classNames(className);

  return (
    <a
      {...props}
      className={classes}
      href={`#${to}`}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

SmoothScroll.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  onLinkClick: PropTypes.func
};

export default SmoothScroll;
