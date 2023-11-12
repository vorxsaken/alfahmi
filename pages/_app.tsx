import '@/styles/globals.css'
import type { AppPropsWithLayout } from '@/lib/types'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const GetLayout = Component.getLayout ?? ((page) => page);

  return (
    <div className='font-ubuntu'>
      {
        GetLayout(<Component {...pageProps} />)
      }
    </div>
  )
}
