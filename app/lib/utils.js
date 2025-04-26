export function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
  
  export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  export function truncate(str, length) {
    return str.length > length ? str.substring(0, length) + '...' : str;
  }