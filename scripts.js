// JavaScript Document
var sizeType;
var codehtml;
var sizeTypeSpec;



        var sizeNames7Lang = {'en' : 'SIZES', 'pl' : 'ROZMIARY', 'nl' : 'MATEN', 'de' : 'GRÖSSE', 'fr' : 'TAILLES', 'es' : 'TAMAÑOS', 'it' : 'DIMENSIONI'};
        var colorNames7Lang = {'en' : 'Color', 'pl' : 'Kolor', 'nl' : 'Kleur', 'de' : 'Farbe', 'fr' : 'Couleur', 'es' : 'Color', 'it' : 'Colore'};
        var months7Lang = {'en' : 'Months', 'pl' : 'Miesięcy', 'nl' : 'Maanden', 'de' : 'Monate', 'fr' : 'Mois', 'es' : 'Meses', 'it' : 'Mesi'};
        var years7Lang = {'en' : 'Years', 'pl' : 'Lat', 'nl' : 'Jaar', 'de' : 'Jahre', 'fr' : 'Années', 'es' : 'Años', 'it' : 'Anni'};
        var cotton7Lang = {'en' : 'Cotton', 'pl' : 'Bawełna', 'nl' : 'Katoen', 'de' : 'Baumwolle', 'fr' : 'Coton', 'es' : 'Algodón', 'it' : 'Cotone'};
        var polyester7Lang = {'en' : 'Polyester', 'pl' : 'Poliester', 'nl' : 'Polyester', 'de' : 'Polyester', 'fr' : 'Polyester', 'es' : 'Poliester', 'it' : 'Poliestere'};
        var microfibre7Lang = {'en' : 'Microfibre', 'pl' : 'Microfibra', 'nl' : 'Microfiber', 'de' : 'Microfraser', 'fr' : 'Microfibre', 'es' : 'Microfibra', 'it' : 'Microfibra'};
        var acryl7Lang = {'en' : 'Acryl', 'pl' : 'Acryl', 'nl' : 'Acryl', 'de' : 'Acryl', 'fr' : 'Acryl', 'es' : 'Acryl', 'it' : 'Acryl'};
        var elastane7Lang = {'en' : 'Elastane', 'pl' : 'Elastane', 'nl' : 'Elastane', 'de' : 'Elastane', 'fr' : 'Elastane', 'es' : 'Elastane', 'it' : 'Elastane'};
        var pcs7Lang = {'en' : 'PCS.', 'pl' : 'SZT.', 'nl' : 'PCS.', 'de' : 'PCS.', 'fr' : 'PCS.', 'es' : 'PCS.', 'it' : 'PCS.'};
	var weight7Lang = {'en' : 'Weight', 'pl' : 'Gramatura', 'nl' : 'Gewicht', 'de' : 'Gewicht', 'fr' : 'Poids', 'es' : 'Peso', 'it' : 'Peso'};
        var cm7Lang = {'en' : 'cm', 'pl' : 'cm', 'nl' : 'cm', 'de' : 'cm', 'fr' : 'cm', 'es' : 'cm', 'it' : 'cm'};
        var all7Languages = ['de' , 'en' , 'es' , 'fr' , 'it' , 'nl' , 'pl'];
	var plastic7Lang = {'en' : 'Plastic', 'pl' : 'Plastik', 'nl' : 'Plastic', 'de' : 'Plastic', 'fr' : 'Plastic', 'es' : 'Plastic', 'it' : 'Plastic'};
	var viscose7Lang = {'en' : 'Viscose', 'pl' : 'Wiskoza', 'nl' : 'Viscose', 'de' : 'Viscose', 'fr' : 'Viscose', 'es' : 'Viscose', 'it' : 'Viscose'};
	var fleece7Lang = {'en' : 'Fleece', 'pl' : 'Polar', 'nl' : 'Fleece', 'de' : 'Fleece', 'fr' : 'Fleece', 'es' : 'Fleece', 'it' : 'Fleece'};
	var velour7Lang = {'en' : 'Velour', 'pl' : 'Welur', 'nl' : 'Velour', 'de' : 'Velour', 'fr' : 'Velour', 'es' : 'Velour', 'it' : 'Velour'};
	var polyamide7Lang = {'en' : 'Polyamide', 'pl' : 'Poliamid', 'nl' : 'Polyamide', 'de' : 'Polyamide', 'fr' : 'Polyamide', 'es' : 'Polyamide', 'it' : 'Polyamide'};



var formularz = document.querySelector("#formularz");
var divTabela = document.querySelector("#tabela");
var btn = document.querySelector("#send");

btn.onclick = function(){
	
	var	sizes = formularz.sizes.value;
	var sizesArray = sizes.split(",");
	var colors = formularz.colors.value,
		howManySizesEachColor = formularz.how_many.value;
	var	howManySizesEachColorArray = howManySizesEachColor.split(",");
	var	sizeType = formularz.sizeType.value,
		weight = formularz.weight.value,
		
// Fabrics		
		cotton = formularz.cotton.value,
		polyester = formularz.polyester.value,
		microfibre = formularz.microfibre.value,
		acryl = formularz.acryl.value,
		elastane = formularz.elastane.value,
		plastic = formularz.plastic.value,
		viscose = formularz.viscose.value,
		fleece = formularz.fleece.value,
		velour = formularz.velour.value,
		polyamide = formularz.polyamide.value,
		language = formularz.language.value;
		
	
	
// If colors sizes are not the same generate new tables
	
	
	
	
// Protect form from incorrect data
	
	
	
		
	
	
// End of protecting entry data code	
	
	
	function generateDiv(){
		for (var a = 0 ; a < all7Languages.length ; a++){
			
			var code;
			code += "<div class=\"tbl\"></div><TEXTAREA class=\"txa\" cols=\"80\" rows=\"10\"></TEXTAREA>";
			
		}
		
		divTabela.innerHTML = code;
	}
	
// Generate tables in all languages
	
	
	if(language == "all"){
		
		generateDiv();
		var newDivs = document.querySelectorAll(".tbl");
		var	newTextAreas = document.querySelectorAll(".txa");
		
		
		for (var z = 0 ; z < all7Languages.length ; z++){
			language = all7Languages[z];
					
				

			
		if (sizeType == 'years'){
			sizeTypeSpec = years7Lang[language];
		} else if (sizeType == 'months') {
			sizeTypeSpec = months7Lang[language];
		} else {
			sizeTypeSpec = cm7Lang[language];
		}
	
	
// Adding first tr of the size table
	
	codehtml = "<table class=\"sizeTable\">";
	codehtml += "<tr><td>" + sizeNames7Lang[language] + "</td>";
	
		for (var m = 0 ; m < sizesArray.length ; m++){
			codehtml += "<td>" + sizesArray[m] + "</td>";
		}
			codehtml += "<td>" + sizeTypeSpec + "</td></tr>";

// Adding colors to the table
	
	if(colors){
		for (var n = 0 ; n < colors ; n++){
			codehtml += "<tr><td>" + colorNames7Lang[language] + " " + (n+1) + "</td>";
			for (var o = 0 ; o < howManySizesEachColorArray.length ; o++){
				codehtml += "<td>" + howManySizesEachColorArray[o] + "</td>";
			}
			codehtml += "<td>" + pcs7Lang[language] + "</td></tr>";
		}
	}
	
// Adding weight to the table
	
	
	if(weight != 0){
		codehtml += "<tr><td colspan=\"" + howManySizesEachColorArray.length + "\">" + weight7Lang[language] + ":</td><td colspan=\"2\">" + weight + " gr/m2</td></tr>";
	}
	
// Adding fabrics to the table
	
	var fabrics = "";
	
	if(cotton){
		fabrics = cotton + "% " + cotton7Lang[language];
	} else {
		cotton = 0;
	}
	
	if(polyester){
		if(fabrics != "") {
			fabrics += " / ";
		}
	
			fabrics += polyester + "% " + polyester7Lang[language];

	} else {
		polyester = 0;
	}
	
	if(microfibre){
		if(fabrics != "") {
			fabrics += " / ";
		}
	
			fabrics += microfibre + "% " + microfibre7Lang[language];
	} else {
		microfibre = 0;
	}
	
	if(acryl){
		if(fabrics != "") {
			fabrics += " / ";
		}
	
			fabrics += acryl + "% " + acryl7Lang[language];
	} else {
		acryl = 0;
	}
	
	if(elastane){
		if(fabrics != "") {
			fabrics += " / ";
		}
	
			fabrics += elastane + "% " + elastane7Lang[language];
	} else {
		elastane = 0;
	}
	
	if(plastic){
		if(fabrics != "") {
			fabrics += " / ";
		}
	
			fabrics += plastic + "% " + plastic7Lang[language];
	} else {
		plastic = 0;
	}
	
	if(viscose){
		if(fabrics != "") {
			fabrics += " / ";
		}
	
			fabrics += viscose + "% " + viscose7Lang[language];
	} else {
		viscose = 0;
	}
	
	if(fleece){
		if(fabrics != "") {
			fabrics += " / ";
		}
	
			fabrics += fleece + "% " + fleece7Lang[language];
	} else {
		fleece = 0;
	}
	
	if(velour){
		if(fabrics != "") {
			fabrics += " / ";
		}
	
			fabrics += velour + "% " + velour7Lang[language];
	} else {
		velour = 0;
	}
	
	if(polyamide){
		if(fabrics != "") {
			fabrics += " / ";
		}
	
			fabrics += polyamide + "% " + polyamide7Lang[language];
	} else {
		polyamide = 0;
	}
	
	
	var codeFabrics = "<tr><td colspan=\"" + (howManySizesEachColorArray.length + 2) + "\">" + fabrics + "</td></tr>";
	
	codehtml += codeFabrics;
	
	codehtml += "</table>";
			
	newDivs[z].innerHTML = codehtml + "<br><br>";
	
//textareaTabela.innerHTML = codehtml;

	
	newTextAreas[z].innerHTML = codehtml;
		

	var fabricsSum = (parseInt(cotton) + parseInt(polyester) + parseInt(microfibre) + parseInt(acryl) + parseInt(elastane) + parseInt(plastic) + parseInt(viscose) + parseInt(fleece) + parseInt(velour) + parseInt(polyamide));
	
	if (fabricsSum != 0 || fabricsSum != 100){
	var fabricsNot100 = "<br><p class=\"error\">Please make sure if fablics are filled in correctly, as sum of all fabrics is " + fabricsSum + "</p>";
	} else {
		fabricsNot100 = "Succes!";
	}
	
	//var divErrors = document.querySelector("#errors");
	//divErrors.innerHTML = fabricsNot100;
			
			
			
			
			
		}
		
		
		

		
	} else {
	
	
	
	
	
		if (sizeType == 'years'){
			sizeTypeSpec = years7Lang[language];
		} else if (sizeType == 'months') {
			sizeTypeSpec = months7Lang[language];
		} else {
			sizeTypeSpec = cm7Lang[language];
		}
	
	
// Adding first tr of the size table
	
	
	var codehtml = "<table class=\"sizeTable\"><tr><td>" + sizeNames7Lang[language] + "</td>";
	var kodTabeli2 = "";
	
		for (var i = 0 ; i < sizesArray.length ; i++){
			codehtml += "<td>" + sizesArray[i] + "</td>";
		}
			codehtml += "<td>" + sizeTypeSpec + "</td></tr>";

// Adding colors to the table
	
	if(colors){
		for (var j = 0 ; j < colors ; j++){
			codehtml += "<tr><td>" + colorNames7Lang[language] + " " + (j+1) + "</td>";
			for (var k = 0 ; k < howManySizesEachColorArray.length ; k++){
				codehtml += "<td>" + howManySizesEachColorArray[k] + "</td>";
			}
			codehtml += "<td>" + pcs7Lang[language] + "</td></tr>";
		}
	}
	
// Adding weight to the table
	
	
	if(weight != 0){
		codehtml += "<tr><td colspan=\"" + howManySizesEachColorArray.length + "\">" + weight7Lang[language] + ":</td><td colspan=\"2\">" + weight + " gr/m2</td></tr>";
	}
	
// Adding fabrics to the table
	
	var fabrics = "";
	
	if(cotton){
		fabrics = cotton + "% " + cotton7Lang[language];
	} else {
		cotton = 0;
	}
	
	if(polyester){
		if(fabrics != "") {
			fabrics += " / ";
		}
	
			fabrics += polyester + "% " + polyester7Lang[language];

	} else {
		polyester = 0;
	}
	
	if(microfibre){
		if(fabrics != "") {
			fabrics += " / ";
		}
	
			fabrics += microfibre + "% " + microfibre7Lang[language];
	} else {
		microfibre = 0;
	}
	
	if(acryl){
		if(fabrics != "") {
			fabrics += " / ";
		}
	
			fabrics += acryl + "% " + acryl7Lang[language];
	} else {
		acryl = 0;
	}
	
	if(elastane){
		if(fabrics != "") {
			fabrics += " / ";
		}
	
			fabrics += elastane + "% " + elastane7Lang[language];
	} else {
		elastane = 0;
	}
	
	if(plastic){
		if(fabrics != "") {
			fabrics += " / ";
		}
	
			fabrics += plastic + "% " + plastic7Lang[language];
	} else {
		plastic = 0;
	}
	
	if(viscose){
		if(fabrics != "") {
			fabrics += " / ";
		}
	
			fabrics += viscose + "% " + viscose7Lang[language];
	} else {
		viscose = 0;
	}
	
	if(fleece){
		if(fabrics != "") {
			fabrics += " / ";
		}
	
			fabrics += fleece + "% " + fleece7Lang[language];
	} else {
		fleece = 0;
	}
	
	if(velour){
		if(fabrics != "") {
			fabrics += " / ";
		}
	
			fabrics += velour + "% " + velour7Lang[language];
	} else {
		velour = 0;
	}
	
	if(polyamide){
		if(fabrics != "") {
			fabrics += " / ";
		}
	
			fabrics += polyamide + "% " + polyamide7Lang[language];
	} else {
		polyamide = 0;
	}
	
	
	var codeFabrics = "<tr><td colspan=\"" + (howManySizesEachColorArray.length + 2) + "\">" + fabrics + "</td></tr>";
	
	codehtml += codeFabrics + "</table>";
	
	
	
	divTabela.innerHTML = "<div class=\"tbl\"></div><TEXTAREA class=\"txa\" cols=\"80\" rows=\"10\"></TEXTAREA><br><br><br>";
		
		var addDiv = document.querySelector(".tbl"),
			addTextArea = document.querySelector(".txa");
		
	addDiv.innerHTML = codehtml;
	addTextArea.innerHTML = codehtml;
	
	
	var fabricsSum = (parseInt(cotton) + parseInt(polyester) + parseInt(microfibre) + parseInt(acryl) + parseInt(elastane) + parseInt(plastic) + parseInt(viscose) + parseInt(fleece) + parseInt(velour) + parseInt(polyamide));
	
	if (fabricsSum != 0){	
		if (fabricsSum != 100){
		var	fabricsNot100 = "<br><p class=\"error\">Please make sure if fablics are filled in correctly, as sum of all fabrics is " + fabricsSum + "</p>";
		} else {
			fabricsNot100 = "Succes!";
		}
	}
		
	var divErrors = document.querySelector("#errors");
	divErrors.innerHTML = fabricsNot100;
		
	}
	

	
	
}

