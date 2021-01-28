import Header from "./components/Header"
import Products from "./pages/products";

const App = () => {
	return (
		<div className="App">
			<Header />
			<div
				className="fmc fvc"
				style={{
					width: "100vw",
					height: "calc(100vh - 60px)",
					
				}}
			>
				<Products />
			</div>
		</div>
	);
}

export default App;
