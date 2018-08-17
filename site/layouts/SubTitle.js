import React from 'react';
import { Label } from '@ui';

const SubTilte = ({ children }) => {
  return <Label size='medium' nodeType='p' style={{ padding: '.5rem 0', fontWeight: 700 }}>{children}</Label>
}

export default SubTilte;
