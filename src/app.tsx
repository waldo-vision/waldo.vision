import { Logo } from "./components/logo";
import { Button } from "./components/button";
import { Background } from "./components/background"

export const App = () => {
  return (
    <div class="relative py-20 px-4 min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      <Background/>
      <div class="relative flex flex-col items-center gap-10">
        <Logo class="text-white fill-current hover:-translate-y-1 transition duration-150" height="12rem" />
        <p class="text-7xl tracking-wide font-bold text-white hover:-translate-y-1 transition duration-150">WALDO</p>
        <h2 class="text-gray-300 text-center text-2xl md:text-xl hover:-translate-y-1 transition duration-150">
          An AI powered anti cheat currently
          <br />
          <span class="font-bold">under construction</span>
        </h2>
        <div class="flex flex-col lg:flex-row gap-10">
          <iframe
            src="https://www.youtube.com/embed/GOI9EkLsUm0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <p class="text-gray-400 max-w-sm leading-relaxed">
            <span class="font-bold text-gray-300">The next generation of anti cheat</span>
            <br />
            With <span class="font-bold hover:text-gray-300 transition duration-150">hacks</span> getting more and more advanced, we need a new way of
            detecting them.
            <br />
            We see AI as this new method. By training an AI with real footage
            and footage of cheat assissted gameplay, we can train the AI to
            detect the smallest differences
          </p>
          <div class="flex flex-col items-center gap-5">
            <h3 class="text-gray-100 text-3xl md:text-xl font-bold">
              Learn more...
            </h3>
            <div class="flex gap-5 ">
              <Button
                href="https://bit.ly/3mqDTV0"
                class="bg-blue-600 hover:bg-blue-500 hover:-translate-y-1 transition duration-150"
              >
                Discord
              </Button>
              <Button
                href="https://github.com/waldo-vision"
                class="bg-gray-600 hover:bg-gray-500 hover:-translate-y-1 transition duration-150"
              >
                Github
              </Button>
              <Button
                href="docs.waldo.vision"
                class="bg-fuchsia-700 hover:bg-fuchsia-600 hover:-translate-y-1 transition duration-150"
              >
                Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
