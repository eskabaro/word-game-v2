import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

type TypeOut = {
  ref: any
  isShow: boolean
  setIsShow: Dispatch<SetStateAction<boolean>>
}

export const useClickOutside = (initialvaule: boolean): TypeOut => {
  const [isShow, setIsShow] = useState(initialvaule)
  const ref = useRef<HTMLElement>(null)

  const handleClickOytside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsShow(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOytside, true)
    return () => {
      document.removeEventListener('click', handleClickOytside, true)
    }
  }, [])

  return { ref, isShow, setIsShow }
}
