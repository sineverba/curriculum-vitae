import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highcharts3d from "highcharts/highcharts-3d";
import cylinder from "highcharts/modules/cylinder";

highcharts3d(Highcharts);
cylinder(Highcharts);
require('highcharts/modules/funnel3d')(Highcharts)

export const Chart = (props) => {
    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={props.options}
        />
    );
}

export default Chart;