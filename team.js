var teams = [];
var matches = [];


function match() {
	this.opponent = "";
	this.outcome = "";
}

function team() {
	this.id= "";
	this.name = "";
	this.is_still_in = false;
	this.matches = [];
	
	//Funzione che aggiunge un nuovo team
	this.addTeam = function(nome,in_gara,partite) {
		this.id = //...
		this.name = nome;
		this.is_still_in = in_gara
		//partite sara' un oggetto match, che verrano inserite dall'utente
		//partite[0] = opponent, partite[1] = outcome
		for(var i=0, i < partite.length; i++)
		{
			this.matches[i].opponent = partite[i].opponent;
			this.matches[i].outcome = partite[i].outcome;
		}
	}
	
	//Funzione che modifica una squadra esistente
	this.modifyTeam = function(nome,in_gara,partite)
	{
	}
}

export.match = match;
export.team = team;
export.teams = teams;
export matches = matches;
