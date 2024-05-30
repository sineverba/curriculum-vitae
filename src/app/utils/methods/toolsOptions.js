const toolsOptions = (items) => ({
  chart: {
    type: "column"
  },
  title: {
    text: "Tools and techonologies"
  },
  xAxis: {
    categories: items.map((item) => item.name),
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
      data: items.map((item) => item.use_percentage)
    }
  ],
  colors: ["#6AF9C4"],
  accessibility: {
    enabled: false
  }
});

export default toolsOptions;
