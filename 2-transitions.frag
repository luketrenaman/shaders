// Author @luketrenaman - 2020
// http://luketrenaman.com
//https://easings.net
#ifdef GL_ES
precision mediump float;
#endif
uniform float u_time;
#define PI 3.14159265359
float easeOutBounce(float x){
float n1 = 7.5625;
float d1 = 2.75;

if (x < 1.0 / d1) {
    return n1 * x * x;
} else if (x < 2.0 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
} else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
} else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
}
}
float easeInOutBounce(float x){
return x < 0.5
  ? (1.0 - easeOutBounce(1.0 - 2.0 * x)) / 2.0
  : (1.0 + easeOutBounce(2.0 * x - 1.0)) / 2.0;
}
void main(){
    vec3 colorA = vec3(255.0, 248.0, 36.0)/255.0;
    vec3 colorB = vec3(237.0, 2.0, 2.0)/255.0;
    vec3 color = mix(colorA,colorB,easeOutBounce(u_time/3.0));
    gl_FragColor = vec4(color,1.0);
}