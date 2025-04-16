import SvgWrapper from '@/components/wrappers/SvgWrapper.tsx';
import getTrackedLogoSvg from './getTrackedLogo.svg';

function GetTrackedLogo(props: { height: string }) {

  return (
    <SvgWrapper height={props.height}>
      <img className="h-full object-contain"
        src={getTrackedLogoSvg} />
    </SvgWrapper>
  );
}

export default GetTrackedLogo;