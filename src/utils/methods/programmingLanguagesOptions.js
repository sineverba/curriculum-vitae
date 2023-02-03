const programmingLanguagesOptions = (items) => ({
  chart: {
    type: "bar"
  },
  title: {
    text: "Programming languages"
  },
  xAxis: {
    categories: items.map((item) => item.name)
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
      data: items.map((item) => item.knowledge_percentage)
    },
  ],
  accessibility: {
    enabled: false
  }
});

export default programmingLanguagesOptions;
