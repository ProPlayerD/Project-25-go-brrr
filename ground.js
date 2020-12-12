class Ground {
    constructor(x, y) {
      var options = {
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5,
         isStatic:true
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      this.image = loadImage("Ground.png");
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;

       //imageMode(CENTER);
       image(this.image,pos.x,pos.y,this.width,this.height)
    };
  };