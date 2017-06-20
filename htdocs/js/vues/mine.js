define(["./weights",'jquery'], function (Weights,$) {
	
w = new Weights();
new Vue({el:'#poids', data:w,
template:`
	<div>
		<p>	{{limits}}</p>	
	</div>
	`,
methods:{
	},
});

	// var bus= new Vue();
	Vue.component('io', {
		props:['id'],
		data(){return{
			t:'',
		}},
		template:`
		<div class="vignette">		
			<slot></slot>
			<input v-model="t" type="text">
			<label for=""> can init ? </label>
			<input type="checkbox" checked>
			<button>remove</button>
		</div>	
		`,
		watch:{
			t(){
				this.$emit('update',{in:this.t,key:this.id})
			}
		}
	});

	var codeEvent = new Event("generate");
	
	var app =	new Vue({
			el:"#app",
			template:`<div>


	<h1>Markovator</h1>
	<p> Ajoute des mélodies, de la structure et du style !</p>
		<h2>des mels</h2>
		<io v-for="n in views" :key='n' :id='[n-1]' @update='parse($event)'>
			{{"abcdefghijklmn"[n-1]}}
		</io>
		<button @click='add'>add</button>
		<h2>de la structure</h2>
		<div id="random">
			<div v-for='n in views'>
				<div class="weights">
				{{"abcdefghijklmn"[n-1]}}
				rules :
					<div v-for='x in views'>
						<label for="">			{{"abcdefghijklmn"[x-1]}} </label>
						<button @click="io(n-1,x-1,true)">+</button>	
						<button @click="io(n-1,x-1,false)">-</button>			
					</div>
				</div>	
			</div>	
		</div>
		<h2>du style</h2>
		<p>métrique</p>
		<p>tonalite ?</p>
		<h2>et hop !  on génère :</h2>
		<div id="result">
			<label for="">LENGTH
				<input v-model="length" type="number">
			</label>
	<p>	
				{{res}}
	</p>
		</div>
		<button @click="generate">generate</button>
		</div>`,
			data:{
				views: 0,
				mels:[],
				inits: [],
				length: 5,
				res:'',
			},
			methods:{
				add(){
					this.views++;
					this.mels.push('');
					w.addKey();
				},
				io(x,y,plus){
					if(plus){
						w.increment(x,y)						
					}else{
						w.decrement(x,y)
					}
				},
				parse(ev){
					this.mels[parseInt(ev.key)] = ev.in;
					this.generate();
				},
				generate(){
					this.res='';
					var j = 0;
					for (var i = 0; i < this.length; i++) {
						this.res += this.mels[j];
						j = w.forme(j);
						if(i < this.length-1){
							this.res += ' ~ ';
						}
					};
						window.dispatchEvent(codeEvent,this.res);
				}
			},
		})

		return app;
})