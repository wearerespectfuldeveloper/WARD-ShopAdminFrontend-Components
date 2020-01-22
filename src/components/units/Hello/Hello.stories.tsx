import React from 'react';
import Hello from './Hello';
import mdx from './Hello.mdx';
import { withKnobs, text, boolean, number, color, object, array, select, radios, optionsKnob, files, date, button } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components|basic/Hello', // 스토리북에서 보여질 그룹과 경로를 명시
  component: Hello, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs], // 애드온 적용
  parameters: {
    componentSubtitle: '안녕하세요 라고 보여주는 컴포넌트',
    docs: {
      page: mdx
    }
  }
}

// 자세한 knobs 자료형들 사용법 
// https://www.npmjs.com/package/@storybook/addon-knobs#available-knobs

export const hello = () => {
  // knobs 만들기
  const big = boolean('big', false, 'Group-1');
  const name = text('name', 'Storybook', 'Group-2');
  return (
    <Hello 
      name={name}
      big={big}
      onHello={action('onHello')}
      onBye={action('onBye')}
    />
  )
}

hello.story = {
  name: 'Default'
}


export const standard = () => <Hello name="Storybook" />
export const big = () => <Hello name="Storybook" big />
