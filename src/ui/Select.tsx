import { ChangeEvent, Dispatch, SetStateAction } from 'react'

import { WORD_LENGHT } from '../constants/settings'
import { saveGameStateToLocalStorage } from '../lib/localStorage'
import { getIsLatestGame, solution } from '../lib/words'

type Props = {
  settingName: string
  selectedOption: string
  setSelectedOption: Dispatch<SetStateAction<string>>
  description?: string
}

export const Select = ({
  selectedOption,
  setSelectedOption,
  settingName,
}: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setSelectedOption(newValue)

    window.location.reload()

    saveGameStateToLocalStorage(getIsLatestGame(), {
      guesses: [],
      solution,
    })

    localStorage.setItem('wordLenght', String(newValue))
  }

  return (
    <div className="flex flex-col justify-between border-t py-3">
      <h2 className="text-left text-gray-500 dark:text-gray-300">
        {settingName}
      </h2>
      <div className="mt-1 flex items-center gap-3">
        {WORD_LENGHT.map((option) => (
          <div key={option} className="flex gap-1">
            <label
              htmlFor={String(option)}
              className="text-xs text-gray-500 dark:text-gray-300"
            >
              {option.charAt(option.length - 1)}
            </label>
            <input
              className="appearance-none overflow-hidden"
              type="radio"
              name="number"
              id={String(option)}
              value={option}
              checked={selectedOption === option}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
