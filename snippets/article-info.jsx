export const ArticleInfo = ({ author, lastUpdated, avatar = null }) => {
  // Default avatar for asad
  const defaultAvatar = author === 'asad' ? '/images/author-asad.jpeg' : null;
  const authorAvatar = avatar || defaultAvatar;
  const formatDate = (dateInput) => {
    if (!dateInput) return '';
    if (typeof dateInput === 'string' && !dateInput.match(/^\d{4}-\d{2}-\d{2}/)) {
      return dateInput;
    }
    try {
      const date = new Date(dateInput);
      const now = new Date();
      const diffTime = Math.abs(now - date);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === 0) return 'today';
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
      gap: "8px", 
      marginBottom: "16px", 
      padding: "8px 12px", 
      backgroundColor: "var(--ifm-color-emphasis-100)", 
      borderRadius: "6px", 
      fontSize: "14px", 
      color: "var(--ifm-color-content-secondary)",
      border: "1px solid var(--ifm-color-emphasis-200)",
      opacity: "0.8"
    }}>
      <div style={{
        width: "40px", 
        height: "40px", 
        borderRadius: "50%", 
        background: authorAvatar || "linear-gradient(45deg, #4F46E5, #7C3AED)", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        color: "white", 
        fontWeight: "bold", 
        fontSize: "18px"
      }}>
        {authorAvatar ? <img src={authorAvatar} alt={author} style={{width: "100%", height: "100%", borderRadius: "50%"}} /> : author?.[0]?.toUpperCase()}
      </div>
      <div>
        <div style={{fontWeight: "400", fontSize: "14px"}}>Written by <span style={{fontWeight: "600"}}>{author}</span></div>
        <div style={{fontSize: "14px"}}>Last updated <span style={{fontWeight: "600"}}>{formatDate(lastUpdated)}</span></div>
      </div>
    </div>
  );
};