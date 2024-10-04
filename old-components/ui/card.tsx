// components/ui/card.tsx

const Card = ({ className = "" }) => {
    return (
      <div className={`p-4 border rounded shadow ${className}`}>
        {/* Placeholder for content, can be customized when used */}
      </div>
    );
  };
  
  const CardContent = ({ children }) => <div>{children}</div>;
  const CardHeader = ({ children }) => <div className="font-bold">{children}</div>;
  const CardTitle = ({ children }) => <h3 className="text-lg">{children}</h3>;
  
  export { Card, CardContent, CardHeader, CardTitle };
  