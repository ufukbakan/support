import { rtlLanguages } from "../dictionary";
import { PageRequest } from "../routes"

interface props {
    meta: Array<JSX.Element<JSX.ElementProps>>,
    req: PageRequest
}

export default function ({ meta, req }: props) {
    const { lang } = req;
    const isRTL = rtlLanguages.includes(lang);
    return (props: JSX.ElementProps) =>
    (
        <html lang={lang} dir={isRTL ? "rtl" : "ltr"}>
            <head>
                <meta charset='utf-8' />
                <meta http-equiv='X-UA-Compatible' content='IE=edge' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='stylesheet' type='text/css' media='screen' href='/support/main.css' />
                {meta}
            </head>
            <body>
                {props.children}
            </body>
        </html>
    )
}