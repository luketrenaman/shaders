// Author @luketrenaman - 2020
// http://luketrenaman.com

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
float drawRect(in vec2 st,float x,float y,float w, float h,float thickness){
    w += x;
    h += y;
    if (st.x >= x && st.x <= w && st.y >= y && st.y <= h){
        //h += y;
        float pct;
        thickness = 1.0/thickness;
        pct = floor((st.x-x)*thickness) * floor((st.y-y)*thickness);
        pct *= floor((w-st.x)*thickness) * floor((h-st.y)*thickness);
        return pct;
    }
    return 1.0;
}
void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    float pct;
    pct = drawRect(st,0.1,0.1,0.5,0.5,0.01);
    pct *= drawRect(st,0.3,0.3,0.5,0.5,0.01);

    color = vec3(pct);

    gl_FragColor = vec4(color,1.0);
}