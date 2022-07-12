import { Col, Container, Row } from "react-bootstrap";
import FooterPage from "../components/FooterPage";

export const App = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>It works!</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FooterPage />
                </Col>
            </Row>
        </Container>
    );
}

export default App;