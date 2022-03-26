import styled from "@emotion/styled";
export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div`
  margin: 50px;
  display: flex;
  flex: 1;
  border: 2px dashed #d1d1d1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const ImgBox = styled.div`
  width: 130px;
  margin-bottom: 16px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const UploadDescription = styled.div`
  color: #111;
  margin-bottom: 0;
  max-width: 420px;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
`;
export const ActionBar = styled.div`
  text-align: right;
  border-top: 1px solid #d1d1d1;
  padding: 8px 16px;
  button {
    background-color: black;
    font-weight: bold;
    border-color: #0000;
    color: white;
    font-size: 14px;
    height: 32px;
    line-height: 30px;
    padding: 0 11px;
    fill: currentColor;
    border: 1px solid #0000;
    border-radius: 4px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    transition: all 0.1s ease-in-out;
    -webkit-user-select: none;
    user-select: none;
    white-space: nowrap;
  }
`;
