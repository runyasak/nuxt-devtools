import type { NuxtDevtoolsServerContext } from '../types'
import { addPluginTemplate } from '@nuxt/kit'
import { join } from 'pathe'
import { runtimeDir } from '../dirs'

export function setup({ nuxt }: NuxtDevtoolsServerContext) {
  if (!nuxt.options.dev || nuxt.options.test)
    return

  addPluginTemplate({
    name: 'vue-devtools-client',
    mode: 'client',
    src: join(runtimeDir, 'vue-devtools-client.js'),
  })
}
