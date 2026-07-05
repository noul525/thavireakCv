/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col items-center justify-start py-8 px-4 md:py-12 antialiased">
      {/* Top Header / Download Bar */}
      <div className="w-full max-w-4xl mb-6 flex justify-between items-center px-2 md:px-0">
        <div className="flex flex-col">
          <span className="text-sm font-bold text-neutral-800 uppercase tracking-widest">Sarom Thavireak</span>
          <span className="text-xs text-neutral-500 uppercase tracking-wider mt-0.5">Curriculum Vitae</span>
        </div>
        <a 
          href="cv.pdf" 
          download="Sarom_Thavireak_CV.pdf"
          className="bg-black hover:bg-neutral-800 text-white text-xs md:text-sm font-medium py-2.5 px-5 rounded-lg shadow-sm transition-all duration-200 uppercase tracking-wider"
        >
          Download CV
        </a>
      </div>

      {/* Main CV Card */}
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row min-h-[1000px]">
        
        {/* Left Column (Sidebar) - Dark Background */}
        <div className="w-full md:w-[300px] lg:w-[320px] bg-black text-white p-8 md:p-10 flex flex-col gap-10 shrink-0">
          
          {/* Photo */}
          <div className="w-full">
            <img 
              src="photo.jpg" 
              alt="Sarom Thavireak" 
              id="cv-photo"
              className="w-full aspect-[3/4] object-cover rounded-xl shadow-md bg-neutral-900"
            />
          </div>

          {/* Contact Details */}
          <div className="space-y-2 text-sm text-neutral-300 font-light leading-relaxed">
            <p>Phnom penh, Cambodia</p>
            <p className="hover:text-white transition-colors">
              <a href="mailto:noul26327@gmail.com">noul26327@gmail.com</a>
            </p>
            <p className="hover:text-white transition-colors">
              <a href="tel:+855061791986">+855 061791986</a>
            </p>
          </div>

          {/* Language Section */}
          <div>
            <h2 className="text-base font-bold text-white uppercase tracking-widest border-b border-neutral-800 pb-2 mb-4">
              Language
            </h2>
            <div className="space-y-2 text-sm text-neutral-300 font-light leading-relaxed">
              <p>Khmer - Native</p>
              <p>English - Intermediate</p>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-base font-bold text-white uppercase tracking-widest border-b border-neutral-800 pb-2 mb-4">
              Skills
            </h2>
            <div className="space-y-2 text-sm text-neutral-300 font-light leading-relaxed">
              <p>Basic knowledge of Electronics Device</p>
              <p>Time management</p>
              <p>Basic computer skill</p>
            </div>
          </div>

          {/* Personal Strength Section */}
          <div>
            <h2 className="text-base font-bold text-white uppercase tracking-widest border-b border-neutral-800 pb-2 mb-4">
              Personal Strength
            </h2>
            <div className="space-y-2 text-sm text-neutral-300 font-light leading-relaxed">
              <p>Disciplined</p>
              <p>Friendly and polite</p>
              <p>Willing to learn</p>
            </div>
          </div>

        </div>

        {/* Right Column (Main Content) - Light Background */}
        <div className="flex-1 bg-white text-black p-8 md:p-12 md:pl-16 flex flex-col gap-10">
          
          {/* Main Name Heading */}
          <div className="pt-4">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-neutral-900 leading-[1.1] uppercase">
              Sarom<br />
              Thavireak
            </h1>
          </div>

          {/* Profile Section */}
          <div>
            <h2 className="text-lg font-extrabold text-neutral-900 uppercase tracking-widest border-b-2 border-neutral-100 pb-2 mb-4">
              Profile
            </h2>
            <p className="text-sm md:text-base text-neutral-700 leading-relaxed font-light">
              Friendly and responsible person with basic communication skills. Able to help customers, handle basic tasks, and work well with others. Willing to learn and improve.
            </p>
          </div>

          {/* Relevant Experience Section */}
          <div>
            <h2 className="text-lg font-extrabold text-neutral-900 uppercase tracking-widest border-b-2 border-neutral-100 pb-2 mb-4">
              Relevant Experience
            </h2>
            <div className="space-y-6">
              {/* Experience Block 1 */}
              <div>
                <h3 className="font-bold text-neutral-900 text-base tracking-wide">
                  School / Projects
                </h3>
                <div className="mt-2 text-sm text-neutral-700 space-y-1.5 font-light leading-relaxed">
                  <p>• Worked in a team to complete assignments</p>
                  <p>• Managed time to meet deadlines</p>
                </div>
              </div>
              
              {/* Experience Block 2 */}
              <div>
                <h3 className="font-bold text-neutral-900 text-base tracking-wide">
                  Helping family / informal work
                </h3>
                <div className="mt-2 text-sm text-neutral-700 space-y-1.5 font-light leading-relaxed">
                  <p>• Helped manage small clothing tailor business</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-lg font-extrabold text-neutral-900 uppercase tracking-widest border-b-2 border-neutral-100 pb-2 mb-4">
              Education
            </h2>
            <div className="space-y-2.5 text-sm md:text-base text-neutral-700 font-light leading-relaxed">
              <p>• High School Diploma – Life High School (2020- 2022)</p>
              <p>• Baccalaureate – Life HIgh School (2023-2025)</p>
              <p>• Digital Economy (Major – Ongoing Studies)</p>
            </div>
          </div>

          {/* Interest Section */}
          <div>
            <h2 className="text-lg font-extrabold text-neutral-900 uppercase tracking-widest border-b-2 border-neutral-100 pb-2 mb-4">
              Interest
            </h2>
            <div className="space-y-2 text-sm md:text-base text-neutral-700 font-light leading-relaxed">
              <p>• Reading</p>
              <p>• Fitness & self-improvement</p>
            </div>
          </div>

        </div>

      </div>

      {/* Footer copyright info */}
      <div className="w-full max-w-4xl text-center mt-8 text-xs text-neutral-400">
        <p>© 2026 Sarom Thavireak. All rights reserved.</p>
      </div>
    </div>
  );
}
