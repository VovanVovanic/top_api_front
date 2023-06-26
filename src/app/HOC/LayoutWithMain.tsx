import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import RootLayout from "../Layouts/SiteLayout";



const WithLayout = <T extends Record<string, never> & PropsWithChildren>(Component: FunctionComponent<T>) => {
   return function withMain(props: T): ReactNode {
      return (
         <RootLayout>
            <Component {...props} />
         </RootLayout>
      )
   }
}

//export default WithLayout