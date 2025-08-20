export const ArticleInfo = ({ author, lastUpdated, avatar = null }) => {
  const formatDate = (dateInput) => {
    if (!dateInput) return '';
    if (typeof dateInput === 'string' && !dateInput.match(/^\d{4}-\d{2}-\d{2}/)) {
      return dateInput;
    }
    try {
      const date = new Date(dateInput);
      const now = new Date();
      const diffTime = Math.abs(now - date);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) return '1 day ago';
      if (diffDays < 7) return `${diffDays} days ago`;
      if (diffDays < 30) return `${Math.ceil(diffDays / 7)} week${Math.ceil(diffDays / 7) > 1 ? 's' : ''} ago`;
      if (diffDays < 365) return `${Math.ceil(diffDays / 30)} month${Math.ceil(diffDays / 30) > 1 ? 's' : ''} ago`;
      return `${Math.ceil(diffDays / 365)} year${Math.ceil(diffDays / 365) > 1 ? 's' : ''} ago`;
    } catch {
      return dateInput;
    }
  };

  return (
    <div style={{
      display: "flex", 
      alignItems: "center", 
      gap: "12px", 
      marginBottom: "24px", 
      padding: "16px", 
      backgroundColor: "var(--ifm-background-surface-color)", 
      borderRadius: "8px", 
      fontSize: "14px", 
      color: "var(--ifm-color-content-secondary)",
      border: "1px solid var(--ifm-color-emphasis-200)"
    }}>
      <div style={{
        width: "40px", 
        height: "40px", 
        borderRadius: "50%", 
        background: avatar || "linear-gradient(45deg, #4F46E5, #7C3AED)", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        color: "white", 
        fontWeight: "bold", 
        fontSize: "16px"
      }}>
        {avatar ? <img src={avatar} alt={author} style={{width: "100%", height: "100%", borderRadius: "50%"}} /> : author?.[0]?.toUpperCase()}
      </div>
      <div>
        <div style={{fontWeight: "500", color: "var(--ifm-color-content)"}}>Written by {author}</div>
        <div>Last updated {formatDate(lastUpdated)}</div>
      </div>
    </div>
  );
};