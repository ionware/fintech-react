import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Header from './Header';

export default function PageLayout({ children, title }) {
  return (
    <div>
      <Helmet>
        <title>{title} &mdash; FinTech</title>
      </Helmet>
      <Header />
      <div className='mt-4'>{children}</div>
    </div>
  );
}

// layout's properties types.
PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
