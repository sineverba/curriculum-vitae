export const items = {
  "chart": {
    "type": "bar"
  },
  "title": {
    "text": "Programming languages"
  },
  "xAxis": {
    "categories": ["PHP", "Java", "Javascript", "Python"]
  },
  "yAxis": {
    "max": 100
  },
  "plotOptions": {
    "bar": {
      "dataLabels": {
        "enabled": true
      }
    }
  },
  "series": [{
    "name": "% knowledge",
    "data": [95, 75, 85, 60]
  }],
  "accessibility": {
    "enabled": false
  }
};

export default items;