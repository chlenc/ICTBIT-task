import styled from "@emotion/styled";

export const Avatar = styled.div<{ src?: string }>`
  background: url(${({ src }) => src}) center no-repeat;
  background-size: contain;
  border: 2px solid #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;
