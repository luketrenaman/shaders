// Author @luketrenaman - 2020
// http://luketrenaman.com

#ifdef GL_ES
precision mediump float;
#endif
#define PI 3.14159265359
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
vec2 polar(float offset,float u_time){
    float x = cos(u_time+offset)/6.0;
    float y = sin(u_time+offset)/6.0;
    float breathe = (sin(u_time*2.0)/8.0)+1.4;
    return vec2(x*breathe+0.5,y*breathe+0.5);
}
vec3 isBetween(vec2 a, vec2 b, vec2 c){
    float crossproduct = (c.y - a.y) * (b.x - a.x) - (c.x - a.x) * (b.y - a.y);
    if (abs(crossproduct) > 0.005){
        return vec3(0.0,0.0,0.0);
    }
    float dotproduct = (c.x - a.x) * (b.x - a.x) + (c.y - a.y)*(b.y - a.y);
    if (dotproduct < 0.0){
        return vec3(0.0,1.0,0.0);
    }

    float squaredlengthba = (b.x - a.x)*(b.x - a.x) + (b.y - a.y)*(b.y - a.y);
    if (dotproduct > squaredlengthba){
        return vec3(1.0,0.0,0.0);
    }

    return vec3(1.0,1.0,1.0);
}
vec3 triangle(vec2 st,vec2 a, vec2 b, vec2 c){
    vec3 color = isBetween(a,b,st) + isBetween(b,c,st) +isBetween(c,a,st);
    color.r = clamp(color.r,0.0,1.0);
    color.g = clamp(color.g,0.0,1.0);
    color.b = clamp(color.b,0.0,1.0);
    return color*vec3(st.x,st.y,0.5);
}
void main(){
	vec2 st = gl_FragCoord.xy/u_resolution;

    vec3 color = vec3(st.x,st.y,0.0);
    float pct = 0.0;
    float radius = 0.20;
    vec2 r1 = polar(0.0,u_time);
    vec2 r2 = polar(2.0*PI/3.0,u_time);
    vec2 r3 = polar(4.0*PI/3.0,u_time);
    pct = min(min(distance(st,r1),distance(st,r2)),
    distance(st,r3));
    color = smoothstep(radius,radius-radius/50.0,pct) * color;
    color += triangle(st,r1,r2,r3);

	gl_FragColor = vec4( color, 1.0 );
}
