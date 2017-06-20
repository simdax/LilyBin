define(function(){

	function Context(){
		this.root=0;
	}

	function Format(format='ly'){
		this.type=format;
		this.in='';
		this.out='';
		this.sep=' ~ ';
		this.car=	 String.fromCharCode(13);	
	}
	Format.prototype={
		set(val){
			console.log(val);
			this.in=val;
			return this.out = this.toly();
			// return this.out=this.format()();
		},
		format(){
			return this['to'+this.type];
		},
		toly(){
			var res = '';
			for (var i = 0; i < this.in.length; i++) {
				var val = this.in[i].join(' ');
				val = val + this.car;
				// val = val.replace(","," ");
				res += val;
			}
			return res;
		},
	}

	function Parser () {

		// une string peut être de la forme +- ou chiffre
		// plus, elle peut faire référence à une autre variable

		this.in ='';
		this.out='';
		this.formatted='';

		// dic
		this.notes="c,d,e,f,g,a,b".split(',')

		//this is used for word parsing
		this.context = new Context();
		this.formatter = new Format('ly');
	};
	Parser.prototype= {
		//getters/setter
		set(val){
			this.in = val;
			this.parse();
			this.formatted = this.formatter.set(this.out);
			console.log("setté : ",this.formatted);
		},
		//helpers
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
				lettre = parseInt(lettre);
				if (!isNaN(lettre)) {
					this.context.root=lettre;
					tmp.push(this.numberToChar(lettre));					
				} else{
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
