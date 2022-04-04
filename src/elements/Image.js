import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { shape, src_01, src_02, size } = props;
  const styles = {
    src_01: src_01,
    src_02: src_02,
    size: size,
  };
  if (shape === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }
  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }
};
Image.defaultProps = {
  shape: "circle",
  src_01:
    "https://mblogthumb-phinf.pstatic.net/MjAyMDA4MDNfMjAx/MDAxNTk2NDQ1NjUzODA0.cUdM6Gatr8jKhmBwWFhGJaeVg6t0wPwkwshA11gZuY0g.zot86j9Rxj7824AkPhlT_5Bv3MkaP2-MxCELXiMks9kg.JPEG.hwadamtat/IMG_5813.JPG?type=w800",
  src_02:
    "https://d1fdloi71mui9q.cloudfront.net/jl9DQQM1QxiPQklpiKii_GjzZ0fFXW61vAGZx",
  size: 36,
};

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`;
const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src_01}");
  background-size: cover;
  background-position: center;
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  border: 2px solid pink;

  background-image: url("${(props) => props.src_02}");
  background-size: cover;
  background-position: center;
  margin: 4px;
`;

export default Image;
