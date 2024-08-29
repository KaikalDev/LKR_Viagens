import styled, { createGlobalStyle } from 'styled-components'

export const Colors = {
  primary: '#85725B',
  secondary: '#D1C8C1',
  textColor: '#31241E',
  white: '#F6F4F3',
  red: '#c23616',
  green: '#44bd32'
}

export const Breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: "Roboto", sans-serif;
    color: ${Colors.textColor};
  }

  body {
    background-color: ${Colors.white};
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  `

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${Breakpoints.desktop}) {
    max-width: 80%;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.73);

  div {
    position: absolute;
    z-index: 1;
    max-width: 1024px;
    width: 50%;
    background-color: ${Colors.primary};
  }

  &.register {
    background-size: cover;
    background-color: ${Colors.white};
    opacity: 0.7;
    filter: blur(10px);
  }

  &.clean {
    background-color: transparent;

    div {
      background-color: transparent;
      top: 0;
      left: 0;
    }
  }

  @media (max-width: ${Breakpoints.tablet}) {
    div {
      width: 80%;
    }
  }
`

export const FormContainer = styled.div`
  max-height: 0;
  width: auto;
  margin-bottom: 0;
  transform-origin: top;
  transform: scaleY(0);
  overflow: hidden;
  transition: all 0.3s ease;

  &.is-active {
    max-height: 500px;
    margin-bottom: 16px;
    transform: scaleY(1);
    transition: all 0.5s ease;

    form {
      opacity: 1;
      visibility: visible;
      transition: opacity 0.5s ease, visibility 0.5s ease;
    }
  }

  form {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }

  small {
    font-size: 12px;
    color: ${Colors.white};
  }

  label {
    display: flex;
    flex-direction: column;
    color: ${Colors.white};
  }

  input,
  select,
  textarea {
    flex: auto;
    background-color: transparent;
    border: 2px solid transparent;
    border-bottom: 2px solid ${Colors.textColor};
    color: ${Colors.white};

    &.error {
      border-bottom: 2px solid red;
    }
  }
`
