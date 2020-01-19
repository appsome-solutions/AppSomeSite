import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Line from 'assets/Line.svg';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { ProcessTimeLine } from 'components/TimeLine/TimeLine';
import IdeaIcon from 'assets/IdeaIcon.svg';
import DesignIcon from 'assets/DesignIcon.svg';
import LaunchIcon from 'assets/LaunchIcon.svg';
import RequirementsIcon from 'assets/RequirementsIcon.svg';
import RealizationIcon from 'assets/RealizationIcon.svg';
import RedShapeTheProcess from 'assets/RedShapeTheProcess.svg';
const ProcessFrame = styled.div`
  background-color: ${props => props.theme.colors.utils.background.mid.color};
  padding: 104px 104px 24px 180px;
  position: relative;
`;
const TimeLine = styled.div`
  margin: 40px 96px 60px 0;
  flex-direction: column;
  display: flex;
  align-items: center;
`;
const BottomText = styled.div`
  float: right;
  ${props => props.theme.typography.body2}
`;
const RedShape = styled.img`
  position: absolute;
  width: 422px;
  height: 304px;
  right: -136px;
  bottom: -50px;
`;
export const TheProcess: FunctionComponent = () => (
  <ProcessFrame>
    <SectionTitle section="TheProcess" color="primary" boxColor="secondary" />
    <TimeLine>
      <ProcessTimeLine
        positionText="right"
        svgLink={IdeaIcon}
        title="Idea"
        content="Everything starts with your idea"
        contentPosition="left"
      />
      <img src={Line} alt="" />
      <ProcessTimeLine
        positionText="left"
        svgLink={RequirementsIcon}
        title="Requirements"
        content=" We talk together, gather your
requirements and share our thoughts"
        contentPosition="right"
      />
      <img src={Line} alt="" />
      <ProcessTimeLine
        positionText="right"
        svgLink={DesignIcon}
        title="*Designs"
        content="Based on requirements we create full set of
views with best User Experience in mind"
        contentPosition="left"
      />
      <img src={Line} alt="" />
      <ProcessTimeLine
        positionText="left"
        svgLink={RealizationIcon}
        title="Realization"
        content="With some coffe and keyboard in hands we change
desings to working mobile or web applications"
        contentPosition="right"
      />
      <img src={Line} alt="" />
      <ProcessTimeLine
        positionText="right"
        svgLink={LaunchIcon}
        title="Launch"
        content="It’s time to make your working idea visible for others.
Let’s launch it!"
        contentPosition="left"
      />
      <RedShape src={RedShapeTheProcess} />
    </TimeLine>
    <BottomText>*Designs can be provided </BottomText>
  </ProcessFrame>
);
