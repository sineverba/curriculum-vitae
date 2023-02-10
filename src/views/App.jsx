import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Chart } from "../components/Chart";
import { FooterPage } from "../components/FooterPage";
import { useGetDatabasesQuery, useGetFrameworksQuery, useGetProgrammingLanguagesQuery, useGetToolsQuery, useGetWorkingModeQuery } from "../features/apiSlice";
import databasesOptions from "../utils/methods/databasesOptions";
import frameworksOptions from "../utils/methods/frameworksOptions";
import programmingLanguagesOptions from "../utils/methods/programmingLanguagesOptions";
import toolsOptions from "../utils/methods/toolsOptions";
import workingModeOptions from "../utils/methods/workingModeOptions";

export function App() {
  
  const { data: databases } = useGetDatabasesQuery();
  const { data: frameworks } = useGetFrameworksQuery();
  const { data: programmingLanguages } = useGetProgrammingLanguagesQuery();
  const { data: tools } = useGetToolsQuery();
  const { data: workingMode } = useGetWorkingModeQuery();

  const options = [
    {
      key: 1,
      value: programmingLanguages ? programmingLanguagesOptions(programmingLanguages) : null
    },
    {
      key: 2,
      value: frameworks ? frameworksOptions(frameworks) : null
    },
    {
      key: 3,
      value: tools ? toolsOptions(tools) : null
    },
    {
      key: 4,
      value: databases ? databasesOptions(databases) : null
    },
    {
      key: 5,
      value: workingMode ? workingModeOptions(workingMode) : null
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
