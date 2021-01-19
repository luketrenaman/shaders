// Author @luketrenaman - 2020
// http://luketrenaman.com
#ifdef GL_ES
precision mediump float;
#endif
uniform float u_time;
uniform vec2 u_resolution;
#define PI 3.14159265359

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec3 color;
    vec3 red = vec3(1.0,0.0,0.0);
    vec3 orange = vec3(1.0,0.5,0.0);
    vec3 yellow = vec3(1.0,1.0,0.0);
    vec3 green = vec3(0.0,1.0,0.0);
    vec3 blue = vec3(0.0,0.0,1.0);
    vec3 purple = vec3(1.0,0.0,1.0);
    if (st.x <= 0.2){
        color = mix(red,orange,mod(st.x,0.2)*5.0);
    } else if(st.x <= 0.4){
        color = mix(orange,yellow,mod(st.x,0.2)*5.0);
    } else if(st.x <= 0.6){
        color = mix(yellow,green,mod(st.x,0.2)*5.0);
    } else if (st.x <= 0.8){
        color = mix(green,blue,mod(st.x,0.2)*5.0);
    } else{
        color = mix(blue,purple,mod(st.x,0.2)*5.0);
    }
    gl_FragColor = vec4(color,1.0);
}