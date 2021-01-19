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
float heartbeat(float x){
    float e = 2.71828182846;
    return 1.0-abs(x/5.0-x)*pow(e,-(pow(7.0*x,2.0))/2.0);
}
float saw(float x){
    return x-ceil(x-0.5);
}
void main(){
	vec2 st = gl_FragCoord.xy/u_resolution;
    float pct = 0.0;

    pct = smoothstep(0.49,0.5,pct);
    vec3 color;
    color += drawCircle(st,heartbeat(saw(u_time))/4.0,vec2(0.5,0.5),vec3(st.x,st.y,0.5));

	gl_FragColor = vec4( color, 1.0 );
}
