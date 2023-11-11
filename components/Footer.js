import { Github } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Youtube } from 'lucide-react';


export default function Footer() {
  return (
    <footer className="flex flex-row justify-between p-4 bg-black text-white text-lg">
      <div >&copy; ZBD 2023.</div>
      <div >Made with &#9829; by <a className="hover:text-lime-400" href="https://x.com/5antoshernandez">santos</a>
      </div>
      <div className="flex flex-row gap-8" >
      <a className="hover:text-lime-400" href="https://github.com/zebedeeio"><Github /></a>
      <a className="hover:text-lime-400" href="https://x.com/zebedeeio"><Twitter /></a>
      <a className="hover:text-lime-400" href="https://www.youtube.com/channel/UCGItMJXj5El1XOWFdsIGb6Q"><Youtube /></a>
      </div>
        

    </footer>
  )
}
