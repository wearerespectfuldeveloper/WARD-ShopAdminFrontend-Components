import { Meta, Story, Props, Preview } from '@storybook/addon-docs/blocks';

<Meta title="Readme|Introduction" />

# WARD UIKIT

WARD UIKIT 은 프로그래밍 스터디그룹 WARD 에서 제작한 리액트 컴포넌트 라이브러리입니다. 웹 어플리케이션 관리자 페이지를 만드는 것에 최적화 되어 제작되었습니다.

## 사용된 기술

WARD UIKIT 은 타입스크립트를 기반으로 하고 있습니다.

## 주의사항

WARD UIKIT 은 react-spring과 emotion 라이브러리를 사용합니다. 따라서 WARD UIKIT을 사용하기 위해서는 다음의 명령어를 통해 두 가지 패키지를 모두 설치해주셔야 합니다.

`yarn add react-uikit-ward react-spring @emotion/core`

## 도움 주신 분들

이 UIKIT은 개발자 Velopert 님의 'TypeScript와 Storybook을 사용한 리액트 디자인 시스템 구축하기' 시리즈 글을 바탕으로 제작되었습니다. 큰 감사의 말씀 전합니다.

<https://velog.io/@velopert/series/storybook-typescript-design-system>

import { Meta, Story, Props, Preview } from '@storybook/addon-docs/blocks';

<Meta title="Readme|How To Explore" />

<br><br>

# UIKIT & Storybook

WARD UIKIT 은 기본적으로 npm 라이브러리로서 제공되어, 설치 후 바로 사용할 수 있지만, 제공하는 컴포넌트 API의 사용법과 스타일링 방법을 편하게 소개하기 위해서 Storybook 이라는 UI 컴포넌트 문서화 툴을 사용합니다.

<https://storybook.js.org/>

[![스토리북](https://storybook.js.org/images/social/open-graph.png)](https://storybook.js.org/videos/storybook-hero-video-optimized.mp4"스토리북")

# Storybook을 통해 컴포넌트 살펴보기

WARD UIKIT 에서 제공하는 컴포넌트들의 모든 사용법을 숙지하기 위해 스토리북을 통해 다음의 기능을 제공합니다

## DOCS 탭을 통한 컴포넌트 명세 확인

![스토리북 Docs](https://raw.githubusercontent.com/storybookjs/storybook/master/addons/docs/docs/media/hero.png)

Storybook 은 Docs 탭을 통해 해당 컴포넌트가 받는 Props의 종류와 타입 등을 확인할 수 있는 명세서를 보여줍니다.

## Knobs 조작을 통한 컴포넌트 사용 방법 파악

![스토리북 Knobs](https://github.com/storybookjs/storybook/raw/master/addons/knobs/docs/storybook-knobs-example.png)

Knobs 패널에 보이는 값들을 조작하여 해당 컴포넌트가 받는 Props 들의 값이 변함에 따라 어떻게 디자인과 동작이 바뀌는지를 확인하실 수 있습니다.

## Action 패널을 통한 컴포넌트 동작 확인

![스토리북 Actions](https://raw.githubusercontent.com/storybookjs/storybook/HEAD/addons/actions/docs/screenshot.png)

## Viewport 조작을 통한 반응형 디자인 체크

![스토리북 Viewport](https://github.com/storybookjs/storybook/raw/master/addons/viewport/docs/viewport.png)

Viewport 탭을 통해 클라이언트의 기기 사이즈에 따른 반응형 디자인 적용 여부를 확인하실 수 있습니다.
import { Meta, Story, Props, Preview } from '@storybook/addon-docs/blocks';

<Meta title="Readme|Getting-Started" />

<br><br>

# 시작하기

WARD-UIKIT 은 npm 을 통해 제공됩니다.

## 설치하기

다음의 명령어를 통해 UIKIT 과 해당 패키지의 peerDependencies 들을 모두 설치해줍니다.

`npm install --save react-uikit-ward react-spring @emotion/core`

혹은

`yarn add react-uikit-ward react-spring @emotion/core`

위 패키지들의 설치가 끝났다면 UIKIT 을 사용하기 위한 모든 준비가 끝난 것입니다.

## 컴포넌트 import 후 적용

```jsx
import React from 'react';
import './App.css';

import { Button } from 'react-uikit-ward';

const App = () => {
  return (
    <div className="App">
      <Button>Hello World!</Button>
    </div>
  );
};

export default App;
```

![결과](./capture.png)
