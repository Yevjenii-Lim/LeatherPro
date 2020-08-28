
let left = 0
function slide(){
	let polosa = document.getElementById('slider')
	left = left - 1210
	if(left< -1210){
		left = 0
	}
	// console.log(polosa.style.left)
	polosa.style.left = left+'px'
}

function slideRight(){
	let polosa = document.getElementById('slider')
	left = left + 1200
	if(left> 1200){
		left = 0
	}
	// console.log(polosa.style.left)
	polosa.style.left = left+'px'
}