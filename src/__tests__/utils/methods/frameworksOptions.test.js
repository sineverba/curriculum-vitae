import frameworksOptions from "../../../utils/methods/frameworksOptions";
import { items } from "../../__mocks__/responses/frameworks";

describe("Test frameworks options util function", () => {
  it("Can create a valid json for chart", () => {
    const expectedResult = {
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
          'F3',
          'Spring',
          'Serverless',
          'React + Redux + Enzyme/Jest/Nock',
          'Nuxt + Vuex + Cypress',
          'Bootstrap CSS',
        ],
        crosshair: true
      },
      yAxis: {
        max: 100,
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
        data: [80, 20, 75, 80, 70, 95, 80, 95]
      }],
      colors: ['#FF9655', '#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#FFF263', '#6AF9C4'],
      accessibility: {
        enabled: false
      }
    };

    expect(frameworksOptions(items)).toStrictEqual(expectedResult);
  });
});
