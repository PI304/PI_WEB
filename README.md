## π PLAYIDEA WEB PAGE

## Index

1. [μμνκΈ°](##1.-μμνκΈ°)
2. [κΈ°μ  μ€ν](##2.-κΈ°μ -μ€ν)
3. [λλ ν λ¦¬ κ΅¬μ‘° κ°μ΄λ](##3.-λλ ν λ¦¬-κ΅¬μ‘°-κ°μ΄λ)
4. [νμ λ°©λ²](##4.-νμ-λ°©λ²)
5. [μ½λ μ»¨λ²€μ](##5.-μ½λ-μ»¨λ²€μ)

## 1. μμνκΈ°

### 1. Clone

```shell
$ git clone https://github.com/PI304/PI_WEB.git
$ cd PI_WEB
$ yarn install
```

### 2. Run

```javascript
$ yarn dev
```

## 2. κΈ°μ  μ€ν

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

## 3. λλ ν λ¦¬ κ΅¬μ‘° κ°μ΄λ

```
βββ @types
βΒ Β  βββ base.d.ts
βΒ Β  βββ index.d.ts
βΒ Β  βββ main.d.ts
βΒ Β  βββ seo.d.ts
βΒ Β  βββ shared.d.ts
βΒ Β  βββ styled.d.ts
βΒ Β  βββ team.d.ts
βΒ Β  βββ value.d.ts
βΒ Β  βββ work.d.ts
βββ components
βΒ Β  βββ layouts
βΒ Β  βββ pages
βΒ Β  βΒ Β  βββ main
βΒ Β  βΒ Β  βββ team
βΒ Β  βΒ Β  βββ value
βΒ Β  βΒ Β  βββ work
βΒ Β  βββ seo
βΒ Β  βββ shared
βββ constants
βΒ Β  βββ index.ts
βΒ Β  βββ paths.ts
βΒ Β  βββ seo.ts
βββ hooks
βββ modules
βββ pages
βΒ Β  βββ _app.tsx
βΒ Β  βββ _document.tsx
βΒ Β  βββ index.tsx
βΒ Β  βββ main.tsx
βΒ Β  βββ team.tsx
βΒ Β  βββ value.tsx
βΒ Β  βββ work.tsx
βββ public
βββ styles
βΒ Β  βββ colors.ts
βΒ Β  βββ devices.ts
βΒ Β  βββ fonts.ts
βΒ Β  βββ global.ts
βΒ Β  βββ index.ts
βΒ Β  βββ reset.ts
βΒ Β  βββ sizes.ts
βΒ Β  βββ styled.ts
βΒ Β  βββ svgs.tsx
βββ next-env.d.ts
βββ next.config.js
βββ tsconfig.json
βββ README.md
βββ package.json
βββ yarn.lock
```

### 1. @types λλ ν λ¦¬

1. λͺ¨λ  type μ μΈμ μ΄κ³³μμ ν΄μ£ΌμΈμ.
2. νμΌ μ΄λ¦μ \*.d.ts νμμ μ§μΌμ£ΌμΈμ.
3. importκ° νμν νμ μ μΈ μμλ @types/index.d.ts νμΌμ μ μΈν΄μ£ΌμΈμ.

**PLEASE DO NOT** - λ€λ₯Έ λλ ν λ¦¬μ νμΌμμ νμ μ μΈ

### 2. components λλ ν λ¦¬

1. components/layouts - λ μ΄μμ μ»΄ν¬λνΈ
2. components/pages - κ° pageμ μ΅μμ μ»΄ν¬λνΈ λ° ν΄λΉ pageμμ μ¬μ©λλ νμ μ»΄ν¬λνΈ
3. components/seo - CustomHead λ± SEOμ μ¬μ©λλ μ»΄ν¬λνΈ
4. components/shared - κΈ°ν κ³΅μ© μ»΄ν¬λνΈ
5. components/... - μΆν μΆκ°λ  μ μμ΅λλ€.

### 3. constants λλ ν λ¦¬

1. μ€μν μμλ μ΄κ³³μμ κ΄λ¦¬ν΄μ£ΌμΈμ. (μ: paths, seo...)
2. μ€μν¨μ κΈ°μ€ (1κ° μ΄μ μΆ©μ‘± μ μ€μνλ€κ³  νλ¨)
   1. 2λ² μ΄μ μ¬μ©λλ κ²½μ° (μ¬μ¬μ©)
   2. μΆν λΌμμ μν΄ λ³κ²½λ  μ μλ κ²½μ° (μΆμ μ©μ΄)
   3. κΈ°ν μ¬μ λ‘ μ€μνλ€κ³  νλ¨νλ κ²½μ°

### 4. hooks λλ ν λ¦¬

custom hookμ μ΄κ³³μ μμ±ν΄μ£ΌμΈμ.

### 5. modules λλ ν λ¦¬

μΆν Redux κ΄λ ¨ νμΌλ€μ΄ λ€μ΄κ°λλ€.

### 6. pages λλ ν λ¦¬

λΌμ°ν° μ€μ μ μν Next.js μμ½ λλ ν λ¦¬μλλ€.

### 7. public λλ ν λ¦¬

μ΄λ―Έμ§ λ± assetμ public/assets μ μ μ₯ν΄μ£ΌμΈμ.

**μ°Έκ³ ** - SVGλ νμΌλ‘ μ μ₯νμ§ μκ³ , styles/svgs.tsxμ μμλ‘ μ μνμ¬ κ΄λ¦¬ν©λλ€.

### 8. styles λλ ν λ¦¬

1. styles/colors.ts - λμμΈ μ»¬λ¬
2. styles/devices.ts - λ°μν μ€νμΌμ μν λλ°μ΄μ€ κ΅¬λΆ κΈ°μ€ λ±
3. styles/fonts.ts - λμμΈ νμ΄ν¬κ·ΈλνΌ
4. styles/global.ts - μ μ­ μ€νμΌ
5. styles/reset.ts - λ¦¬μ μ€νμΌ
6. styles/styled.ts - μ€μν Styled-components (1λ² μ΄μ μ¬μ¬μ© OR μΆμ μ©μ΄)
7. styles/svgs.tsx - SVG μ μ

### 9. Named Export & Re-Export in Index.ts

κ° λλ ν λ¦¬μλ index.tsκ° μμ΅λλ€.

```javascript
// components/shared/index.ts
export * from './ContactWidget';
export * from './Navigator';
export * from './SpaceBackground';
```

λλ ν λ¦¬ λ΄λΆμ νμΌλ€μ νκΊΌλ²μ λͺ¨μ λ€μκΈ Re-Export νμ¬,  
λ€λ₯Έ λλ ν λ¦¬μ νμΌμμ μλμ κ°μ΄ λλ ν λ¦¬λͺλ§μΌλ‘ Import νκΈ° μν¨μλλ€.

```javascript
// components/layouts/WithNavigatorLayout.tsx
import { Navigator, ContactWidget } from '../shared';
```

μ»΄ν¬λνΈλ₯Ό κ°κ° Importνλ κ²μ λΉνμ¬ Import λ¬Έμ μ§§κ² κ΄λ¦¬ν  μ μκ³ ,  
μΆν μ»΄ν¬λνΈ νμΌ μ΄λ¦μ΄ λ°λλ κ²½μ°μ λμνκΈ° μ©μ΄νλ€λ μ΄μ μ΄ μμ΅λλ€.

`export * from './μ»΄ν¬λνΈκ²½λ‘'` νμμΌλ‘ νμΌμ Re-Export νκΈ° μν΄μλ,  
μ»΄ν¬λνΈ νμΌμμ μ»΄ν¬λνΈλ₯Ό Default Exportκ° μλ Named Exportλ‘ λ΄λ³΄λ΄μ£Όμ΄μΌ ν©λλ€.

λ°λΌμ μ»΄ν¬λνΈλ ν­μ Named Export νμμΌλ‘ λ΄λ³΄λ΄μ£Όμκ³ , ν΄λΉ λλ ν λ¦¬μ index.tsμμ μμ κ°μ΄ Re-Export ν΄μ£ΌμΈμ.

μλλ μλͺ»λ μμμ μ¬λ°λ₯Έ μμμ λΉκ΅μλλ€.

```javascript
// μλͺ»λ μμ (Default Export)
export default function Component() {
  return <></>;
}

// μλͺ»λ μμ (Default Export)
const Component = () => {
  return <></>;
};

export default Component;

// μλͺ»λ μμ (Named Export + μΌλ° ν¨μ)
export function Component() {
  return <></>;
};
```

```javascript
// μ¬λ°λ₯Έ μμ (Named Export + νμ΄ν ν¨μ)
export const Component = () => {
  return <></>;
};
```

## 4. νμ λ°©λ²

### 1. Branching Strategy

PRμ ν΅ν΄ Feature λΈλμΉλ€μ Developμ λ¨Έμ§νκ³ ,  
μ΅μ’ λ°°ν¬ν  μκΈ°κ° λλ©΄ Admin κ΄λ¦¬μκ° Develop λΈλμΉλ₯Ό Production λΈλμΉμ λ¨Έμ§νμ¬ λ°°ν¬νλ λ¨μν κ΅¬μ‘°λ₯Ό λ°λ¦λλ€.

### 2. νμ κ³Όμ 

1. λ‘μ»¬μ Cloneν λ ν¬μμ Feature λΈλμΉλ₯Ό μμ±νμ¬ μμν©λλ€.
2. κ°λ°μ΄ λλ¬λ€λ©΄ λ€μ νλ² μκ²© λ ν¬μ μ΅μ  μ»€λ°μ λ°μμμ€λλ€.

```shell
// μ²΄ν¬μμ νκΈ° μ , Feature λΈλμΉμμμ μμ λ΄μ©μ μ»€λ°ν΄μΌ ν©λλ€.
$ git checkout develop
$ git pull origin develop
```

3. μΆκ°λ μ΅μ  μ»€λ°μ΄ μλ€λ©΄ λ΄κ° μμν Feature λΈλμΉλ₯Ό, μλ‘μ΄ μ»€λ°μ΄ μΆκ°λ Develop λΈλμΉμ λ§μ§λ§ μ»€λ°μΌλ‘ Rebase ν©λλ€. (λ§κ·Έλλ‘ baseλ₯Ό λ°κΎΌλ€λ λ»μλλ€)

```shell
$ git checkout Feature/[λΈλμΉλͺ]
$ git rebase develop
```

4. μΆ©λμ΄ λ°μνλ€λ©΄, μλν°μμ μΆ©λμ ν΄κ²°ν λ€ μλ λͺλ Ήμ΄λ₯Ό μλ ₯ν©λλ€.

```shell
$ git add .
$ git rebase --continue
```

5. μ΄μμ΄ μλ€λ©΄ Feature λΈλμΉλ₯Ό push ν©λλ€.

```shell
$ git push origin Feature/[λΈλμΉλͺ]
```

6. Githubμμ PRμ μμ±ν©λλ€. PR μ λνλλ ννλ¦Ώμ μ±μμ£ΌμΈμ.

```markdown
## Feature Description

- μ΄λ° μ΄λ° κΈ°λ₯μλλ€

## To Reviewers

- μ΄λ° μ΄λ° μ μ μ μν΄μ£ΌμΈμ
```

7. Review κ³Όμ μ κ±°μΉ©λλ€.

8. Self Merge ν΄μ£ΌμΈμ.

9. Squash Mergeλλ©°, Mergeλ Feature Branchλ μλ μ­μ λ©λλ€.

10. λ‘μ»¬μμ Develop λΈλμΉλ‘ μ²΄ν¬μμν λ€ Pullνκ³ , μλ‘μ΄ Feature λΈλμΉλ‘ λΆκΈ°νμ¬ λ€μ μμμ μ§νν΄μ£ΌμΈμ.

### 3. μ½λ λ¦¬λ·°

1. PR μ sookyeongyeomμ Reviewerλ‘ μ§μ ν©λλ€.
2. μμ μ΄ νμνλ©΄ Request Changesλ‘ μ½λ μμ μ μμ²­λλ¦½λλ€.
3. μ΄μμ΄ μμΌλ©΄ Approve ν©λλ€.
4. Approveλ PRμ μ½λμμ±μκ° Self Merge ν©λλ€.

### 4. λΈλμΉ μ΄λ¦ μ»¨λ²€μ

```
Feature/[κΈ°λ₯μμ½]

- λ§¨ μ²«κΈμ Fλ§ λλ¬Έμλ‘, κΈ°λ₯μμ½μ μλ¬Έμλ‘ μμ±ν΄μ£ΌμΈμ
- κΈ°λ₯μμ½μ μμ΄λ‘ μμ±ν΄μ£ΌμΈμ

ex) Feature/modal-publishing
```

### 5. μ»€λ° λ©μΈμ§ μ»¨λ²€μ

```
<νκ·Έ>: <μ λͺ©>

- : λ€μλ§ λμ΄μ°κΈ°κ° μμ΅λλ€
- μ λͺ©μ νμ νΌμ©μ΄ κ°λ₯ν©λλ€ (κ°κΈμ  μμ΄λ‘)
- νκ·Έμ μ²«κΈμλ λλ¬Έμλ‘ μμ±ν΄μ£ΌμΈμ
- νκ·Έλ μλμ μ ν κ²λ€λ§ μ¬μ©ν΄μ£ΌμΈμ

Feat: μλ‘μ΄ κΈ°λ₯ μΆκ°, κΈ°λ₯ λ‘μ§ λ³κ²½
Fix: λ²κ·Έ μμ 
Refactor: μ½λ λ¦¬ν©ν λ§ (κΈ°λ₯ λ³ν X)
Style: μ½λ ν¬λ§·ν, μ½λ λ³κ²½μ΄ μλ κ²½μ°
Chore: λΉλ μλ¬΄ μμ , ν¨ν€μ§ λ§€λμ  μμ 
Docs: λ¬Έμ μμ , μ£Όμ
```

## 5. μ½λ μ»¨λ²€μ

### 1. EsLint κ΄λ ¨

EsLint Ruleμ μμλ‘ ν΄μ νμ§ λ§μμ£ΌμΈμ.

### 2. Type κ΄λ ¨

1. Props Type μ μΈ μ Typeμ μ¬μ©ν΄μ£ΌμΈμ. (Interface X)
2. Props Typeμ μ΄λ¦μ **[μ»΄ν¬λνΈμ΄λ¦]+Props** μ νμμΌλ‘ μ§μ΄μ£ΌμΈμ.

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

3. Interface μ μΈ μ, ν΄λμ€μ μΈν°νμ΄μ€λ‘ μ¬μ©ν  λͺ©μ μ΄ μλλΌλ©΄ **μ λμ¬ Iλ₯Ό μ¬μ©νμ§ λ§μμ£ΌμΈμ**.

### 3. Constant μ μ μ

κ°μ²΄λ‘ μ μνλ, `as const` ν€μλλ₯Ό μ¬μ©νμ¬ read-only κ°μ²΄λ‘ λ§λ€μ΄μ£ΌμΈμ.

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

### 4. styled-components κ΄λ ¨ (1) - Type μ»¨λ²€μ

styled-components λ₯Ό μν Props Type μ μΈ μ μΌλ° μ»΄ν¬λνΈμ Props Typeμ²λΌ λ³κ°λ‘ μ μΈνμ§ μκ³ , μλμ κ°μ΄ μ μΈν©λλ€. (μΆν μ¬μ¬μ© μ©μ΄)

```typescript
// μλͺ»λ μμ

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
// μ¬λ°λ₯Έ μμ

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
// Type μ‘°ν© μμ

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

### 5. styled-components κ΄λ ¨ (2) - namespace S μ¬μ©

styled-componentsλ μ¬μ©λλ μ»΄ν¬λνΈ νμΌ λ΄λΆμ μμ±νλ, namespace S μμ μ μνμ¬ μ£ΌμΈμ.
μΌλ° μ»΄ν¬λνΈμ μ½κ² κ΅¬λΆνκΈ° μν¨μλλ€.

```typescript
// μ»΄ν¬λνΈ νμΌ
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

μ΄μ μ μ¬νκ², μ¬μ¬μ©ν  styled-componentsλ λ€μκ³Ό κ°μ΄ μ μν©λλ€.

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

### 6. px - rem κ΄λ ¨

1rem = 10pxλ‘ μ€μ ν΄λ μνμλλ€.  
pxμ΄ μλ remμ μ¬μ©ν΄μ£ΌμΈμ.
