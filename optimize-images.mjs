import sharp from 'sharp'
import fs from 'fs-extra'
import glob from 'glob'

const inputDir = './public'
const outputDir = './public'
const supportedFormats = ['.jpg', '.jpeg', '.png']

glob(`${inputDir}/**/*.{jpg,jpeg,png}`, async (err, files) => {
  if (err) throw err
  console.log(`📦 Trovate ${files.length} immagini da ottimizzare.`)

  for (const file of files) {
    const outputFile = file.replace(/\.(jpg|jpeg|png)$/i, '.webp')
    await sharp(file).webp({ quality: 80 }).toFile(outputFile)
    console.log(`✅ Convertita: ${file} → ${outputFile}`)
  }

  console.log('🧼 Rimozione delle vecchie immagini...')
  for (const file of files) {
    await fs.remove(file)
    console.log(`🗑️  Eliminata: ${file}`)
  }

  console.log('🎉 Ottimizzazione completata.')
})