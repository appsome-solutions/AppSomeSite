import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Icon } from 'components/Icon/Icon';
import Line from 'assets/Line.png';
import { media, useRWD } from 'global/RWD';
import LineMd from 'assets/LineMd.svg';
export type PositionText = 'right' | 'left';
export interface ElementProps {
  title?: string;
  content?: string | JSX.Element;
  contentPosition?: PositionText;
  svgLink: string;
  positionText?: PositionText;
  isWithLine?: boolean;
}

const ProcessTimeLineElement = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.xs`
  margin-bottom: 8px;
  `}
  ${media.md`
  margin-bottom: 0px;
  `}
`;

type WholeTextPosition = { positionText?: PositionText; contentPosition?: PositionText };
const PositionWholeText = styled.div<WholeTextPosition>`
  position: absolute;
  ${props => (props.positionText === 'left' ? 'right:188px;' : 'left:188px;')}
  text-align: ${props => (props.contentPosition === 'left' ? 'left' : 'right')};
`;

const Title = styled.h5`
  color: ${props => props.theme.colors.main.secondary};
  margin-bottom: 4px;
`;
const IdeaContent = styled.pre`
  ${props => props.theme.typography.body1};
  ${media.xs`
  white-space: pre-wrap;
  text-align: center;
  `}
  ${media.md`
  white-space: pre;
  text-align:inherit;
  `}
`;

const Circle = styled.div`
  height: 160px;
  width: 160px;
  background-color: ${props => props.theme.colors.main.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IdeaIconStyle = styled(Icon)`
  width: 128px;
  height: 128px;
  background: ${props => props.theme.colors.utils.background.mid.color};
`;

const LineUnderSvg = styled.img`
  width: 4px;
  height: 35px;
  margin-bottom: 16px;
`;

const LineUnderSvgDesktop = styled(Icon)`
  width: 4px;
  height: 70px;
  margin-bottom: 0;
`;

export const TimeLineElement: FunctionComponent<ElementProps> = (props: ElementProps): JSX.Element => {
  const { title, content, svgLink, isWithLine = true } = props;
  const { less, more } = useRWD();
  return (
    <>
      <ProcessTimeLineElement>
        <Circle>
          <IdeaIconStyle svgLink={svgLink} />
        </Circle>
        <PositionWholeText positionText={props.positionText} contentPosition={props.contentPosition}>
          {more.md && (
            <div>
              <Title>{title}</Title>
              <IdeaContent>{content}</IdeaContent>
            </div>
          )}
        </PositionWholeText>
      </ProcessTimeLineElement>
      {less.md && (
        <>
          <Title>{title}</Title>
          <IdeaContent>{content}</IdeaContent>
        </>
      )}
      {less.md && <div>{isWithLine && <LineUnderSvg src={Line} />}</div>}
      {more.md && <div>{isWithLine && <LineUnderSvgDesktop svgLink={LineMd} />}</div>}
    </>
  );
};
