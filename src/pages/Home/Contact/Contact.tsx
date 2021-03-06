import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { Button } from 'components/Button/Button';
import { CommonFormElementStyling } from './InputStyle';
import FormikInput from 'components/FormikFields/FormikInput/FormikInput';
import FormikTextArea from 'components/FormikFields/FormikTextArea/FormikTextArea';
import { Form, Formik } from 'formik';
import FormikCheckbox from 'components/FormikFields/FormikChecbox/FormikCheckbox';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { media, useRWD } from 'global/RWD';
import { MaxWidthWithBg } from 'components/MaxSizeAndBackground/MaxWidthAndBg';
import ShapePortfolio from 'assets/ShapePortfolio.svg';
import { Icon } from 'components/Icon/Icon';
import { Col, Row } from 'antd';
import { useFirebase } from 'global/Firebase/FirebaseContext';
import { message } from 'antd';
import { FormikCaptcha } from 'components/FormikFields/FormikCaptcha/FormikCaptcha';

interface EditorStylesWrapperType {
  hasError?: boolean;
}

const ContactStyle = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.main.primary};
`;

const ContactPadding = styled.div`
  ${media.xs`
  padding: 60px 16px 52px 16px;  
  `}
  ${media.lg`
  padding: 96px 192px 80px 192px;
  `}
`;
const TextUnderSectionTitle = styled.h3`
  ${props => props.theme.typography.h5};
  color: ${props => props.theme.colors.utils.background.mid.color};
  ${media.xs`
   margin-top: 24px;
  `}
  ${media.md`
  margin: 24px 0 48px 16px;
  `}
`;

const InputBoxes = styled(Row)`
  margin-bottom: 32px;
  width: 100%;
  ${media.xl`
   display: flex;
   justify-content: space-between;
  `};
`;

const StyledInput = styled.input<EditorStylesWrapperType>`
  height: 48px;
  ${CommonFormElementStyling}
   border-color: ${props => (props.hasError ? props.theme.colors.functional.error : null)};
   ${media.xs`
   padding-left:12px;
   margin-bottom:0px;
  `}
  ${media.xl`
   margin-bottom:0px;
  `}
    ${media.xxl`
   margin-bottom:0px;
  `}
`;

const NameInputText = styled.h6`
  color: ${props => props.theme.colors.utils.background.mid.color};
  ${media.xs`
    margin:20px 0 32px 0;
  `}
  ${media.xl`
   margin: 0 0 0 0;
   `}
     ${media.xxl`
   margin-bottom:0px;
  `}
`;

const NameInput = styled(StyledInput)`
  ${media.xs`
  width: 100%;
  `}
  ${media.xl`
  width: 400px;
  `}
    ${media.xxl`
   margin-bottom:0px;
  `}
`;

const EmailInputText = styled.h6<EditorStylesWrapperType>`
  color: ${props => props.theme.colors.utils.background.mid.color};
  ${media.md`
  float:none;
  `};
  ${media.xl`
    float: right;
  `}
`;

const EmailInput = styled(StyledInput)`
  ${media.xs`
  width: 100%;
  `}
  ${media.xl`
  width: 400px;
  `}
   ${media.xxl`
   margin-bottom:0px;
  `}
`;

const MessageTextArea = styled.textarea<EditorStylesWrapperType>`
  height: 136px;
  padding: 20px 0 0 20px;
  width: 100%;
  & {margin-bottom: 0px;}
  ${CommonFormElementStyling}
   border-color: ${props => (props.hasError ? props.theme.colors.functional.error : null)};

`;

const MessageText = styled.h6`
  display: flex;
  align-items: center;
  & {
    margin-bottom: 32px;
  }
  color: ${props => props.theme.colors.utils.background.mid.color};
`;

const ButtonPosition = styled.div`
  text-align: right;
`;

const SendButton = styled(Button)`
  ${media.xs`
  width:100%
  margin-top: 16px;
  `}
  ${media.xl`
  margin-top: 0;
  width: 116px;
`}
  ${media.xxl`
   margin-bottom:0px;
   padding-left:20px;;
  `}
`;

const TermServiceAndPolicyText = styled.span`
  cursor: pointer;
  color: ${props => props.theme.colors.utils.background.mid.color};
  &:hover {
    color: ${props => props.theme.colors.main.secondary};
  }
  ${media.xs`
   color: #F55951;
   `}
  ${media.md`
  color: #F1E8E6;
  `}
`;

const CheckBoxStyle = styled(FormikCheckbox)`
  color: ${props => props.theme.colors.utils.background.mid.color};
  display: flex;
  .ant-checkbox-checked .ant-checkbox-inner:after {
    border-color: ${props => props.theme.colors.main.primary};
  }
`;

const FormStyle = styled(Form)`
  ${media.xs`
  margin-left: 0;
`}
  ${media.md`
  margin-left: 16px;
`}
`;

const Shape = styled(Icon)`
  z-index: ${props => props.theme.zIndex.house};
  position: absolute;
  background-color: ${props => props.theme.colors.main.secondary};
  ${media.xs`
  left:0px;
  top: -100px;
  height: 170px;
  width:31px;
    `}
`;

const TextInCheckBox = styled.div`
  margin-left: 8px;
  ${props => props.theme.typography.body2};
`;

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  message: Yup.string().required('Required'),
  captcha: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  checkBox: Yup.boolean()
    .required('Required')
    .oneOf([true], 'You must accept Term Of Service and Privacy Policy.'),
});

const initialFormValues = {
  name: '',
  email: '',
  message: '',
  checkBox: ``,
  captcha: undefined,
};

const StyledFormikCaptcha = styled(FormikCaptcha)`
  display: flex;
  justify-content: flex-start;
  margin: 12px 0;
`;

export const ContactStyled: FunctionComponent = () => {
  const { less } = useRWD();
  const { db } = useFirebase();
  return (
    <ContactStyle id="Contact" className="Contact">
      {less.lg && <Shape svgLink={ShapePortfolio} alt="irregular shape" />}
      <MaxWidthWithBg BackgroundColorProps="primary">
        <ContactPadding>
          <SectionTitle section="Contact" color="secondary" boxColor="primary" />
          <TextUnderSectionTitle>
            Just describe your needs and our consulting agency will deliver the best quality solution for you!
          </TextUnderSectionTitle>
          <Formik
            initialValues={initialFormValues}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {
              db.collection('trigger-email')
                .add({
                  to: 'patrykjanik1710@gmail.com',
                  message: {
                    subject: '✰ Contact form Appsome Solutions',
                    html: `Name: ${values.name} <br /> Email: ${values.email} <br /> Message: ${values.message} <br />`,
                  },
                })
                .then(() => {
                  message.success('Properly send message!');
                  resetForm();
                })
                .catch(() => message.success('Got some errors when sending message :/'));
            }}
          >
            <FormStyle translate={false}>
              <InputBoxes>
                <Col xs={24} xl={12}>
                  <NameInputText>
                    <FormikInput
                      name="name"
                      id="contact-form-name"
                      InputComponent={(props: any) => <NameInput {...props} placeholder="Name" />}
                    />
                  </NameInputText>
                </Col>
                <Col xs={24} xl={12}>
                  <EmailInputText>
                    <FormikInput
                      name="email"
                      id="contact-form-email"
                      InputComponent={(props: any) => <EmailInput {...props} placeholder="Email" />}
                    />
                  </EmailInputText>
                </Col>
              </InputBoxes>
              <MessageText>
                <FormikTextArea
                  name="message"
                  id="contact-form-message"
                  InputComponent={(props: any) => <MessageTextArea {...props} placeholder="Message" />}
                />
              </MessageText>
              <CheckBoxStyle name="checkBox" id="contact-form-checkbox">
                <TextInCheckBox>
                  I agree to{' '}
                  <Link to="/term-of-service">
                    <TermServiceAndPolicyText>term of service</TermServiceAndPolicyText>
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy-policy">
                    <TermServiceAndPolicyText>privacy policy</TermServiceAndPolicyText>
                  </Link>
                </TextInCheckBox>
              </CheckBoxStyle>
              <StyledFormikCaptcha name="captcha" />
              <ButtonPosition>
                <SendButton htmlType="submit" aria-label="send contact form">
                  SEND
                </SendButton>
              </ButtonPosition>
            </FormStyle>
          </Formik>
        </ContactPadding>
      </MaxWidthWithBg>
    </ContactStyle>
  );
};
