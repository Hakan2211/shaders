const fragmentShader = `

varying float vZ;
uniform vec3 u_colorA;
uniform vec3 u_colorB;
void main(){

    vec3 color = mix(u_colorA,u_colorB,vZ * 2.0 +0.5);

    gl_FragColor = vec4(color,1.0);
}

`;

export default fragmentShader;
