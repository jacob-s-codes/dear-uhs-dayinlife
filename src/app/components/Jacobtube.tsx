interface JacobTubeLogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
  }
  
  export function JacobTubeLogo({ className = '', size = 'md' }: JacobTubeLogoProps) {
    const sizeClasses = {
      sm: 'h-6',
      md: 'h-8', 
      lg: 'h-12'
    };
  
    const textSizeClasses = {
      sm: 'text-xl',
      md: 'text-2xl',
      lg: 'text-4xl'
    };
  
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {/* YouTube-style play button icon */}
        <div className={`${sizeClasses[size]} aspect-[69/48] bg-red-600 rounded-md flex items-center justify-center`}>
          <svg 
            viewBox="0 0 24 24" 
            className="w-1/2 h-1/2 fill-white"
          >
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
        
        {/* JacobTube text */}
        <span className={`${textSizeClasses[size]} font-bold text-white tracking-tight`}>
          <span className="font-bold">Jacob</span>
          <span className="font-bold">Tube</span>
        </span>
      </div>
    );
  }