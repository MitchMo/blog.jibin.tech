import React, { useEffect } from 'react'
import Switch from 'react-switch'
import useDarkMode from 'use-dark-mode'

import './toggleButton.scss'

function ToggleDarkButton() {
  const darkMode = useDarkMode(false)
  useEffect(() => {
    const color = darkMode.value ? '#1e90ff' : '#1e90ff'
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute('content', color)
  })

  return (
    <Switch
      aria-hidden="true"
      onChange={darkMode.toggle}
      checked={darkMode.value}
      offColor="#212121"
      onColor="#F1F1F1"
      onHandleColor="#212121"
      offHandleColor="#F1F1F1"
      uncheckedIcon={false}
      checkedIcon={false}
    />
  )
}
export default ToggleDarkButton
