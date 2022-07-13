import { Col, Container, Row } from "react-bootstrap";
import Chart from "../components/Chart";
import FooterPage from "../components/FooterPage";

export const App = () => {

    const programmingLanguageOptions = {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Programming languages'
        },
        xAxis: {
            categories: ['PHP', 'Java', 'Javascript', 'Python'],
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
            data: [90, 70, 80, 60]
        }]
    };

    const databasesOptions = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Databases usage'
        },
        subtitle: {
            text: 'Every 100 hours, how many hours do I use a certain database?'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                    distance: -50,
                    filter: {
                        property: 'percentage',
                        operator: '>',
                        value: 4
                    }
                }
            }
        },
        series: [{
            name: 'Usage',
            data: [
                { name: 'MySql', y: 30 },
                { name: 'Maria DB', y: 20 },
                { name: 'PostgreSql', y: 20 },
                { name: 'Oracle', y: 20 },
                { name: 'Mongo DB', y: 10 }
            ]
        }]
    };

    const workingModeOptions = {
        chart: {
            type: 'funnel3d',
            options3d: {
                enabled: true,
                alpha: 10,
                depth: 50,
                viewDistance: 50,
            }
        },
        title: {
            text: 'Working Approach'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>',
                    allowOverlap: true,
                    y: 10
                },
                neckWidth: '30%',
                neckHeight: '25%',
                width: '80%',
                height: '80%'
            }
        },
        series: [{
            name: 'Working Approach',
            data: [
                ['Test Drive Development', 1],
                ['Coding', 1],
                ['Test all project', 1],
                ['Validating by Sonarqube', 1],
                ['Commiting and merging into develop', 1],
                ['CI and CD', 1]
            ]
        }]
    };

    const frameworksLibrariesOptions = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Framework and libraries'
        },
        xAxis: {
            categories: [
                'Laravel',
                'CodeIgniter',
                'Spring',
                'Serverless',
                'React + Redux + Enzyme/Jest/Nock',
                'Nuxt + Vuex + Cypress',
                'Bootstrap CSS',
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: '% knowledge'
            }
        },
        tooltip: {
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: '% knowledge',
            data: [80, 20, 80, 70, 95, 80, 60]
        }],
        colors: ['#FF9655', '#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FFF263', '#6AF9C4']
    };

    const toolsOptions = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Tools and techonologies'
        },
        xAxis: {
            categories: [
                'Docker',
                'docker-compose',
                'Virtual Machines',
                'Composer',
                'Packagist',
                'NPM',
                'git',
                'API writing',
                'API consuming',
                'Ansible',
                'AWS',
                'Postman'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: '% usage every 100 hours of working'
            }
        },
        tooltip: {
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: '% usage',
            data: [90, 90, 20, 20, 20, 90, 100, 50, 100, 70, 40, 100]
        }],
        colors: ['#6AF9C4']
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Chart options={programmingLanguageOptions} />
                </Col>
                <Col>
                    <Chart options={frameworksLibrariesOptions} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Chart options={toolsOptions} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Chart options={databasesOptions} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Chart options={workingModeOptions} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <FooterPage />
                </Col>
            </Row>
        </Container >
    );
}

export default App;