import { Image as ImageAntd } from "antd";
import styled from "styled-components";

const StyledImage = styled(ImageAntd)`
  width: ${(props) => props?.width};
  height: ${(props) => props?.height};
  border-radius: ${(props) => props?.borderRadius};
`;

const Image = (props) => {
  const { width, height, borderRadius } = props;

  return (
    <ImageAntd
      src={src}
      width={width}
      height={height}
      borderRadius={borderRadius}
    />
  );
};

export default Image;
