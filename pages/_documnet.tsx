import Document, {Html,Head,Main,NextScript}  from "../node_modules/next/document";

export default class CustomDocument extends Document {
    render () {
        return <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
                <meta property="custom" content="Hello" />
            </Head>
            <body>
                <Main/>
            </body>
        </Html>
    }
}