//your JS code here. If required.
let text=document.getElementById("text");
let del=document.getElementById("delay");
let di=document.getElementById("output");

async function delay(){
	return new Promise((res)=>{
		setTimeout(()=>{
			res(di.textContent(text));
		})
	})
	
}