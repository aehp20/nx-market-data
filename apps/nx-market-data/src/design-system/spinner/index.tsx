import styled from 'styled-components';

export const Spinner = styled.div`
  border: 4px solid #a5a5a9;
  border-top: 4px black solid;
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

export const SpinnerContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  margin-top: 8px;
  margin-bottom: 8px;
`;
