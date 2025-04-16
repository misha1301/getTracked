import { cn } from "@/lib/utils"

interface ISvgWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  height?: string | undefined;
};

const  SvgWrapper: React.FC<ISvgWrapperProps> = (props) => {
  const { children, height, className, ...rest } = props;

  return (
    <div className={cn(`w-fit ${height ? "h-["+height+"px]" : "h-auto"}`, className)} {...rest}>
      {children}
    </div>
  );
}

export default SvgWrapper;
