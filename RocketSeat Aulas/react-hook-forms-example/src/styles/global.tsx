import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
  }
  .text-xs {
    font-size: 0.75rem;
  }

  .text-sm {
    font-size: 0.875rem;
  }

  .text-md {
    font-size: 1rem;
  }

  .text-lg {
    font-size: 1.125rem;
  }

  .btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    border: none;
    border-radius: 0.25rem;
  }

  .btn-primary {
    background-color: #4F46E5;
    color: #FFFFFF;
  }

  .btn-secondary {
    background-color: #6B7280;
    color: #FFFFFF;
  }

`;

export default GlobalStyles;
