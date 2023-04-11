function setup() {
 createCanvas(400, 400,WEBGL);
 background('beige')
}
function draw() {
 push();
 rotateZ(frameCount * 0.05);
 rotateX(frameCount * 0.05);
 rotateY(frameCount * 0.05);
 torus(120,10)
 pop();
}