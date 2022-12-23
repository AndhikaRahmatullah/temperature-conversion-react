import MainProvider from "./context/main";
import Preword from "./components/Preword";
import CelsiusToOther from "./components/CelsiusToOther";
import FahrenheitToOther from "./components/FahrenheitToOther";
import KelvinToOther from "./components/KelvinToOther";
import RéaumurToOther from "./components/RéaumurToOther";

function App() {
	return (
		<MainProvider>
			<div className="bg-secondary">
				<Preword />
				<CelsiusToOther />
				<FahrenheitToOther />
				<KelvinToOther />
				<RéaumurToOther />
			</div>
		</MainProvider>
	);
}

export default App;
