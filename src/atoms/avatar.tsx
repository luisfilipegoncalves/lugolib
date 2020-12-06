import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  border: 1px solid var(--default, hsl(0, 0%, 16%));
  border-radius: 999px;
  width: 30px;
  height: 30px;
  object-fit: cover;
  overflow: hidden;
`;

export interface AvatarProps {
  url?: string;
  alt?: string;
}

const Avatar = (props: AvatarProps) => {
  const { url = '', alt = '' } = props;
  return <Image src={url} alt={alt} {...props} />;
};

export default Avatar;
