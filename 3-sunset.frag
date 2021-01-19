// Author @luketrenaman - 2020
// http://luketrenaman.com
#ifdef GL_ES
precision mediump float;
#endif
uniform float u_time;
uniform vec2 u_resolution;
#define PI 3.14159265359

float dist(vec2 pointA, vec2 pointB){
    return sqrt(pow(pointA.x - pointB.x,2.0 ) + pow(pointA.y - pointB.y,2.0));
}
void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec3 color;

    vec3 colorA = vec3(243.0,83.0,13.0)/255.0;
    vec3 colorB = vec3(243.0,231.0,183.0)/255.0;

    vec3 colorC = vec3(120.0,133.0,168.0)/255.0;
    vec3 colorD = vec3(80,74,105)/255.0;

    vec3 colorE = vec3(54.0,57.0,66.0)/255.0;
    vec3 colorF = vec3(243.0,231.0,183.0)/255.0;

    float mult = 1.0;
    if (st.y >= 1.5*pow(st.x-0.7,2.0)+.25){
        color += mix(colorA,colorB,dist(st.xy,vec2(0.7,0.25)));
        mult = 0.1;
    }
    if(st.y > .2){
        color += mix(colorC,colorD,st.x)*mult;
        mult = 0.1;
    }
    color += mix(colorE,colorF,st.x) * mult;

    gl_FragColor = vec4(color,1.0) * (sin(u_time)/2.0+0.5);
}