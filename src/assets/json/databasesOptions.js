export const items = {
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
    enabled: false,
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
      { name: 'Mongo DB', y: 10 },
    ]
  }]
};

export default items;