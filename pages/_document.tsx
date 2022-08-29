/*
 * @Date: 2022-08-11 11:20:47
 * @LastEditors: 卫鹏飞
 * @Author: error: git config user.name & please set dead value or install git
 * @LastEditTime: 2022-08-29 15:26:19
 * @FilePath: /next-template/pages/_document.tsx
 * @Description:
 */
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }
  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* <link href="https://www.baidu.com.css" rel="stylesheet" />
          <script async src="https://www.baidu.com.js" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
