import { TypeAnimation } from "react-type-animation";

function TypingAnim() {
  return (
    <TypeAnimation
      sequence={[
        "Chat With Your OWN AI",
        1000,
        "Built With OpenAI ",
        2000,
        "Your Own Customized ChatGPT",
        900,
        "By - ATHARVA DANKAHDE",
        1000,
      ]}
      speed={50}
      style={{
        fontSize: "60px",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
      }}
      repeat={Infinity}
    />
  );
}

export default TypingAnim;
