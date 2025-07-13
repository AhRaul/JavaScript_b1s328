function init() {
	var toy = new Duck("quack quack");
	
	toy.quack();
	
	console.log(typeof toy);
	console.log(toy instanceof Duck);
}

function Duck(sound) {
	this.sound = sound;
	this.quack = function() {
		console.log(this.sound);
	}
}

window.onload = init;	//вызов функции, только после того, 
						//как окно загрузилось полностью.
						//и браузер получил все HTML теги и айди.