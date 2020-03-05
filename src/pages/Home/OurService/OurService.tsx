import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import JsTs from 'assets/JsTs.svg';
import Mongo from 'assets/Mongo.svg';
import ReactIcon from 'assets/React.svg';
import Node from 'assets/Node.png';
import Pwa from 'assets/PWA.png';
import Graphql from 'assets/GRAPHql.svg';
import App from 'assets/App.svg';
import Browser from 'assets/Browser.svg';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { ServiceBoxElement } from './ServiceBox/ServiceBox';
import { media, useRWD } from 'global/RWD';
import { Row, Col } from 'antd';
import { MaxWidthWithBg } from '../../../components/MaxSizeAndBackground/MaxWidthAndBg';
const ServiceStyle = styled.div`
  background-color: ${props => props.theme.colors.main.primary};
  ${media.xs`
  padding-top: 40px;
 `}
  ${media.lg`
  padding-top: 98px;
 `}
`;

const OurSevicesBox = styled.div`
  ${media.xs`
  padding: 0 20px 36px 20px;
 `}
  ${media.lg`
   padding:0 0 60px 0;
   margin-left: 192px;
 `}
`;

const WholeTextPre = styled.h6`
  color: ${props => props.theme.colors.utils.background.mid.color};
  ${media.xs`
    margin: 20px 0 0 0;
    font-size: 16px;
    line-height: 19px;
  `}
  ${media.lg`
    margin-left: 16px;
`}
`;

const RedText = styled.span`
  color: ${props => props.theme.colors.main.secondary};
`;

const TechnicalsRow = styled(Row)`
  background-color: ${props => props.theme.colors.utils.background.mid.color};
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.xs`
  padding: 40px 0 12px 40px;
  flex-direction: column;
  `}
  ${media.lg`
  padding: 36px 80px 36px 40px;
  flex-direction: row;
  `}
`;

const IconsSvgs = styled.img`
  ${media.xs`
    margin:0 32px 32px 0;
  `}
  ${media.lg`
   margin:0 0 0 20px; 
  `}
`;

const ServicesCardsBox = styled.div`
  ${media.xs`
  padding: 46px 20px;`}
  ${media.lg`  
  display: flex;
  justify-content: center;
   padding: 128px 40px 148px 40px;
  `}
`;

const RightElementWithMargin = styled(ServiceBoxElement)`
  ${media.xs`
  margin-top:20px;
  margin-left: 0;
  `}
  ${media.lg`
    margin-top:0;
   margin-left: 92px;
  `}
`;

const RowInGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const OurServices: FunctionComponent = () => {
  const { less, more } = useRWD();
  return (
    <ServiceStyle className="Service" id="Service">
      <MaxWidthWithBg BgColor="primary">
        <OurSevicesBox>
          <SectionTitle section="Our Service" color="secondary" boxColor="primary" />
          {more.lg && (
            <WholeTextPre>
              We specialize in web technologies - simply saying we are in love with <RedText>JavaScript!</RedText>
              <br />
              Those are few we know at expert level:
            </WholeTextPre>
          )}
          {less.lg && (
            <WholeTextPre>
              We specialize in web technologies - simply saying we are in love with
              <br /> <RedText>JavaScript!</RedText>
              <br />
              <br />
              <br />
              Those are few we know at expert level:
            </WholeTextPre>
          )}
        </OurSevicesBox>
      </MaxWidthWithBg>
      <MaxWidthWithBg BgColor="secondary">
        <TechnicalsRow>
          <RowInGrid>
            <Col xs={12} md={24} lg={24}>
              <IconsSvgs src={JsTs} alt="" />
              <IconsSvgs src={Mongo} alt="" />
              <IconsSvgs src={ReactIcon} alt="" />
            </Col>
          </RowInGrid>
          <RowInGrid>
            <Col xs={12} md={24} lg={24}>
              <IconsSvgs src={Node} alt="" />
              <IconsSvgs src={Pwa} alt="" />
              <IconsSvgs src={Graphql} alt="" />
            </Col>
          </RowInGrid>
        </TechnicalsRow>
      </MaxWidthWithBg>
      <MaxWidthWithBg BgColor="primary">
        <ServicesCardsBox>
          {more.lg && (
            <ServiceBoxElement
              svgLink={Browser}
              title="Web Aplications"
              content="Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s, when an
unknown printer took a galley of type and scrambled it to
make a type specimen book.Lorem Ipsum is simply
dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy
text ever since the 1500s, when an unknown printer took
a galley of type and scrambled it to make a type
specimen book."
            />
          )}
          {more.lg && (
            <RightElementWithMargin
              svgLink={App}
              title="Mobile Aplications"
              content="Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the
industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and
scrambled it to make a type specimen book.Lorem
Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the
industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and
scrambled it to make a type specimen book."
            />
          )}
          {less.lg && (
            <ServiceBoxElement
              svgLink={Browser}
              title="Web Aplications"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
          )}
          {less.lg && (
            <RightElementWithMargin
              svgLink={App}
              title="Mobile Aplications"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
          )}
        </ServicesCardsBox>
      </MaxWidthWithBg>
    </ServiceStyle>
  );
};
