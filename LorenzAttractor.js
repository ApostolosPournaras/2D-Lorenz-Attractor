class LorenzAttractor{

	constructor(x, y, z){
		this.x = x;
		this.y = y;
		this.z = z;
	}


	update(sigma, ro, beta){
		var dt = 0.001;
		this.x += dt*sigma*(this.y - this.x);
		this.y += dt*(this.x*(ro - this.z) - this.y);
		this.z += dt*(this.x*this.y - beta*this.z);
	}

	show(){
		fill(220, 150, 100, 20);
		ellipse(width/2 + 10*this.x, height/2 + 10*this.y, 1);
	}

}