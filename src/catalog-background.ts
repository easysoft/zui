// Grainient material and blue palette adapted from https://pro.beui.dev/studio.
const fragmentShader = `#version 300 es
precision highp float;
uniform vec2 resolution;
uniform float time;
out vec4 fragColor;

float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
}

float noise(vec2 p) {
    vec2 cell = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(cell), hash(cell + vec2(1, 0)), f.x),
        mix(hash(cell + vec2(0, 1)), hash(cell + 1.0), f.x), f.y);
}

vec3 gradient(vec2 uv) {
    float aspect = resolution.x / resolution.y;
    float t = time * 0.0876;
    vec2 p = (uv - 0.5) / 0.9;
    float angle = radians((noise(vec2(t * 0.208, p.x * p.y) * 2.0) - 0.5) * 500.0 + 180.0);
    p.y /= aspect;
    p = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * p;
    p.y *= aspect;
    p.x += sin(p.y * 5.0 + t * 4.16) / 50.0;
    p.y += sin(p.x * 7.5 + t * 4.16) / 25.0;
    vec3 ink = vec3(4, 9, 21) / 255.0;
    vec3 blue = vec3(21, 91, 213) / 255.0;
    vec3 ice = vec3(185, 220, 255) / 255.0;
    float blend = smoothstep(-0.35, 0.25, p.x);
    vec3 color = mix(mix(ice, blue, blend), mix(blue, ink, blend), 1.0 - smoothstep(-0.35, 0.55, p.y));
    color += (hash(uv * 2.0 + floor(t * 25.0)) - 0.5) * 0.1;
    return clamp((color - 0.5) * 1.5 + 0.5, 0.0, 1.0);
}

void main() {
    vec2 uv = gl_FragCoord.xy / resolution;
    vec2 texel = 2.5 / resolution;
    vec3 color = (gradient(uv) - 0.5) * 1.04 + 0.5;
    vec3 glow = gradient(uv + vec2(texel.x, 0)) + gradient(uv - vec2(texel.x, 0))
        + gradient(uv + vec2(0, texel.y)) + gradient(uv - vec2(0, texel.y));
    color = mix(color, glow * 0.25 + color * 0.2, 0.198);
    color += (hash(gl_FragCoord.xy + floor(time * 24.0)) - 0.5) * 0.0396;
    float edge = smoothstep(0.18, 0.82, length((uv - 0.5) * vec2(resolution.x / resolution.y, 1)));
    color *= 1.0 - edge * 0.2304;
    fragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}`;

export function mountCatalogBackground() {
    const canvas = document.createElement('canvas');
    canvas.className = 'dev-background';
    canvas.setAttribute('aria-hidden', 'true');
    const gl = canvas.getContext('webgl2', {alpha: false, antialias: false, depth: false, stencil: false, powerPreference: 'low-power'});
    if (!gl) {
        return;
    }
    const program = gl.createProgram();
    if (!program) {
        return;
    }
    for (const [type, source] of [
        [gl.VERTEX_SHADER, `#version 300 es
            void main() {
                vec2 p = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
                gl_Position = vec4(p * 2.0 - 1.0, 0, 1);
            }`],
        [gl.FRAGMENT_SHADER, fragmentShader],
    ] as const) {
        const shader = gl.createShader(type);
        if (!shader) {
            gl.deleteProgram(program);
            return;
        }
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.warn('Catalog background:', gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            gl.deleteProgram(program);
            return;
        }
        gl.attachShader(program, shader);
        gl.deleteShader(shader);
    }
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        gl.deleteProgram(program);
        return;
    }
    gl.useProgram(program);
    const resolution = gl.getUniformLocation(program, 'resolution');
    const time = gl.getUniformLocation(program, 'time');
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let elapsed = 0;
    let previous = 0;

    function draw() {
        gl!.uniform1f(time, elapsed);
        gl!.drawArrays(gl!.TRIANGLES, 0, 3);
    }

    function resize() {
        const scale = Math.min(devicePixelRatio || 1, 1, Math.sqrt(960 * 540 / (innerWidth * innerHeight)));
        canvas.width = Math.max(1, Math.round(innerWidth * scale));
        canvas.height = Math.max(1, Math.round(innerHeight * scale));
        gl!.viewport(0, 0, canvas.width, canvas.height);
        gl!.uniform2f(resolution, canvas.width, canvas.height);
        draw();
    }

    function render(now: number) {
        if (now - previous >= 1000 / 24) {
            elapsed += Math.min(100, now - previous) / 1000;
            previous = now;
            draw();
        }
        frame = requestAnimationFrame(render);
    }

    function updateMotion() {
        cancelAnimationFrame(frame);
        previous = performance.now();
        if (!document.hidden && !reducedMotion.matches) {
            frame = requestAnimationFrame(render);
        }
    }

    function dispose() {
        cancelAnimationFrame(frame);
        window.removeEventListener('resize', resize);
        document.removeEventListener('visibilitychange', updateMotion);
        reducedMotion.removeEventListener('change', updateMotion);
        canvas.removeEventListener('webglcontextlost', dispose);
        gl!.deleteProgram(program);
        canvas.remove();
    }

    document.body.prepend(canvas);
    resize();
    updateMotion();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', updateMotion);
    reducedMotion.addEventListener('change', updateMotion);
    canvas.addEventListener('webglcontextlost', dispose, {once: true});
    import.meta.hot?.dispose(dispose);
}
