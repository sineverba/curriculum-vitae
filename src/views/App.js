import { Col, Container, Row } from "react-bootstrap";
import Chart from "../components/Chart";
import FooterPage from "../components/FooterPage";

export const App = () => {

    const options = {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Programming languages'
        },
        xAxis: {
            categories: ['PHP', 'Java', 'Python'],
            title: {
                text: null
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            name: '% knowledge',
            data: [90, 60, 60]
        }]
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Chart
                        options={options}
                    />
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