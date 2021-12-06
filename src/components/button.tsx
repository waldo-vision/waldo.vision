export const Button = (props: any) => (
  <a
    href={props.href}
    target="_blank"
    class={`p-3 focus:ring focus:ring-current text-white font-semibold  rounded-md transition ${props.class}`}
  >
    {props.children}
  </a>
);
