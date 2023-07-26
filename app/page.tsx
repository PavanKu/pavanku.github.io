import Image from 'next/image'
import data from '@/app/data/project.json'
import { ProjectCard } from './components/ProjectCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
      <div className="relative mr-32 flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        {/* Pavan Photo: {https://assets.about.me/background/users/p/a/v/pavan_k_1445966641_04.jpg} */}
        <Image
          className="relative rounded-lg dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="https://assets.about.me/background/users/p/a/v/pavan_k_1445966641_04.jpg"
          alt="Pavan's Photo"
          width={800}
          height={450}
          priority
        />
      </div>

      <div>
        <div className="mb-8 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
              Pavan Kumar
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Web Developer from Noida, India
          </p>
        </div>
        <div className="mb-32 grid lg:mb-0 lg:grid-cols-2">
          { data.map(({title, url, description}) => <ProjectCard 
            key={title} 
            title={title} 
            url={url} 
            description={description} 
          />)}
        </div>
      </div>
    </main>
  )
}
