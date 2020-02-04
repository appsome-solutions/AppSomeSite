import CookieIcon from 'assets/CookieIcon.svg';
import CloseSign from 'assets/CloseSign.svg';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import useLocalStorage from 'react-use-localstorage';

const CookiesBarStyled = styled.div`
  background-color: ${props => props.theme.colors.main.tetiary};
  height: 32px;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${props => props.theme.zIndex.towerBlock};
`;

const CookieText = styled.span`
  ${props => props.theme.typography.caption};
  margin-left: 8px;
`;

const TextHere = styled.span`
  ${props => props.theme.typography.caption};
  margin-left: 4px;
  cursor: pointer;
  color: ${props => props.theme.colors.main.secondary};
  &:hover {
    text-decoration-line: ${props => props.theme.textDecorationLine};
    text-decoration-skip: spaces;
  }
`;

const CookiesIcon = styled.img`
  margin-right: 8px;
`;

const XIcon = styled.img`
  width: 8px;
  height: 8px;
  cursor: pointer;
  margin-left: 8px;
`;

export const CookieBar: FunctionComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const [isVisible, setIsVisible] = useLocalStorage('setIsVisible', 'true');
  if (isVisible === 'false') {
    return null;
  } else {
    return (
      <CookiesBarStyled>
        <CookieText>
          <CookiesIcon src={CookieIcon} />
          We are using cookies, unfortunately they are not with chocolate... You can learn about it more
          <TextHere>here</TextHere>
          <XIcon onClick={() => setIsVisible('false')} src={CloseSign} alt="X Sign" />
        </CookieText>
      </CookiesBarStyled>
    );
  }
};