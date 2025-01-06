import styled from "styled-components";

const Wrapper = styled.div<{ maxWidth?: string }>`
  padding: 1em;
  border-radius: 10px;
  border: 1px solid #ccc;
  max-width: ${props => props.maxWidth}
`;


export default Wrapper;