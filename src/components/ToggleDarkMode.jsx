import "../styles/toggleDarkMode.css"
const ToggleDarkMode = () => {
	return (
		<>
			<label className="switch">
				<input type="checkbox" />
				<span className="slider round"></span>
			</label>
		</>
	)
}

export default ToggleDarkMode