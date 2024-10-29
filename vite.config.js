import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import squooshPlugin from 'vite-plugin-squoosh';

export default defineConfig({
  plugins: [vue(), squooshPlugin({
    // Specify codec options.
    codecs: {
      mozjpeg: { quality: 30, smoothing: 1 },
      webp: { quality: 40 },
      avif: { cqLevel: 20, sharpness: 1 },
      jxl: { quality: 30 },
      wp2: { quality: 40 },
      oxipng: { level: 3 }
    },
    // Do not encode .wp2 and .webp files.
    exclude: /.(wp2|webp)$/,
    // Encode png to webp.
    encodeTo: [{ from: /.(png|JPG|jpeg)$/, to: "webp" }]
  })],
})