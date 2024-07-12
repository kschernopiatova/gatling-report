import metrics from '../../metrics.json'
var newArray = metrics.generalRequestStats[0].errors;

var sum = 0
for (let i = 0; i < newArray.length; i++) {
    sum = sum + newArray[i].count
}

const ErrorTable = () => {
    return (
        <div>
            <table id="error-table">
                <thead>
                    <tr>
                        <th><span>Error</span></th>
                        <th><span>Count</span></th>
                        <th><span>Percentage</span></th>
                    </tr>
                </thead>
                <tbody>
                    {newArray.map((item) => (
                        <tr>
                            <td>{item.errorName}</td>
                            <td>{item.count}</td>
                            <td>{(item.count / sum * 100).toFixed(2)}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default ErrorTable;