import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock SpeechSynthesis
if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'speechSynthesis', {
    value: {
      speak: vi.fn(),
      cancel: vi.fn(),
      onstart: vi.fn(),
      onend: vi.fn(),
    },
    writable: true,
  })
  
  Object.defineProperty(window, 'SpeechSynthesisUtterance', {
    value: vi.fn(),
    writable: true,
  })
}
