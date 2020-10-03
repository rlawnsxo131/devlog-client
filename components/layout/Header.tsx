import * as React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import media from '../../lib/styles/media';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import useThrottle from '../../lib/hooks/useThrottle';
import WrappingLinker from '../common/WrappingLinker';

type HeaderProps = {};
type ScrollDirectionType = 'UP' | 'DOWN';
const { useRef, useState, useCallback, useEffect } = React;
function Header(props: HeaderProps) {
  const prevScroll = useRef<number>(0);
  const [scrollDirection, setScrollDirection] = useState<
    ScrollDirectionType | undefined
  >(undefined);

  const handleScroll = useCallback(
    useThrottle(() => {
      const currentScroll = window.scrollY;

      if (matchMedia(media.xsmall)) {
        if (
          prevScroll.current < currentScroll &&
          currentScroll > 88 &&
          currentScroll > 0
        ) {
          setScrollDirection('DOWN');
        } else {
          setScrollDirection('UP');
        }
      }

      if (!matchMedia(media.xsmall)) {
        if (
          prevScroll.current < currentScroll &&
          currentScroll > 60 &&
          currentScroll > 0
        ) {
          setScrollDirection('DOWN');
        } else {
          setScrollDirection('UP');
        }
      }
      prevScroll.current = currentScroll;
    }, 300),
    [],
  );

  useEffect(() => {
    prevScroll.current = window.scrollY;
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Block scrollDirection={scrollDirection}>
      <WrappingLinker href="/">
        <h2>DevLog</h2>
      </WrappingLinker>
      <Navigation />
      <MobileNavigation />
    </Block>
  );
}

const Block = styled.header<{ scrollDirection?: ScrollDirectionType }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding-left: 3vw;
  box-shadow: 1px 1px 10px 2px ${palette.gray1};
  background: white;
  transition: top 0.25s;
  h2:hover {
    cursor: pointer;
  }
  ${media.xsmall} {
    top: ${(props) => (props.scrollDirection === 'DOWN' ? '-5.75rem' : '0')};
    height: 5.5rem;
    flex-direction: column;
    justify-content: space-around;
  }
  ${media.medium} {
    top: ${(props) => (props.scrollDirection === 'DOWN' ? '-4rem' : '0')};
    height: 3.75rem;
    padding-right: 15vw;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export default Header;
