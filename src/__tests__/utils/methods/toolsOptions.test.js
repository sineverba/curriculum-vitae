import toolsOptions from "@/app/utils/methods/toolsOptions";
import tools from "../../__mocks__/responses/tools";

describe("Test tools and technologies options util function", () => {
  it("Can create a valid json for chart", () => {
    const expectedResult = {
      chart: {
        type: "column"
      },
      title: {
        text: "Tools and techonologies"
      },
      xAxis: {
        categories: [
          "Docker",
          "docker-compose",
          "Virtual Machines",
          "Composer",
          "Packagist",
          "NPM",
          "git",
          "API writing",
          "API consuming",
          "Ansible",
          "AWS",
          "Postman"
        ],
        crosshair: true
      },
      yAxis: {
        max: 100,
        min: 0,
        title: {
          text: "% usage every 100 hours of working"
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
      series: [
        {
          name: "% usage",
          data: [90, 90, 20, 20, 20, 90, 100, 50, 100, 70, 40, 100]
        }
      ],
      colors: ["#6AF9C4"],
      accessibility: {
        enabled: false
      }
    };

    expect(toolsOptions(tools)).toStrictEqual(expectedResult);
  });
});
