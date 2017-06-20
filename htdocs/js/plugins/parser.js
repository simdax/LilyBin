define(function(){

	function Context(){
		this.root=0;
	}

	function Parser () {

		// une string peut être de la forme +- ou chiffre
		// plus, elle peut faire référence à une autre variable

		this.in ='';
		this.out='';

		// dic
		this.sep='-';
		this.notes="c,d,e,f,g,a,b".split(',')

		//this is used for word parsing
		this.context= new Context();
	};
	Parser.prototype= {
		//getters/setter
		set(val){
			this.in = val;
			this.parse();
			console.log("setté : ",this.out);
		},
		//herlpers
		separateWords(){
			var copy = this.in;
			return copy.split(this.sep);
		},
		parseSigns(val){
			var root= this.context.root;
			switch (val) {
				case '+':
					return root+1;
				case '-':
					return root+1;
				default:
					console.log('nothing');
			}
		},
		numberToChar(num){
			return this.notes[parseInt(num)%7]
		},
		parseWord(word){
			var tmp = []; 
			for (var i = 0; i < word.length; i++) {
				var lettre = word[i];
				// first check
				if(lettre == '+' | lettre == '-'){
					lettre = this.parseSigns(lettre);
				}
				// set context
				this.context.root=parseInt(lettre);
				// set result
				if(lettre!=' '){
					tmp.push(this.numberToChar(lettre));
				}
				else{
					//TODO rythme
				}
			}
			return tmp
		},
		parse(){
			var tmp=this.separateWords();
			for (var i = 0; i < tmp.length; i++) {
				var el = tmp[i];
				tmp[i] = this.parseWord(el);
			};
			this.out=tmp;
		}
	}

	return Parser;
})
