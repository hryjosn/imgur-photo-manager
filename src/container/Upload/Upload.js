import { useEffect } from "react";
import {
  Container,
  Content,
  ImgBox,
  UploadDescription,
  ActionBar,
} from "./Upload.style";
import { callUploadPhoto, callGetAlbum } from "../../api/api";
const Upload = () => {
  useEffect(() => {
    callGetAlbum("vOVkBWW");
  }, []);
  const onFileUpload = async (event) => {
    const data = new FormData();
    const image = event.target.files[0];
    data.append("image", image);
    // data.append("type", "data");
    data.append("album", "vOVkBWW");
    data.append("title", image.name);
    const res = await callUploadPhoto(data);
    console.log("res>", res);
  };
  return (
    <Container>
      <Content>
        <label htmlFor="upload-button">
          <ImgBox>
            <img src="/images/photo.png" />
          </ImgBox>
        </label>

        <input
          id="upload-button"
          type={"file"}
          style={{ display: "none" }}
          onChange={onFileUpload}
        />
        <UploadDescription className="RB0F0 LAU8F xNKUO dvBHu oh0KJ">
          <span className="UBNiJ">Browse</span> to choose a file
        </UploadDescription>
      </Content>
      <ActionBar>
        <button>Submit</button>
      </ActionBar>
    </Container>
  );
};

export default Upload;
