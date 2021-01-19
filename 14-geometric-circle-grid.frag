// Author @luketrenaman - 2020
// http://luketrenaman.com

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
float drawCircle(in vec2 _st, in float _radius, in vec2 pos){
    vec2 dist = _st-pos;
	return 1.-smoothstep(_radius-(_radius*0.01),
                         _radius+(_radius*0.01),
                         dot(dist,dist)*4.0);
}
void main(){
	vec2 st = gl_FragCoord.xy/u_resolution;
    float pct = 0.0;

    pct = smoothstep(0.49,0.5,pct);
    vec3 color;
    for(float i = 0.0;i<1.0;i+=0.1){
        for(float j =0.0;j<1.0;j+=0.1){
            color += vec3(st.x,st.y,0.5)/u_time*2.0* drawCircle(st,0.01*u_time,vec2(i+0.05,j+0.05));
        }
    }

	gl_FragColor = vec4( color, 1.0 );
}
