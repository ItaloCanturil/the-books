import styled from "styled-components";

const Wrapper = styled.div<{ maxWidth?: string, width?: string, height?: string, maxHeight?: string }>`
  background-color: #edf2f4;
  padding: 1em;
  border-radius: 10px;
  border: 1px solid #D9D9D9;
  max-width: ${props => props.maxWidth};
  width: ${props => props.width};
  max-height: ${props => props.maxHeight};
  height: ${props => props.height};
  overflow: scroll;
`;


export default Wrapper;