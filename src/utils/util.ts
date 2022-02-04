export const isActive = (): boolean => {
  return (
    document.hasFocus() && document.visibilityState === 'visible' && !document.hidden
  );
};
