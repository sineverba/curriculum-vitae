import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export const Chart = (props) => {
    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={props.options}
        />
    );
}

export default Chart;