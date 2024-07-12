import metrics from '../../metrics.json'
var newArray = metrics.generalRequestStats;

const StatsTable = () => {
    return (
        <div>
            <table id="stats-table">
                <thead>
                    <tr>
                        <th rowspan="2">Requests</th>
                        <th colspan="5">Executions</th>
                        <th colspan="8">Response Time (ms)</th>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <th>OK</th>
                        <th>KO</th>
                        <th>% KO</th>
                        <th>Min</th>
                        <th>50th pct</th>
                        <th>75th pct</th>
                        <th>95th pct</th>
                        <th>99th pct</th>
                        <th>Max</th>
                        <th>Mean</th>
                        <th>Std Dev</th>
                    </tr>
                </thead>
                <tbody>
                {newArray.map((item) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.totalCount}</td>
                            <td>{item.successCount}</td>
                            <td>{item.failedCount}</td>
                            <td>{item.failedPercent.toFixed(0)}</td>
                            <td>{item.minResponseTime}</td>
                            <td>{item.percentile50.toFixed(0)}</td>
                            <td>{item.percentile75.toFixed(0)}</td>
                            <td>{item.percentile95.toFixed(0)}</td>
                            <td>{item.percentile99.toFixed(0)}</td>
                            <td>{item.maxResponseTime}</td>
                            <td>{item.meanResponseTime.toFixed(0)}</td>
                            <td>{item.standardDeviation.toFixed(0)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default StatsTable;