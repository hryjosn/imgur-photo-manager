import {
  Container,
  Content,
  ImgBox,
  UploadDescription,
  ActionBar,
} from "./Upload.style";
const Upload = () => {
  const onFileUpload = (event) => {
    console.log(event.target.files[0]);
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
          Drag and drop up to 10 images or <span className="UBNiJ">Browse</span>{" "}
          to choose a file
        </UploadDescription>
      </Content>
      <ActionBar>
        <button>Submit</button>
      </ActionBar>
    </Container>
  );
};

export default Upload;
