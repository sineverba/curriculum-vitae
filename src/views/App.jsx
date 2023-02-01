import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Chart } from "../components/Chart";
import { FooterPage } from "../components/FooterPage";
import { items as programmingLanguageOptions } from "../assets/json/programmingLanguageOptions";
import { items as workingModeOptions } from "../assets/json/workingModeOptions";
import { items as toolsOptions } from "../assets/json/toolsOptions";
import { useGetDatabasesQuery, useGetFrameworksQuery } from "../features/apiSlice";
import databasesOptions from "../utils/methods/databasesOptions";
import frameworksOptions from "../utils/methods/frameworksOptions";

export function App() {
  
  const { data: databases } = useGetDatabasesQuery();
  const { data: frameworks } = useGetFrameworksQuery();

  const options = [
    {
      key: 1,
      value: programmingLanguageOptions
    },
    {
      key: 2,
      value: frameworks ? frameworksOptions(frameworks) : null
    },
    {
      key: 3,
      value: toolsOptions
    },
    {
      key: 4,
      value: databases ? databasesOptions(databases) : null
    },
    {
      key: 5,
      value: workingModeOptions
    },
  ];

  return (
    <Container>
      <Row>
        <Col>
          <h1>Alessandro A. resume</h1>
        </Col>
      </Row>
      {options.map(
        (el) =>
          el.value && (
            <Row key={el.key}>
              <Col>
                <Chart options={el.value} />
              </Col>
            </Row>
          )
      )}
      <Row>
        <Col>
          <FooterPage />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
