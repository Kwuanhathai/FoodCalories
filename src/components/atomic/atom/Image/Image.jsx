import { Image as ImageAntd } from "antd";
import styled from "styled-components";
import React from "react";

const StyledImage = styled(ImageAntd)`
  width: ${(props) => props?.width || "200px"};
  height: ${(props) => props?.height || "200px"};
  border-radius: ${(props) => props?.border_radius || "2px"};
`;

const Image = (props) => {
  const { src } = props;

  return <StyledImage src={src} />;
};

export default Image;
