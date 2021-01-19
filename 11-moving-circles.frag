// Author @luketrenaman - 2020
// http://luketrenaman.com

#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
vec3 drawCircle(vec2 st,float radius,vec2 position,vec3 color){
    return smoothstep(radius,radius-radius/50.0,distance(st,position)) * color;
}
//
void main(){
	vec2 st = gl_FragCoord.xy/u_resolution;
    float pct = 0.0;

    pct = smoothstep(0.49,0.5,pct);
    vec3 color;
    color += drawCircle(st,0.1,u_mouse/u_resolution,vec3(st.x,st.y,0.5));
    color += drawCircle(st,0.1,1.0-u_mouse/u_resolution,vec3(st.x,st.y,0.5));
        color += drawCircle(st,0.1,u_mouse/u_resolution*vec2(1.0,sin(u_time)/2.0+0.5),vec3(st.x,st.y,0.5));
	gl_FragColor = vec4( color, 1.0 );
}
