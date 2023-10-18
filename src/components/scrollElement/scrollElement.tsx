import {
  useElementPosition,
  useElementTop,
  useWindowPosition,
} from 'common/hooks/useElementPosition';
import css from './scrollElement.module.scss';

export default ScrollElement;

function ScrollElement({ children, offset }: IScrollElement) {
  const [ref, position] = useElementPosition<HTMLDivElement>();
  const windowPosition = useWindowPosition();
  const isElementTop = useElementTop(position, windowPosition, offset);

  return (
    <div className={isElementTop ? css.fixed : ''} ref={ref}>
      {children}
    </div>
  );
}

interface IScrollElement {
  children: React.ReactNode;
  offset?: number;
}
