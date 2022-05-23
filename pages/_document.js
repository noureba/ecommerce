import React from 'react'
import {Head, Html, NextScript, Main} from "next/document"

function _document() {
  return (
    <Html>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
            <Main/>
            <NextScript/>
        </body>
    </Html>
  )
}

export default _document