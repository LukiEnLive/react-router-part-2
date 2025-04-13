import { BrowserRouter, Route, Routes } from "react-router";
import { MessengerView } from "../views/messenger-view/messenger-view";
import { LoginView } from "../views/login-view/login-view";
import { RegisterView } from "../views/register-view/register-view";
import { RouteURL } from "../routes/route-url";

export function Application()
{
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={RouteURL.HOME} element={<MessengerView />} />
                    <Route path={RouteURL.LOGIN} element={<LoginView />} />
                    <Route path={RouteURL.REGISTER} element={<RegisterView />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}