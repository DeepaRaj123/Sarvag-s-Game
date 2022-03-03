class Brick{
    constructor(_x,_y, _w, _h){
      this.x=_x * _w;
      this.y=_y * _h;
      this.w=_w;
      this.h=_h;
      this.fill= [255,random(50,250),random(0,100)];
      this.show = true;
    }
    display(){
      if (this.show) {
          stroke(255);
          strokeWeight(6);
          fill.apply(fill, this.fill);
            rect(this.x,this.y,this.w,this.h);
      }
      }
  }
    
  //   function drawBrick(){
  //    for (x=0;x<width;x=x+50){
  //      for (y=0;y<width/2;y=y+40){
  //        stroke(255);
  //        strokeWeight(6);
         
  //        fill(255,random(100,250),random(0,100));
  //      	 rect(x,y,50,40);
  //      }
  // 	}
  // }