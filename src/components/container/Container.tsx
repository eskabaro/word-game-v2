import { FC, PropsWithChildren } from 'react'

export const Container: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <div className="mx-auto w-full max-w-lg px-5">{children}</div>
}
