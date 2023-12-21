import Image from 'next/image'
import Input from './components/Input'

export default function Home() {
  return (
    <main className="flex min-h-screen h-screen  flex-col items-center justify-center px-24">
        <div className='w-screen md:w-3/4  lg:w-2/4 h-5/6 bg-green-200 flex flex-col items-center p-10 rounded-md'>
          <Input />
        </div>
    </main>
  )
}
