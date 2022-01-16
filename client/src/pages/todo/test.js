import React from "react";
import MarkdownView from "react-showdown";
import styled from "styled-components";

const text = `# Welcome to React Showdown :+1:

<br>

To get started, edit the markdown in \`example/src/App.tsx\`.

<br>

> hihi

<br>

| Column 1 | Column 2 |
|----------|----------|
| A1       | B1       |
| A2       | B2       |`;
const options = { tables: true, emoji: true };
const ShowDiv = styled.div`
  margin-top: 100px;
`;

const ShowTest = () => {
  return (
    <ShowDiv>
      <MarkdownView markdown={text} options={options}></MarkdownView>
    </ShowDiv>
  );
};

export default ShowTest;
