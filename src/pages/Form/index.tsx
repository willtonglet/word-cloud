import React from "react";
import TextEditor from "../../components/TextEditor";
import Layout from "../../components/Layout";
import { StyledFormPage } from "./styles";

const FormPage = () => {
  return (
    <Layout>
      <StyledFormPage>
        <div className="title">
          <h1>
            Word <span>Cloud</span>
          </h1>
        </div>
        <div className="form">
          <TextEditor />
        </div>
      </StyledFormPage>
    </Layout>
  );
};

export default FormPage;
