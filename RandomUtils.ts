declare global {
  interface Window {
    getRandomValues: (buffer: Uint32Array) => number;
  }
}

export function getMathRandom(): number {
    return Math.random();
}

export function getCryptoRandom(): number {
    const randomBuffer = new Uint32Array(1);
    crypto.getRandomValues(randomBuffer);
    return (randomBuffer[0] / (0xffffffff + 1));
}

export function getRandomInt(minNum: number, maxNum: number): number {
    return Math.random() * (maxNum - minNum) + minNum;
}

export function getRandomSharpColorStr(): string {
    return `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
}

export const getUnsecureRandom = getMathRandom;

export const getSafeRandom = getCryptoRandom;