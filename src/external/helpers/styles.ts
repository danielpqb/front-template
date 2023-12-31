interface CSSPropertiesWithIndexSignature extends React.CSSProperties {
  [key: string]: React.CSSProperties[keyof React.CSSProperties];
}

export function removeUndefinedProperties(
  obj: React.CSSProperties | undefined
): CSSPropertiesWithIndexSignature {
  const cleanedObj: CSSPropertiesWithIndexSignature = {};
  for (const key in obj) {
    if ((obj as CSSPropertiesWithIndexSignature)[key] !== undefined) {
      cleanedObj[key] = (obj as CSSPropertiesWithIndexSignature)[key];
    }
  }
  return cleanedObj;
}
