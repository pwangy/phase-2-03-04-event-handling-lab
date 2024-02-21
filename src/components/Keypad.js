// Code Keypad Component Here

const Keypad = () => {
    const handleClick = () => console.log('Entering password...')

	return (
		<div>
			<input
				type='password'
				onChange={handleClick}
			/>
		</div>
	)
}

export default Keypad
