<script setup lang="ts">
import {onMounted, onUnmounted, ref} from 'vue';

const backdrop = ref<HTMLElement>();
const lights = ref<HTMLElement[]>([]);
const glassLeft = .78;
const planes = [
    {width: .86, z: 0},
    {width: .35, z: 24},
    {width: .19, z: 48},
];
let motion: MediaQueryList | undefined;
let sceneWidth = 0;
let sceneHeight = 0;
let frame = 0;
let previousTime = 0;
let active = false;
let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;
let lightX = 0;
let lightY = 0;
let targetLightX = 0;
let targetLightY = 0;

function updateLighting() {
    const centerY = sceneHeight * .32;
    const tiltX = -y * .08 * Math.PI / 180;
    const tiltY = x * .08 * Math.PI / 180;
    const nx = Math.sin(tiltY);
    const ny = -Math.sin(tiltX) * Math.cos(tiltY);
    const nz = Math.cos(tiltX) * Math.cos(tiltY);
    planes.forEach((plane, index) => {
        const light = lights.value[index];
        if (!light) return;
        const perspectiveScale = 1200 / (1200 - plane.z);
        const centerX = sceneWidth * (glassLeft + plane.width * perspectiveScale / 2) - (centerY + 180) * .7002;
        const dx = lightX - centerX - x;
        const dy = lightY - centerY - y;
        const dz = 520 - plane.z;
        const distance = Math.hypot(dx, dy, dz);
        const lx = dx / distance;
        const ly = dy / distance;
        const lz = dz / distance;
        const diffuse = Math.max(0, nx * lx + ny * ly + nz * lz);
        // Broad, rough-surface reflection from the light/view half-vector.
        const halfLength = Math.hypot(lx, ly, lz + 1);
        const reflection = Math.max(0, (nx * lx + ny * ly + nz * (lz + 1)) / halfLength) ** 18;
        light.style.setProperty('--glass-light-angle', `${Math.atan2(dy, dx) * 180 / Math.PI - 90}deg`);
        light.style.setProperty('--glass-reflection-angle', `${115 + lx * 24 - ly * 12}deg`);
        light.style.setProperty('--glass-reflection-position', `${48 + lx * 16 + ly * 10}%`);
        light.style.setProperty('--glass-reflection', `${reflection * .16}`);
        light.style.setProperty('--glass-diffuse', `${diffuse * .07}`);
        light.style.setProperty('--glass-shade', `${(1 - diffuse) * .09}`);
    });
}

function animate(time: number) {
    frame = 0;
    const element = backdrop.value;
    if (!element) return;
    const elapsed = previousTime ? Math.min(time - previousTime, 64) : 16;
    previousTime = time;
    const follow = 1 - Math.exp(-elapsed / 160);
    const lightFollow = 1 - Math.exp(-elapsed / 70);
    x += (targetX - x) * follow;
    y += (targetY - y) * follow;
    lightX += (targetLightX - lightX) * lightFollow;
    lightY += (targetLightY - lightY) * lightFollow;
    const settled = Math.abs(targetX - x) + Math.abs(targetY - y) < .01
        && Math.abs(targetLightX - lightX) + Math.abs(targetLightY - lightY) < .1;
    if (settled) {
        x = targetX;
        y = targetY;
        lightX = targetLightX;
        lightY = targetLightY;
    }
    element.style.setProperty('--home-drift-x', `${x}px`);
    element.style.setProperty('--home-drift-y', `${y}px`);
    element.style.setProperty('--home-tilt-x', `${-y * .08}deg`);
    element.style.setProperty('--home-tilt-y', `${x * .08}deg`);
    updateLighting();
    if (!settled) frame = requestAnimationFrame(animate);
    else previousTime = 0;
}

function requestFrame() {
    if (!frame) frame = requestAnimationFrame(animate);
}

function release() {
    if (!active) return;
    active = false;
    targetX = targetY = 0;
    backdrop.value?.style.removeProperty('--home-light-visible');
    requestFrame();
}

function reset() {
    cancelAnimationFrame(frame);
    frame = previousTime = 0;
    x = y = targetX = targetY = 0;
    active = false;
    backdrop.value?.removeAttribute('style');
    lights.value.forEach(light => light.removeAttribute('style'));
}

function onPointerMove(event: PointerEvent) {
    if (event.pointerType !== 'mouse' || !motion?.matches || document.hidden) return;
    const element = backdrop.value;
    if (!element) return;
    const bounds = element.getBoundingClientRect();
    if (event.clientY < bounds.top || event.clientY > bounds.bottom) {
        release();
        return;
    }
    targetX = (event.clientX / window.innerWidth - .5) * 24;
    targetY = ((event.clientY - bounds.top) / bounds.height - .5) * 18;
    sceneWidth = bounds.width;
    sceneHeight = bounds.height;
    targetLightX = event.clientX - bounds.left;
    targetLightY = event.clientY - bounds.top;
    if (!active) {
        lightX = targetLightX;
        lightY = targetLightY;
    }
    active = true;
    element.style.setProperty('--home-light-visible', '1');
    requestFrame();
}

function onPointerOut(event: PointerEvent) {
    if (!event.relatedTarget) release();
}

onMounted(() => {
    motion = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) and (forced-colors: none)');
    motion.addEventListener('change', reset);
    window.addEventListener('pointermove', onPointerMove, {passive: true});
    window.addEventListener('pointerout', onPointerOut);
    window.addEventListener('blur', reset);
    window.addEventListener('scroll', reset, {passive: true});
    window.addEventListener('resize', reset);
    document.addEventListener('visibilitychange', reset);
});

onUnmounted(() => {
    reset();
    motion?.removeEventListener('change', reset);
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerout', onPointerOut);
    window.removeEventListener('blur', reset);
    window.removeEventListener('scroll', reset);
    window.removeEventListener('resize', reset);
    document.removeEventListener('visibilitychange', reset);
});
</script>

<template>
    <div ref="backdrop" class="home-brand-backdrop" aria-hidden="true">
        <div class="home-glass-stack" :style="{'--glass-left': glassLeft}">
            <div v-for="(plane, index) in planes" :key="index" class="home-glass-layer" :style="{'--glass-width': `${plane.width * 100}%`, '--glass-z': `${plane.z}px`}">
                <div ref="lights" class="home-glass-light"></div>
            </div>
        </div>
    </div>
</template>
