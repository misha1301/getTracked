import ReactDOM from "react-dom";
import * as React from "react";

const defaultProps = {
  tag: "section",
  create:false,
  className: "",
};

type Props = React.HTMLAttributes<HTMLElement> & typeof defaultProps &{
  /**
   * the html tag you would like to use as wrapper.
   *
   * @default "section"
   */
  tag: keyof JSX.IntrinsicElements;
  id: string;
  /**
   * if true a new node/htmlTag will be created, else the html tag already exists.
   * @default false.
   */
  create: boolean;
}

const Portal: React.FC<Props> = props => {
  const { tag, create, id, className, children, ...rest } = props;
  const el = create ? document.createElement(tag) : document.getElementById(id);

  const wrapper = React.useRef<HTMLElement>(el);


  React.useEffect(() => {
    const current = wrapper.current as HTMLElement;
    if (!current) return;

    current.setAttribute("id", id);
    current.setAttribute("class", className);

    type K =  keyof typeof rest;

    Object.keys(rest).forEach(key => {
      const val = rest[key as K] as K
      current.setAttribute(key, val);
    });

    document.body.appendChild(current);


    return () => {
      if (create) {
        document.body.removeChild(current);
      }
    };
  }, [wrapper,id, create, className, rest]);

  if (!wrapper.current) {
    return <>{null}</>;
  }

  return ReactDOM.createPortal(children, wrapper.current);
};

export default Portal;