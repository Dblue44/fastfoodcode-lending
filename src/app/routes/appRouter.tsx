import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom'
import {lazy, Suspense} from "react";
import {Fallback} from "@shared/ui/fallback";
import {Layout} from "@app/layout";

const HomePage = lazy(() => import("@pages/home").then(m => ({ default: m.Home })));


export const AppRouter = () => {

  const routers = createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Navigate to="/home" replace />}
      />
      <Route element={<Layout />} errorElement={<Fallback />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
    </>

  )

  const router = createBrowserRouter(routers, {})

  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  )
}
