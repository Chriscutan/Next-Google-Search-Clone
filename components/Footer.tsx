import Link from "next/link"

function Footer() {
  return (
    <footer className="bg-[#171717] text-white text-sm flex flex-col items-center space-y-3 lg:flex lg:flex-row lg:justify-between py-2 px-5 border-t border-gray-500">
        <div className="flex items-center space-x-3">
            <Link href={'https://about.google/?fg=1'} className="hover:underline">
              About
            </Link>

            <Link className="hover:underline" href={'https://ads.google.com/intl/en_in/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&fg=1'}>
              Advertising
            </Link>

            <Link className="hover:underline" href={'https://www.google.com/intl/en_in/business/'}>
              Business
            </Link>

            <Link className="hover:underline" href={'https://www.google.com/search/howsearchworks/?fg=1'}>
              How Search Works
            </Link>
        </div>

        <div className="flex items-center space-x-3">
            <Link className="hover:underline" href={'https://policies.google.com/privacy?hl=en-IN&fg=1'}>
              Privacy
            </Link>

            <Link className="hover:underline" href={'https://policies.google.com/terms?hl=en-IN&fg=1'}>
              Terms
            </Link>

            <p className="hover:underline">
                Settings
            </p>
        </div>
    </footer>
  )
}

export default Footer