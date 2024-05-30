const frameworksOptions = (items) => {
  const data = {
    chart: {
      type: "column"
    },
    title: {
      text: "Framework and libraries"
    },
    xAxis: {
      categories: items.map((item) => item.name),
      crosshair: true
    },
    yAxis: {
      max: 100,
      min: 0,
      title: {
        text: "% knowledge"
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
        name: "% knowledge",
        data: items.map((item) => item.knowledge_percentage)
      }
    ],
    colors: items.map((item) => item.color),
    accessibility: {
      enabled: false
    }
  };

  return data;
};

export default frameworksOptions;
