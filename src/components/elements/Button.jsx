import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
  className,
  tag: Tag = 'button',
  color = '',
  size = '',
  loading = false,
  wide = false,
  wideMobile = false,
  disabled = false,
  ...props
}) => {
  const classes = classNames(
    'button',
    color && `button-${color}`,
    size && `button-${size}`,
    loading && 'is-loading',
    wide && 'button-block',
    wideMobile && 'button-wide-mobile',
    className
  );

  return (
    <Tag
      {...props}
      className={classes}
      disabled={disabled}
    />
  );
};

Button.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.elementType,
  color: PropTypes.string,
  size: PropTypes.string,
  loading: PropTypes.bool,
  wide: PropTypes.bool,
  wideMobile: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node
};

export default Button;
