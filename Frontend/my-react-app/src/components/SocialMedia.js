import React from 'react';

const SocialMedia=({ href, src, alt, target='_blank', rel='noopener noreferrer' }) => {
  return (
    <a href={ href } target={ target } rel={ rel }>
      <img src={ src } alt={ alt } />
    </a>
  );
};

export default SocialMedia;
