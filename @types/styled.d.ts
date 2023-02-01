/**
 * Styled-components
 */

type IsShortenType = {
  isShorten: boolean;
};

/**
 * 포함된 프로퍼티가 다수이고 다른 곳에서 재사용되기 어려운 타입들이라
 * 하나로 묶었습니다
 */
type SparkleProps = {
  opacity: number;
  top: number;
  blinkDuration: number;
  blinkDelay: number;
  scale: number;
};

type FloatingWidgetProps = {
  isOpen: boolean;
  isMountComplete: boolean;
};
