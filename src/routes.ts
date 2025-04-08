import SupportButton from "./components/support-button";
import dictionary from "./dictionary";
import _layout from "./views/_layout";
import Home from "./views/home";

export interface PageRequest {
    lang: string;
    path: string;
    dictionary: typeof dictionary.en
}

export type Handler = (r: PageRequest) => JSX.Renderable<JSX.ElementProps>;

function render({ layout, component } = { layout: _layout, component: Home }){
    return req => _layout(component.meta)({ children: component(req) });
}

const routes: Record<string, Handler> = {
    '/': render({ component: Home, layout: _layout }),
    '/support-button': render({ component: SupportButton, layout: _layout })
}

export default routes;