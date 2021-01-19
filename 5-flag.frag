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
    color.r = step(st.x,0.5);
    color.g = step(st.y,0.5);
    color.b = step((st.x+st.y)/2.0,0.5);
    gl_FragColor = vec4(color,1.0);
}