import { useEffect } from "preact/hooks"


// All credit goes to this video for the background idea
// https://youtube.com/watch?v=rCWM27pxqWw
// I am willing to change if the original owner would like
export const Background = () => {
  useEffect(() => {

    const gridItems = document.querySelectorAll(".grid-background > div");

    gridItems.forEach((item:any) => {
      const delay = getRandomInt(9, 10);

      const duration = getRandomInt(4, 9);

      item.style.animationDelay = `${delay}s`;
      item.style.animationDuration = `${duration}s`;
    });

    function getRandomInt(min: number, max: number) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }, [])
  return (
  <div class={`absolute grid-background inset-0 grid gap-2 transform -skew-y-6 scale-125 grid-rows-6 grid-cols-12 blur-sm`}>
    <div class="row-span-3 bg-gray-800 rounded animate-pulse"></div>
    <div class="row-span-2 bg-gray-800 rounded animate-pulse"></div>
    <div class="row-span-2 col-span-2 bg-gray-800 rounded animate-pulse"></div>

    <div class="col-span-4 bg-gray-800 rounded animate-pulse"></div>
    <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>
    <div class="col-span-3 bg-gray-800 rounded animate-pulse"></div>
    <div class="col-span-3 bg-gray-800 rounded animate-pulse"></div>

    <div class="col-span-3 bg-gray-800 rounded animate-pulse"></div>
    <div class="col-span-7 bg-gray-800 rounded animate-pulse"></div>

    <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>
    <div class="col-span-3 bg-gray-800 rounded animate-pulse"></div>
    <div class="col-span-5 bg-gray-800 rounded animate-pulse"></div>
    <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>

    <div class="col-span-6 bg-gray-800 rounded animate-pulse"></div>
    <div class="col-span-3 bg-gray-800 rounded animate-pulse"></div>
    <div class="col-span-3 bg-gray-800 rounded animate-pulse"></div>

    <div class="col-span-4 bg-gray-800 rounded animate-pulse"></div>
    <div class="col-span-3 bg-gray-800 rounded animate-pulse"></div>
    <div class="col-span-5 bg-gray-800 rounded animate-pulse"></div>
  </div>)
}
