// Author @luketrenaman - 2020
// http://luketrenaman.com

#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
vec3 drawCircle(vec2 st,float radius,vec2 position,vec3 color){
    float pct = 0.0;
    pct = min(max(distance(st,position),distance(st,position-vec2(0.0,0.3))),
    distance(st,position+vec2(0.0,0.1)));
    return smoothstep(radius,radius-radius/50.0,pct) * color;
}
void main(){
	vec2 st = gl_FragCoord.xy/u_resolution;
    float pct = 0.0;

    vec3 color;
    color += drawCircle(st,0.2,vec2(0.5,0.5),vec3(st.x,st.y,0.5));

	gl_FragColor = vec4( color, 1.0 );
}
