## React Application Suspense Component

This repo is an extremely basic example of how to create your own hooks that can be used within a <Suspense> component. The biggest gotcha that I encountered was that hooks have to be cached or you will run into an infinit fetch loop. This occurs becasue when your components inside your <Suspense> Hook encounter a returned promise, the <Suspense> hook will unmount the children of itself and use it's fallback prop (usually some loading icon/component). Once that promise resolves, it then remounts it's children which will then call your hook again. If it's not cached, you will return another promise. Rinse and repeat and you'll only ever see the loading icon/component (or whatever you put in the fallback prop of <Suspens>).

made by Griffin Overmyer 2025
