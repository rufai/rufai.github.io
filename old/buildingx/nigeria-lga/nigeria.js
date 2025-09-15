console.log(nigeria)

let nigeria_state = document.getElementById('states')

let state_local_government = document.getElementById('lga')
let state_local_government_list = document.getElementById('lga-list')

let state_name = document.getElementById('state_name')
let number_of_lgas = document.getElementById('number_of_lgas')

for( let index in nigeria )
{
	//console.log(state, nigeria[state].state.name)

	let option = document.createElement("option")
	option.setAttribute("value", nigeria[index].state.id)
	option.textContent = nigeria[index].state.name

	nigeria_state.appendChild(option)

}

nigeria_state.addEventListener('click', (e) => {
	console.log(e, nigeria_state )

	if(nigeria_state.value)
	{
		let state_index = parseInt( nigeria_state.value ) - 1


		// console.log(e, nigeria[ state_index ].state.name )

		state_name.textContent = nigeria[ state_index ].state.name


		let state_lga = nigeria[state_index].state.locals
		number_of_lgas.textContent = state_lga.length
		// console.log(state_index, state_lga, state_lga[0].name)

		state_local_government_list.innerHTML = ""
		state_local_government.innerHTML = ""

		for( lga in state_lga )
		{
			let option = document.createElement("option")
			option.setAttribute("value",state_lga[lga].id)
			option.textContent = state_lga[lga].name

			state_local_government.appendChild(option)


			let listItem = document.createElement("li")
			listItem.textContent = state_lga[lga].name
			
			state_local_government_list.appendChild(listItem)
		}
	}
})