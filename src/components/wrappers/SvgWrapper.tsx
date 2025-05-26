import { cn } from "@/lib/utils"

const  SvgWrapper: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div className={cn(`w-fit h-auto`, className)} {...rest}>
      {children}
    </div>
  );
}

export default SvgWrapper;
