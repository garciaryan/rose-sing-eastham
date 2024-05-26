declare namespace JSX {
  interface IntrinsicElements {
    'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      loop: boolean;
      children: Element[];
      "autoplay-delay": string;
      "autoplay-disable-on-interaction": string;
    };
    'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      // Add more properties
    };
  }
}