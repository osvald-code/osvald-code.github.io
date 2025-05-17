import { posts } from './posts';
import { useState, useEffect } from 'react';

export default function Page({ postName }: { postName: string }) {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    const post = posts.find(p => p.name === postName);
    if (post) {
      post.component().then(mod => setComponent(() => mod.default));
    }
  }, [postName]);

  if (!Component) return null;
  return <Component />;
}