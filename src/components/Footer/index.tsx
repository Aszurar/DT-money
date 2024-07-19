import { GithubLogo, LinkedinLogo, ShootingStar } from '@phosphor-icons/react'

import { useResponsiveness } from '../../hooks/useResponsiveness'
import * as NavItem from '../NavItem'

export function Footer() {
  const { isMobile } = useResponsiveness()

  const author = isMobile ? 'Lucas de Lima' : 'Lucas de Lima Martins de Souza'

  return (
    <footer
      className={`flex items-center justify-center gap-2 bg-gray-900 px-8 
        py-4 phone-lg:gap-4`}
    >
      <strong className="inline-block space-x-2  text-gray-200">
        Desenvolvido por
        <span className="ml-2 inline-block font-normal  text-white">
          {author}
        </span>
        <ShootingStar alt="" className="inline-block h-5 w-5 text-xl" />
      </strong>
      <nav className="flex items-center justify-center gap-2">
        <NavItem.Root asChild variant="outline" label="Acessar Github">
          <a
            href="https://github.com/Aszurar/DT-money"
            target="_blank"
            className={`flex h-6 w-6 items-center justify-center text-xl transition-all`}
            aria-label="Acessar Github"
            rel="noreferrer"
          >
            <NavItem.Icon
              icon={GithubLogo}
              className="h-5 w-5 text-gray-300 hover:text-white focus:text-white"
            />
          </a>
        </NavItem.Root>

        <NavItem.Root asChild variant="outline" label="Acessar Linkedin">
          <a
            href="https://www.linkedin.com/in/lucas-de-lima-azsura/"
            target="_blank"
            className={`flex h-6 w-6 items-center justify-center text-xl transition-all`}
            aria-label="Acessar Linkedin"
            rel="noreferrer"
          >
            <NavItem.Icon
              icon={LinkedinLogo}
              className="h-5 w-5 text-gray-300 hover:text-white focus:text-white"
            />
          </a>
        </NavItem.Root>
      </nav>
    </footer>
  )
}
