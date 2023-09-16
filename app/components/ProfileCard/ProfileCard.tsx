import MediumIcon from './social-icons/medium.svg';

const IMAGE_URL =
  "https://media.licdn.com/dms/image/D4D03AQF0rHU9Q4AVyg/profile-displayphoto-shrink_800_800/0/1680857625351?e=1700092800&v=beta&t=xkSgrlCNrD9JJMWOcO1U3ffis3xHHKwLmLvKwIBfJrY";
const LINKEDIN_URL = 'https://www.linkedin.com/in/pavan-kumar-19246412/';
const MEDIUM_URL = 'https://medium.com/@Pavan_';
const GITHUB_URL = 'https://github.com/PavanKu';

const yearsOfExp = new Date().getFullYear() - 2010;
  export function ProfileCard() {
  return (
    <div className="flex flex-col pt-10 pb-5">
      <div className="border p-2 drop-shadow-md rounded-full w-28 h-28 mx-auto">
        <img
          className="object-cover w-24 h-24 rounded-full"
          src={IMAGE_URL}
          alt="Pavan Kumar"
        />
      </div>
      <div className="pt-2 flex flex-col items-center">
        <div className="font-medium text-xl text-slate-900">Pavan Kumar</div>
        <div className='flex flex-row py-2'>
          {/* Medium Icon */}
          <a href={MEDIUM_URL} target='_blank' className='mr-4'>
            <svg className="w-5 h-5 fill-slate-500 hover:fill-slate-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Medium</title><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
          </a>
          {/* Linkedin Icon */}
          <a href={LINKEDIN_URL} target='_blank' className='mr-4'>
            <svg className="w-5 h-5 fill-slate-500 hover:fill-slate-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          {/* Github Icon */}
          <a href={GITHUB_URL} target='_blank' className='mr-4'>
            <svg className="w-5 h-5 fill-slate-500 hover:fill-slate-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
      </div>
        <div className="text-base text-slate-500">{`🚀 ${yearsOfExp} Years of Crafting Digital Experiences 🚀`}</div>
        <div className="italic text-base text-slate-500">Experienced Web & Mobile Developer | Noida, India</div>
        <p className="text-left pt-5 font-light text-base/6 text-slate-900">
          {`Hey there! I am Pavan Kumar, a passionate and seasoned Web and Mobile
          Developer based in Noida, India. With over ${yearsOfExp} years of hands-on
          experience in the industry, I've been on a thrilling journey of
          creating cutting-edge digital solutions that blend innovation with
          user-centric design.`}
        </p>
      </div>
    </div>
  );
}