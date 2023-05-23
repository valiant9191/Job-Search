import { HeaderComponent } from "components/headerComponent"
import { Route, Routes } from "react-router-dom"


function RouterLayout({ items, children }: any) {
    return (
        <>
            <HeaderComponent links={items} />
            <Routes>
                <Route>
                    {children}
                </Route>
            </Routes>
        </>
    )
}
export { RouterLayout }