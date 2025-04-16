import { useEffect, useRef } from 'preact/hooks';

const InstagramEmbed = ({ url }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Dynamically load the Instagram embed.js script
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // clean up
    };
  }, []);

  useEffect(() => {
    // Re-initialize the embeds after render
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <div ref={containerRef}>
      <blockquote
        className='instagram-media'
        data-instgrm-permalink={url}
        data-instgrm-version='14'
        style={{ width: '100%', maxWidth: '540px', margin: '0 auto' }}
      ></blockquote>
    </div>
  );
};

export default InstagramEmbed;
