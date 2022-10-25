import React from "react";
import Box from "@material-ui/core/Box";
import { HEADER_HEIGHT, HEADER_ZINDEX } from "../../constants/constants";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export const Header = () => {
  return (
    <Box
      bgcolor="transparent"
      zIndex={HEADER_ZINDEX}
      boxShadow="0 0 2px lightgrey"
      top={0}
      position="fixed"
      height={`${HEADER_HEIGHT}`}
      border="1px solid #eaeaea"
      className={styles.header}
    >
      <Box className={styles.headerLogo}>
        <Box lineHeight="1.5">
          <Link href="/">
            <a rel="noopener noreferrer">
              <span className={styles.logo}>
                <Image
                  src="/Icon-App.png"
                  alt="Vercel Logo"
                  width={32}
                  height={32}
                />
              </span>{" "}
              TERMATRAC
            </a>
          </Link>
        </Box>
      </Box>
      <Box className={styles.options}>
        <Box style={{ padding: 16 }}>
          <Link href="/history">
            <a>History</a>
          </Link>
        </Box>
        <Box style={{ padding: 16 }}>
          <Link href="/data">
            <a>Data</a>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
