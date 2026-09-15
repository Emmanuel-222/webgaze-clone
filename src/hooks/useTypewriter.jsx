import { useState, useEffect, useRef } from 'react'

export function useTypewriter(words, typingSpeed = 100, deletingSpeed = 50, pause = 2000) {
  const [text, setText] = useState('')
  const stateRef = useRef({
    wordIndex: 0,
    isDeleting: false,
    timeoutId: null,
  })

  useEffect(() => {
    const state = stateRef.current
    const currentWord = words[state.wordIndex]

    const tick = () => {
      if (!state.isDeleting) {
        const nextText = currentWord.substring(0, text.length + 1)
        setText(nextText)

        if (nextText === currentWord) {
          state.timeoutId = setTimeout(() => {
            state.isDeleting = true
            tick()
          }, pause)
          return
        }
      } else {
        const nextText = currentWord.substring(0, text.length - 1)
        setText(nextText)

        if (nextText === '') {
          state.isDeleting = false
          state.wordIndex = (state.wordIndex + 1) % words.length
        }
      }
    }

    state.timeoutId = setTimeout(tick, state.isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(state.timeoutId)
  }, [text, words, typingSpeed, deletingSpeed, pause])

  return text
}