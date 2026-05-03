import { render, screen } from '@testing-library/react'
import { Hero } from '../components/Hero'
import { describe, it, expect, vi } from 'vitest'

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

describe('Hero Component', () => {
  it('renders the main heading correctly', () => {
    render(<Hero />)
    expect(screen.getByText(/The Choice is/i)).toBeInTheDocument()
    expect(screen.getByText(/Declared./i)).toBeInTheDocument()
  })

  it('renders the election date badge', () => {
    render(<Hero />)
    expect(screen.getByText(/Live Results: May 3, 2026/i)).toBeInTheDocument()
  })

  it('renders the primary call-to-action button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /View Live Seat Share Breakdown/i })).toBeInTheDocument()
  })

  it('renders the AEO optimized fact section', () => {
    render(<Hero />)
    expect(screen.getByText(/Key Election Facts \(May 3, 2026\):/i)).toBeInTheDocument()
    expect(screen.getByText(/Counting Phase \(95% complete\)/i)).toBeInTheDocument()
  })
})
