


const glowButtonClasses = `
  relative overflow-hidden font-sans font-bold text-sm
  tracking-wider uppercase transition-all duration-300 ease-in-out
  cursor-pointer border-0 rounded-md
  flex items-center justify-center
 
  group
`;

export const BtnPrimary = ({ text, title }: { text: string; title: string }) => {
  return (
    <div className="flex justify-center">
      <button
        className={`${glowButtonClasses} w-[148px] h-[46px] btn-primary-group
        border-1 hover:text-green-400
        
        transition-shadow duration-300]`}
      >
        <span className="absolute inset-0 w-full h-full border-2 "></span>
        <div className="relative w-full h-full flex items-center justify-center">
          <p className="absolute inset-0 w-full h-full flex items-center justify-center
          transition-all duration-400 ease-in-out text-primary group-hover:opacity-0">{title}</p>
          <p className="absolute inset-0 w-full h-full flex items-center justify-center
          transition-all duration-400 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">{text}</p>
        </div>
      </button>
    </div>
  );
};




const slideInButtonClasses = `
  relative overflow-hidden font-sans font-bold text-sm
  tracking-wider uppercase transition-all duration-300 ease-in-out
  cursor-pointer border-0 rounded-md
  flex items-center justify-center
  bg-transparent
  group
`;

export const BtnPrimaryMini = ({ text, title }: { text: string; title: string }) => {
  return (
    <div className="flex justify-center">
      <button
        className={`${slideInButtonClasses} w-[148px] h-[46px]
        border-2 border-primary-orange
        text-primary-orange hover:text-white`}
      >
        <span className="absolute inset-0 w-full h-full bg-primary-orange
        transform translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-in-out"></span>
        
        <div className="relative w-full h-full flex items-center justify-center">
          <p className="absolute inset-0 w-full h-full flex items-center justify-center
          transition-all duration-400 ease-in-out group-hover:-translate-y-full text-primary-orange group-hover:text-white">{title}</p>
          <p className="absolute inset-0 w-full h-full flex items-center justify-center
          transition-all duration-400 ease-in-out translate-y-full group-hover:translate-y-0 text-white">{text}</p>
        </div>
      </button>
    </div>
  );
};