import type { FeatureLabelMap, TimerDuration } from './types'

export const FEATURE_METADATA: FeatureLabelMap = {
  monochromatic: {
    label: 'Monocromático',
    description: 'Deixa a tela em tons de cinza'
  },
  blurImages: {
    label: 'Borrar Imagens',
    description: 'Aplica desfoque em todas as imagens da página'
  }
}

export const TIMER_DURATIONS: TimerDuration[] = [
  { value: 0, label: null },
  { value: 60, label: '1h' },
  { value: 240, label: '4h' },
  { value: 480, label: '8h' }
]
