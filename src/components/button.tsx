export const Button = (props: any) => (
  <a
    href={props.href}
    target="_blank"
    class={`p-3 font-semibold rounded-full transition-all border-2${props.class}`}
  >
    {props.children}
  </a>
);
