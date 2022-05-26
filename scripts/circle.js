class Circle{
    constructor(area, radius, diameter, perimeter){
        this.area = area;
        this.radius = radius;
        this.diameter = diameter;
        this.perimeter = perimeter;
    }
    getArea(){
        return this.area;
    }
    getRadius(){
        return this.radius;
    }
    getDiameter(){
        return this.diameter;
    }
    getPerimeter(){
        return this.perimeter;
    }
    setArea(area){
        if(this.area > 0){
            this.area = area;
        }else{
            console.log("Number should be greater than zero");
        }
    }
    setRadius(radius){
        if(this.radius > 0){
            this.radius = radius;
        }else{
            console.log("Number should be greater than zero");
        }
    }
    setDiameter(diameter){
        if(this.diameter > 0){
            this.diameter = diameter;
        }else{
            console.log("Number should be greater than zero");
        }
    }
    setPerimeter(perimeter){
        if(this.perimeter > 0){
            this.perimeter = perimeter;
        }else{
            console.log("Number should be greater than zero");
        }
    }
    calcArea(){
        this.area = Math.pow(this.radius,2)*Math.PI;
        return this.area;
    }
    calcPerimeter(){
        this.perimeter = 2*(this.radius)*(Math.PI);
        return this.perimeter;
    }
    calcDiameter(){
        if(this.area != undefined){
            this.diameter = 2*(Math.sqrt(this.area/Math.PI));
        }else if(this.radius != undefined){
            this.diameter = 2*this.radius;
        }else if(this.perimeter != undefined){
            this.diameter = this.perimeter/Math.PI;
        }
        return this.diameter;
    }
    calcRadius(){
        if(this.area != undefined){
            this.radius = Math.sqrt(this.area/Math.PI);
        }else if(this.diameter != undefined){
            this.radius = (this.diameter/2);
        }else if(this.perimeter != undefined){
            this.radius = this.perimeter/(2*Math.PI);
        }
        return this.radius;
    }
}
