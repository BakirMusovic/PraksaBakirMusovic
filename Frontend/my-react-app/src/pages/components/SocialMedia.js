import React from 'react';

const SocialMedia = ({ href, src, alt }) => {
  return (
    <a href={href}>
      <img src={src} alt={alt} />
    </a>
  );
};

export default SocialMedia;
