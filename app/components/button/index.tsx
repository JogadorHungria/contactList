import "@/app/components/button/buttonStyle.scss";

interface IButton {
  value: string;
  onclick: any;
}

export const Button = ({ value, onclick }: IButton) => {
  return (
    <button onClick={() => onclick()} type={"button"}>
      {value}
    </button>
  );
};
