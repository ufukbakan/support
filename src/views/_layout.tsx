export default function (meta: Array<JSX.Element<JSX.ElementProps>>) {
    return (props: JSX.ElementProps) =>
    (
        <html>
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