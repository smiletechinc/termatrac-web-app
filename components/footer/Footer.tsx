import Box from "@material-ui/core/Box"
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export const Footer = () => {
    return <Box  className={styles.footer}>
        <a
          href="http://smiletechinc.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by{' '}
          <span className={styles.logo}>
            <Image src="/smiletech-logo.png" alt="Smile Tech" width={24} height={16} />
          </span>
        </a>
    </Box>
}