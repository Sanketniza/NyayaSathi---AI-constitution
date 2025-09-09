import React from 'react';

const AI3DElements = ({ variant = 'default' }) => {
  const renderBrainNetwork = () => (
    <div className="absolute top-20 right-20 w-32 h-32 opacity-30">
      <div className="relative w-full h-full">
        {/* Brain structure */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/40 to-accent-secondary/40 rounded-full animate-pulse">
          <div className="absolute top-2 left-2 w-4 h-4 bg-accent rounded-full animate-ping"></div>
          <div className="absolute bottom-4 right-4 w-3 h-3 bg-accent-secondary rounded-full animate-ping delay-300"></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-accent rounded-full animate-ping delay-700"></div>
        </div>
        
        {/* Neural connections */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 128 128">
          <path
            d="M20 20 Q64 40 108 20"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-accent/60 animate-pulse"
            strokeDasharray="4 4"
          />
          <path
            d="M20 108 Q64 88 108 108"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-accent-secondary/60 animate-pulse delay-500"
            strokeDasharray="4 4"
          />
        </svg>
      </div>
    </div>
  );

  const renderDataCubes = () => (
    <>
      <div className="absolute top-1/4 left-1/6 w-16 h-16 opacity-40 animate-float-slow">
        <div className="relative w-full h-full transform-gpu perspective-1000">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/50 to-accent-secondary/50 rounded-lg transform rotate-45 animate-rotate-3d"></div>
          <div className="absolute inset-2 bg-gradient-to-br from-accent-secondary/30 to-accent/30 rounded-lg transform -rotate-12"></div>
        </div>
      </div>
      
      <div className="absolute bottom-1/3 right-1/5 w-12 h-12 opacity-50 animate-float-medium">
        <div className="relative w-full h-full transform-gpu">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-secondary/60 to-accent/60 rounded-full animate-bounce-slow"></div>
          <div className="absolute inset-1 bg-gradient-to-br from-accent/40 to-accent-secondary/40 rounded-full"></div>
        </div>
      </div>
    </>
  );

  const renderNeuralPaths = () => (
    <div className="absolute inset-0 opacity-20">
      <svg className="w-full h-full" viewBox="0 0 1200 800">
        {/* Animated neural pathways */}
        <path
          d="M100 400 Q300 200 500 400 T900 400"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-accent animate-pulse"
          strokeDasharray="10 5"
        />
        <path
          d="M200 600 Q400 400 600 600 T1000 600"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-accent-secondary animate-pulse delay-1000"
          strokeDasharray="8 4"
        />
        <path
          d="M150 200 Q350 500 550 200 T950 200"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-accent/60 animate-pulse delay-500"
          strokeDasharray="6 3"
        />
        
        {/* Neural nodes */}
        {[...Array(8)].map((_, i) => (
          <circle
            key={i}
            cx={150 + i * 120}
            cy={300 + Math.sin(i) * 100}
            r="4"
            className="text-accent fill-current animate-pulse"
            style={{ animationDelay: `${i * 200}ms` }}
          />
        ))}
      </svg>
    </div>
  );

  const renderQuantumField = () => (
    <div className="absolute inset-0 opacity-15">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-accent rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}
      
      {/* Quantum connections */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        {[...Array(6)].map((_, i) => (
          <line
            key={i}
            x1={Math.random() * 100}
            y1={Math.random() * 100}
            x2={Math.random() * 100}
            y2={Math.random() * 100}
            stroke="currentColor"
            strokeWidth="0.2"
            className="text-accent animate-pulse"
            style={{ animationDelay: `${i * 500}ms` }}
          />
        ))}
      </svg>
    </div>
  );

  switch (variant) {
    case 'brain':
      return renderBrainNetwork();
    case 'cubes':
      return renderDataCubes();
    case 'neural':
      return renderNeuralPaths();
    case 'quantum':
      return renderQuantumField();
    default:
      return (
        <>
          {renderBrainNetwork()}
          {renderDataCubes()}
          {renderNeuralPaths()}
        </>
      );
  }
};

export default AI3DElements;