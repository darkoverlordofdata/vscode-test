class Scooby {
	
	public doo:Doo;
	
	
	constructor(public snacks=42) {
		this.doo = new Doo('fred');
		this.doo.eat('snack');
		
	}
	
	ruhroh() {
		console.log('Look Out');
	}
}