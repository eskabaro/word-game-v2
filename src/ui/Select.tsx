import classnames from 'classnames'
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
          <div key={option} className="h-11">
            <label
              htmlFor={String(option)}
              className={classnames(
                'grid h-11 w-10 cursor-pointer place-items-center rounded-md bg-gray-300 text-xs font-bold text-white duration-200 ease-in-out hover:bg-green-400',
                {
                  'bg-green-400': selectedOption === option,
                }
              )}
            >
              {option.charAt(option.length - 1)}
            </label>
            <input
              className="invisible h-0 w-0"
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
