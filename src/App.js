import UsersChart from "./components/charts/UsersChart";
import RPSChart from "./components/charts/RPSChart";
import PolarChart from "./components/charts/PolarChart";
import ResponseTimeChart from "./components/charts/ResponseTimeChart";
import ErrorTable from "./components/tables/ErrorTable";
import StatsTable from "./components/tables/StatsTable";
import PercentileChart from "./components/charts/PercentileChart";
import "./global-styles.css" 
import metrics from "./metrics.json"

const current_date = new Date(metrics.simulationStat.date).toLocaleDateString()

function App() {
    return (
        <div>
            <div id="header">
                <div id="header-title">{metrics.simulationStat.name}</div>
                <div id="souce-menu">
                    <a className="active" href="index.html">Global</a>
                    <a href="index.html">Details</a>
                </div>
            </div>
            <div id="content">
                <div className="schemas">
                    <ResponseTimeChart />
                    <PolarChart />
                    <div className="run-info">
                        <h3>Run Information</h3>
                        <p className="info"><strong>Version:</strong> {metrics.simulationStat.gatlingVersion}</p>
                        <p className="info"><strong>Date:</strong> {current_date}</p>
                        <p className="info"><strong>Duration:</strong> {metrics.simulationStat.duration / 1000}s</p>
                    </div>
                </div>
                <div>
                    <StatsTable />
                </div>
                <div>
                    <ErrorTable />
                </div>
                <div>
                    <UsersChart />
                </div>
                <div>
                    <PercentileChart />
                </div>
                <RPSChart />
            </div>
        </div>
    );
}
export default App;