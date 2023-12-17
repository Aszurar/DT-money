import LogoSVG from '../../../../public/logo.svg'

export function Logo() {
  return (
    <div className="flex gap-4 items-center">
      <img src={LogoSVG} alt="" className="h-10" />
      <h1 className="text-gray-100  text-title font-bold">DT Money</h1>
    </div>
  )
}
