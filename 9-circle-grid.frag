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
void main(){
	vec2 st = gl_FragCoord.xy/u_resolution;
    float pct = 0.0;

    pct = smoothstep(0.49,0.5,pct);
    vec3 color;
    for(float i = 0.0;i<1.0;i+=0.1){
        for(float j =0.0;j<1.0;j+=0.1){
            color += drawCircle(st,0.04,vec2(i+0.05,j+0.05),vec3(st.x,st.y,0.5));
        }
    }

	gl_FragColor = vec4( color, 1.0 );
}
