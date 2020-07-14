import * as React from 'react';
import styled from 'styled-components';
import useThrottle from '../../lib/hooks/useThrottle';
import palette from '../../lib/styles/palette';

type ScrollTopProps = {};

const { useState, useCallback, useEffect } = React;
function ScrollTop(props: ScrollTopProps) {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  const handleScroll = useThrottle(() => {
    if (window.scrollY > window.screen.availHeight) {
      setShowScrollTop((showScrollTop) => true);
    } else {
      setShowScrollTop((showScrollTop) => false);
    }
  }, 300);

  const handleClick = useCallback(() => {
    scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Block onClick={handleClick} showScrollTop={showScrollTop}>
      TOP
    </Block>
  );
}

const Block = styled.div<{ showScrollTop: boolean }>`
  position: fixed;
  top: ${(props) => (props.showScrollTop ? '0' : '-2.5rem')};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  z-index: 10;
  color: white;
  background: ${palette.teal5};
  opacity: 0.8;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
  }
`;

export default ScrollTop;
