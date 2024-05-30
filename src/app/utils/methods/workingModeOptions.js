const workingModesOptions = (items) => ({
  chart: {
    type: "funnel3d",
    options3d: {
      enabled: true,
      alpha: 10,
      depth: 50,
      viewDistance: 50
    }
  },
  title: {
    text: "Working Approach"
  },
  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: "<b>{point.name}</b>",
        allowOverlap: true,
        y: 10
      },
      neckWidth: "30%",
      neckHeight: "25%",
      width: "80%",
      height: "80%"
    }
  },
  series: [
    {
      name: "Working Approach",
      data: items.map((item) => {
        const newArray = [];
        newArray.push(item.name);
        newArray.push(1);
        return newArray;
      })
    }
  ],
  accessibility: {
    enabled: false
  }
});

export default workingModesOptions;
