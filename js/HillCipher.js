var HillCipher = 
{
	alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

	init:function()
	{

	},

	encyrpt: function(key, textToEncrypt)
	{
		var V1 = $V([0,2,19]);

		var keyMatrix = [];

		for (var charPos = 0; charPos < key.length; charPos++) {
			keyMatrix[charPos] =  this.alphabet.indexOf(key[charPos].toUpperCase());
		};
		console.log(keyMatrix);
		var M2 = $M([
					  [6,24,1],
					  [13,16,10],
					  [20,17,15]
					]);
		var mutipliedVM = M2.multiply(V1);
			console.log(mutipliedVM.elements);

		var encyrptedText = "";
		for (var i = 0; i < mutipliedVM.elements.length; i++) 
		{
			var position = mutipliedVM.elements[i] % 26;
			if(position>0)
			{
				encyrptedText = encyrptedText + this.alphabet[position];
			}
		};
					console.log(encyrptedText);

	},

	decrypt: function(encodedText)
	{
		var M2 = $M([
				  [6,24,1],
				  [13,16,10],
				  [20,17,15]
				]);
				var V1 = $V([0,2,19]);

		var M2Inverse = M2.inverse();

		var encyrptedText = "";
		for (var i = 0; i < M2Inverse.elements.length; i++) 
		{
			var position = M2Inverse.elements[i] % 26;
			if(position>0)
			{
				encyrptedText = encyrptedText + this.alphabet[position];
			}
		};
					console.log(encyrptedText);

	},

}

HillCipher.encyrpt("text","test")
HillCipher.decrypt()
