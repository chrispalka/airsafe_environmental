import React from 'react';

const SectionSeparator = ({
  paths = [],
  height = '100%',
  viewBox = '0 0 900 600',
  flip = false,
  className = '',
}) => {
  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        lineHeight: 0,
        height,
        zIndex: 0,
        transform: flip ? 'rotate(180deg)' : undefined,
      }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox={viewBox}
        preserveAspectRatio='none'
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        {paths.map((path, index) => (
          <path
            key={index}
            d={path.d}
            fill={path.fill}
            className='fill-current text-gray-200 dark:text-gray-800'
          />
        ))}
      </svg>
    </div>
  );
};

export default SectionSeparator;
