import styled, { css } from 'styled-components';

type ContainerProps = {
  variant?: LayoutVariantsEnum;
}

export enum LayoutVariantsEnum {
  homepage = 'homepage'
}

const handleVariant = (variant: LayoutVariantsEnum) => {
  switch (variant) {
    case LayoutVariantsEnum.homepage:
      return css`
          justify-content: flex-start;
        `;
    default:
      return '';
  }
};

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background-color: #f1f1f1;
`;

export const Container = styled.div<ContainerProps>`
  position: relative;
  padding: 32px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  padding-top: 80px;
  ${({ variant }) => variant && handleVariant(variant)}
`;

