import About from "./About";

export default function Hello(props, context) {
  return (
    <>
      <About msg="msg" />
      {
        props
      }
    </>
  )
};
