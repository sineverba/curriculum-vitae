import { Col, Container, Row } from "react-bootstrap";
import Chart from "../components/Chart";
import FooterPage from "../components/FooterPage";
import {items as programmingLanguageOptions} from "../assets/json/programmingLanguageOptions";
import {items as databasesOptions} from "../assets/json/databasesOptions";
import {items as workingModeOptions} from "../assets/json/workingModeOptions";
import {items as frameworksLibrariesOptions} from "../assets/json/frameworksLibrariesOptions";
import {items as toolsOptions} from "../assets/json/toolsOptions";

export const App = () => {

    const options = [
        {
            key: 1,
            value: programmingLanguageOptions
        },
        {
            key: 2,
            value: frameworksLibrariesOptions
        },
        {
            key: 3,
            value: toolsOptions
        },
        {
            key: 4,
            value: databasesOptions
        },
        {
            key: 5,
            value: workingModeOptions
        }
    ];

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Alessandro A.'s resume</h1>
                </Col>
            </Row>
            {
                options.map(el => {
                    return (
                    <Row key={el.key}>
                        <Col>
                            <Chart options={el.value} />
                        </Col>
                    </Row>
                    )
                })
            }
            <Row>
                <Col>
                    <FooterPage />
                </Col>
            </Row>
        </Container >
    );
}

export default App;