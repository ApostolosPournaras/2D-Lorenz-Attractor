var LorAttr;

var betnReset;
var sldrSigma;
var sldrRo;
var sldrBeta;
var pSigma;
var pRo;
var pBeta;

function setup(){

	gridCanvas = createCanvas(900, 600);
	background(51);
	noStroke();

	LorAttr = new LorenzAttractor(0.1, 0.1, 0.1);

	btnRest = createButton('Reset');
	btnRest.size(60,20)
	btnRest.position(20, gridCanvas.position().y + height+20)
  	btnRest.mousePressed(Reset);

  	sldrSigma = createSlider(-50, 50, 10, 0.1)
  	sldrSigma.position(20, gridCanvas.position().y + height + 80)
  	pSigma = createP('Sigma:' + sldrSigma.value())
  	pSigma.position(sldrSigma.x + sldrSigma.width + 20, sldrSigma.y-10)

  	sldrRo = createSlider(-50, 50, 28, 0.1)
  	sldrRo.position(20, gridCanvas.position().y + height + 100)
  	pRo = createP('Alpha:' + sldrRo.value())
  	pRo.position(sldrRo.x + sldrRo.width + 20, sldrRo.y-10)

  	sldrBeta = createSlider(-50, 50, 8/3, 0.1)
  	sldrBeta.position(20, gridCanvas.position().y + height + 120)
  	pBeta = createP('Beta:' + sldrBeta.value())
  	pBeta.position(sldrBeta.x + sldrBeta.width + 20, sldrBeta.y-10)

}

function Reset(){
	background(51);
	LorAttr = new LorenzAttractor(0.1, 0.1, 0.1);
}

function draw(){

	pSigma.elt.innerHTML = "Sigma: " + sldrSigma.value()
	pRo.elt.innerHTML = "Ro: " + sldrRo.value()
	pBeta.elt.innerHTML = "Beta: " + sldrBeta.value()

	for(var i=0;i<100;i++){
		LorAttr.update(sldrSigma.value(), sldrRo.value(), sldrBeta.value());
		LorAttr.show();
	}
}
