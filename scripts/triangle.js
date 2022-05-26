class Triangle{
    constructor(area, perimeter, base, height, sideA, sideC, gamma){
        this.area = area;
        this.perimeter = perimeter;
        this.base = base;
        this.height = height;
        this.sideA = sideA;
        this.sideC = sideC;
      //this.gamma = gamma;
    }
    getArea(){
        return this.area;
    }
    getSideA(){
        return this.sideA;
    }
    getSideC(){
        return this.sideC;
    }
    getHeight(){
     return this.height;
    }
    getPerimeter(){
        return this.perimeter;
    }
    getBase(){
        return this.base;
    }
    /*getGamma(){
        return this.gamma;
    }*/
    setArea(area){
        this.area = area;
    }
    setSideA(sideA){
        this.sideA = sideA;
    }
    setSideC(sideC){
        this.sideC = sideC;
    }
    setHeight(height){
        if(this.height > 0){
            this.height = height;
        }else{
            console.log("height should be greater than zero");
        }
    }
    setBase(base){
        if(this.base > 0){
            this.base = base;
        }else{
            console.log("Base should be greater than zero");
        }
    }
   /* setGamma(gamma){
        if(this.gamma > 0 && this.gamma < 180){
            this.gamma = gamma;
        }else{
            console.log("Valid range for gamma is 0 <gamma < 180");
        }
    }*/
    setPerimeter(perimeter){
        this.perimeter = perimeter;
    }
    calcArea(){
        this.area = (this.height*this.base)/2;
        return this.area;
    }
    calcBase(){
        if(this.area != undefined){
            this.base = 2(this.area/this.height);
        }else if(this.perimeter != undefined){
            
        }
        return this.base;
    }
    calcHeight(){
        if(this.area != undefined){
            this.height = 2(this.area/this.base);
        }
        return this.height;
    }
    caclSideA(){
        this.sideA = this.perimeter - this.base - this.sideC;
        return this.sideA;
    }
    /*calcGamma(){
        this.gamma = Math.asin((2*this.area)/(this.sideA*this.base));
        return this.gamma;
    }*/
    calcPerimeter(){
        this.perimeter = this.sideA + this.sideC + this.base;
        return this.perimeter;
    }
    calcSideC(){
        this.sideC = this.perimeter - this.base - this.sideA;
        return this.sideC;
    }
}
