console.log(nigeria)

let nigeria_state = document.getElementById('states')

let state_local_government = document.getElementById('lga')

for( index in nigeria )
{
	//console.log(state, nigeria[state].state.name)

	let option = document.createElement("option")
	option.setAttribute("value", nigeria[index].state.id)
	option.textContent = nigeria[index].state.name

	nigeria_state.appendChild(option)

}

nigeria_state.addEventListener('click', (e) => {
	console.log(e, nigeria_state.value )

	if(nigeria_state.value)
	{
		let state_index = parseInt( nigeria_state.value ) - 1

		let state_lga = nigeria[state_index].state.locals

		console.log(state_index, state_lga, state_lga[0].name)

		for( lga in state_lga )
		{
			let option = document.createElement("option")
			option.setAttribute("value",state_lga[lga].id)
			option.textContent = state_lga[lga].name

			state_local_government.appendChild(option)
		}
	}
})