import { useEffect, useState } from "react";
import {
  Container,
  Content,
  ImgBox,
  UploadDescription,
  ActionBar,
} from "./Upload.style";
import { callUploadPhoto, callGetAlbum } from "../../api/api";
const Upload = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [photoList, setPhotoList] = useState([]);

  useEffect(() => {
    const func = async () => {
      const res = await callGetAlbum("vOVkBWW");
      setPhotoList(res.data.images);
    };
    func();
  }, [imgUrl]);
  useEffect(() => {
    console.log("Hello ");
    return () => {
      console.log("end");
    };
  }, []);
  const onFileUpload = async (event) => {
    const data = new FormData();
    const image = event.target.files[0];
    data.append("image", image);
    data.append("album", "vOVkBWW");
    data.append("title", image.name);
    const res = await callUploadPhoto(data);
    setImgUrl(res.data.data.link);
  };

  return (
    <Container>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {photoList.map((photo, index) => (
          <span key={`img_${index}`} style={{ flex: 1 }}>
            <img src={photo.link} width={80} height={80} />
          </span>
        ))}
      </div>
      <Content>
        <label htmlFor="upload-button">
          <ImgBox>
            <img src={imgUrl || "/images/photo.png"} />
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
