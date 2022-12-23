import { useState, useEffect } from "react";
import { useMain } from "../context/main";

const CelsiusToOther = () => {
	const [inputValue, setInputValue] = useState("");
	const [conversionResult, setConversionResult] = useState("");

	const { codeSelect, convertFrom, convertTo, codeConvertFrom, codeConvertTo } = useMain();

	const handleChangeCelsius = (e) => {
		setInputValue(e.target.value);
	};

	const conversion = () => {
		const first = Number(inputValue);
		if (codeSelect === "CtoF") {
			setConversionResult(fahrenheit(first));
		} else if (codeSelect === "CtoK") {
			setConversionResult(kelvin(first));
		} else if (codeSelect === "CtoR") {
			setConversionResult(reaumur(first));
		}
	};

	const fahrenheit = (cel) => {
		return (cel * 9) / 5 + 32;
	};

	const kelvin = (cel) => {
		return cel + 273.15;
	};

	const reaumur = (cel) => {
		return (cel * 4) / 5;
	};

	useEffect(() => {
		conversion();
	}, [inputValue, codeSelect]);

	const codeFocus = codeSelect === "CtoF" || codeSelect === "CtoK" || codeSelect === "CtoR";

	return (
		codeFocus && (
			<div className="container flex min-h-screen flex-col justify-center gap-20">
				{/* title */}
				<div className="">
					<p className="text-6xl font-medium text-light">
						Konversi dari <span className="text-primary">{convertFrom}</span> ke <span className="text-primary">{convertTo}</span>
					</p>
				</div>

				{/* body */}
				<div className="flex flex-col justify-center gap-20">
					{/* conversion */}
					<div className="flex flex-row items-center gap-20">
						{/* set temperature */}
						<div className="flex items-center gap-2">
							<input
								type="number"
								value={inputValue}
								onChange={handleChangeCelsius}
								className="w-36 rounded-lg border-[3px] border-light bg-transparent p-2 text-right text-4xl font-medium tracking-wide text-light outline-none focus:ring-0"
							/>
							<p className="text-4xl font-bold text-primary">
								{convertFrom !== "Kelvin" && "°"}
								{codeConvertFrom}
							</p>
						</div>

						<div className="">
							<img
								src={require("../assets/to.png")}
								alt="convert"
								className="w-[60px]"
							/>
						</div>

						{/* result */}
						<div className="flex items-center gap-2">
							<p className="text-4xl font-medium tracking-wide text-light">{inputValue && inputValue !== "0" && conversionResult}</p>
							<p className="text-4xl font-bold text-primary">
								{convertTo !== "Kelvin" && "°"}
								{codeConvertTo}
							</p>
						</div>
					</div>

					{/* description */}
					{inputValue && inputValue !== "0" && (
						<div className="flex w-5/6 flex-col items-start gap-7 tracking-wide">
							<p className="text-2xl font-medium text-light/50">Penjelasannya sebagai berikut,</p>

							<p className="text-2xl font-medium text-light/50">
								<span className="font-bold text-primary/60">{inputValue}</span> {convertFrom !== "Kelvin" && "derajat"} {convertFrom} sama dengan <span className="font-bold text-primary/60">{conversionResult}</span> {convertTo !== "Kelvin" && "derajat"} {convertTo}. Anda dapat menggunakan rumus di bawah ini untuk mengkonversi suhu dari {convertFrom} ke {convertTo} :
							</p>

							<p className="text-2xl font-bold text-primary/60">
								{codeSelect === "CtoF" && <>F = (C * 9 / 5) + 32</>} {codeSelect === "CtoK" && <>K = C + 273.15</>} {codeSelect === "CtoR" && <>R = C * 4 / 5</>}
							</p>

							<p className="text-2xl font-medium text-light/50">
								Jadi, untuk mengkonversi <span className="font-bold text-primary/60">{inputValue}</span> {convertFrom !== "Kelvin" && "derajat"} {convertFrom} ke {convertTo}, gunakan rumus di atas :
							</p>

							<p className="text-2xl font-bold text-primary/60">
								{codeSelect === "CtoF" && (
									<>
										F = ({inputValue} * 9 / 5) + 32
										<span className="block">= {(inputValue * 9) / 5} + 32</span>
										<span className="block">
											= {conversionResult}{" "}
											<span className="font-medium text-light/50">
												{convertTo !== "Kelvin" && "derajat"} {convertTo}
											</span>
										</span>
									</>
								)}
								{codeSelect === "CtoK" && (
									<>
										K = {inputValue} + 273.15
										<span className="block">
											= {conversionResult}{" "}
											<span className="font-medium text-light/50">
												{convertTo !== "Kelvin" && "derajat"} {convertTo}
											</span>
										</span>
									</>
								)}
								{codeSelect === "CtoR" && (
									<>
										R = {inputValue} + 4 / 5
										<span className="block">
											= {conversionResult}{" "}
											<span className="font-medium text-light/50">
												{convertTo !== "Kelvin" && "derajat"} {convertTo}
											</span>
										</span>
									</>
								)}
							</p>
						</div>
					)}
				</div>
			</div>
		)
	);
};

export default CelsiusToOther;
