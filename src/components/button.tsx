export const Button = (props: any) => (
  <a
    href={props.href}
    target="_blank"
    class={`p-3 font-semibold rounded-full border-2 transition duration-100 animate-fadeIn ${props.class}`}
  >
    {props.children}
  </a>
);
