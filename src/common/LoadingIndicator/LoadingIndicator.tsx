import React from 'react';
import LoadingLogo from 'assets/loading.svg';
import styled from 'styled-components/macro';

const LoadingContainer = styled.div`
  position: relative;
  min-height: 100px;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

interface LoadingIndicatorProps {
  isLoading: boolean;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ isLoading }) => {
  return <LoadingContainer>{isLoading && <img src={LoadingLogo} alt={'Loading...'} />}</LoadingContainer>;
};

export default LoadingIndicator;
