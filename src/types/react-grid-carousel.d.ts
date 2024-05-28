// src/types/react-grid-carousel.d.ts
declare module 'react-grid-carousel' {
    import * as React from 'react';
  
    interface CarouselProps {
      cols: number;
      rows?: number;
      gap?: number;
      loop?: boolean;
      autoplay?: number;
      scrollSnap?: boolean;
      responsiveLayout?: Array<{
        breakpoint: number;
        cols: number;
      }>;
      containerStyle?: React.CSSProperties;
      mobileBreakpoint?: number;
      showDots?: boolean;
      dotColorActive?: string;
      dotColorInactive?: string;
      dotStyle?: React.CSSProperties;
      arrowLeft?: React.ReactNode;
      arrowRight?: React.ReactNode;
      onSelectItem?: (index: number) => void;
      children: React.ReactNode;
    }
  
    interface CarouselItemProps {
      children: React.ReactNode;
    }
  
    export class Carousel extends React.Component<CarouselProps> {}
    export class CarouselItem extends React.Component<CarouselItemProps> {}
  }
  