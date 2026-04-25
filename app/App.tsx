import { withProviders } from './providers'
import RouterProvider from './providers/RouterProvider'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'
import'./styles/main.scss' 

const App = () => {
  return (
    <>
      <Header />
      <RouterProvider />
      <Footer />
    </>
  )
}

export default () => withProviders(<App />)