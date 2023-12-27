import "./App.css";
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import Selection from "./assets/Selection";

function App() {
	return (
		<>
			<body>
				<Header />
				<Selection
					classCategory="category"
					classPictures="pictures"
					classPicture="picture"
				/>
				<Footer />
			</body>
		</>
	);
}

export default App;
