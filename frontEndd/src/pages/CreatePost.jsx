import React, { useState } from "react";
import styled from "styled-components";
import GenerateImage from "../components/GenerateImageForm";
import GeneratedImageCard from "../components/GeneratedImageCard";

const Container = styled.div`
  padding: 20px 30px;
  padding-bottom: 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 6px 10px;
  }
  background: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  display: flex;
  gap: 8%;
  flex: 1;
  width: 100%;
  max-width: 1200px;
  height: fit-content;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CreatePost = () => {
  const [generateImageLoading, setGenerateImageLoading] = useState(false);
  const [createPostLoading, setcreatePostLoading] = useState(false);
  const [post, setPost] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  return (
    <Container>
      <Wrapper>
        <GenerateImage
          createPostLoading={createPostLoading}
          setcreatePostLoading={setcreatePostLoading}
          generateImageLoading={generateImageLoading}
          setGenerateImageLoading={setGenerateImageLoading}
          post={post}
          setPost={setPost}
        />
        <GeneratedImageCard loading={generateImageLoading} src={post.photo} />
      </Wrapper>
    </Container>
  );
};

export default CreatePost;
