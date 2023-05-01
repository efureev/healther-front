import Icons from 'unplugin-icons/vite'

export default function setupIcons() {
  return Icons({
    autoInstall: true,
    compiler: 'vue3',
  })
}
