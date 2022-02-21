class Skill {
	constructor (_name, _level) {
		this.name = _name
		this.level = _level
		console.log("Skill created: " + this.name + " " + this.level)
	}

	roll () {
		let result = this.level * (Math.floor(Math.random() * (6 - 1 + 1) + 1));
		console.log("Rolled " + this.level + "d6 for " + this.name + ": " + result)
		return result
	}
}

let Skill1 = new Skill("Do Anyhting", 1);
let Skill2 = new Skill("Brute Force", 2);

Skill1.roll()