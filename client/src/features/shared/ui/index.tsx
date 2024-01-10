import { useEffect, useState } from "react"

import styles from "./Shared.module.scss"
import Icons from "@/shared/ui/icons"

const Shared: React.FC = () => {
  const [url, setUrl] = useState('')  
  
  useEffect(() => {
    const updateUrl = () => {
      setUrl(document.URL);
    };

    window.addEventListener('popstate', updateUrl);
    updateUrl();

    return () => window.removeEventListener('popstate', updateUrl)
  }, [])

  const ShareFunc = () => {
    navigator.clipboard.writeText(url);
  }

  return (
    <div className={styles.root}>
      <Icons iconName="share" /> 
      <span onClick={ShareFunc}>Поделиться</span> 
    </div>
  )
}

export default Shared
