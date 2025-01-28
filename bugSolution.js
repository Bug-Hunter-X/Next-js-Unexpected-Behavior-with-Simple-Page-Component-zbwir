```javascript
// pages/index.js
import {useEffect, useState} from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent rendering before the component is fully mounted
  }

  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a paragraph of text.</p>
    </div>
  );
}
```