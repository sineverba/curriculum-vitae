import programmingLanguagesOptions from "../../../utils/methods/programmingLanguagesOptions";
import { items } from "../../__mocks__/responses/programmingLanguages";

describe("Test programming languages options util function", () => {
  it("Can create a valid json for chart", () => {
    const expectedResult = {
      chart: {
        type: "bar"
      },
      title: {
        text: "Programming languages"
      },
      xAxis: {
        categories: ["PHP", "Java", "Javascript", "Python"]
      },
      yAxis: {
        max: 100
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      series: [
        {
          name: "% knowledge",
          data: [95, 75, 85, 60]
        }
      ],
      accessibility: {
        enabled: false
      }
    };

    expect(programmingLanguagesOptions(items)).toStrictEqual(expectedResult);
  });
});
