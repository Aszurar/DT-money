import LogoSVG from '../../../assets/logo.svg'

export function Logo() {
  return (
    <div className="flex items-center gap-4">
      <img src={LogoSVG} alt="" className="h-10" />
      <h1 className="text-title  font-bold text-gray-100">DT Money</h1>
    </div>
  )
}
