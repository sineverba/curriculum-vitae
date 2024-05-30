import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highcharts3d from "highcharts/highcharts-3d";
import cylinder from "highcharts/modules/cylinder";
import PropTypes from "prop-types";

highcharts3d(Highcharts);
cylinder(Highcharts);
require("highcharts/modules/funnel3d")(Highcharts);

export default function Chart(props) {
  const { options } = props;
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

Chart.propTypes = {
  options: PropTypes.object.isRequired
};
