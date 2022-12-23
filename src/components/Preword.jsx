import { useMain } from "../context/main";
import "../styles/preword.css";

const Preword = () => {
	const { codeSelect, MainSelect } = useMain();

	const handleChange = (e) => {
		const selectOption = document.getElementById("selectOption");
		const value = e.target.value;

		if (value === "CtoF") {
			MainSelect(value, "Celsius", "Fahrenheit", "C", "F");
		} else if (value === "CtoK") {
			MainSelect(value, "Celsius", "Kelvin", "C", "K");
		} else if (value === "CtoR") {
			MainSelect(value, "Celsius", "Réaumur", "C", "R");
		} else if (value === "FtoC") {
			MainSelect(value, "Fahrenheit", "Celsius", "F", "C");
		} else if (value === "FtoK") {
			MainSelect(value, "Fahrenheit", "Kelvin", "F", "K");
		} else if (value === "FtoR") {
			MainSelect(value, "Fahrenheit", "Réaumur", "F", "R");
		} else if (value === "KtoC") {
			MainSelect(value, "Kelvin", "Celsius", "K", "C");
		} else if (value === "KtoF") {
			MainSelect(value, "Kelvin", "Fahrenheit", "K", "F");
		} else if (value === "KtoR") {
			MainSelect(value, "Kelvin", "Réaumur", "K", "R");
		} else if (value === "RtoC") {
			MainSelect(value, "Réaumur", "Celsius", "R", "C");
		} else if (value === "RtoF") {
			MainSelect(value, "Réaumur", "Fahrenheit", "R", "F");
		} else if (value === "RtoK") {
			MainSelect(value, "Réaumur", "Kelvin", "R", "K");
		}

		selectOption.blur();
	};

	return (
		<div className="container">
			{/* title */}
			<div className="flex min-h-screen items-center justify-start">
				<p className="title w-fit py-2 font-title text-8xl font-bold tracking-widest text-primary">Satuan Pengukuran Suhu</p>
			</div>

			{/* celcius */}
			<div className="relative flex min-h-screen items-center">
				<div className="absolute left-1/4 flex select-none flex-row">
					<p className="text-[25rem] text-light opacity-5">°</p>
					<p className="text-[30rem] text-light opacity-5">C</p>
				</div>

				<div className="z-10 flex w-5/6 flex-col gap-5">
					<p className="text-5xl font-extrabold tracking-wider text-primary">Celsius (°C)</p>
					<p className="text-xl font-normal tracking-wide text-light">Celsius (°C) adalah satuan pengukuran suhu yang digunakan dalam Sistem Internasional Satuan (SI). Ia dinamai setelah astronom Swedia, Anders Celsius, yang mengembangkan skala suhu berdasarkan titik beku dan titik didih air. Dalam skala Celsius, suhu di mana air beku didefinisikan sebagai 0°C, dan suhu di mana air mendidih didefinisikan sebagai 100°C. Skala ini banyak digunakan di seluruh dunia, terutama dalam konteks ilmiah dan teknis.</p>
				</div>
			</div>

			{/* fahrenheit  */}
			<div className="relative flex min-h-screen items-center">
				<div className="absolute left-1/4 flex select-none flex-row">
					<p className="text-[25rem] text-light opacity-5">°</p>
					<p className="text-[30rem] text-light opacity-5">F</p>
				</div>

				<div className="z-10 flex w-5/6 flex-col gap-5">
					<p className="text-5xl font-extrabold tracking-wider text-primary">Fahrenheit (°F)</p>
					<p className="text-xl font-normal tracking-wide text-light">Fahrenheit (°F) adalah satuan pengukuran suhu yang digunakan di Amerika Serikat dan beberapa negara lain. Ia dinamai setelah fisikawan Jerman, Daniel Gabriel Fahrenheit, yang mengembangkan skala suhu berdasarkan titik beku dan titik didih air. Dalam skala Fahrenheit, suhu di mana air beku didefinisikan sebagai 32°F, dan suhu di mana air mendidih didefinisikan sebagai 212°F. Skala ini terutama digunakan di Amerika Serikat, meskipun juga digunakan di beberapa negara lain.</p>
				</div>
			</div>

			{/* kelvin  */}
			<div className="relative flex min-h-screen items-center">
				<div className="absolute left-1/4 flex select-none flex-row">
					<p className="text-[25rem] text-light opacity-0 ">°</p>
					<p className="text-[30rem] text-light opacity-5">K</p>
				</div>

				<div className="z-10 flex w-5/6 flex-col gap-5">
					<p className="text-5xl font-extrabold tracking-wider text-primary">Kelvin (K)</p>
					<p className="text-xl font-normal tracking-wide text-light">Kelvin (K) adalah satuan pengukuran suhu yang digunakan dalam Sistem Internasional Satuan (SI). Ia dinamai setelah matematikawan dan insinyur Skotlandia, William Thomson, yang juga dikenal sebagai Lord Kelvin. Skala Kelvin didasarkan pada konsep nol absolut, yaitu suhu di mana semua materi tidak memiliki energi termal apapun. Nol absolut didefinisikan sebagai 0 K, dan skala ini didasarkan pada tingkat kenaikan suhu di mana materi menjadi lebih energik.</p>
				</div>
			</div>

			{/* reamur  */}
			<div className="relative flex min-h-screen items-center">
				<div className="absolute left-1/4 flex select-none flex-row">
					<p className="text-[25rem] text-light opacity-5">°</p>
					<p className="text-[30rem] text-light opacity-5">R</p>
				</div>

				<div className="z-10 flex w-5/6 flex-col gap-5">
					<p className="text-5xl font-extrabold tracking-wider text-primary">Réaumur (°R)</p>
					<p className="text-xl font-normal tracking-wide text-light">Réaumur (°R) adalah satuan pengukuran suhu yang dikembangkan pada abad ke-18 oleh ilmuwan Prancis, René Antoine Ferchault de Réaumur. Skala ini pernah banyak digunakan di Eropa, tetapi sebagian besar telah digantikan oleh skala Celsius, yang sekarang digunakan sebagai skala suhu standar di kebanyakan negara. Dalam skala Réaumur, suhu di mana air beku didefinisikan sebagai 0°Ré, dan suhu di mana air mendidih didefinisikan sebagai 80°Ré. Skala ini didasarkan pada ide bahwa ada 80 derajat antara titik beku dan titik didih air, dan bahwa setiap derajat merupakan 1/80 dari selisih antara kedua titik tersebut.</p>
				</div>
			</div>

			{/* title 2 */}
			<div className="flex min-h-screen items-center justify-start">
				<p className="title w-fit py-2 font-title text-8xl font-bold tracking-widest text-primary">Konversi Suhu</p>
			</div>

			{/* get started  */}
			<div className="flex min-h-screen flex-col justify-center">
				<div className="flex w-5/6 flex-col gap-16">
					<p className="text-5xl font-extrabold tracking-wider text-primary">Silahkan pilih Satuan yang ingin kamu konversi</p>
					<select
						className="form-select-lg form-select m-0 mb-3 block w-full appearance-none rounded border border-solid border-gray-300 bg-transparent bg-clip-padding bg-no-repeat px-4 py-2 text-xl font-normal tracking-wider text-light outline-none transition-all duration-500 focus:bg-light focus:text-secondary focus:ring-0"
						aria-label=".form-select-lg example"
						id="selectOption"
						onChange={handleChange}>
						<option
							value="0"
							hidden>
							Pilih disini
						</option>
						<option
							value="0"
							disabled>
							Celsius
						</option>
						<option value="CtoF">Celsius ke Fahrenheit</option>
						<option value="CtoK">Celsius ke Kelvin</option>
						<option value="CtoR">Celsius ke Réaumur</option>
						<option
							value="0"
							disabled>
							Fahrenheit
						</option>
						<option value="FtoC">Fahrenheit ke Celsius</option>
						<option value="FtoK">Fahrenheit ke Kelvin</option>
						<option value="FtoR">Fahrenheit ke Réaumur</option>
						<option
							value="0"
							disabled>
							Kelvin
						</option>
						<option value="KtoC">Kelvin ke Celsius</option>
						<option value="KtoF">Kelvin ke Fahrenheit</option>
						<option value="KtoR">Kelvin ke Réaumur</option>
						<option
							value="0"
							disabled>
							Réaumur
						</option>
						<option value="RtoC">Réaumur ke Celsius</option>
						<option value="RtoF">Réaumur ke Fahrenheit</option>
						<option value="RtoK">Réaumur ke Kelvin</option>
					</select>

					{/* notification */}
					{codeSelect && (
						<div className="">
							<p className="tracking w-fit rounded-lg bg-light py-2 pl-2 text-xl font-bold	 text-primary">
								Silahkan scroll ke bawah !
								<span className="relative inline-flex h-4 w-4">
									<span className="absolute bottom-5 left-2 inline-flex h-full w-full animate-notif rounded-full bg-primary/50 opacity-75"></span>
									<span className="absolute bottom-5 left-2 inline-flex h-4 w-4 rounded-full bg-primary"></span>
								</span>
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Preword;
