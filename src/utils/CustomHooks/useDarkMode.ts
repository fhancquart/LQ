import { useEffect, useState } from 'react';
import { isBrowser } from '../isBrowser';

export function useDarkMode() {

  const [isDark, setIsDark] = useState(false)
  
  const body = isBrowser ? document.querySelector<any>("body") : "";

  useEffect(() => {
      body.classList.add(isDark ? "dark" : "light")
      body.classList.remove(isDark ? "light" : "dark")

      if(body.classList.contains('dark')){
        setIsDark(true)
      } else{
        setIsDark(false)
      }

  }, [isDark])

  return [isDark, setIsDark]

} 