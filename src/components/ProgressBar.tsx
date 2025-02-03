const ProgressBar = ({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) => {
  return (
    <div className="w-full max-w-[600px] mx-auto">
      <div className="flex justify-between mb-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <span
            key={index}
            className={`${
              index === currentStep
                ? "text-Purple-main font-bold"
                : "text-gray-400"
            }  `}
          >
            Step {index + 1}
          </span>
        ))}
      </div>
      <div className="relative w-full h-2 bg-gray-200 rounded-full">
        <div
          className="h-2 transition-all duration-300 rounded-full bg-Purple-main"
          style={{
            width: `${(currentStep / (totalSteps - 1)) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};
export default ProgressBar;
