import {
  CalendarIcon,
  ChartBarIcon,
  CogIcon,
  InformationCircleIcon,
  LinkIcon,
} from '@heroicons/react/outline'
import classnames from 'classnames'

import { ENABLE_ARCHIVED_GAMES } from '../../constants/settings'
import { GAME_TITLE } from '../../constants/strings'
import { useClickOutside } from '../../hooks/useClickOutside'

type Props = {
  setIsInfoModalOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
  setIsDatePickerModalOpen: (value: boolean) => void
  setIsSettingsModalOpen: (value: boolean) => void
}

export const Navbar = ({
  setIsInfoModalOpen,
  setIsStatsModalOpen,
  setIsDatePickerModalOpen,
  setIsSettingsModalOpen,
}: Props) => {
  const { ref: dropdownRef, isShow, setIsShow } = useClickOutside(false)

  return (
    <div className="navbar">
      <div className="navbar-content px-5 short:h-auto">
        <div className="relative" ref={dropdownRef}>
          <LinkIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsShow(!isShow)}
          />
          <div
            className={classnames(
              'absolute top-8 rounded-lg bg-white p-2 opacity-0 shadow-md duration-200 ease-in-out dark:bg-slate-600',
              {
                'visible opacity-100': isShow,
                invisible: !isShow,
              }
            )}
          >
            <ul className="flex flex-col gap-2 text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
              <li>
                <a href="/#">Home</a>
              </li>
              <li>
                <a href="https://wordmaker.info/">Wordmaker.info</a>
              </li>
              <li>
                <a href="/#">About Us</a>
              </li>
              <li>
                <a href="/#">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-xl font-bold dark:text-white">{GAME_TITLE}</p>
        <div className="right-icons">
          {ENABLE_ARCHIVED_GAMES && (
            <CalendarIcon
              className="mr-3 h-6 w-6 cursor-pointer dark:stroke-white"
              onClick={() => setIsDatePickerModalOpen(true)}
            />
          )}
          <InformationCircleIcon
            className="mr-3 h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsInfoModalOpen(true)}
          />
          <ChartBarIcon
            className="mr-3 h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsStatsModalOpen(true)}
          />
          <CogIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsSettingsModalOpen(true)}
          />
        </div>
      </div>
      <hr></hr>
    </div>
  )
}
