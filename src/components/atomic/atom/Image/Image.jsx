import { Image as ImageAntd } from "antd";
import styled from "styled-components";
import React from "react";

const StyledImage = styled(ImageAntd)`
  width: ${(props) => props?.width || "340px"};
  height: ${(props) => props?.height || "250px"};
  border-radius: ${(props) => props?.border_radius || "10px"};
`;

const Image = (props) => {
  const { src, height, width, border_radius } = props;

  return (
    <StyledImage
      src={src}
      height={height}
      width={width}
      border_radius={border_radius}
    />
  );
};

export default Image;
