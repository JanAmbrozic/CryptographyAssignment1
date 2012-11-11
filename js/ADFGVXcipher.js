var ADFGVX = 
{
	secretMixedAlphabet : 
	[	"b",	"t",	"a",	"l",	"p",
		"d",	"h",	"o",	"z",	"k",
		"q",	"f",	"v",	"s",	"n",
		"g",	"j",	"c",	"u",	"x",
		"m",	"r",	"e",	"w",	"y"	],

	ADFGVX: ["A","D","F","G","X"],
	ADFGVXPairs: [],
	transpositionKey: "CARGO",

	init : function()
	{

	},

	createPairs: function()
	{
		var pairsCounter = 0;
		for (var letter = 0; letter < this.ADFGVX.length; letter++) {
			for (var i = 0; i < this.ADFGVX.length; i++) {
							this.ADFGVXPairs[pairsCounter] = this.ADFGVX[letter] + this.ADFGVX[i];
							console.log((pairsCounter) + ":" +this.ADFGVXPairs[letter+i]);
							pairsCounter++;
			};
		};
	},

	encrypt: function()
	{
		var test = "Attack at onc";
		var encryptedText="";
		var transpositionedText=[];


		for (var charPosition = 0; charPosition < test.length; charPosition++) {
			if(test[charPosition].toLowerCase()==" ")
			{

			}
			else
			{
				console.log(this.secretMixedAlphabet.indexOf(test[charPosition].toLowerCase()));
				encryptedText = encryptedText + this.ADFGVXPairs[this.secretMixedAlphabet.indexOf(test[charPosition].toLowerCase())];
			}
			
		};

		for (var i = 0; i < this.transpositionKey.length; i++) {
			console.log("Popped " + encryptedText[0]);
			console.log(encryptedText + " i:"+i)
			if (typeof transpositionedText[i] === "undefined") 
			{
				transpositionedText[i]={"key":"","text":""};
				transpositionedText[i].key = this.transpositionKey[i] 
			}
			transpositionedText[i].text = transpositionedText[i].text + encryptedText[0];

			encryptedText = encryptedText.substring(1);
			//console.log(transpositionedText.key[i] + " " +  transpositionedText.text[i])
			if(i>=this.transpositionKey.length-1 && encryptedText.length > 0)
			{
				i = -1;
			}
			else if(encryptedText.length==0)
			{
				encryptedText="X";
			}
		};

		transpositionedText.sort(function(a,b){
			if(a.key<b.key) return -1;
			if(a.key>b.key) return 1;
			return 0;
		})

		console.log(transpositionedText)
		this.print("Cyphered text is: " , transpositionedText);

		//this.transpositionKey.sort();

	},

	print:function(text, textKeyObject)
	{
		var print="";
		for (var i = 0; i < textKeyObject.length; i++) {
			print += textKeyObject[i].text;
		};
		console.log(text + print);
	}
}

ADFGVX.createPairs();
ADFGVX.encrypt();