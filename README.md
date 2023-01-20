## 🚀 PLAYIDEA WEB PAGE

## Index

1. [시작하기](##1.-시작하기)
2. [기술 스택](##2.-기술-스택)
3. [디렉토리 구조 가이드](##3.-디렉토리-구조-가이드)
4. [협업 방법](##4.-협업-방법)
5. [코드 컨벤션](##5.-코드-컨벤션)

## 1. 시작하기

### 1. Clone

```shell
$ git clone https://github.com/PI304/PI_WEB.git
$ cd PI_WEB
$ yarn install
```

### 2. Run

```javascript
$ yarn run
```

## 2. 기술 스택

<a><img src="https://img.shields.io/badge/TS-3178C6?style=flat-square&logo=typescript&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=reduxsaga&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/Redux Saga-999999?style=flat-square&logo=redux&logoColor=white"/></a>
<br/>
<a><img src="https://img.shields.io/badge/Styled Components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/EsLint-4B32C3?style=flat-square&logo=eslint&logoColor=white"/></a>
<br/>
<a><img src="https://img.shields.io/badge/Next.js-black?style=flat-square&logo=next.js&logoColor=white"/></a>
<a><img src="https://img.shields.io/badge/Vercel-black?style=flat-square&logo=vercel&logoColor=white"/></a>

## 3. 디렉토리 구조 가이드

```
├── @types
│   ├── base.d.ts
│   ├── seo.d.ts
│   ├── styled.d.ts
│   └── needImport.d.ts
├── components
│   ├── layouts
│   ├── pages
│   │   ├── main
│   │   ├── team
│   │   ├── value
│   │   └── work
│   ├── seo
│   └── shared
├── constants
│   ├── paths.ts
│   └── seo.ts
├── hooks
├── modules
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx
│   ├── main.tsx
│   ├── team.tsx
│   ├── value.tsx
│   └── work.tsx
├── public
├── styles
│   ├── colors.ts
│   ├── devices.ts
│   ├── fonts.ts
│   ├── global.ts
│   ├── reset.ts
│   ├── sizes.ts
│   ├── styled.ts
│   └── svgs.tsx
├── next-env.d.ts
├── next.config.js
├── tsconfig.json
├── README.md
├── package.json
└── yarn.lock
```

### 1. @types 디렉토리

1. 모든 type 선언은 이곳에서 해주세요.
2. 파일 이름은 \*.d.ts 형식을 지켜주세요.
3. import가 필요한 타입 선언 시에는 @types/needImport.d.ts 파일에 선언해주세요.

**PLEASE DO NOT** - 다른 디렉토리의 파일에서 타입 선언

### 2. components 디렉토리

1. components/layouts - 레이아웃 컴포넌트
2. components/pages - 각 page의 최상위 컴포넌트 및 해당 page에서 사용되는 하위 컴포넌트
3. components/seo - CustomHead 등 SEO에 사용되는 컴포넌트
4. components/shared - 기타 공용 컴포넌트
5. components/... - 추후 추가될 수 있습니다.

### 3. constants 디렉토리

1. 중요한 상수는 이곳에서 관리해주세요. (예: paths, seo...)
2. 중요함의 기준 (1개 이상 충족 시 중요하다고 판단)
   1. 2개 파일 이상에서 사용되는 경우 (재사용)
   2. 추후 논의에 의해 변경될 수 있는 경우 (추적용이)
   3. 기타 사유로 중요하다고 판단하는 경우

### 4. hooks 디렉토리

custom hook은 이곳에 작성해주세요.

### 5. modules 디렉토리

추후 Redux 관련 파일들이 들어갑니다.

### 6. pages 디렉토리

라우터 설정을 위한 Next.js 예약 디렉토리입니다.

### 7. public 디렉토리

이미지 등 asset은 public/assets 에 저장해주세요.

**참고** - SVG는 파일로 저장하지 않고, styles/svgs.tsx에 상수로 정의하여 관리합니다.

### 8. styles 디렉토리

1. styles/colors.ts - 디자인 컬러
2. styles/devices.ts - 반응형 스타일을 위한 디바이스 구분 기준 등
3. styles/fonts.ts - 디자인 타이포그래피
4. styles/global.ts - 전역 스타일
5. styles/reset.ts - 리셋 스타일
6. styles/styled.ts - 중요한 Styled-components (1번 이상 재사용 OR 추적용이)
7. styles/svgs.tsx - SVG 정의

### 9. Named Export

각 디렉토리에는 index.ts가 있습니다.

```javascript
// components/shared/index.ts
import Navigator from './Navigator';
import ContactWidget from './ContactWidget';

export { Navigator, ContactWidget };
```

디렉토리 내부의 파일들을 한꺼번에 모아 다시금 Named Export 하여,  
다른 디렉토리의 파일에서 아래와 같이 Import 하기 위함입니다.

```javascript
// components/layouts/WithNavigatorLayout.tsx
import { Navigator, ContactWidget } from '../shared';
```

Default Export된 컴포넌트를 Import하는 것에 비하여 Import 문을 짧게 관리할 수 있고,  
추후 컴포넌트 파일 이름이 바뀌는 경우에 대응하기 용이하다는 이점이 있습니다.

따라서 컴포넌트를 작성하였다면 해당 디렉토리의 index.ts에서 위와 같이 Named Export 해주세요.

## 4. 협업 방법

### 1. Branching Strategy

PR을 통해 Feature 브랜치들을 Develop에 머지하고,  
최종 배포할 시기가 되면 Admin 관리자가 Develop 브랜치를 Production 브랜치에 머지하여 배포하는 단순한 구조를 따릅니다.

### 2. 협업 과정

1. 로컬에 Clone한 레포에서 Feature 브랜치를 생성하여 작업합니다.
2. 개발이 끝났다면 다시 한번 원격 레포의 최신 커밋을 받아와줍니다.

```shell
// 체크아웃 하기 전, Feature 브랜치에서의 작업 내용을 커밋해야 합니다.
$ git checkout develop
$ git pull origin develop
```

3. 추가된 최신 커밋이 있다면 내가 작업한 Feature 브랜치를, 새로운 커밋이 추가된 Develop 브랜치의 마지막 커밋으로 Rebase 합니다. (말그대로 base를 바꾼다는 뜻입니다)

```shell
$ git checkout Feature/[브랜치명]
$ git rebase develop
```

4. 충돌이 발생했다면, 에디터에서 충돌을 해결한 뒤 아래 명령어를 입력합니다.

```shell
$ git add .
$ git rebase --continue
```

5. 이상이 없다면 Feature 브랜치를 push 합니다.

```shell
$ git push origin Feature/[브랜치명]
```

6. Github에서 PR을 생성합니다. PR 시 나타나는 템플릿을 채워주세요.

```markdown
## Feature Description

- 이런 이런 기능입니다

## To Reviewers

- 이런 이런 점을 유의해주세요
```

7. (...Review 과정은 고민 중...)

8. Self Merge 해주세요.

9. Squash Merge되며, Merge된 Feature Branch는 자동 삭제됩니다.

10. 로컬에서 Develop 브랜치로 체크아웃한 뒤 Pull하고, 새로운 Feature 브랜치로 분기하여 다음 작업을 진행해주세요.

### 3. 브랜치 이름 컨벤션

```
Feature/[기능요약]

- 맨 첫글자 F만 대문자로, 기능요약은 소문자로 작성해주세요
- 기능요약에 있는 띄어쓰기는 -(하이픈)으로 대체해주세요
- 기능요약은 영어로 작성해주세요

ex) Feature/modal-publishing
```

### 4. 커밋 메세지 컨벤션

```
<태그>: <제목>

- : 뒤에만 띄어쓰기가 있습니다
- 제목은 한영 혼용이 가능합니다
- 태그의 첫글자는 대문자로 작성해주세요
- 태그는 아래에 적힌 것들만 사용해주세요

Feat: 새로운 기능 추가, 기능 로직 변경
Fix: 버그 수정
Refactor: 코드 리팩토링 (기능 변화 X)
Style: 코드 포맷팅, 코드 변경이 없는 경우
Chore: 빌드 업무 수정, 패키지 매니저 수정
Docs: 문서 수정, 주석
```

## 5. 코드 컨벤션

### 1. EsLint 관련

EsLint Rule을 임의로 해제하지 말아주세요.

### 2. Type 관련

1. Props Type 선언 시 Type을 사용해주세요. (Interface X)
2. Props Type의 이름은 **[컴포넌트이름]+Props** 의 형식으로 지어주세요.

```typescript
type HeaderProps = {
  onOpenDrawer: (e: React.MouseEvent) => void;
};

type PublicationBoxElementProps = {
  title: string;
  writer: string;
  img: string;
  pdf: string;
};
```

3. Interface 선언 시, 클래스의 인터페이스로 사용할 목적이 아니라면 **접두사 I를 사용하지 말아주세요**.

### 3. Constant 정의 시

객체로 정의하되, `as const` 키워드를 사용하여 read-only 객체로 만들어주세요.

```typescript
export const Paths = {
  new: '/new',
  newComplete: '/new/complete',
  main: '/main',
  reply: '/reply',
  replyComplete: '/reply/complete',
  view: '/view',
} as const;
```

### 4. styled-components 관련 (1) - Type 컨벤션

styled-components 를 위한 Props Type 선언 시 일반 컴포넌트의 Props Type처럼 별개로 선언하지 않고, 아래와 같이 선언합니다. (추후 재사용 용이)

```typescript
// 잘못된 예시

// @types/styled.d.ts
type FAQBoxProps = {
  isOpen: boolean;
};

// components/FAQBox.tsx
export const FAQBox = styled.div<FAQBoxProps>`
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
`;
```

```typescript
// 올바른 예시

// @types/styled.d.ts
type IsOpenType = {
  isOpen: boolean;
};

// components/FAQBox.tsx
export const FAQBox = styled.div<IsOpenType>`
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
`;
```

```typescript
// Type 조합 예시

// @types/styled.d.ts
type IsOpenType = {
  isOpen: boolean;
};

type IsFixedType = {
  isFixed: boolean;
};

// components/FAQBox.tsx
export const FAQBox = styled.div<IsOpenType & IsFixedType>`
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  opacity: ${(props) => props.isFixed && 1};
`;
```

### 5. styled-components 관련 (2) - namespace S 사용

styled-components는 사용되는 컴포넌트 파일 내부에 작성하되, namespace S 안에 정의하여 주세요.
일반 컴포넌트와 쉽게 구분하기 위함입니다.

```typescript
// 컴포넌트 파일
  return (
    <S.Container>
      <S.Wrapper isFocus={isFocus} isError={false}>
        <input
          placeholder={placeHolder}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          onChange={onChange}
        />
      </S.Wrapper>
      <IconButton svgIcon={svgCircleX} onClick={onClickRemove} />
    </S.Container>
  );
}

namespace S {
  export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1.15rem;
    padding-right: 0.75rem;
    flex-grow: 1;
  `;

  export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1.15rem;
    padding-right: 0.75rem;
    flex-grow: 1;
  `;
}
```

이와 유사하게, 재사용할 styled-components는 다음과 같이 정의합니다.

```typescript
// styles/styled.ts
export namespace SC {
  export const HeaderContainer = styled.header`
    background: ${Colors.white};
    border-bottom: 0.1rem solid ${Colors.gray200};
    height: ${Styles.headerHeight};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.4rem;
  `;

  export const HeaderLogo = styled.h1``;

  export const NewMainContainer = styled.div`
    background-color: ${Colors.white};
    border-radius: 0.8rem;
    border: 0.1rem solid ${Colors.gray200};
    padding: 4rem;
  `;
}
```

### 6. px - rem 관련

1rem = 10px로 설정해둔 상태입니다.  
px이 아닌 rem을 사용해주세요.
