import React, { Fragment } from 'react';
import Form from './Form';
import InputComponent from '../../units/Input/Input';
import Button from '../../units/Button/Button';
import ButtonGroup from '../../blocks/ButtonGroup/ButtonGroup';
import { withKnobs, text, radios, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Block|Form',
  components: Form,
  decorators: [withKnobs]
}

export const form = () => {
  const width = text('width', '100%');
  const title = text('title', 'WARD');
  const subTitle = text('subTitle', 'We Are Resfectful Developers');
  const redirectText = text('redirectText', 'Guideline');
  const redirectUrl = text('redirectUrl', 'https://');

  const bodyElements = (
    <Fragment>
      <InputComponent
        inputType="text"
        inputPlaceHolder={"Input"}
        disabled={false}
      />
    </Fragment>
  );

  const footerElements = (
    <ButtonGroup gap="2.5rem">
      <Button>
        버튼
      </Button>
    </ButtonGroup>
  );

  return (
    <Form
      title={title}
      subTitle={subTitle}
      width={width}
      redirectText={redirectText}
      redirectUrl={redirectUrl}
      bodyElements={bodyElements}
      footerElements={footerElements}
    >
    </Form>
  )
}

form.story = {
  name: 'Default'
}

export const signInForm = () => {
  const width = text('width', '100%');
  const title = text('title', 'WARD');
  const subTitle = text('subTitle', 'We Are Resfectful Developers');

  const bodyElements = (
    <Fragment>
      <InputComponent
        inputType="text"
        inputPlaceHolder={"아이디"}
        disabled={false}
      />
      <InputComponent
        inputType="text"
        inputPlaceHolder={"패스워드"}
        disabled={false}
      />
    </Fragment>
  );

  const footerElements = (
    <Fragment>
      <ButtonGroup gap="2.5rem">
        <Button>
          로그인
        </Button>
        <Button
          theme="secondary"
        >
          회원가입
        </Button>
      </ButtonGroup>
      <div>
        
      </div>
    </Fragment>
  );

  return (
    <Form
      title={title}
      subTitle={subTitle}
      width={width}
      bodyElements={bodyElements}
      footerElements={footerElements}
    >
    </Form>
  )
}

export const signUpForm = () => {
  const width = text('width', '100%');
  const title = text('title', 'WARD');
  const subTitle = text('subTitle', '회원 정보를 입력해주세요');

  const bodyElements = (
    <Fragment>
      <InputComponent
        inputType="text"
        inputPlaceHolder={"유저 이름"}
        disabled={false}
      />
      <InputComponent
        inputType="text"
        inputPlaceHolder={"이메일"}
        disabled={false}
      />
      <InputComponent
        inputType="text"
        inputPlaceHolder={"아이디"}
        disabled={false}
      />
      <InputComponent
        inputType="text"
        inputPlaceHolder={"패스워드"}
        disabled={false}
      />
      <InputComponent
        inputType="text"
        inputPlaceHolder={"패스워드 확인"}
        disabled={false}
      />
    </Fragment>
  );

  const footerElements = (
    <ButtonGroup gap="2.5rem">
      <Button>
        로그인
      </Button>
      <Button
        theme="secondary"
      >
        회원가입
      </Button>
    </ButtonGroup>
  );

  return (
    <Form
      title={title}
      subTitle={subTitle}
      width={width}
      bodyElements={bodyElements}
      footerElements={footerElements}
    >
    </Form>
  )
}

export const verifyForm = () => {
  const width = text('width', '100%');
  const title = text('title', 'WARD');
  const subTitle = text('subTitle', '이메일로 전송된 인증코드를 입력해주세요');

  const bodyElements = (
    <Fragment>
      <InputComponent
        inputType="text"
        inputPlaceHolder={"인증코드"}
        disabled={false}
      />
    </Fragment>
  );

  const footerElements = (
    <ButtonGroup gap="2.5rem">
      <Button>
        인증하기
      </Button>
    </ButtonGroup>
  );

  return (
    <Form
      title={title}
      subTitle={subTitle}
      width={width}
      bodyElements={bodyElements}
      footerElements={footerElements}
    >
    </Form>
  )
}