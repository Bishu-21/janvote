import { render, screen, fireEvent } from '@testing-library/react'
import { AIChat } from '../components/AIChat'
import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock the generative AI SDK
vi.mock('@google/generative-ai', () => ({
  GoogleGenerativeAI: vi.fn().mockImplementation(() => ({
    getGenerativeModel: vi.fn().mockImplementation(() => ({
      startChat: vi.fn().mockImplementation(() => ({
        sendMessage: vi.fn().mockResolvedValue({
          response: {
            text: () => "AI Response"
          }
        })
      }))
    }))
  }))
}))

describe('AIChat Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the chat button initially', () => {
    render(<AIChat />)
    expect(screen.getByLabelText(/Open Civic Guide Chat/i)).toBeInTheDocument()
  })

  it('opens the chat window when clicked', () => {
    render(<AIChat />)
    const button = screen.getByLabelText(/Open Civic Guide Chat/i)
    fireEvent.click(button)
    expect(screen.getByText(/Federation Civic Assistant/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Ask about election rules.../i)).toBeInTheDocument()
  })

  it('shows the initial greeting message', () => {
    render(<AIChat />)
    fireEvent.click(screen.getByLabelText(/Open Civic Guide Chat/i))
    expect(screen.getByText(/Hello! I am your AI Civic Assistant/i)).toBeInTheDocument()
  })

  it('allows typing a message', () => {
    render(<AIChat />)
    fireEvent.click(screen.getByLabelText(/Open Civic Guide Chat/i))
    const input = screen.getByPlaceholderText(/Ask about election rules.../i)
    fireEvent.change(input, { target: { value: 'How to vote?' } })
    expect(input).toHaveValue('How to vote?')
  })
})
