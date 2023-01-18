export const items = {
  chart: {
    type: 'funnel3d',
    options3d: {
      enabled: true,
      alpha: 10,
      depth: 50,
      viewDistance: 50
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
      ['CI and CD', 1],
    ]
  }],
  accessibility: {
    enabled: false
  }
};

export default items;