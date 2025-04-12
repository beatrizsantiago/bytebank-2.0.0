const ErrorLabel = ({ error }: { error: string }) => (
  <div className="text-red-500 text-sm">
    {error}
  </div>
);

export default ErrorLabel;
