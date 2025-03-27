//your JS code here. If required.


function display(){
	 let level=document.getElementById("level")
let counter=0;
	while(level.parentNode !==null){
		level=level.parentNode
			counter++
	}
	return `The level of the element is: ${counter}`
}
alert(display())













