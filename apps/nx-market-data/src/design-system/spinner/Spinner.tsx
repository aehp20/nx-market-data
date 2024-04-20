import styled from 'styled-components';

export const Spinner = styled.div`
  border: 4px solid pink;
  border-top: 4px deeppink solid;
  border-radius: 50%;
  height: 16px;
  width: 16px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
