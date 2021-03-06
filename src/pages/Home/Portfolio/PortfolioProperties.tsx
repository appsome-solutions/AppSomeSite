import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Icon } from 'components/Icon/Icon';
import Quote from 'assets/Quote.svg';
import { media, useRWD } from 'global/RWD';
import { Col, Row } from 'antd';

export type imgDimensions = 'phone' | 'laptop';
export interface PortfolioProps {
  title?: string;
  description?: string | JSX.Element;
  svgLink?: string;
  challenges?: string;
  TestimonialText?: string;
  TestimonialPerson?: string;
  imgDimension?: imgDimensions;
}

const PortfolioDescription = styled.div`
  ${media.xs`
  margin-left: 0;
  padding-top: 8px;
  `} ${media.lg`
  margin-left: 44px;
  padding:0;
`};
`;

const DescriptionSiteBox = styled.div`
  ${props => props.theme.typography.body1};
  margin-bottom: 24px;
`;

const DescriptionSite = styled.div`
  ${props => props.theme.typography.body1}
`;

const Challenges = styled.div`
  ${props => props.theme.typography.body1}
  margin: 16px 0 12px 0;
  font-weight: 500;
`;

const TitleSite = styled.h6`
  margin-bottom: 12px;
`;

const QuotationBoxWithQuoteSvg = styled.div`
  background-color: ${props => props.theme.colors.functional.main.primary.opacity};
  margin-bottom: 28px;
  padding: 16px 12px 20px 12px;
`;

const QuotationBoxWithText = styled.div`
  ${props => props.theme.typography.body1};
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-style: italic;
  padding: 0 24px;
`;

const CarouselWhole = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  ${media.xs`
  flex-direction:column;
  `}
  ${media.lg`
  flex-direction:row;
  `}
`;

const BoxWithSecondQuote = styled.div`
  text-align: right;
`;

const AuthorText = styled.div`
  display: flex;
  justify-content: center;
  ${props => props.theme.typography.body1};
`;

const QuoteSign = styled(Icon)`
  height: 20px;
  width: 20px;
`;

type imgProps = { imgDimension?: imgDimensions };
const ImgBox = styled.div<imgProps>`
  position: relative;
  display: flex;
  justify-content: center;
  width: auto;
`;

const ImgDivDesktop = styled.img`
  position: relative;
  display: flex;
  width: 100%;
  object-fit: contain;
  ${media.xs`
  height: 240px;
`}
  ${media.md` 
  height: 400px;
  padding:40px;
  `}
`;
const ImgDiv = styled.img`
  position: relative;
  display: flex;
  width: 100%;
  ${media.xs`
  height: 300px;
  margin: 20px;
`}
  ${media.md`
  height: 400px;
  padding:40px;
  `}
`;

export const PortfolioCarousel: FunctionComponent<PortfolioProps> = (props: PortfolioProps): JSX.Element => {
  const { title, description, svgLink, TestimonialPerson, TestimonialText, challenges, imgDimension } = props;
  const { less, more } = useRWD();
  return (
    <Row>
      <CarouselWhole>
        {more.lg && (
          <Col lg={12} xl={imgDimension === 'laptop' ? 16 : 8}>
            <ImgBox>
              <ImgDiv alt="portfolio project preview" src={svgLink} />
            </ImgBox>
          </Col>
        )}
        {less.lg && (
          <ImgBox imgDimension={imgDimension}>
            {props.imgDimension ? <ImgDivDesktop src={svgLink} /> : <ImgDiv src={svgLink} />}
          </ImgBox>
        )}
        <Col lg={12} xl={imgDimension === 'laptop' ? 8 : 16}>
          <PortfolioDescription>
            <TitleSite>{title}</TitleSite>
            <DescriptionSiteBox>
              <DescriptionSite>
                {description}
                <Challenges>Challenges</Challenges>
                {challenges}
              </DescriptionSite>
            </DescriptionSiteBox>
            <QuotationBoxWithQuoteSvg>
              <QuoteSign svgLink={Quote} alt="left quote" />
              <QuotationBoxWithText>{TestimonialText}</QuotationBoxWithText>
              <BoxWithSecondQuote>
                <QuoteSign svgLink={Quote} alt="right quote" />
              </BoxWithSecondQuote>
              <AuthorText>{TestimonialPerson}</AuthorText>
            </QuotationBoxWithQuoteSvg>
          </PortfolioDescription>
        </Col>
      </CarouselWhole>
    </Row>
  );
};
