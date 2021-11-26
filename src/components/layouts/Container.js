import React from 'react';
import PropTypes from 'prop-types';

export default function Container({ children, size, className }) {
  return (
    <div
      className={`${className}`}
      style={{
        minWidth: `${size}px`,
        maxWidth: `${size}px`,
        margin: '0 auto',
      }}>
      {children}
    </div>
  );
}

Container.defaultProps = {
  size: '1020',
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
