export default function GradientLines() {
  return (
    <>
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm bg-blend-color-dodge" />
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4 bg-blend-color-dodge" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent h-[5px] w-1/4 blur-sm bg-blend-color-dodge" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-fuchsia-300 to-transparent h-px w-1/4 bg-blend-color-dodge" />

      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent h-px w-1/4 bg-blend-color-dodge" />
    </>
  );
}
